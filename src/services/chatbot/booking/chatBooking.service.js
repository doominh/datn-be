import moment from 'moment';
import appointmentServices from '../../appointment';
import patientServices from '../../patient';

const ERROR_MESSAGES = {
    1: 'Không tìm thấy thông tin lịch làm việc hoặc bệnh nhân. {U} thử chọn lại giúp {s} nhé.',
    2: 'Khung giờ này không còn hợp lệ (đã qua ngày/giờ khám, hoặc lịch chưa được duyệt). {U} chọn khung giờ khác giúp {s} nhé.',
    9: 'Rất tiếc, khung giờ này vừa có người khác đặt mất rồi. {U} chọn khung giờ khác giúp {s} nhé.',
    10: '{U} đã đặt tối đa 3 lịch hẹn trong hôm nay rồi. Vui lòng thử lại vào ngày mai hoặc gọi hotline **(028) 1234 5678**.',
};

export const commitBooking = async (pendingBooking, patientId) => {
    const patientResult = await patientServices.getByID({ patient_id: patientId });
    if (patientResult.errCode !== 0) {
        return { directReply: '{S} không lấy được thông tin tài khoản của {u}, vui lòng đăng nhập lại giúp {s}.' };
    }
    const patient = patientResult.data;

    const result = await appointmentServices.bookAppointment({
        creator_id: patientId,
        patient_id: patientId,
        type_id: 1,
        doctor_schedule_id: pendingBooking.doctor_schedule_id,
        fullname: patient.fullname,
        dob: patient.dob,
        gender: patient.gender,
        phone: patient.phone,
    });

    if (result.errCode === 0) {
        return {
            directReply: `Đặt lịch thành công! **${pendingBooking.doctor}** lúc **${pendingBooking.time}** ngày **${moment(pendingBooking.date).format('DD/MM/YYYY')}**.\n\n[Xem chi tiết lịch hẹn](/quan-ly-lich-hen/chi-tiet/${result.data.appointment_id})`,
            bookingCreated: { appointment_id: result.data.appointment_id, fullname: result.data.fullname },
        };
    }

    return { directReply: ERROR_MESSAGES[result.errCode] || 'Đặt lịch không thành công, {u} thử lại giúp {s} nhé.' };
};