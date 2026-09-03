export const FAQ_INTENT_PATTERNS = [
    {
        intent: 'ASK_PRICE',
        regex: /giá|chi phí|bao nhiêu tiền|báo giá/i,
        exclude: /so (với|sánh)|mặt bằng chung|đánh giá|nhận xét|ý kiến|thế nào|như thế nào|có tốt không|có đắt không|có rẻ không/i,
    },
    { intent: 'ASK_WORKING_HOURS', regex: /giờ (làm việc|mở cửa)|mấy giờ (mở|đóng)|làm việc (thứ|ngày) nào/i },
    { intent: 'ASK_DOCTOR', regex: /(danh sách|đội ngũ|có những) bác sĩ|giới thiệu bác sĩ/i },
    { intent: 'BOOK_APPOINTMENT', regex: /(?:muốn|cần|xin|cho tôi|giúp tôi|hãy)?\s*(?:đặt(?:\s+lịch(?: khám)?)?|book(?:\s+lịch(?: khám)?)?)/i },
    { intent: 'CHECK_APPOINTMENT', regex: /tra cứu|kiểm tra|xem (lại )?lịch|lịch hẹn|lịch khám|cuộc hẹn/i },
    { intent: 'ASK_UPCOMING_SCHEDULE', regex: /lịch (làm việc|khám|trống)|bác sĩ.*lịch|lịch.*bác sĩ/i, include: /sắp tới|tới đây|vài ngày|những ngày|tuần này|tuần tới|7 ngày/i },
    { intent: 'ASK_SCHEDULE', regex: /còn lịch trống|lịch trống không|còn chỗ khám/i },
];

export const GREETING_REGEX = /^(chào|hi|hello|xin chào|alo)\b/i;
export const THANKS_REGEX = /^(cảm ơn|cám ơn|thanks|thank you|ok|oke|okie)\b/i;

export const GREETING_REPLY =
    'Xin chào! Tôi là Linh — Tiếp Tân Toothhive. Bạn cần hỗ trợ đặt lịch, xem giá dịch vụ hay tra cứu lịch hẹn?';
export const THANKS_REPLY = 'Dạ không có gì! Bạn cần Linh hỗ trợ thêm gì không?';