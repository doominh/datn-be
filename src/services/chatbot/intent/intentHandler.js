import moment from 'moment';
import { extractPhone } from '../utils/extractPhone';
import { getClinicContext, getAvailableSchedules } from '../clinicContext.service';
import { getAppointmentsByPhone } from '../appointment.service';

export const handleStructuredIntent = async (intent, message, sessionData) => {
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