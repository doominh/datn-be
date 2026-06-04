import axios from 'axios';
import moment from 'moment';
import db from '../models/index';
const { Op, Sequelize } = require('sequelize');
require('dotenv').config();

const GEMINI_URL =
    'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';

let _clinicCache = null;
let _cacheTime = null;
const CACHE_TTL = 5 * 60 * 1000;

// ─── 1. LẤY CONTEXT PHÒNG KHÁM ───────────────────────────────────────────────
const getClinicContext = async () => {
    try {
        const now = Date.now();
        if (_clinicCache && _cacheTime && now - _cacheTime < CACHE_TTL) {
            return _clinicCache;
        }

        const [categories, services, doctors] = await Promise.all([
            db.Category.findAll({
                where: { status: true },
                attributes: ['category_id', 'category_name'],
                raw: true,
            }),
            db.Service.findAll({
                where: { status: true },
                attributes: ['service_name', 'price'],
                include: [{ model: db.Category, attributes: ['category_name'] }],
                raw: true,
                nest: true,
            }),
            db.Doctor.findAll({
                where: { is_activated: true, is_blocked: false },
                attributes: ['doctor_id', 'fullname', 'degree'],
                include: [
                    {
                        model: db.Category,
                        attributes: ['category_name'],
                        through: { attributes: [] },
                    },
                ],
                raw: true,
                nest: true,
            }),
        ]);

        const categoryList = categories.map((c) => `- ${c.category_name}`);
        const serviceList = services.map(
            (s) =>
                `- ${s.service_name} (${s.Category?.category_name || 'N/A'}): ${Number(s.price).toLocaleString('vi-VN')}đ`,
        );

        // raw: true trả flat rows — gộp categories theo doctor_id bằng tay
        const doctorMap = {};
        for (const d of doctors) {
            const id = d.doctor_id;
            if (!doctorMap[id]) {
                doctorMap[id] = { doctor_id: id, fullname: d.fullname, degree: d.degree, categories: [] };
            }
            if (d['Categories.category_name']) {
                doctorMap[id].categories.push(d['Categories.category_name']);
            }
        }
        const doctorList = Object.values(doctorMap).map((d) => {
            const specs = d.categories.join(', ');
            return `- [BS. ${d.fullname}](/detailDoctor/${d.doctor_id}) (${d.degree || 'Bác sĩ'}) — Chuyên: ${specs}`;
        });

        _clinicCache = { categoryList, serviceList, doctorList };
        _cacheTime = now;
        return _clinicCache;
    } catch (e) {
        console.error('[getClinicContext] error:', e.message);
        return { categoryList: [], serviceList: [], doctorList: [] };
    }
};

// ─── 2. LẤY LỊCH TRỐNG ───────────────────────────────────────────────────────
// Dùng đúng pattern của getDoctorSchedulesByDate trong schedule.service.js:
// Doctor.findAll → include Schedule (where date) → raw: true, nest: true
// → rồi filter JS: item.Schedules.DoctorSchedule.status === 1
const getAvailableSchedules = async (date = null) => {
    try {
        const targetDate = date || moment().format('YYYY-MM-DD');

        // Bước 1: Lấy tất cả doctor có lịch vào ngày targetDate
        // Tách 2 query riêng (Categories và Schedules) để tránh lỗi _findSeparate
        const doctorsWithSchedule = await db.Doctor.findAll({
            where: { is_activated: true, is_blocked: false },
            attributes: ['doctor_id', 'fullname', 'degree'],
            include: [
                {
                    model: db.Schedule,
                    where: { date: targetDate },
                    include: [{ model: db.Session }],
                    required: true,
                },
            ],
            raw: true,
            nest: true,
        });


        if (!doctorsWithSchedule.length) return [];

        // Bước 2: Lọc status === 1, gộp theo doctor_id để tránh duplicate
        const results = [];
        for (const row of doctorsWithSchedule) {
            if (row.Schedules?.DoctorSchedule?.status !== 1) {
                continue;
            }
            results.push({
                doctor_id: row.doctor_id,
                doctor: `BS. ${row.fullname}`,
                specialty: '', // sẽ enrich ở bước 3 nếu cần
                date: row.Schedules?.date || targetDate,
                time: row.Schedules?.Session?.time?.slice(0, 5) || '',
            });
        }

        // Bước 3: Enrich specialty bằng query riêng (tránh multiple-include conflict)
        if (results.length > 0) {
            const doctorIds = [...new Set(results.map((r) => r.doctor_id))];
            const doctorCategories = await db.Doctor.findAll({
                where: { doctor_id: { [Op.in]: doctorIds } },
                attributes: ['doctor_id'],
                include: [
                    {
                        model: db.Category,
                        attributes: ['category_name'],
                        through: { attributes: [] },
                    },
                ],
                raw: true,
                nest: true,
            });

            // Gộp categories
            const catMap = {};
            for (const row of doctorCategories) {
                const id = row.doctor_id;
                if (!catMap[id]) catMap[id] = [];
                if (row['Categories.category_name']) {
                    catMap[id].push(row['Categories.category_name']);
                }
            }

            for (const r of results) {
                r.specialty = (catMap[r.doctor_id] || []).join(', ');
            }
        }

        return results;
    } catch (e) {
        console.error('[getAvailableSchedules] error:', e.message, e.stack);
        return [];
    }
};

