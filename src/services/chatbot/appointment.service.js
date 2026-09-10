import db from '../../models/index';
const { Op, Sequelize } = require('sequelize');

export const getAppointmentsByPhone = async (phone) => {
    try {
        const normalizedPhone = phone.trim();
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

export const getCancellableAppointmentsByPhone = async (phone) => {
    try {
        const normalizedPhone = phone.trim();
        const appointments = await db.Appointment.findAll({
            where: {
                [Op.and]: [
                    Sequelize.where(Sequelize.fn('TRIM', Sequelize.col('Appointment.phone')), normalizedPhone),
                    { status: 0 },
                ],
            },
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
            raw: true,
            nest: true,
        });

        return appointments.map((a) => ({
            appointment_id: a.appointment_id,
            doctor: `BS. ${a.DoctorSchedule?.Doctor?.fullname || 'N/A'}`,
            date: a.DoctorSchedule?.Schedule?.date || '',
            time: a.DoctorSchedule?.Schedule?.Session?.time?.slice(0, 5) || '',
            status: 'Chờ xác nhận',
        }));
    } catch (e) {
        console.error('[getCancellableAppointmentsByPhone] error:', e.message, e.stack);
        return [];
    }
};

export const cancelAppointmentByPhone = async (appointmentId, phone) => {
    try {
        const normalizedPhone = (phone || '').trim();
        const [affectedRows] = await db.Appointment.update(
            { status: 2 },
            {
                where: {
                    appointment_id: appointmentId,
                    status: 0,
                    [Op.and]: [Sequelize.where(Sequelize.fn('TRIM', Sequelize.col('phone')), normalizedPhone)],
                },
            },
        );
        return affectedRows > 0;
    } catch (e) {
        console.error('[cancelAppointmentByPhone] error:', e.message, e.stack);
        return false;
    }
};