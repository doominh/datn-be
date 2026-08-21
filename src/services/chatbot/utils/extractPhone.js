export const extractPhone = (message) => {
    const match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
    return match ? match[1] : null;
};