// ─── 3. TRA CỨU LỊCH HẸN THEO SĐT ───────────────────────────────────────────
const getAppointmentsByPhone = async (phone) => {
    try {
        const normalizedPhone = phone.trim();

        // raw: true + nest: true — tránh lỗi result.get is not a function
        // TRIM để xử lý CHAR(10) trailing spaces trong MySQL
        const appointments = await db.Appointment.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(
                        Sequelize.fn('TRIM', Sequelize.col('Appointment.phone')),
                        normalizedPhone,
                    ),
                    { status: { [Op.in]: [0, 1] } },
                ],
            },
            include: [
                {
                    model: db.DoctorSchedule,
                    include: [
                        { model: db.Doctor, attributes: ['fullname'] },
                        {
                            model: db.Schedule,
                            include: [{ model: db.Session }],
                        },
                    ],
                },
            ],
            order: [['createdAt', 'DESC']],
            limit: 5,
            raw: true,
            nest: true,
        });


        const statusText = { 0: 'Chờ xác nhận', 1: 'Đã xác nhận', 2: 'Đã hủy', 3: 'Hoàn thành' };

        return appointments.map((a) => ({
            appointment_id: a.appointment_id,
            doctor: `BS. ${a.DoctorSchedule?.Doctor?.fullname || 'N/A'}`,
            date: a.DoctorSchedule?.Schedule?.date || '',
            time: a.DoctorSchedule?.Schedule?.Session?.time?.slice(0, 5) || '',
            status: statusText[a.status] ?? 'Không rõ',
            patient_name: a.fullname,
        }));
    } catch (e) {
        console.error('[getAppointmentsByPhone] error:', e.message, e.stack);
        return [];
    }
};

// ─── 4. TIỆN ÍCH ─────────────────────────────────────────────────────────────
const extractPhone = (message) => {
    const match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
    return match ? match[1] : null;
};

