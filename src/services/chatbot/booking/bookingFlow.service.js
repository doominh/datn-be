import moment from 'moment';
import { getAvailableSchedules, matchServiceCategory } from '../clinicContext.service';
import { commitBooking } from './chatBooking.service';

const DAY_LABELS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
const MANUAL_LINK = '[Tự đặt tại đây](/dat-lich)';

const CONFIRM_QUICK_REPLIES = [
    { label: 'Xác nhận đặt lịch', text: 'Xác nhận đặt lịch' },
    { label: 'Hủy', text: 'Hủy' },
];

export const normalizeDoctorName = (name = '') => name
    .toLowerCase()
    .replace(/^bs\.?\s*/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const filterByDoctor = (schedules, requestedDoctor) => (requestedDoctor
    ? schedules.filter((s) => normalizeDoctorName(s.doctor).includes(requestedDoctor))
    : schedules);

const filterByCategory = (schedules, requestedCategory) => (requestedCategory
    ? schedules.filter((s) => (s.specialty || '').toLowerCase().includes(requestedCategory.toLowerCase()))
    : schedules);

const getFilteredSchedules = async (date, { requestedDoctor, requestedCategory } = {}) => {
    const all = await getAvailableSchedules(date);
    const byDoctor = filterByDoctor(all, requestedDoctor);
    if (!requestedCategory) return byDoctor;
    const byDoctorAndCategory = filterByCategory(byDoctor, requestedCategory);
    return byDoctorAndCategory.length ? byDoctorAndCategory : byDoctor;
};

const describeFilters = ({ requestedCategory } = {}) =>
    (requestedCategory ? ` cho dịch vụ **${requestedCategory}**` : '');

const currentFiltersFromSession = (sessionData) => ({
    requestedDoctor: sessionData?._meta?.requestedDoctor || null,
    requestedCategory: sessionData?._meta?.requestedCategory || null,
});

const buildSlotOptionsReply = (schedules, message, filters = {}) => {
    const options = schedules.slice(0, 6);
    if (!options.length) {
        return {
            directReply: `${message}\n\nHiện không còn khung giờ phù hợp trong ngày này. {U} muốn chọn ngày khác không?`,
            sessionUpdate: { waitingFor: 'booking_date', _meta: filters },
        };
    }
    const list = options.map((s, i) => `${i + 1}. **${s.doctor}** — ${s.time}`).join('\n');
    return {
        directReply: `${message}\n\n${list}\n\n{U} chọn số tương ứng nhé.`,
        sessionUpdate: { waitingFor: 'booking_slot', _meta: { ...filters, scheduleOptions: options } },
        quickReplies: options.map((s, i) => ({ label: `${i + 1}. ${s.doctor.replace(/^BS\.\s*/i, '')} - ${s.time}`, text: `${i + 1}` })),
    };
};

const buildWeekSlotOptionsReply = (schedules, filters = {}) => {
    const options = schedules.slice(0, 6);
    if (!options.length) {
        return {
            directReply: `Trong tuần này hiện không có lịch trống${describeFilters(filters)}. {U} chọn tuần khác hoặc điều kiện khác nhé.`,
            sessionUpdate: { waitingFor: 'booking_date', _meta: filters },
        };
    }
    const list = options.map((s, i) => {
        const dateLabel = `${moment(s.date).format('DD/MM/YYYY')} (${DAY_LABELS[moment(s.date).day()]})`;
        return `${i + 1}. **${s.doctor}** — ${dateLabel} lúc **${s.time}**`;
    }).join('\n');
    return {
        directReply: `Các khung giờ trong tuần này${describeFilters(filters)}:\n\n${list}\n\n{U} chọn số tương ứng nhé.`,
        sessionUpdate: { waitingFor: 'booking_slot', _meta: { ...filters, scheduleOptions: options } },
        quickReplies: options.map((s, i) => ({ label: `${i + 1}. ${moment(s.date).format('DD/MM')} - ${s.time}`, text: `${i + 1}` })),
    };
};

const buildConfirmReply = (pendingBooking, patientId) => {
    const confirmText = `{U} muốn đặt lịch **${pendingBooking.doctor}** lúc **${pendingBooking.time}** ngày **${moment(pendingBooking.date).format('DD/MM/YYYY')}** — đúng không?`;
    if (patientId) {
        return { directReply: confirmText, sessionUpdate: { waitingFor: 'booking_confirm', pendingBooking }, quickReplies: CONFIRM_QUICK_REPLIES };
    }
    return {
        directReply: `${confirmText}\n\n[Đăng nhập để tiếp tục](/login) · [Đăng ký tài khoản](/register) · ${MANUAL_LINK}`,
        sessionUpdate: { waitingFor: 'booking_confirm', pendingBooking },
    };
};

const buildDateResultReply = async (targetDate, filters) => {
    if (!targetDate || !moment(targetDate, 'YYYY-MM-DD', true).isValid()) {
        return {
            directReply: `{S} chưa nhận ra ngày {u} muốn khám. {U} thử nhập lại kiểu "ngày mai" hoặc "20/09" nhé.`,
            sessionUpdate: { waitingFor: 'booking_date', _meta: filters },
        };
    }
    if (moment(targetDate).isBefore(moment(), 'day')) {
        return {
            directReply: 'Ngày {u} chọn đã qua rồi, {u} cho {s} ngày khác nhé.',
            sessionUpdate: { waitingFor: 'booking_date', _meta: filters },
        };
    }

    const schedules = await getFilteredSchedules(targetDate, filters);
    const formattedDate = moment(targetDate).format('DD/MM/YYYY');
    const dayOfWeek = DAY_LABELS[moment(targetDate).day()];

    if (!schedules.length) {
        return {
            directReply: `Ngày **${formattedDate}** (${dayOfWeek}) hiện không có lịch trống${describeFilters(filters)}. {U} chọn ngày khác giúp {s}, hoặc ${MANUAL_LINK}.`,
            sessionUpdate: { waitingFor: 'booking_date', _meta: filters },
        };
    }

    return buildSlotOptionsReply(
        schedules,
        `Ngày **${formattedDate}** (${dayOfWeek}) còn các khung giờ sau${describeFilters(filters)}, {u} chọn số tương ứng nhé:`,
        { ...filters, requestedDate: targetDate },
    );
};

export const startBookingFlow = async (args = {}, sessionData = {}) => {
    const requestedDoctor = args.doctor_name ? normalizeDoctorName(args.doctor_name) : (sessionData?._meta?.requestedDoctor || null);
    const matchedCategory = args.service_name ? await matchServiceCategory(args.service_name) : null;
    const requestedCategory = matchedCategory || sessionData?._meta?.requestedCategory || null;
    const filters = { requestedDoctor, requestedCategory };

    if (args.is_whole_week && !args.date) {
        const startDate = moment().startOf('day');
        const endDate = startDate.clone().endOf('isoWeek');
        const weekSchedules = [];
        for (const d = startDate.clone(); d.isSameOrBefore(endDate, 'day'); d.add(1, 'day')) {
            weekSchedules.push(...(await getFilteredSchedules(d.format('YYYY-MM-DD'), filters)));
        }
        return buildWeekSlotOptionsReply(weekSchedules, filters);
    }

    const targetDate = args.date || sessionData?._meta?.requestedDate || null;
    if (!targetDate) {
        return {
            directReply: `{U} muốn đặt lịch khám${describeFilters(filters)} vào ngày nào? (VD: "ngày mai", "20/09")\n\nHoặc {u} có thể ${MANUAL_LINK} nếu muốn tự chọn.`,
            sessionUpdate: { waitingFor: 'booking_date', pendingBooking: null, _meta: filters },
        };
    }

    return buildDateResultReply(targetDate, filters);
};

export const handleSlotSelection = async (index, sessionData, patientId) => {
    const options = sessionData?._meta?.scheduleOptions || [];
    const slot = options[index - 1];
    if (!slot) {
        const list = options.map((s, i) => `${i + 1}. **${s.doctor}** — ${s.time}`).join('\n');
        return {
            directReply: `{S} chưa rõ {u} muốn chọn mục nào, {u} chọn giúp {s} theo số thứ tự bên dưới nhé:\n\n${list}`,
            sessionUpdate: { waitingFor: 'booking_slot', _meta: sessionData?._meta },
        };
    }
    const pendingBooking = { doctor_schedule_id: slot.doctor_schedule_id, doctor: slot.doctor, date: slot.date, time: slot.time };
    return buildConfirmReply(pendingBooking, patientId);
};

export const handleSlotDateChange = async (date, sessionData) => buildDateResultReply(date, currentFiltersFromSession(sessionData));

export const handleSlotDoctorChange = async (doctorName, sessionData) => {
    const options = sessionData?._meta?.scheduleOptions || [];
    const date = options[0]?.date;
    const currentFilters = currentFiltersFromSession(sessionData);
    if (!doctorName || !date) {
        return { directReply: '{U} muốn đổi sang bác sĩ nào ạ?', sessionUpdate: { waitingFor: 'booking_slot', _meta: sessionData?._meta } };
    }
    const doctorFilters = { ...currentFilters, requestedDoctor: normalizeDoctorName(doctorName) };
    const doctorSchedules = await getFilteredSchedules(date, doctorFilters);
    if (!doctorSchedules.length) {
        return {
            directReply: `Ngày **${moment(date).format('DD/MM/YYYY')}** hiện không có lịch trống cho bác sĩ **${doctorName}**. {U} muốn chọn bác sĩ khác hay ngày khác?`,
            sessionUpdate: { waitingFor: 'booking_slot', _meta: { ...currentFilters, scheduleOptions: options } },
        };
    }
    return buildSlotOptionsReply(doctorSchedules, `Các khung giờ của **${doctorSchedules[0].doctor}** vào ngày **${moment(date).format('DD/MM/YYYY')}** là:`, doctorFilters);
};

export const handleSlotTimeChange = async (sessionData) => {
    const options = sessionData?._meta?.scheduleOptions || [];
    const date = options[0]?.date;
    const currentFilters = currentFiltersFromSession(sessionData);
    if (!date) {
        return { directReply: '{U} muốn xem khung giờ ngày nào ạ?', sessionUpdate: { waitingFor: 'booking_date', _meta: currentFilters } };
    }
    const doctorSchedules = await getFilteredSchedules(date, currentFilters);
    return buildSlotOptionsReply(doctorSchedules, `Các khung giờ còn lại vào ngày **${moment(date).format('DD/MM/YYYY')}** là:`, currentFilters);
};

export const handleBookingConfirmDecision = async (decision, sessionData, patientId) => {
    const pendingBooking = sessionData?.pendingBooking;
    if (!pendingBooking) {
        return { directReply: '{U} muốn đặt lịch khám mới phải không? Cho {s} biết ngày {u} muốn khám nhé.', sessionUpdate: { waitingFor: null } };
    }
    if (decision === 'decline') {
        return {
            directReply: '{S} đã hủy yêu cầu đặt lịch này. {U} cần gì khác cứ nhắn {s} nhé.',
            sessionUpdate: { waitingFor: null, pendingBooking: null, _meta: null },
        };
    }
    if (!patientId) return buildConfirmReply(pendingBooking, null);

    const result = await commitBooking(pendingBooking, patientId);
    return { ...result, sessionUpdate: { waitingFor: null, pendingBooking: null, _meta: null } };
};

export const resumeBookingConfirm = (sessionData, patientId) => {
    const pendingBooking = sessionData?.pendingBooking;
    if (!pendingBooking) return null;
    return buildConfirmReply(pendingBooking, patientId);
};