import moment from 'moment';
import { extractDate } from '../utils/extractDate';
import { getAvailableSchedules } from '../clinicContext.service';
import { commitBooking } from './chatBooking.service';

const DAY_LABELS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
const MANUAL_LINK = '[Tự đặt tại đây](/dat-lich)';

const CONFIRM_QUICK_REPLIES = [
    { label: 'Xác nhận đặt lịch', text: 'Xác nhận đặt lịch' },
    { label: 'Hủy', text: 'Hủy' },
];

const normalizeDoctorName = (name = '') => name
    .toLowerCase()
    .replace(/^bs\.?\s*/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const extractDoctorName = (message = '') => {
    const match = message.match(/(?:với|cùng|của)\s+bác sĩ\s+(.+?)(?=\s+(?:vào|ngày|hôm|thứ|trong|tuần)\b|$)/i)
        || message.match(/bác sĩ\s+(.+?)(?=\s+(?:vào|ngày|hôm|thứ|trong|tuần)\b|$)/i);
    const doctorName = match?.[1]?.trim();
    if (!doctorName || /^(này|đó|ấy)$/i.test(doctorName)) return null;
    return normalizeDoctorName(doctorName);
};

const isAskingForAnotherDoctor = (message = '') =>
    /(?:còn|cho|tìm|đổi|chọn)\s+(?:bác sĩ|bs)\s+(?:nào\s+)?(?:khác|không)/i.test(message)
    || /bác sĩ\s+(?:nào\s+)?khác/i.test(message);

const isAskingForAnotherDate = (message = '') =>
    /(?:đổi|chọn|sang|xem|tìm)\s+(?:ngày|lịch)\s+khác/i.test(message)
    || /ngày khác/i.test(message);

const isAskingForAnotherTime = (message = '') =>
    /(?:còn|cho|tìm|đổi|chọn)\s+(?:khung giờ|giờ)\s+(?:nào\s+)?khác/i.test(message)
    || /giờ khác/i.test(message);

const isAskingForThisWeek = (message = '') => /tuần này/i.test(message);

const getDoctorSchedules = async (date, doctorName = null) => {
    const schedules = await getAvailableSchedules(date);
    return doctorName
        ? schedules.filter((schedule) => normalizeDoctorName(schedule.doctor).includes(doctorName))
        : schedules;
};

const buildSlotOptionsReply = (date, schedules, message) => {
    const options = schedules.slice(0, 6);
    if (!options.length) {
        return {
            directReply: `${message}\n\nHiện không còn khung giờ phù hợp trong ngày này. Bạn muốn chọn ngày khác không?`,
            sessionUpdate: { waitingFor: 'booking_date' },
        };
    }
    const list = options.map((schedule, index) =>
        `${index + 1}. **${schedule.doctor}** — ${schedule.time}`,
    ).join('\n');

    return {
        directReply: `${message}\n\n${list}\n\nBạn chọn số tương ứng nhé.`,
        sessionUpdate: { waitingFor: 'booking_slot', _meta: { scheduleOptions: options, requestedDoctor: null } },
        quickReplies: options.map((schedule, index) => ({
            label: `${index + 1}. ${schedule.doctor.replace(/^BS\.\s*/i, '')} - ${schedule.time}`,
            text: `${index + 1}`,
        })),
    };
};

const buildWeekSlotOptionsReply = (schedules, requestedDoctor) => {
    const options = schedules.slice(0, 6);
    if (!options.length) {
        return {
            directReply: requestedDoctor
                ? `Trong tuần này hiện không có lịch trống cho **${requestedDoctor}**. Bạn chọn tuần khác hoặc bác sĩ khác nhé.`
                : 'Trong tuần này hiện không còn lịch trống. Bạn chọn tuần khác nhé.',
            sessionUpdate: { waitingFor: 'booking_date', _meta: { requestedDoctor } },
        };
    }

    const list = options.map((schedule, index) => {
        const dateLabel = `${moment(schedule.date).format('DD/MM/YYYY')} (${DAY_LABELS[moment(schedule.date).day()]})`;
        return `${index + 1}. **${schedule.doctor}** — ${dateLabel} lúc **${schedule.time}**`;
    }).join('\n');

    return {
        directReply: `Các khung giờ của **${options[0].doctor}** trong tuần này:\n\n${list}\n\nBạn chọn số tương ứng nhé.`,
        sessionUpdate: { waitingFor: 'booking_slot', _meta: { scheduleOptions: options, requestedDoctor } },
        quickReplies: options.map((schedule, index) => ({
            label: `${index + 1}. ${moment(schedule.date).format('DD/MM')} - ${schedule.time}`,
            text: `${index + 1}`,
        })),
    };
};

// Câu hỏi xác nhận
const buildConfirmReply = (pendingBooking, patientId) => {
    const confirmText = `Bạn muốn đặt lịch **${pendingBooking.doctor}** lúc **${pendingBooking.time}** ngày **${moment(pendingBooking.date).format('DD/MM/YYYY')}** — đúng không?`;

    if (patientId) {
        return {
            directReply: confirmText,
            sessionUpdate: { waitingFor: 'booking_confirm', pendingBooking },
            quickReplies: CONFIRM_QUICK_REPLIES,
        };
    }

    return {
        directReply: `${confirmText}\n\n[Đăng nhập để mình đặt giúp](/login) · [Đăng ký tài khoản](/register) · ${MANUAL_LINK}`,
        sessionUpdate: { waitingFor: 'booking_confirm', pendingBooking },
    };
};

// BƯỚC 1 — nhận ngày, gợi ý slot trống
const handleBookingDate = async (message, requestedDoctor = null) => {
    if (isAskingForThisWeek(message)) {
        const startDate = moment().startOf('day');
        const endDate = startDate.clone().endOf('isoWeek');
        const weekSchedules = [];

        for (const date = startDate.clone(); date.isSameOrBefore(endDate, 'day'); date.add(1, 'day')) {
            const schedules = await getAvailableSchedules(date.format('YYYY-MM-DD'));
            weekSchedules.push(...(requestedDoctor
                ? schedules.filter((schedule) => normalizeDoctorName(schedule.doctor).includes(requestedDoctor))
                : schedules));
        }

        return buildWeekSlotOptionsReply(weekSchedules, requestedDoctor);
    }

    const targetDate = extractDate(message);
    if (!targetDate) {
        return {
            directReply: `Mình chưa nhận ra ngày bạn muốn khám. Bạn thử nhập lại kiểu "ngày mai" hoặc "20/09" nhé.`,
            sessionUpdate: { waitingFor: 'booking_date' },
        };
    }
    if (moment(targetDate).isBefore(moment(), 'day')) {
        return {
            directReply: 'Ngày bạn chọn đã qua rồi, bạn cho mình ngày khác nhé.',
            sessionUpdate: { waitingFor: 'booking_date' },
        };
    }

    const allSchedules = await getAvailableSchedules(targetDate);
    const schedules = requestedDoctor
        ? allSchedules.filter((schedule) => normalizeDoctorName(schedule.doctor).includes(requestedDoctor))
        : allSchedules;
    const formattedDate = moment(targetDate).format('DD/MM/YYYY');
    const dayOfWeek = DAY_LABELS[moment(targetDate).day()];

    if (!schedules.length) {
        return {
            directReply: requestedDoctor
                ? `Ngày **${formattedDate}** (${dayOfWeek}) hiện không có lịch trống cho **${requestedDoctor}**. Bạn chọn ngày khác giúp mình, hoặc ${MANUAL_LINK}.`
                : `Ngày **${formattedDate}** (${dayOfWeek}) hiện không còn lịch trống. Bạn chọn ngày khác giúp mình, hoặc ${MANUAL_LINK}.`,
            sessionUpdate: { waitingFor: 'booking_date', _meta: { requestedDoctor } },
        };
    }

    const options = schedules.slice(0, 6);
    const list = options.map((s, i) => `${i + 1}. **${s.doctor}** — ${s.time}`).join('\n');

    return {
        directReply: `Ngày **${formattedDate}** (${dayOfWeek}) còn các khung giờ sau, bạn chọn số tương ứng nhé:\n\n${list}\n\nHoặc ${MANUAL_LINK}.`,
        sessionUpdate: { waitingFor: 'booking_slot', _meta: { scheduleOptions: options, requestedDoctor } },
        quickReplies: options.map((schedule, index) => ({
            label: `${index + 1}. ${schedule.doctor.replace(/^BS\.\s*/i, '')} - ${schedule.time}`,
            text: `${index + 1}`,
        })),
    };
};

// BƯỚC 2 — nhận số thứ tự, tạo pendingBooking, hỏi xác nhận
const handleBookingSlot = async (message, sessionData, patientId) => {
    const options = sessionData?._meta?.scheduleOptions || [];
    const date = options[0]?.date;
    const currentDoctor = sessionData?._meta?.requestedDoctor;

    if (isAskingForAnotherDate(message)) {
        return {
            directReply: 'Bạn cho mình ngày cụ thể muốn đổi sang nhé, ví dụ “ngày kia” hoặc “10/09”.',
            sessionUpdate: { waitingFor: 'booking_date', _meta: { requestedDoctor: currentDoctor } },
        };
    }

    if (isAskingForAnotherDoctor(message)) {
        const otherSchedules = date
            ? (await getDoctorSchedules(date)).filter(
                (schedule) => !currentDoctor || !normalizeDoctorName(schedule.doctor).includes(currentDoctor),
            )
            : [];

        if (!otherSchedules.length) {
            return {
                directReply: 'Ngày này hiện không còn lịch của bác sĩ nào khác. Bạn có muốn tiếp tục với bác sĩ đang hiển thị hoặc chọn ngày khác không?',
                sessionUpdate: { waitingFor: 'booking_slot' },
            };
        }

        return buildSlotOptionsReply(
            date,
            otherSchedules,
            `Ngoài bác sĩ đang chọn, ngày **${moment(date).format('DD/MM/YYYY')}** còn các lựa chọn sau:`,
        );
    }

    const requestedDoctor = extractDoctorName(message);
    if (requestedDoctor && date) {
        const doctorSchedules = await getDoctorSchedules(date, requestedDoctor);
        if (!doctorSchedules.length) {
            return {
                directReply: `Ngày **${moment(date).format('DD/MM/YYYY')}** hiện không có lịch trống cho bác sĩ **${requestedDoctor}**. Bạn muốn chọn bác sĩ khác hay ngày khác?`,
                sessionUpdate: { waitingFor: 'booking_slot', _meta: { scheduleOptions: options, requestedDoctor: currentDoctor } },
            };
        }
        return buildSlotOptionsReply(
            date,
            doctorSchedules,
            `Các khung giờ của **${doctorSchedules[0].doctor}** vào ngày **${moment(date).format('DD/MM/YYYY')}** là:`,
        );
    }

    if (isAskingForAnotherTime(message) && date) {
        const doctorSchedules = await getDoctorSchedules(date, currentDoctor);
        return buildSlotOptionsReply(
            date,
            doctorSchedules,
            `Các khung giờ còn lại vào ngày **${moment(date).format('DD/MM/YYYY')}** là:`,
        );
    }

    const match = message.match(/\d+/);
    const picked = match ? parseInt(match[0], 10) : null;

    if (!picked || !options[picked - 1]) {
        return {
            directReply: 'Bạn chọn giúp mình đúng số thứ tự trong danh sách ở trên nhé.',
            sessionUpdate: { waitingFor: 'booking_slot' },
        };
    }

    const slot = options[picked - 1];
    const pendingBooking = {
        doctor_schedule_id: slot.doctor_schedule_id,
        doctor: slot.doctor,
        date: slot.date,
        time: slot.time,
    };

    return buildConfirmReply(pendingBooking, patientId);
};

// BƯỚC 3 — xác nhận (hoặc nhắc lại sau khi vừa đăng nhập xong)
const handleBookingConfirm = async (message, sessionData, patientId) => {
    const pendingBooking = sessionData?.pendingBooking;
    if (!pendingBooking) {
        return {
            directReply: 'Bạn muốn đặt lịch khám mới phải không? Cho mình biết ngày bạn muốn khám nhé.',
            sessionUpdate: { waitingFor: null },
        };
    }

    const msg = message.trim().toLowerCase();
    if (/^(hủy|huỷ|không|thôi)/.test(msg)) {
        return {
            directReply: 'Mình đã hủy yêu cầu đặt lịch này. Bạn cần gì khác cứ nhắn mình nhé.',
            sessionUpdate: { waitingFor: null, pendingBooking: null },
        };
    }

    if (!patientId) {
        return buildConfirmReply(pendingBooking, null);
    }

    if (!/^(xác nhận|có|đồng ý|ok|yes|đặt)/.test(msg)) {
        return buildConfirmReply(pendingBooking, patientId);
    }

    const result = await commitBooking(pendingBooking, patientId);
    return { ...result, sessionUpdate: { waitingFor: null, pendingBooking: null } };
};

export const handleBookingFlow = async (waitingFor, message, sessionData, patientId) => {
    switch (waitingFor) {
        case 'booking_date':
            return handleBookingDate(message, sessionData?._meta?.requestedDoctor);
        case 'booking_slot':
            return handleBookingSlot(message, sessionData, patientId);
        case 'booking_confirm':
            return handleBookingConfirm(message, sessionData, patientId);
        default:
            return null;
    }
};

// BƯỚC 0 — bắt đầu luồng, đồng thời xử lý ngày nếu người dùng đã nêu
export const startBookingFlow = async (message = '', sessionData = {}) => {
    const requestedDoctor = extractDoctorName(message) || sessionData?._meta?.requestedDoctor || null;
    if (extractDate(message)) return handleBookingDate(message, requestedDoctor);

    return {
        directReply: `Bạn muốn đặt lịch khám vào ngày nào? (VD: "ngày mai", "20/09")\n\nHoặc bạn có thể ${MANUAL_LINK} nếu muốn tự chọn.`,
        sessionUpdate: { waitingFor: 'booking_date', pendingBooking: null, _meta: { requestedDoctor } },
    };
};