const extractDate = (message) => {
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
            const targetDay = offset + 1;
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

// ─── 5. QUICK REPLY MAP ───────────────────────────────────────────────────────
const QUICK_REPLY_ACTIONS = {
    'Tôi muốn đặt lịch khám': 'BOOK_APPOINTMENT',
    'Cho tôi xem bảng giá dịch vụ': 'ASK_PRICE',
    'Còn lịch trống không?': 'ASK_SCHEDULE',
    'Tra cứu lịch hẹn của tôi': 'CHECK_APPOINTMENT',
    'Giới thiệu các bác sĩ của phòng khám': 'ASK_DOCTOR',
    'Giờ làm việc của phòng khám?': 'ASK_WORKING_HOURS',
};

// ─── 6. XỬ LÝ INTENT ─────────────────────────────────────────────────────────
const handleStructuredIntent = async (intent, message, sessionData) => {
    switch (intent) {

        case 'CHECK_APPOINTMENT': {
            const phone = extractPhone(message) || sessionData?.phone;
            if (!phone) {
                return {
                    directReply: 'Để tra cứu lịch hẹn, bạn vui lòng cung cấp **số điện thoại** đã đặt lịch.',
                    sessionUpdate: { waitingFor: 'phone_for_lookup' },
                };
            }
            const appointments = await getAppointmentsByPhone(phone);
            if (!appointments.length) {
                return {
                    directReply: `Không tìm thấy lịch hẹn đang chờ xử lý với số điện thoại **${phone}**.\n\nBạn có muốn [đặt lịch khám mới](/dat-lich) không?`,
                    sessionUpdate: { phone, waitingFor: null },
                };
            }
            const list = appointments
                .map(
                    (a, i) =>
                        `**${i + 1}. ${a.patient_name}** — ${a.doctor}\n   Ngày: ${a.date} lúc ${a.time}\n   Trạng thái: ${a.status}`,
                )
                .join('\n\n');
            return {
                directReply: `Tìm thấy **${appointments.length} lịch hẹn** với số **${phone}**:\n\n${list}\n\nBạn cần hỗ trợ thêm không?`,
                sessionUpdate: { phone, waitingFor: null },
            };
        }

        case 'ASK_SCHEDULE': {
            const today = moment().format('YYYY-MM-DD');
            const schedules = await getAvailableSchedules(today);
            if (!schedules.length) {
                return {
                    directReply: 'Hiện tại chưa có lịch trống hôm nay. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.',
                };
            }
            const list = schedules
                .map((s) => `- [${s.doctor}](/detailDoctor/${s.doctor_id}) lúc **${s.time}**`)
                .join('\n');
            return {
                directReply: `**Lịch trống hôm nay (${moment().format('DD/MM/YYYY')}):**\n\n${list}\n\nNhấn vào tên bác sĩ để xem chi tiết và đặt lịch.`,
            };
        }

        case 'ASK_SCHEDULE_BY_DATE': {
            const { targetDate } = sessionData._meta || {};
            if (!targetDate) return null;
            const schedules = await getAvailableSchedules(targetDate);
            const formattedDate = moment(targetDate).format('DD/MM/YYYY');
            const dayOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][moment(targetDate).day()];
            if (!schedules.length) {
                return {
                    directReply: `Ngày **${formattedDate}** (${dayOfWeek}) hiện không có lịch trống.\n\nBạn có muốn kiểm tra ngày khác không? Hoặc gọi hotline **(028) 1234 5678**.`,
                };
            }
            const list = schedules
                .map((s) => `- [${s.doctor}](/detailDoctor/${s.doctor_id}) lúc **${s.time}**`)
                .join('\n');
            return {
                directReply: `Ngày **${formattedDate}** (${dayOfWeek}) có các bác sĩ sau:\n\n${list}\n\nNhấn vào tên bác sĩ để xem chi tiết và đặt lịch.`,
            };
        }

        case 'ASK_DOCTOR': {
            const { doctorList } = await getClinicContext();
            if (!doctorList.length) {
                return { directReply: 'Hiện tại chưa có thông tin bác sĩ. Vui lòng gọi **(028) 1234 5678**.' };
            }
            return {
                directReply: `**Đội ngũ bác sĩ Toothhive:**\n\n${doctorList.join('\n')}\n\nNhấn vào tên bác sĩ để xem chi tiết và đặt lịch.`,
            };
        }

        case 'BOOK_APPOINTMENT':
            return {
                directReply: 'Bạn có thể đặt lịch khám trực tuyến: [**Đặt lịch ngay**](/dat-lich)\n\nHoặc gọi hotline **(028) 1234 5678** để được hỗ trợ trực tiếp.',
            };

        case 'ASK_PRICE': {
            const { serviceList } = await getClinicContext();
            if (!serviceList.length) {
                return { directReply: 'Bảng giá hiện đang cập nhật. Vui lòng gọi **(028) 1234 5678**.' };
            }
            return {
                directReply: `**Bảng giá dịch vụ Toothhive:**\n\n${serviceList.slice(0, 25).join('\n')}\n\n_Giá có thể thay đổi. Vui lòng gọi **(028) 1234 5678** để xác nhận._`,
            };
        }

        case 'ASK_WORKING_HOURS':
            return {
                directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\nBạn có muốn đặt lịch không? [Đặt lịch tại đây](/dat-lich)',
            };

        default:
            return null;
    }
};

