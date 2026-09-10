import moment from 'moment';
import { extractPhone } from './utils/extractPhone';
import { getClinicContext, getAvailableSchedules } from './clinicContext.service';
import { QUICK_REPLY_ACTIONS } from './intent/quickReply.map';
import { handleStructuredIntent } from './intent/intentHandler';
import { buildSystemPrompt } from './gemini/promptBuilder';
import { callGeminiWithFallback } from './gemini/geminiClient';
import { getToolsForState } from './intent/geminiTools';
import { resumeBookingConfirm } from './booking/bookingFlow.service';
import { DEFAULT_ADDRESS_STYLE, detectAddressStyle, applyAddressStyle } from './utils/addressStyle';

const LOGIN_RESUME_TRIGGER = 'Tiếp tục đặt lịch';

const buildFlowContext = (waitingFor, sessionData) => {
    switch (waitingFor) {
        case 'booking_date': {
            const filters = sessionData?._meta || {};
            const known = [];
            if (filters.requestedCategory) known.push(`dịch vụ đã biết: ${filters.requestedCategory}`);
            if (filters.requestedDoctor) known.push(`bác sĩ đã biết: ${filters.requestedDoctor}`);
            return `Khách đang được hỏi muốn đặt lịch vào NGÀY nào.${known.length ? ` (${known.join(', ')})` : ''}`;
        }
        case 'booking_slot': {
            const options = sessionData?._meta?.scheduleOptions || [];
            const list = options.map((o, i) => `${i + 1}. ${o.doctor} — ${o.time} (ngày ${o.date})`).join('\n');
            return `Khách đang xem danh sách khung giờ trống sau, đánh số từ 1:\n${list}`;
        }
        case 'booking_confirm': {
            const p = sessionData?.pendingBooking;
            const options = sessionData?._meta?.scheduleOptions || [];
            const prevList = options.length
                ? `\n\nDanh sách đã xem trước đó (để tham khảo nếu khách muốn đổi mục khác):\n${options.map((o, i) => `${i + 1}. ${o.doctor} — ${o.time} (ngày ${o.date})`).join('\n')}`
                : '';
            return `Khách đang được hỏi XÁC NHẬN lịch hẹn: ${p?.doctor} lúc ${p?.time} ngày ${p?.date} — đúng hay không?${prevList}`;
        }
        case 'cancel_select': {
            const options = sessionData?._meta?.cancelOptions || [];
            const list = options.map((o, i) => `${i + 1}. ${o.doctor} — ${o.date} lúc ${o.time} (${o.status})`).join('\n');
            return `Khách đang xem danh sách lịch hẹn có thể hủy sau, đánh số từ 1:\n${list}`;
        }
        case 'cancel_confirm': {
            const p = sessionData?.pendingCancel;
            const options = sessionData?._meta?.cancelOptions || [];
            const prevList = options.length
                ? `\n\nDanh sách đã xem trước đó (để tham khảo nếu khách muốn đổi mục khác):\n${options.map((o, i) => `${i + 1}. ${o.doctor} — ${o.date} lúc ${o.time}`).join('\n')}`
                : '';
            return `Khách đang được hỏi XÁC NHẬN hủy lịch hẹn: ${p?.doctor} lúc ${p?.time} ngày ${p?.date} — đúng hay không?${prevList}`;
        }
        case 'phone_for_lookup':
            return 'Khách vừa được hỏi SỐ ĐIỆN THOẠI để tra cứu lịch hẹn cũ, nhưng tin nhắn này không chứa số điện thoại hợp lệ.';
        case 'phone_for_cancel':
            return 'Khách vừa được hỏi SỐ ĐIỆN THOẠI để tìm lịch hẹn cần hủy, nhưng tin nhắn này không chứa số điện thoại hợp lệ.';
        default:
            return null;
    }
};

const askGemini = async (message, conversationHistory = [], sessionData = {}, patientId = null) => {
    const waitingFor = sessionData?.waitingFor;

    const detectedStyle = sessionData?.addressStyle || detectAddressStyle(message);
    const style = detectedStyle || DEFAULT_ADDRESS_STYLE;
    const styleUpdate = (!sessionData?.addressStyle && detectedStyle) ? { addressStyle: detectedStyle } : null;

    const finalize = (result) => {
        if (!result) return result;
        const merged = styleUpdate ? { ...result, sessionUpdate: { ...styleUpdate, ...result.sessionUpdate } } : result;
        return merged.directReply ? { ...merged, directReply: applyAddressStyle(merged.directReply, style) } : merged;
    };

    const quickAction = QUICK_REPLY_ACTIONS[message.trim()];
    if (quickAction) {
        const result = await handleStructuredIntent(quickAction, sessionData, {}, patientId);
        if (result) return finalize(result);
    }

    if (waitingFor === 'phone_for_lookup' || waitingFor === 'phone_for_cancel') {
        const phone = extractPhone(message);
        if (phone) {
            const intent = waitingFor === 'phone_for_lookup' ? 'check_appointment' : 'cancel_appointment';
            const result = await handleStructuredIntent(intent, sessionData, { phone }, patientId);
            if (result) return finalize(result);
        }
    }

    if (message.trim() === LOGIN_RESUME_TRIGGER && waitingFor === 'booking_confirm') {
        const result = resumeBookingConfirm(sessionData, patientId);
        if (result) return finalize(result);
    }

    try {
        const { categoryList, serviceList, doctorList } = await getClinicContext();
        const today = moment().format('YYYY-MM-DD');
        const todaySchedules = await getAvailableSchedules(today);
        const scheduleContext = todaySchedules.length > 0
            ? todaySchedules.slice(0, 10).map((s) => `- [${s.doctor}](/detailDoctor/${s.doctor_id}): ${s.date} lúc ${s.time}`).join('\n')
            : 'Chưa có lịch trống hôm nay.';

        const flowContext = buildFlowContext(waitingFor, sessionData);
        const systemPrompt = buildSystemPrompt({ categoryList, serviceList, doctorList, scheduleContext, flowContext, addressStyle: style });
        const recentHistory = conversationHistory.slice(-4);
        const contents = [
            { role: 'user', parts: [{ text: systemPrompt }] },
            { role: 'model', parts: [{ text: 'Đã hiểu. Tôi sẵn sàng hỗ trợ.' }] },
            ...recentHistory,
            { role: 'user', parts: [{ text: message }] },
        ];

        const { functionCall, text } = await callGeminiWithFallback(contents, {
            tools: getToolsForState(waitingFor),
            toolConfig: { functionCallingConfig: { mode: 'ANY' } },
        });

        if (functionCall) {
            const result = await handleStructuredIntent(functionCall.name, sessionData, functionCall.args || {}, patientId);
            if (result) return finalize(result);
        }

        return finalize({ directReply: text || 'Dạ {s} chưa rõ ý {u}, {u} có thể nói rõ hơn được không ạ?', action: null });
    } catch (error) {
        console.error('[chatbot] fallback error:', error?.message || error);
        return finalize({
            directReply: 'Mình chưa thể tải đầy đủ dữ liệu lúc này. {U} có thể hỏi về đặt lịch, giờ làm việc, bảng giá hoặc thử lại sau ít phút nhé.',
            action: null,
        });
    }
};

export default { askGemini };