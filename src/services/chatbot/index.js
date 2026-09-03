import moment from 'moment';
import fs from 'fs';
import { extractPhone } from './utils/extractPhone';
import { extractDate } from './utils/extractDate';
import { getClinicContext, getAvailableSchedules } from './clinicContext.service';
import { QUICK_REPLY_ACTIONS } from './intent/quickReply.map';
import {
    FAQ_INTENT_PATTERNS, GREETING_REGEX, THANKS_REGEX, GREETING_REPLY, THANKS_REPLY,
} from './intent/faqPatterns';
import { handleStructuredIntent } from './intent/intentHandler';
import { buildSystemPrompt } from './gemini/promptBuilder';
import { callGeminiWithFallback } from './gemini/geminiClient';
import { handleBookingFlow } from './booking/bookingFlow.service';

const askGemini = async (message, conversationHistory = [], sessionData = {}, patientId = null) => {
    // 7a-0. Đang trong luồng đặt lịch — ưu tiên xử lý trước mọi thứ khác
    if (sessionData?.waitingFor?.startsWith('booking_')) {
        const result = await handleBookingFlow(sessionData.waitingFor, message, sessionData, patientId);
        if (result) return result;
    }

    // 7a. Đang chờ SĐT
    if (sessionData?.waitingFor === 'phone_for_lookup') {
        const phone = extractPhone(message);
        if (phone) {
            return handleStructuredIntent('CHECK_APPOINTMENT', message, { ...sessionData, phone });
        }
        sessionData = { ...sessionData, waitingFor: null };
    }

    // 7b. Quick Reply exact match
    const quickAction = QUICK_REPLY_ACTIONS[message.trim()];
    if (quickAction) {
        const result = await handleStructuredIntent(quickAction, message, sessionData);
        if (result) return result;
    }

    // 7b-2. SĐT xuất hiện tự nhiên trong câu kèm ý tra cứu
    const looseCheckPhone = extractPhone(message);
    if (looseCheckPhone && /tra cứu|kiểm tra|lịch hẹn|lịch khám|cuộc hẹn|đặt.*chưa|đã đặt/i.test(message)) {
        const result = await handleStructuredIntent('CHECK_APPOINTMENT', message, {
            ...sessionData,
            phone: looseCheckPhone,
        });
        if (result) return result;
    }

    const bookingIntent = FAQ_INTENT_PATTERNS.find(({ intent, regex, exclude }) =>
        intent === 'BOOK_APPOINTMENT' && regex.test(message) && !(exclude && exclude.test(message)));
    if (bookingIntent) {
        const result = await handleStructuredIntent('BOOK_APPOINTMENT', message, sessionData);
        if (result) return result;
    }

    // 7c. Câu hỏi tìm lịch theo ngày cụ thể
    const isAskingSchedule =
        /lịch|rảnh|trống|khám|bác sĩ nào|bác sĩ có thể|đặt lịch/i.test(message) &&
        /ngày mai|ngày kia|hôm nay|thứ\s*([2-7]|hai|ba|tư|năm|sáu|bảy)|ngày\s*\d|\/\d|\d\s*tháng/i.test(message);

    if (isAskingSchedule) {
        const targetDate = extractDate(message);
        if (targetDate) {
            const result = await handleStructuredIntent('ASK_SCHEDULE_BY_DATE', message, {
                ...sessionData,
                _meta: { targetDate },
            });
            if (result) return result;
        }
    }

    const upcomingSchedule = FAQ_INTENT_PATTERNS.find(({ intent, regex, include }) =>
        intent === 'ASK_UPCOMING_SCHEDULE' && regex.test(message) && include?.test(message));
    if (upcomingSchedule) {
        const result = await handleStructuredIntent('ASK_UPCOMING_SCHEDULE', message, sessionData);
        if (result) return result;
    }

    // 7c-2. Câu xã giao
    if (GREETING_REGEX.test(message.trim())) {
        return { directReply: GREETING_REPLY };
    }
    if (THANKS_REGEX.test(message.trim())) {
        return { directReply: THANKS_REPLY };
    }

    // 7c-3. FAQ intent bằng regex
    for (const { intent, regex, exclude, include } of FAQ_INTENT_PATTERNS) {
        if (regex.test(message) && !(exclude && exclude.test(message)) && !(include && !include.test(message))) {
            const result = await handleStructuredIntent(intent, message, sessionData);
            if (result) return result;
        }
    }

    // 7d. Gọi Gemini với full context
    try {
        fs.appendFileSync('./gemini-fallback.log', `${new Date().toISOString()} | ${message}\n`);
    } catch (e) { /* bỏ qua lỗi ghi file */ }

    try {
        const { categoryList, serviceList, doctorList } = await getClinicContext();
        const today = moment().format('YYYY-MM-DD');
        const todaySchedules = await getAvailableSchedules(today);
        const scheduleContext = todaySchedules.length > 0
            ? todaySchedules.slice(0, 10)
                .map((s) => `- [${s.doctor}](/detailDoctor/${s.doctor_id}): ${s.date} lúc ${s.time}`)
                .join('\n')
            : 'Chưa có lịch trống hôm nay.';

        const systemPrompt = buildSystemPrompt({ categoryList, serviceList, doctorList, scheduleContext });
        const recentHistory = conversationHistory.slice(-4);
        const contents = [
            { role: 'user', parts: [{ text: systemPrompt }] },
            { role: 'model', parts: [{ text: 'Đã hiểu. Tôi sẵn sàng hỗ trợ.' }] },
            ...recentHistory,
            { role: 'user', parts: [{ text: message }] },
        ];

        const text = await callGeminiWithFallback(contents);
        return { text, action: null };
    } catch (error) {
        console.error('[chatbot] fallback error:', error?.message || error);
        return {
            directReply: 'Mình chưa thể tải đầy đủ dữ liệu lúc này. Bạn có thể hỏi về đặt lịch, giờ làm việc, bảng giá hoặc thử lại sau ít phút nhé.',
            action: null,
        };
    }
};

export default { askGemini };