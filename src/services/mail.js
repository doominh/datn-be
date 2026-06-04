import nodemailer from 'nodemailer';
import { Resend } from 'resend';
require('dotenv').config();


// -------------------- NODEMAILER SERVICE -----------------
// //GỬI MAIL XÁC NHẬN NGƯỜI DÙNG
// const verify = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Xác minh tài khoản',
// 		html: data.isPatient
// 			? `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn email xác nhận thao tác đăng ký tài khoản đã thực hiện trên website.</p>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để kích hoạt tài khoản.</p>
//         <p>Nếu bạn không thực hiện đăng ký tài khoản với Toothhive, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <a href=${data.redirectLink}>Xác minh tài khoản</a>
//         `
// 			: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để có thể đăng nhập vào hệ thống quản lý của Toothhive.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <a href=${data.redirectLink}>Xác minh tài khoản</a>
//         `,
// 	});
// };

// //GỬI EMAIL QUÊN MẬT KHẨU
// const forgotPassword = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Đặt lại mật khẩu',
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn email đặt lại mật khẩu cho trường hợp quên mật khẩu của bạn.</p>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để đặt lại mật khẩu mới</p>
//         <p>Nếu bạn không thực hiện hành động này, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <p>Đường dẫn xác nhận sẽ có hiệu lực trong vòng <b>15 PHÚT</b></p>
//         <a href=${data.redirectLink}>Đặt lại mật khẩu</a>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG TIN ĐẶT LỊCH HẸN
// const appointmentInfo = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Thông tin lịch hẹn',
// 		html: `
//         <h2 style="text-align: center">XÁC NHẬN ĐẶT LỊCH HẸN THÀNH CÔNG</h2>
//         <hr/>
//         <div style="width: 100%; font-size: 14px">
//             <div style="float: left; width: 20%">
//                 <p><b>Mã lịch hẹn</b></p>
//                 <p><b>Tên bệnh nhân</b></p>
//                 <p><b>Ngày sinh</b></p>
//                 <p><b>Giới tính</b></p>
//                 <p><b>Số điện thoại</b></p>
//                 <p><b>Bác sĩ phụ trách</b></p>
//                 <p><b>Ngày hẹn</b></p>
//                 <p><b>Ca khám</b></p>
//                 <p><b>Trạng thái lịch hẹn</b></p>
//                 <p><b>Địa chỉ phòng khám</b></p>
//             </div>
//             <div style="float: right; width: 80%">
//                 <p>${data.appointment_id}</p>
//                 <p>${data.fullname}</p>
//                 <p>${data.dob}</p>
//                 <p>${data.gender ? 'Nam' : 'Nữ'}</p>
//                 <p>${data.phone}</p>
//                 <p>${data.doctor_name}</p>
//                 <p>${data.date}</p>
//                 <p>${data.time}</p>
//                 <p style="color: #28a745">${data.status}</p>
//                 <p> 237 Nguyễn Tất Thành, Quận 4, Tp.HCM</p>
//             </div>
//         </div>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG TIN HÓA ĐƠN
// const billInfo = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Thông tin hóa đơn',
// 		attachments: [
// 			{
// 				filename: data.filename,
// 				path: data.file,
// 				contentType: 'application/pdf',
// 			},
// 		],
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin hóa đơn dịch vụ tại phòng khám.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };

// //GỬI EMAIL CHI TIẾT LỊCH HẸN
// const detailsInfo = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Thông tin chi tiết lịch hẹn',
// 		attachments: [
// 			{
// 				filename: data.filename,
// 				path: data.file,
// 				contentType: 'application/pdf',
// 			},
// 		],
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin chi tiết lịch hẹn.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG BÁO LỊCH HẸN BỊ HỦY
// const canceledAppointment = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive" <${process.env.EMAIL_APP}>`,
// 		to: data.email,
// 		subject: 'Thông báo hủy lịch hẹn',
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin lịch hẹn ${data.appointment_id.toUpperCase()} đã bị hủy.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };
// const contactUs = async (data) => {
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false,
// 		auth: {
// 			user: process.env.EMAIL_APP,
// 			pass: process.env.EMAIL_APP_PASSWORD,
// 		},
// 	});

// 	let info = await transporter.sendMail({
// 		from: `"Toothhive Contact" <${process.env.EMAIL_APP}>`,
// 		to: 'toothhive@gmail.com',
// 		subject: 'Liên hệ từ người dùng',
// 		html: `
// 					<h3>Thông tin liên hệ</h3>
// 					<ul>
// 							<li><b>Họ và tên:</b> ${data.fullName}</li>
// 							<li><b>Số điện thoại:</b> ${data.phone}</li>
// 							<li><b>Email:</b> ${data.email}</li>
// 							<li><b>Lời nhắn:</b> ${data.message}</li>
// 					</ul>
// 			`,
// 	});
// };

// module.exports = {
// 	verify,
// 	forgotPassword,
// 	appointmentInfo,
// 	billInfo,
// 	detailsInfo,
// 	canceledAppointment,
// 	contactUs,
// };

// -------------------- RESEND MAIL SERVICE -----------------
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = 'Toothhive <onboarding@resend.dev>';

