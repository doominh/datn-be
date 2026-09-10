import { containsWord } from './textMatch';

const ORDINAL_WORDS = {
    'một': 1, 'nhất': 1, 'đầu tiên': 1, 'đầu': 1,
    'hai': 2, 'nhì': 2,
    'ba': 3,
    'bốn': 4, 'tư': 4,
    'năm': 5,
    'sáu': 6,
};

export const parseSelection = (message = '', listLength = 0) => {
    const msg = message.trim().toLowerCase();

    const digitMatch = msg.match(/\d+/);
    if (digitMatch) return parseInt(digitMatch[0], 10);

    if (/cuối/.test(msg)) return listLength || null;

    const found = Object.entries(ORDINAL_WORDS).find(([word]) => containsWord(msg, word));
    return found ? found[1] : null;
};