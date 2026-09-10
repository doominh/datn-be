import { getCancellableAppointmentsByPhone, cancelAppointmentByPhone } from '../appointment.service';

const CONFIRM_CANCEL_QUICK_REPLIES = [
    { label: 'Xác nhận hủy lịch', text: 'Xác nhận hủy lịch' },
    { label: 'Không hủy nữa', text: 'Không hủy nữa' },
];

const buildCancelOptionsReply = (appointments) => {
    const list = appointments
        .map((a, i) => `${i + 1}. **${a.doctor}** — ${a.date} lúc ${a.time} (Trạng thái: ${a.status})`)
        .join('\n');
    return {
        directReply: `{U} đang có các lịch hẹn sau đây có thể hủy:\n\n${list}\n\n{U} chọn số tương ứng với lịch muốn hủy nhé.`,
        sessionUpdate: { waitingFor: 'cancel_select', _meta: { cancelOptions: appointments } },
        quickReplies: appointments.map((a, i) => ({
            label: `${i + 1}. ${a.doctor.replace(/^BS\.\s*/i, '')} - ${a.date}`,
            text: `${i + 1}`,
        })),
    };
};

const buildCancelConfirmReply = (pendingCancel) => ({
    directReply: `{U} muốn hủy lịch hẹn **${pendingCancel.doctor}** lúc **${pendingCancel.time}** ngày **${pendingCancel.date}** (Trạng thái: ${pendingCancel.status}) — đúng không?`,
    sessionUpdate: { waitingFor: 'cancel_confirm', pendingCancel },
    quickReplies: CONFIRM_CANCEL_QUICK_REPLIES,
});

export const startCancelFlow = async (phone) => {
    if (!phone) {
        return {
            directReply: 'Để hủy lịch hẹn, {u} vui lòng cung cấp **số điện thoại** đã đặt lịch.',
            sessionUpdate: { waitingFor: 'phone_for_cancel' },
        };
    }

    const appointments = await getCancellableAppointmentsByPhone(phone);
    if (!appointments.length) {
        return {
            directReply: `Không tìm thấy lịch hẹn nào đang **chờ xác nhận** với số điện thoại **${phone}** để hủy. Những lịch đã được duyệt vui lòng gọi hotline **(028) 1234 5678** để được hỗ trợ.`,
            sessionUpdate: { phone, waitingFor: null },
        };
    }

    return { ...buildCancelOptionsReply(appointments), sessionUpdate: { phone, waitingFor: 'cancel_select', _meta: { cancelOptions: appointments } } };
};

export const handleCancelSelection = async (index, sessionData) => {
    const options = sessionData?._meta?.cancelOptions || [];
    const target = options[index - 1];
    if (!target) {
        const list = options.map((a, i) => `${i + 1}. **${a.doctor}** — ${a.date} lúc ${a.time} (Trạng thái: ${a.status})`).join('\n');
        return {
            directReply: `{S} chưa rõ {u} muốn hủy lịch nào, {u} chọn giúp {s} theo số thứ tự bên dưới nhé:\n\n${list}`,
            sessionUpdate: { waitingFor: 'cancel_select' },
        };
    }
    return buildCancelConfirmReply(target);
};

export const handleCancelConfirmDecision = async (decision, sessionData) => {
    const pendingCancel = sessionData?.pendingCancel;
    if (!pendingCancel) {
        return {
            directReply: '{U} muốn hủy lịch hẹn nào ạ? Cho {s} xin số điện thoại đã đặt lịch nhé.',
            sessionUpdate: { waitingFor: 'phone_for_cancel', pendingCancel: null },
        };
    }

    if (decision === 'decline') {
        return {
            directReply: '{S} vẫn giữ nguyên lịch hẹn này cho {u} nhé, không hủy gì cả.',
            sessionUpdate: { waitingFor: null, pendingCancel: null, _meta: null },
        };
    }

    const success = await cancelAppointmentByPhone(pendingCancel.appointment_id, sessionData?.phone);
    return {
        directReply: success
            ? `Đã hủy thành công lịch hẹn **${pendingCancel.doctor}** lúc **${pendingCancel.time}** ngày **${pendingCancel.date}**.`
            : 'Rất tiếc, {s} không hủy được lịch hẹn này (có thể đã được duyệt hoặc không còn tồn tại). {U} vui lòng gọi hotline **(028) 1234 5678** để được hỗ trợ.',
        sessionUpdate: { waitingFor: null, pendingCancel: null, _meta: null },
    };
};