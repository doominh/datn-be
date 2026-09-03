import moment from 'moment';

export const extractDate = (message) => {
    const today = moment();
    const msg = message.toLowerCase();

    if (msg.includes('hôm nay')) return today.format('YYYY-MM-DD');
    if (msg.includes('ngày mai') || msg.includes('hôm sau'))
        return today.clone().add(1, 'days').format('YYYY-MM-DD');
    if (msg.includes('ngày kia') || msg.includes('ngày mốt'))
        return today.clone().add(2, 'days').format('YYYY-MM-DD');

    const thuMap = { 'hai': 1, '2': 1, 'ba': 2, '3': 2, 'tư': 3, '4': 3, 'năm': 4, '5': 4, 'sáu': 5, '6': 5, 'bảy': 6, '7': 6 };
    const thuMatch = msg.match(/thứ\s*(hai|ba|tư|năm|sáu|bảy|[2-7])/);
    if (thuMatch) {
        const offset = thuMap[thuMatch[1]];
        if (offset !== undefined) {
            const isNextWeek = msg.includes('tuần sau') || msg.includes('tuần tới');
            const targetDay = offset;
            let target = today.clone().isoWeekday(targetDay);
            if (isNextWeek || target.isBefore(today, 'day')) target.add(1, 'weeks');
            return target.format('YYYY-MM-DD');
        }
    }

    const dateMatch =
        msg.match(/ngày\s*(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) ||
        msg.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) ||
        msg.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})(?:\s*năm\s*(\d{4}))?/);
    if (dateMatch) {
        const day = dateMatch[1].padStart(2, '0');
        const month = dateMatch[2].padStart(2, '0');
        const year = dateMatch[3] || today.year();
        const parsed = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD', true);
        if (parsed.isValid()) return parsed.format('YYYY-MM-DD');
    }

    return null;
};
