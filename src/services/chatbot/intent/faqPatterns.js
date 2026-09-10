export const GREETING_REGEX = /^(chào|hi|hello|xin chào|alo)(\s+\p{L}+){0,2}[\s!.…]*$/iu;
export const THANKS_REGEX = /^(cảm ơn|cám ơn|thanks|thank you|ok|oke|okie)\b/i;

export const GREETING_REPLY =
    'Xin chào {u}! {S} là Linh — Tiếp Tân Toothhive. {U} cần hỗ trợ đặt lịch, xem giá dịch vụ hay tra cứu lịch hẹn ạ?';
export const THANKS_REPLY = 'Dạ không có gì! {U} cần {s} hỗ trợ thêm gì không ạ?';