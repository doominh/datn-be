import db from '../../models/index';
import moment from 'moment';
import scheduleService from '../../services/schedule';
const { Op } = require('sequelize');

let _clinicCache = null;
let _cacheTime = null;
const CACHE_TTL = 5 * 60 * 1000;

export const getClinicContext = async () => {
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

export const getAvailableSchedules = async (date = null) => {
    const targetDate = date || moment().format('YYYY-MM-DD');
    try {
        // Lấy danh sách bác sĩ đang hoạt động, kèm chuyên khoa luôn (không cần enrich bước 2 nữa)
        const activeDoctors = await db.Doctor.findAll({
            where: { is_activated: true, is_blocked: false },
            attributes: ['doctor_id', 'fullname'],
            include: [
                { model: db.Category, attributes: ['category_name'], through: { attributes: [] } },
            ],
            raw: true,
            nest: true,
        });

        if (!activeDoctors.length) return [];

        // Gộp categories theo doctor_id (raw:true trả flat rows nên phải gộp tay)
        const doctorMap = {};
        for (const d of activeDoctors) {
            const id = d.doctor_id;
            if (!doctorMap[id]) {
                doctorMap[id] = { doctor_id: id, fullname: d.fullname, categories: [] };
            }
            if (d['Categories.category_name']) {
                doctorMap[id].categories.push(d['Categories.category_name']);
            }
        }

        const results = [];
        for (const doc of Object.values(doctorMap)) {
            // Tái sử dụng hàm gốc — kế thừa luôn: chặn ngày quá khứ, lọc giờ đã qua trong ngày, sắp xếp theo giờ
            const res = await scheduleService.getDoctorSchedulesByDate({
                doctor_id: doc.doctor_id,
                date: targetDate,
            });

            if (res.errCode === 0 && res.data?.length) {
                for (const s of res.data) {
                    results.push({
                        doctor_id: doc.doctor_id,
                        doctor: `BS. ${doc.fullname}`,
                        specialty: doc.categories.join(', '),
                        date: s.date,
                        time: s.Session?.time?.slice(0, 5) || '',
                    });
                }
            }
        }
        return results;
    } catch (e) {
        console.error('[getAvailableSchedules] error:', e.message, e.stack);
        return [];
    }
};