// ─── 7. HÀM CHÍNH askGemini ───────────────────────────────────────────────────
const askGemini = async (message, conversationHistory = [], sessionData = {}) => {

    // 7a. Đang chờ SĐT
    if (sessionData?.waitingFor === 'phone_for_lookup') {
        const phone = extractPhone(message);
        if (phone) {
            return handleStructuredIntent('CHECK_APPOINTMENT', message, { ...sessionData, phone });
        }
        sessionData = { ...sessionData, waitingFor: null };
    }

    // 7b. Quick Reply exact match
    const quickAction = QUICK_REPLY_ACTIONS[message.trim()];
    if (quickAction) {
        const result = await handleStructuredIntent(quickAction, message, sessionData);
        if (result) return result;
    }

    // 7c. Câu hỏi tìm lịch theo ngày cụ thể
    const isAskingSchedule =
        /lịch|rảnh|trống|khám|bác sĩ nào|bác sĩ có thể|đặt lịch/i.test(message) &&
        /ngày mai|ngày kia|hôm nay|thứ\s*([2-7]|hai|ba|tư|năm|sáu|bảy)|ngày\s*\d|\/\d|\d\s*tháng/i.test(message);

    if (isAskingSchedule) {
        const targetDate = extractDate(message);
        if (targetDate) {
            const result = await handleStructuredIntent('ASK_SCHEDULE_BY_DATE', message, {
                ...sessionData,
                _meta: { targetDate },
            });
            if (result) return result;
        }
    }

    // 7d. Gọi Gemini với full context
    const { categoryList, serviceList, doctorList } = await getClinicContext();
    const today = moment().format('YYYY-MM-DD');
    const todaySchedules = await getAvailableSchedules(today);
    const scheduleContext =
        todaySchedules.length > 0
            ? todaySchedules
                  .slice(0, 10)
                  .map((s) => `- [${s.doctor}](/detailDoctor/${s.doctor_id}): ${s.date} lúc ${s.time}`)
                  .join('\n')
            : 'Chưa có lịch trống hôm nay.';

    const nowVN = moment().utcOffset('+07:00');
    const todayStr = nowVN.format('DD/MM/YYYY');
    const dayOfWeekStr = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][nowVN.day()];
    const timeStr = nowVN.format('HH:mm');

    const systemPrompt = `Bạn là **Linh** — Tiếp Tân của phòng khám nha khoa Toothhive.

VAI TRÒ: Nhân viên tiếp tân (không phải nha sĩ) — hỗ trợ hành chính, tư vấn dịch vụ, hướng dẫn đặt lịch.

THỜI GIAN HIỆN TẠI (múi giờ Việt Nam GMT+7):
- Hôm nay: ${dayOfWeekStr}, ngày ${todayStr}
- Giờ hiện tại: ${timeStr}
- Dùng thông tin này khi trả lời câu hỏi về ngày tháng.

QUY TẮC:
- Tiếng Việt, lịch sự, ngắn gọn, không dùng emoji
- Không chẩn đoán bệnh, không kê đơn
- Khi đề cập đặt lịch, kèm link: [Đặt lịch tại đây](/dat-lich)
- Khi liệt kê bác sĩ, dùng link: [BS. Tên](/detailDoctor/ID)

THÔNG TIN PHÒNG KHÁM:
- Tên: Toothhive Dental Clinic | Hotline: (028) 1234 5678
- Giờ làm việc: Thứ 2 – Thứ 7, 8:00 – 17:00 | Chủ nhật nghỉ

CHUYÊN KHOA:
${categoryList.join('\n') || 'Đang cập nhật.'}

BẢNG GIÁ:
${serviceList.slice(0, 20).join('\n') || 'Đang cập nhật.'}

ĐỘI NGŨ BÁC SĨ:
${doctorList.join('\n') || 'Đang cập nhật.'}

LỊCH TRỐNG HÔM NAY (${todayStr}):
${scheduleContext}`;

    const recentHistory = conversationHistory.slice(-6);
    const contents = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'Đã hiểu. Tôi sẵn sàng hỗ trợ.' }] },
        ...recentHistory,
        { role: 'user', parts: [{ text: message }] },
    ];

    try {
        const response = await axios.post(
            GEMINI_URL,
            { contents },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': process.env.GEMINI_API_KEY,
                },
                timeout: 30000,
            },
        );

        const text =
            response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
            'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678**.';

        return { text, action: null };
    } catch (e) {
        throw e;
    }
};

export default { askGemini };