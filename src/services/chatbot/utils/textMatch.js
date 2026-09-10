export const WORD_BOUNDARY_BEFORE = '(?<![\\p{L}\\p{N}])';
export const WORD_BOUNDARY_AFTER = '(?![\\p{L}\\p{N}])';

export const wordPattern = (word, extraFlags = '') =>
    new RegExp(`${WORD_BOUNDARY_BEFORE}${word}${WORD_BOUNDARY_AFTER}`, `iu${extraFlags}`);

export const containsWord = (text = '', word = '') => wordPattern(word).test(text);

export const stripDiacritics = (str = '') =>
    str
        .toLowerCase()
        .replace(/đ/g, 'd')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();