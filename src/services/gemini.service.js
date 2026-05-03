import axios from 'axios';
import moment from 'moment';
import db from '../models/index';
const { Op } = require('sequelize');
require('dotenv').config();

const GEMINI_URL =
    'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';

let _clinicCache = null;
let _cacheTime = null;
const CACHE_TTL = 5 * 60 * 1000;

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

        const categoryList = categories.map((c) => `- ${c.category_name} (ID: ${c.category_id})`);
        const serviceList = services.map(
            (s) => `- ${s.service_name} (${s.Category?.category_name || 'N/A'}): ${Number(s.price).toLocaleString('vi-VN')}đ`,
        );

        const doctorMap = {};
        for (const d of doctors) {
            const id = d.doctor_id;
            if (!doctorMap[id]) {
                doctorMap[id] = { doctor_id: id, fullname: d.fullname, degree: d.degree, categories: [] };
            }
            if (d.Categories?.category_name) {
                doctorMap[id].categories.push(d.Categories.category_name);
            }
        }
        const doctorList = Object.values(doctorMap).map((d) => {
            const specs = d.categories.length > 0 ? d.categories.join(', ') : 'Đa khoa';
            return `- BS. ${d.fullname} (${d.degree || 'Bác sĩ'}) — Chuyên: ${specs} — ID: ${d.doctor_id}`;
        });

        _clinicCache = { categoryList, serviceList, doctorList };
        _cacheTime = now;
        return _clinicCache;
    } catch (e) {
        console.error('getClinicContext FULL error:', e.message, e.stack);
        return { categoryList: [], serviceList: [], doctorList: [] };
    }
};

const getAvailableSchedules = async (doctorId = null, date = null) => {
    try {
        const targetDate = date || moment().format('YYYY-MM-DD');
        const whereDoctor = doctorId ? { doctor_id: doctorId } : {};

        const schedules = await db.DoctorSchedule.findAll({
            where: { ...whereDoctor, status: 1 },
            include: [
                {
                    model: db.Doctor,
                    where: { is_activated: true, is_blocked: false },
                    attributes: ['doctor_id', 'fullname', 'degree'],
                    include: [
                        {
                            model: db.Category,
                            attributes: ['category_name'],
                            through: { attributes: [] },
                        },
                    ],
                },
                {
                    model: db.Schedule,
                    where: { date: { [Op.gte]: targetDate } },
                    include: [{ model: db.Session }],
                    required: true,
                },
            ],
            limit: 20,
        });

        return schedules.map((s) => {
            const item = s.toJSON();
            return {
                doctor: `BS. ${item.Doctor?.fullname || 'N/A'}`,
                specialty: item.Doctor?.Categories?.map((c) => c.category_name).join(', ') || '',
                date: item.Schedule?.date || '',
                time: item.Schedule?.Session?.time?.slice(0, 5) || '',
                doctor_schedule_id: item.doctor_schedule_id,
            };
        });
    } catch (e) {
        console.error('getAvailableSchedules FULL error:', e.message, e.stack);
        return [];
    }
};

const getAppointmentsByPhone = async (phone) => {
    try {
        const appointments = await db.Appointment.findAll({
            where: { phone, status: { [Op.in]: [0, 1] } },
            include: [
                {
                    model: db.DoctorSchedule,
                    include: [
                        { model: db.Doctor, attributes: ['fullname'] },
                        { model: db.Schedule, include: [{ model: db.Session }] },
                    ],
                },
            ],
            order: [['createdAt', 'DESC']],
            limit: 5,
        });

        const statusText = { 0: 'Chờ xác nhận', 1: 'Đã xác nhận', 2: 'Đã hủy', 3: 'Hoàn thành' };

        return appointments.map((a) => {
            const item = a.toJSON();
            return {
                appointment_id: item.appointment_id,
                doctor: `BS. ${item.DoctorSchedule?.Doctor?.fullname || 'N/A'}`,
                date: item.DoctorSchedule?.Schedule?.date || '',
                time: item.DoctorSchedule?.Schedule?.Session?.time?.slice(0, 5) || '',
                status: statusText[item.status] || 'Không rõ',
                patient_name: item.fullname,
            };
        });
    } catch (e) {
        console.error('getAppointmentsByPhone FULL error:', e.message, e.stack);
        return [];
    }
};

