const normalize = (message = '') => message.trim().toLowerCase();

const containsAny = (text, phrases) => phrases.some((phrase) => text.includes(phrase));

const BASE_NEGATE = [
    'không phải', 'không đúng', 'không muốn', 'không cần', 'không được',
    'không', 'hông', 'hong', 'đừng', 'thôi khỏi', 'thôi', 'khỏi',
    'bỏ đi', 'đổi ý', 'giữ nguyên', 'khoan đã', 'chưa vội', 'chưa muốn',
];

const BASE_AFFIRM = [
    'đúng vậy', 'đúng rồi', 'đúng', 'chuẩn rồi', 'chuẩn', 'phải rồi', 'phải',
    'vâng ạ', 'vâng', 'dạ đúng', 'dạ phải', 'dạ được', 'dạ vâng', 'dạ',
    'ừ', 'ừm', 'ừa', 'uk', 'ukm', 'ok', 'oke', 'okie',
    'đồng ý', 'có nhé', 'yes', 'xác nhận', 'chốt', 'tiến hành',
    'được rồi', 'được',
];

export const parseYesNo = (message, { extraAffirm = [], extraNegate = [] } = {}) => {
    const text = normalize(message);
    if (!text) return null;

    if (containsAny(text, [...extraNegate, ...BASE_NEGATE])) return 'no';
    if (containsAny(text, [...extraAffirm, ...BASE_AFFIRM])) return 'yes';
    return null;
};

export const BOOKING_CONFIRM_OPTIONS = {
    extraNegate: ['hủy', 'huỷ'],
    extraAffirm: ['đặt giúp', 'đặt luôn', 'đặt đi', 'chốt lịch', 'chốt đơn'],
};

export const CANCEL_CONFIRM_OPTIONS = {
    extraAffirm: ['hủy', 'huỷ', 'hủy giúp', 'hủy luôn'],
    extraNegate: ['giữ nguyên lịch', 'giữ lịch'],
};