//GỬI MAIL XÁC NHẬN NGƯỜI DÙNG
const verify = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Xác minh tài khoản',
		html: data.isPatient
			? `
        <h3>Xin chào ${data.fullname}!</h3>
        <p><b>Toothhive</b> gửi đến bạn email xác nhận thao tác đăng ký tài khoản đã thực hiện trên website.</p>
        <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để kích hoạt tài khoản.</p>
        <p>Nếu bạn không thực hiện đăng ký tài khoản với Toothhive, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        <a href=${data.redirectLink}>Xác minh tài khoản</a>
        `
			: `
        <h3>Xin chào ${data.fullname}!</h3>
        <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để có thể đăng nhập vào hệ thống quản lý của Toothhive.</p>
        <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        <a href=${data.redirectLink}>Xác minh tài khoản</a>
        `,
	});
};

//GỬI EMAIL QUÊN MẬT KHẨU
const forgotPassword = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Đặt lại mật khẩu',
		html: `
        <h3>Xin chào ${data.fullname}!</h3>
        <p><b>Toothhive</b> gửi đến bạn email đặt lại mật khẩu cho trường hợp quên mật khẩu của bạn.</p>
        <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để đặt lại mật khẩu mới</p>
        <p>Nếu bạn không thực hiện hành động này, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        <p>Đường dẫn xác nhận sẽ có hiệu lực trong vòng <b>15 PHÚT</b></p>
        <a href=${data.redirectLink}>Đặt lại mật khẩu</a>
        `,
	});
};

//GỬI EMAIL THÔNG TIN ĐẶT LỊCH HẸN
const appointmentInfo = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Thông tin lịch hẹn',
		html: `
        <h2 style="text-align: center">XÁC NHẬN ĐẶT LỊCH HẸN THÀNH CÔNG</h2>
        <hr/>
        <div style="width: 100%; font-size: 14px">
            <div style="float: left; width: 20%">
                <p><b>Mã lịch hẹn</b></p>
                <p><b>Tên bệnh nhân</b></p>
                <p><b>Ngày sinh</b></p>
                <p><b>Giới tính</b></p>
                <p><b>Số điện thoại</b></p>
                <p><b>Bác sĩ phụ trách</b></p>
                <p><b>Ngày hẹn</b></p>
                <p><b>Ca khám</b></p>
                <p><b>Trạng thái lịch hẹn</b></p>
                <p><b>Địa chỉ phòng khám</b></p>
            </div>
            <div style="float: right; width: 80%">
                <p>${data.appointment_id}</p>
                <p>${data.fullname}</p>
                <p>${data.dob}</p>
                <p>${data.gender ? 'Nam' : 'Nữ'}</p>
                <p>${data.phone}</p>
                <p>${data.doctor_name}</p>
                <p>${data.date}</p>
                <p>${data.time}</p>
                <p style="color: #28a745">${data.status}</p>
                <p> 237 Nguyễn Tất Thành, Quận 4, Tp.HCM</p>
            </div>
        </div>
        `,
	});
};

//GỬI EMAIL THÔNG TIN HÓA ĐƠN
const billInfo = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Thông tin hóa đơn',
		attachments: [
			{
				filename: data.filename,
				content: require('fs').readFileSync(data.file),
			},
		],
		html: `
        <h3>Xin chào ${data.fullname}!</h3>
        <p><b>Toothhive</b> gửi đến bạn thông tin hóa đơn dịch vụ tại phòng khám.</p>
        <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        `,
	});
};

//GỬI EMAIL CHI TIẾT LỊCH HẸN
const detailsInfo = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Thông tin chi tiết lịch hẹn',
		attachments: [
			{
				filename: data.filename,
				content: require('fs').readFileSync(data.file),
			},
		],
		html: `
        <h3>Xin chào ${data.fullname}!</h3>
        <p><b>Toothhive</b> gửi đến bạn thông tin chi tiết lịch hẹn.</p>
        <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        `,
	});
};

//GỬI EMAIL THÔNG BÁO LỊCH HẸN BỊ HỦY
const canceledAppointment = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: data.email,
		subject: 'Thông báo hủy lịch hẹn',
		html: `
        <h3>Xin chào ${data.fullname}!</h3>
        <p><b>Toothhive</b> gửi đến bạn thông tin lịch hẹn ${data.appointment_id.toUpperCase()} đã bị hủy.</p>
        <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
        `,
	});
};

//GỬI EMAIL LIÊN HỆ
const contactUs = async (data) => {
	await resend.emails.send({
		from: FROM,
		to: 'toothhive@gmail.com',
		subject: 'Liên hệ từ người dùng',
		html: `
				<h3>Thông tin liên hệ</h3>
				<ul>
						<li><b>Họ và tên:</b> ${data.fullName}</li>
						<li><b>Số điện thoại:</b> ${data.phone}</li>
						<li><b>Email:</b> ${data.email}</li>
						<li><b>Lời nhắn:</b> ${data.message}</li>
				</ul>
			`,
	});
};

module.exports = {
	verify,
	forgotPassword,
	appointmentInfo,
	billInfo,
	detailsInfo,
	canceledAppointment,
	contactUs,
};