const extractPhone = (message) => {
    const match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
    return match ? match[1] : null;
};

const QUICK_REPLY_ACTIONS = {
    'Tôi muốn đặt lịch khám': 'BOOK_APPOINTMENT',
    'Cho tôi xem bảng giá dịch vụ': 'ASK_PRICE',
    'Còn lịch trống không?': 'ASK_SCHEDULE',
    'Tra cứu lịch hẹn của tôi': 'CHECK_APPOINTMENT',
    'Giới thiệu các bác sĩ của phòng khám': 'ASK_DOCTOR',
    'Giờ làm việc của phòng khám?': 'ASK_WORKING_HOURS',
};

const handleStructuredIntent = async (intent, message, sessionData) => {
    switch (intent) {
        case 'CHECK_APPOINTMENT': {
            const phone = extractPhone(message) || sessionData?.phone;
            if (!phone) {
                return {
                    directReply: 'Để tra cứu lịch hẹn, bạn vui lòng cung cấp **số điện thoại** đã đăng ký.',
                    action: null,
                    sessionUpdate: { waitingFor: 'phone_for_lookup' },
                };
            }
            const appointments = await getAppointmentsByPhone(phone);
            if (!appointments.length) {
                return {
                    directReply: `Không tìm thấy lịch hẹn đang chờ xử lý với số điện thoại **${phone}**.\n\nBạn có muốn [**đặt lịch khám mới**](/dat-lich) không?`,
                    action: null,
                    // FIX: Reset waitingFor sau khi hoàn thành flow tra cứu
                    sessionUpdate: { phone, waitingFor: null },
                };
            }
            const list = appointments
                .map((a, i) =>
                    `**${i + 1}. ${a.patient_name}** — ${a.doctor}\n   Ngày: ${a.date} lúc ${a.time}\n   Trạng thái: ${a.status}`,
                )
                .join('\n\n');
            return {
                directReply: `Tìm thấy **${appointments.length} lịch hẹn** với số **${phone}**:\n\n${list}\n\nBạn cần hỗ trợ thêm không?`,
                action: null,
                sessionUpdate: { phone, waitingFor: null },
            };
        }

        case 'ASK_SCHEDULE': {
            const schedules = await getAvailableSchedules();
            if (!schedules.length) {
                return {
                    directReply: 'Hiện tại chưa có lịch trống được cập nhật. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.',
                    action: null,
                };
            }
            const byDate = schedules.reduce((acc, s) => {
                if (!acc[s.date]) acc[s.date] = [];
                acc[s.date].push(`  - ${s.doctor} (${s.specialty}) lúc **${s.time}**`);
                return acc;
            }, {});
            const list = Object.entries(byDate)
                .slice(0, 4)
                .map(([date, items]) => `**${date}**\n${items.join('\n')}`)
                .join('\n\n');
            return {
                directReply: `Các khung giờ còn trống gần nhất:\n\n${list}\n\nBạn muốn đặt lịch không? [Đặt lịch tại đây](/dat-lich)`,
                action: null,
            };
        }

        case 'BOOK_APPOINTMENT':
            return {
                directReply: 'Bạn có thể đặt lịch khám trực tuyến tại đây: [**Đặt lịch ngay**](/dat-lich)\n\nHoặc gọi hotline **(028) 1234 5678** để được hỗ trợ đặt lịch trực tiếp.',
                action: null,
            };

        case 'ASK_WORKING_HOURS':
            return {
                directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\nBạn có muốn đặt lịch khám không? [Đặt lịch tại đây](/dat-lich)',
                action: null,
            };

        default:
            return null;
    }
};

