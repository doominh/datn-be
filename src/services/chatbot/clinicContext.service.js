import db from '../../models/index';
import moment from 'moment';
import scheduleService from '../../services/schedule';
import { stripDiacritics } from './utils/textMatch';
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

        const categoriesRaw = categories.map((c) => c.category_name).filter(Boolean);
        const servicesRaw = services
            .map((s) => ({ name: s.service_name, category: s.Category?.category_name || null }))
            .filter((s) => s.name);

        _clinicCache = { categoryList, serviceList, doctorList, categoriesRaw, servicesRaw };
        _cacheTime = now;
        return _clinicCache;
    } catch (e) {
        console.error('[getClinicContext] error:', e.message);
        return { categoryList: [], serviceList: [], doctorList: [], categoriesRaw: [], servicesRaw: [] };
    }
};

const MIN_MATCH_LENGTH = 4;

export const matchServiceCategory = async (message = '') => {
    const text = stripDiacritics(message);
    if (text.length < MIN_MATCH_LENGTH) return null;

    await getClinicContext();
    const { categoriesRaw = [], servicesRaw = [] } = _clinicCache || {};

    const matchedService = servicesRaw.find(({ name }) => {
        const normalizedName = stripDiacritics(name);
        if (normalizedName.length < MIN_MATCH_LENGTH) return false;
        return text.includes(normalizedName) || normalizedName.includes(text);
    });
    if (matchedService?.category) return matchedService.category;

    const matchedCategory = categoriesRaw.find((name) => {
        const normalizedName = stripDiacritics(name);
        return normalizedName.length >= MIN_MATCH_LENGTH && text.includes(normalizedName);
    });
    return matchedCategory || null;
};

export const getAvailableSchedules = async (date = null) => {
    const targetDate = date || moment().format('YYYY-MM-DD');
    try {
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
            const res = await scheduleService.getDoctorSchedulesByDate({
                doctor_id: doc.doctor_id,
                date: targetDate,
            });

            if (res.errCode === 0 && res.data?.length) {
                for (const s of res.data) {
                    results.push({
                        doctor_schedule_id: s.DoctorSchedule?.doctor_schedule_id,
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