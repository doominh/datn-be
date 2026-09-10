import { WORD_BOUNDARY_BEFORE, WORD_BOUNDARY_AFTER } from './textMatch';

export const DEFAULT_ADDRESS_STYLE = { self: 'Mình', selfLower: 'mình', user: 'Bạn', userLower: 'bạn' };

const PAIRS = [
    { elder: 'anh', younger: 'em' },
    { elder: 'chị', younger: 'em' },
    { elder: 'cô', younger: 'con' },
    { elder: 'chú', younger: 'con' },
];

const ELDER_WORDS = [...new Set(PAIRS.map((p) => p.elder))];
const YOUNGER_WORDS = [...new Set(PAIRS.map((p) => p.younger))];
const youngerOf = (elderWord) => PAIRS.find((p) => p.elder === elderWord)?.younger;

const BOT_DEFAULT_ELDER_FOR_YOUNGER = { em: 'chị', con: 'cô' };
const CUSTOMER_DEFAULT_ELDER_FOR_YOUNGER = { em: 'anh', con: 'cô' };

const FEMALE_SELF_OVERRIDE = { anh: 'chị', chú: 'cô' };

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const buildStyle = (userWord, selfWord) => ({
    user: capitalize(userWord),
    userLower: userWord,
    self: capitalize(selfWord),
    selfLower: selfWord,
});

const enforceFemalePersona = (style) => {
    const override = FEMALE_SELF_OVERRIDE[style.selfLower];
    if (!override) return style;
    return { ...style, self: capitalize(override), selfLower: override };
};

const ALL_WORDS = [...ELDER_WORDS, ...YOUNGER_WORDS];
const SELF_REF_VERBS = 'muốn|cần|xin|hỏi|định|sẽ|đang|có thể|đặt|biết|xem';
const ADDRESS_PREFIXES = 'chào|cảm ơn|cám ơn|hi|hello|alo';

const detectRequestPattern = (text) => {
    for (const addressee of ALL_WORDS) {
        for (const speaker of ALL_WORDS) {
            if (addressee === speaker) continue;
            const pattern = new RegExp(
                `${WORD_BOUNDARY_BEFORE}${addressee}${WORD_BOUNDARY_AFTER}\\s+cho\\s+`
                + `${WORD_BOUNDARY_BEFORE}${speaker}${WORD_BOUNDARY_AFTER}\\s+(${SELF_REF_VERBS})${WORD_BOUNDARY_AFTER}`,
                'iu',
            );
            if (pattern.test(text)) return buildStyle(speaker, addressee);
        }
    }
    return null;
};

const detectSelfReference = (text) => {
    for (const word of ALL_WORDS) {
        const pattern = new RegExp(
            `${WORD_BOUNDARY_BEFORE}${word}${WORD_BOUNDARY_AFTER}\\s+(${SELF_REF_VERBS})${WORD_BOUNDARY_AFTER}`,
            'iu',
        );
        if (!pattern.test(text)) continue;
        if (ELDER_WORDS.includes(word)) return buildStyle(word, youngerOf(word));
        return buildStyle(word, BOT_DEFAULT_ELDER_FOR_YOUNGER[word]);
    }
    return null;
};

const detectAddressCue = (text) => {
    for (const word of ALL_WORDS) {
        const prefixPattern = new RegExp(
            `${WORD_BOUNDARY_BEFORE}(${ADDRESS_PREFIXES})\\s+${word}${WORD_BOUNDARY_AFTER}`,
            'iu',
        );
        const suffixPattern = new RegExp(`${WORD_BOUNDARY_BEFORE}${word}${WORD_BOUNDARY_AFTER}\\s+ơi${WORD_BOUNDARY_AFTER}`, 'iu');
        if (!prefixPattern.test(text) && !suffixPattern.test(text)) continue;

        if (ELDER_WORDS.includes(word)) {
            return buildStyle(youngerOf(word), word);
        }
        return buildStyle(CUSTOMER_DEFAULT_ELDER_FOR_YOUNGER[word], word);
    }
    return null;
};

const detectBareElderMention = (text) => {
    const word = ELDER_WORDS.find((w) => new RegExp(`${WORD_BOUNDARY_BEFORE}${w}${WORD_BOUNDARY_AFTER}`, 'iu').test(text));
    return word ? buildStyle(word, youngerOf(word)) : null;
};

export const detectAddressStyle = (message = '') => {
    const text = message.trim().toLowerCase();
    if (!text) return null;
    const style = detectRequestPattern(text) || detectSelfReference(text) || detectAddressCue(text) || detectBareElderMention(text);
    return style ? enforceFemalePersona(style) : null;
};

export const applyAddressStyle = (text, style) => {
    if (!text) return text;
    return text
        .replace(/\{U\}/g, style.user)
        .replace(/\{u\}/g, style.userLower)
        .replace(/\{S\}/g, style.self)
        .replace(/\{s\}/g, style.selfLower);
};