const askGemini = async (message, conversationHistory = [], sessionData = {}) => {
    // Đang chờ số điện thoại
    if (sessionData?.waitingFor === 'phone_for_lookup') {
        const phone = extractPhone(message);
        if (phone) {
            // Có SĐT → tra cứu ngay
            return handleStructuredIntent('CHECK_APPOINTMENT', message, { ...sessionData, phone });
        }
        // Không có SĐT (user trả lời chữ như "có", "không", etc.)
        // → Reset waitingFor, để Gemini xử lý tự nhiên thay vì hỏi lại SĐT mãi
        sessionData = { ...sessionData, waitingFor: null };
    }

    // Quick Reply exact match
    const quickAction = QUICK_REPLY_ACTIONS[message.trim()];
    if (quickAction) {
        const result = await handleStructuredIntent(quickAction, message, sessionData);
        if (result) return result;
    }

    // Gemini với full context
    const { categoryList, serviceList, doctorList } = await getClinicContext();
    const schedules = await getAvailableSchedules();
    const scheduleContext = schedules.length > 0
        ? schedules.slice(0, 10).map((s) => `- ${s.doctor} (${s.specialty}): ${s.date} lúc ${s.time}`).join('\n')
        : 'Chưa có lịch trống được cập nhật.';

    const systemPrompt = `Bạn là **Dũng** — Tiếp Tân của phòng khám nha khoa Toothhive.

VAI TRÒ: Nhân viên tiếp tân (không phải nha sĩ) — hỗ trợ hành chính, tư vấn dịch vụ, hướng dẫn đặt lịch.

QUY TẮC PHẢN HỒI:
- Dùng tiếng Việt, giọng lịch sự và chuyên nghiệp
- Ngắn gọn, đi thẳng vào vấn đề, không lan man
- Không dùng emoji trong câu trả lời
- Không chẩn đoán bệnh, không kê đơn thuốc
- Nếu bệnh nhân hỏi về triệu chứng y khoa, đề nghị đến khám trực tiếp để được bác sĩ tư vấn chính xác
- Khi đề cập đến đặt lịch, LUÔN kèm link: [Đặt lịch tại đây](/dat-lich)
- Không tự redirect, không thêm [ACTION:...] tag nào vào câu trả lời
- Trả lời tự nhiên, nếu câu hỏi không liên quan phòng khám thì vẫn trả lời ngắn gọn và nhắc nhở nhẹ về vai trò của mình

THÔNG TIN PHÒNG KHÁM:
- Tên: Toothhive Dental Clinic | Hotline: (028) 1234 5678
- Giờ làm việc: Thứ 2 đến Thứ 7, 8:00 – 17:00 | Chủ nhật nghỉ
- Website đặt lịch: /dat-lich

CHUYÊN KHOA:
${categoryList.join('\n') || 'Đang cập nhật.'}

BẢNG GIÁ DỊCH VỤ:
${serviceList.slice(0, 20).join('\n') || 'Đang cập nhật.'}

ĐỘI NGŨ BÁC SĨ:
${doctorList.join('\n') || 'Đang cập nhật.'}

LỊCH TRỐNG HIỆN TẠI:
${scheduleContext}`;

    const recentHistory = conversationHistory.slice(-6);
    const contents = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        { role: 'model', parts: [{ text: 'Đã hiểu. Tôi sẵn sàng hỗ trợ.' }] },
        ...recentHistory,
        { role: 'user', parts: [{ text: message }] },
    ];

    const response = await axios.post(
        GEMINI_URL,
        { contents },
        {
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': process.env.GEMINI_API_KEY,
            },
        },
    );

    const text =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678** để được hỗ trợ trực tiếp.';

    return { text, action: null };
};

export default { askGemini };