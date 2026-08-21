import db from '../../models/index';
const { Op, Sequelize } = require('sequelize');

export const getAppointmentsByPhone = async (phone) => {
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
