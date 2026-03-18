const { Op } = require('sequelize');
import { getUserByID } from './auth';
import { getAllByCategoryID } from './doctor';
import moment from 'moment';
import db from '../models/index';
import util from '../util/index';

//LẤY 7 NGÀY CỦA 1 TUẦN THEO ISO WEEK
const getDaysOfWeek = (week, year) => {
	let daysOfWeek = [];
	const date = moment(
		String(year).padStart(4, '0') + 'W' + String(week).padStart(2, '0'),
	);
	for (let i = 0; i < 7; i++) {
		daysOfWeek.push(date.format('YYYY-MM-DD').valueOf());
		date.add(1, 'day');
	}
	return daysOfWeek;
};

//THÊM MỚI BẢNG DOCTOR_SCHEDULE
const createDoctorSchedule = (doctorIDList, schedule_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			let doctorSchedules = await db.DoctorSchedule.findAll({
				where: {
					doctor_id: doctorIDList,
					schedule_id: schedule_id,
				},
			});

			doctorSchedules = doctorSchedules.map(
				(doctorSchedule) => doctorSchedule.doctor_id,
			);

			let invalid = [];
			let valid = [];

			doctorIDList.forEach((doctor_id) => {
				if (doctorSchedules.includes(doctor_id)) {
					invalid.push(doctor_id);
				} else {
					valid.push({
						doctor_id: doctor_id,
						schedule_id: schedule_id,
						status: 0,
					});
				}
			});

			if (valid.length) await db.DoctorSchedule.bulkCreate(valid);

			resolve({
				valid: valid.map((item) => item.doctor_id),
				invalid,
			});
		} catch (e) {
			reject(e);
		}
	});
};

//THÊM MỚI BẢNG EMPLOYEE_SCHEDULE
const createEmployeeSchedule = (employeeIDList, schedule_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			let employeeSchedules = await db.EmployeeSchedule.findAll({
				where: {
					employee_id: employeeIDList,
					schedule_id: schedule_id,
				},
			});

			employeeSchedules = employeeSchedules.map(
				(employeeSchedule) => employeeSchedule.employee_id,
			);

			let invalid = [];
			let valid = [];

			employeeIDList.forEach((employee_id) => {
				if (employeeSchedules.includes(employee_id)) {
					invalid.push(employee_id);
				} else {
					valid.push({
						employee_id: employee_id,
						schedule_id: schedule_id,
						status: 0,
					});
				}
			});

			if (valid.length) await db.EmployeeSchedule.bulkCreate(valid);

			resolve({
				valid: valid.map((item) => item.employee_id),
				invalid,
			});
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC BÁC SĨ
const getDoctorSchedulesByWeek = (week, year) => {
	return new Promise(async (resolve, reject) => {
		try {
			//lấy 7 ngày của tuần cần xem
			const daysOfWeek = getDaysOfWeek(week, year);

			//join các bảng cần lấy dữ liệu
			const rawData = await db.Doctor.findAll({
				attributes: [
					['doctor_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				include: [
					{
						model: db.Schedule,
						where: { date: daysOfWeek },
						include: [{ model: db.Session }],
					},
				],
				raw: true,
				nest: true,
			});

			//lấy ra tất cả bác sĩ
			const doctors = await db.Doctor.findAll({
				attributes: [
					['doctor_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				order: [['createdAt', 'ASC']],
			});

			//thiết kế cấu trúc api
			let doctorScheduleList = [];
			doctors.forEach((doctor) => {
				let obj = {};
				let schedules = [];
				obj.doctor = doctor;
				rawData.forEach((item) => {
					if (item.user_id === doctor.user_id) schedules.push(item.Schedules);
				});
				obj.schedules = schedules;
				doctorScheduleList.push(obj);
			});

			//thiết kế cấu trúc api
			let data = [];
			doctorScheduleList.forEach((doctorSchedule) => {
				let byUser = {};
				byUser.user = doctorSchedule.doctor;
				byUser.schedules = [];

				daysOfWeek.forEach((date) => {
					let byDate = {};
					byDate.date = date;
					byDate.list = [];

					doctorSchedule.schedules.forEach((schedule) => {
						if (schedule.date === date) {
							//thống nhất tên các biến
							const { DoctorSchedule, ...rest } = schedule;
							byDate.list.push({
								...rest,
								UserSchedule: {
									user_schedule_id: DoctorSchedule.doctor_schedule_id,
									user_id: DoctorSchedule.doctor_id,
									schedule_id: DoctorSchedule.schedule_id,
									status: DoctorSchedule.status,
									createdAt: DoctorSchedule.createdAt,
									updatedAt: DoctorSchedule.updatedAt,
								},
							});
						}
					});
					byUser.schedules.push(byDate);
				});
				data.push(byUser);
			});
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC QTV, LT, PT
const getEmployeeSchedulesByWeek = (week, year) => {
	return new Promise(async (resolve, reject) => {
		try {
			//lấy 7 ngày của tuần cần xem
			const daysOfWeek = getDaysOfWeek(week, year);

			//join các bảng cần lấy dữ liệu
			const rawData = await db.Employee.findAll({
				attributes: [
					['employee_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				where: { employee_id: { [Op.ne]: 'none' } },
				include: [
					{
						model: db.Schedule,
						where: { date: daysOfWeek },
						include: [{ model: db.Session }],
					},
				],
				raw: true,
				nest: true,
			});

			//lấy ra tất cả nhân viên, trừ lễ tân ảo
			const employees = await db.Employee.findAll({
				attributes: [
					['employee_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				where: { employee_id: { [Op.ne]: 'none' } },
				order: [['createdAt', 'ASC']],
			});

			//thiết kế cấu trúc api
			let employeeScheduleList = [];
			employees.forEach((employee) => {
				let obj = {};
				let schedules = [];
				obj.employee = employee;
				rawData.forEach((item) => {
					if (item.user_id === employee.user_id) schedules.push(item.Schedules);
				});
				obj.schedules = schedules;
				employeeScheduleList.push(obj);
			});

			//thiết kế cấu trúc api
			let data = [];
			employeeScheduleList.forEach((employeeSchedule) => {
				let byUser = {};
				byUser.user = employeeSchedule.employee;
				byUser.schedules = [];

				daysOfWeek.forEach((date) => {
					let byDate = {};
					byDate.date = date;
					byDate.list = [];

					employeeSchedule.schedules.forEach((schedule) => {
						if (schedule.date === date) {
							//thống nhất tên các biến
							const { EmployeeSchedule, ...rest } = schedule;
							byDate.list.push({
								...rest,
								UserSchedule: {
									user_schedule_id: EmployeeSchedule.employee_schedule_id,
									user_id: EmployeeSchedule.employee_id,
									schedule_id: EmployeeSchedule.schedule_id,
									status: EmployeeSchedule.status,
									createdAt: EmployeeSchedule.createdAt,
									updatedAt: EmployeeSchedule.updatedAt,
								},
							});
						}
					});
					byUser.schedules.push(byDate);
				});
				data.push(byUser);
			});
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC CỦA BÁC SĨ TRONG 1 THÁNG
const getDoctorSchedulesByMonth = (daysOfMonth) => {
	return new Promise(async (resolve, reject) => {
		try {
			//join các bảng cần lấy dữ liệu
			const rawData = await db.Doctor.findAll({
				attributes: [['doctor_id', 'user_id'], 'fullname'],
				include: [
					{
						model: db.Schedule,
						where: { date: daysOfMonth },
						include: [{ model: db.Session }],
					},
				],
				raw: true,
				nest: true,
			});

			//lấy ra tất cả bác sĩ
			const doctors = await db.Doctor.findAll({
				attributes: [['doctor_id', 'user_id'], 'fullname'],
				order: [['createdAt', 'ASC']],
			});

			//thiết kế cấu trúc api
			let doctorScheduleList = [];
			doctors.forEach((doctor) => {
				let obj = {};
				let schedules = [];
				obj.doctor = doctor;
				rawData.forEach((item) => {
					if (item.user_id === doctor.user_id) schedules.push(item.Schedules);
				});
				obj.schedules = schedules;
				doctorScheduleList.push(obj);
			});

			//thiết kế cấu trúc api
			let data = [];
			doctorScheduleList.forEach((doctorSchedule) => {
				let byUser = {};
				byUser.user = doctorSchedule.doctor;
				byUser.schedules = [];

				daysOfMonth.forEach((date) => {
					let byDate = {};
					byDate.date = date;
					byDate.list = [];

					doctorSchedule.schedules.forEach((schedule) => {
						if (schedule.date === date) {
							//thống nhất tên các biến
							const { DoctorSchedule, ...rest } = schedule;
							byDate.list.push({
								...rest,
								UserSchedule: {
									user_schedule_id: DoctorSchedule.doctor_schedule_id,
									user_id: DoctorSchedule.doctor_id,
									schedule_id: DoctorSchedule.schedule_id,
									status: DoctorSchedule.status,
									createdAt: DoctorSchedule.createdAt,
									updatedAt: DoctorSchedule.updatedAt,
								},
							});
						}
					});
					byUser.schedules.push(byDate);
				});
				data.push(byUser);
			});
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC CỦA NHÂN VIÊN TRONG 1 THÁNG
const getEmployeeSchedulesByMonth = (daysOfMonth) => {
	return new Promise(async (resolve, reject) => {
		try {
			//join các bảng cần lấy dữ liệu
			const rawData = await db.Employee.findAll({
				attributes: [
					['employee_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				where: { employee_id: { [Op.ne]: 'none' } },
				include: [
					{
						model: db.Schedule,
						where: { date: daysOfMonth },
						include: [{ model: db.Session }],
					},
				],
				raw: true,
				nest: true,
			});

			//lấy ra tất cả nhân viên, trừ lễ tân ảo
			const employees = await db.Employee.findAll({
				attributes: [
					['employee_id', 'user_id'],
					'fullname',
					'avatar',
					'dob',
					'gender',
					'phone',
					'email',
				],
				where: { employee_id: { [Op.ne]: 'none' } },
				order: [['createdAt', 'ASC']],
			});

			//thiết kế cấu trúc api
			let employeeScheduleList = [];
			employees.forEach((employee) => {
				let obj = {};
				let schedules = [];
				obj.employee = employee;
				rawData.forEach((item) => {
					if (item.user_id === employee.user_id) schedules.push(item.Schedules);
				});
				obj.schedules = schedules;
				employeeScheduleList.push(obj);
			});

			//thiết kế cấu trúc api
			let data = [];
			employeeScheduleList.forEach((employeeSchedule) => {
				let byUser = {};
				byUser.user = employeeSchedule.employee;
				byUser.schedules = [];

				daysOfMonth.forEach((date) => {
					let byDate = {};
					byDate.date = date;
					byDate.list = [];

					employeeSchedule.schedules.forEach((schedule) => {
						if (schedule.date === date) {
							//thống nhất tên các biến
							const { EmployeeSchedule, ...rest } = schedule;
							byDate.list.push({
								...rest,
								UserSchedule: {
									user_schedule_id: EmployeeSchedule.employee_schedule_id,
									user_id: EmployeeSchedule.employee_id,
									schedule_id: EmployeeSchedule.schedule_id,
									status: EmployeeSchedule.status,
									createdAt: EmployeeSchedule.createdAt,
									updatedAt: EmployeeSchedule.updatedAt,
								},
							});
						}
					});
					byUser.schedules.push(byDate);
				});
				data.push(byUser);
			});
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
};

//** API **//

//LẤY TẤT CẢ LỊCH LÀM VIỆC THEO TUẦN
//(datatable lịch của quản trị viên)
const getAllByWeek = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.week || !data.year) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const doctorSchedules = await getDoctorSchedulesByWeek(
					data.week,
					data.year,
				);
				const employeeSchedules = await getEmployeeSchedulesByWeek(
					data.week,
					data.year,
				);
				resolve({
					errCode: 0,
					message: `Get all of the week ${data.week}/${data.year}`,
					data: [...doctorSchedules, ...employeeSchedules],
				});
			}
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC CỦA 1 BÁC SĨ THEO NGÀY
//(hiển thị bên client)
const getDoctorSchedulesByDate = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.doctor_id || !data.date) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				//lấy thời gian hiện tại
				const currentDate = util.getCurrentDate();
				const currentTime = util.getCurrentTime();

				//data.date là ngày hiện tại hoặc tương lai
				if (data.date >= currentDate) {
					const doctor_id = data.doctor_id.toLowerCase();
					const doctor = await db.Doctor.findOne({
						where: { doctor_id: doctor_id },
					});
					if (doctor) {
						//lấy dữ liệu theo doctor_id và date
						const rawData = await db.Doctor.findAll({
							where: { doctor_id: doctor_id },
							include: [
								{
									model: db.Schedule,
									where: { date: data.date },
									include: [{ model: db.Session }],
								},
							],
							raw: true,
							nest: true,
						});

						//lọc để chỉ lấy phần lịch làm việc còn khả dụng
						let schedules = rawData.map((item) => item.Schedules);
						schedules = schedules.filter(
							(item) => item.DoctorSchedule.status === 1,
						);

						//nếu data.date là ngày hiện tại thì lọc các lịch có ca khám >= thời gian hiện tại
						if (data.date === currentDate) {
							schedules = schedules.filter(
								(item) => item.Session.time.slice(0, 5) >= currentTime,
							);
						}

						//sắp xếp theo thứ tự tăng dần của thời gian ca khám
						const length = schedules.length;
						let temp;
						for (let i = 0; i < length - 1; i++) {
							for (let j = i + 1; j < length; j++) {
								const time_i = schedules[i].Session.time.slice(0, 2);
								const time_j = schedules[j].Session.time.slice(0, 2);

								if (time_i > time_j) {
									temp = schedules[i];
									schedules[i] = schedules[j];
									schedules[j] = temp;
								}
							}
						}
						resolve({
							errCode: 0,
							message: 'Get doctor schedule by date',
							data: schedules,
						});
					} else {
						resolve({ errCode: 1, message: "Doctor doesn't exist" });
					}
				} else {
					resolve({
						errCode: 2,
						message: "Can't get doctor's schedule from the past",
					});
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN (QT, LT, BS, PT) THEO NGÀY
//(trang chi tiết lịch làm việc)
const getUserSchedulesByDate = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.date) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);
				if (user) {
					let rawData;
					switch (prefix) {
						//lấy dữ liệu theo employee_id và date
						case 'qt':
						case 'lt':
						case 'pt':
							rawData = await db.Employee.findAll({
								attributes: [
									['employee_id', 'user_id'],
									'fullname',
									'avatar',
									'dob',
									'gender',
									'phone',
									'email',
								],
								where: { employee_id: user_id },
								include: [
									{
										model: db.Schedule,
										where: { date: data.date },
										include: [{ model: db.Session }],
									},
								],
								raw: true,
								nest: true,
							});
							break;

						//lấy dữ liệu theo doctor_id và date
						case 'bs':
							rawData = await db.Doctor.findAll({
								attributes: [
									['doctor_id', 'user_id'],
									'fullname',
									'avatar',
									'dob',
									'gender',
									'phone',
									'email',
								],
								where: { doctor_id: user_id },
								include: [
									{
										model: db.Schedule,
										where: { date: data.date },
										include: [{ model: db.Session }],
									},
								],
								raw: true,
								nest: true,
							});
							break;
						default:
							break;
					}

					//trong DB có lịch của data.date
					if (rawData.length) {
						//lọc lấy thông tin nhân viên và lịch làm việc
						const { Schedules, ...user } = rawData[0];
						let schedules = rawData.map((item) => item.Schedules);

						//thống nhất tên biến trong bảng nhiều nhiều: employee_schedule và doctor_schedule
						schedules = schedules.map((item) => {
							let UserSchedule;
							let info;
							if (prefix === 'bs') {
								const { DoctorSchedule, ...rest } = item;
								info = rest;
								UserSchedule = {
									user_schedule_id: DoctorSchedule.doctor_schedule_id,
									user_id: DoctorSchedule.doctor_id,
									schedule_id: DoctorSchedule.schedule_id,
									status: DoctorSchedule.status,
									createdAt: DoctorSchedule.createdAt,
									updatedAt: DoctorSchedule.updatedAt,
								};
							} else {
								const { EmployeeSchedule, ...rest } = item;
								info = rest;
								UserSchedule = {
									user_schedule_id: EmployeeSchedule.employee_schedule_id,
									user_id: EmployeeSchedule.employee_id,
									schedule_id: EmployeeSchedule.schedule_id,
									status: EmployeeSchedule.status,
									createdAt: EmployeeSchedule.createdAt,
									updatedAt: EmployeeSchedule.updatedAt,
								};
							}
							return { ...info, UserSchedule };
						});

						//sắp xếp theo thứ tự tăng dần của thời gian ca khám
						const length = schedules.length;
						let temp;
						for (let i = 0; i < length - 1; i++) {
							for (let j = i + 1; j < length; j++) {
								const time_i = schedules[i].Session.time.slice(0, 2);
								const time_j = schedules[j].Session.time.slice(0, 2);

								if (time_i > time_j) {
									temp = schedules[i];
									schedules[i] = schedules[j];
									schedules[j] = temp;
								}
							}
						}
						resolve({
							errCode: 0,
							message: `Get user's schedules by ${data.date}`,
							data: { user, schedules },
						});
					} else {
						resolve({
							errCode: 2,
							message: "Doesn't have any schedule for this date",
						});
					}
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC THEO TUẦN CỦA 1 NHÂN VIÊN
//(datatable lịch của 1 nhân viên)
const getUserSchedulesByWeek = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.week || !data.year) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);

				if (user) {
					//lấy 7 ngày của tuần cần xem
					const daysOfWeek = getDaysOfWeek(data.week, data.year);

					//join các bảng cần lấy dữ liệu
					let rawData;
					switch (prefix) {
						case 'lt':
						case 'pt':
							rawData = await db.Employee.findAll({
								attributes: [
									['employee_id', 'user_id'],
									'fullname',
									'avatar',
									'dob',
									'gender',
									'phone',
									'email',
								],
								where: { employee_id: user_id },
								include: [
									{
										model: db.Schedule,
										where: { date: daysOfWeek },
										include: [{ model: db.Session }],
									},
								],
								raw: true,
								nest: true,
							});
							break;
						case 'bs':
							rawData = await db.Doctor.findAll({
								attributes: [
									['doctor_id', 'user_id'],
									'fullname',
									'avatar',
									'dob',
									'gender',
									'phone',
									'email',
								],
								where: { doctor_id: user_id },
								include: [
									{
										model: db.Schedule,
										where: { date: daysOfWeek },
										include: [{ model: db.Session }],
									},
								],
								raw: true,
								nest: true,
							});
							break;
						default:
							break;
					}

					if (rawData.length) {
						const { Schedules, ...user } = rawData[0];

						let data = [];
						let byUser = {};
						byUser.user = user;
						byUser.schedules = [];

						daysOfWeek.forEach((date) => {
							let byDate = {};
							byDate.date = date;
							byDate.list = [];

							rawData.forEach((item) => {
								const { Schedules, ...rest } = item;
								if (Schedules.date === date) {
									switch (prefix) {
										case 'lt':
										case 'pt':
											//thống nhất tên các biến
											const { EmployeeSchedule, ...restEmployee } = Schedules;
											byDate.list.push({
												...restEmployee,
												UserSchedule: {
													user_schedule_id:
														EmployeeSchedule.employee_schedule_id,
													user_id: EmployeeSchedule.employee_id,
													schedule_id: EmployeeSchedule.schedule_id,
													status: EmployeeSchedule.status,
													createdAt: EmployeeSchedule.createdAt,
													updatedAt: EmployeeSchedule.updatedAt,
												},
											});
											break;
										case 'bs':
											//thống nhất tên các biến
											const { DoctorSchedule, ...restDoctor } = Schedules;
											byDate.list.push({
												...restDoctor,
												UserSchedule: {
													user_schedule_id: DoctorSchedule.employee_schedule_id,
													user_id: DoctorSchedule.employee_id,
													schedule_id: DoctorSchedule.schedule_id,
													status: DoctorSchedule.status,
													createdAt: DoctorSchedule.createdAt,
													updatedAt: DoctorSchedule.updatedAt,
												},
											});
											break;
										default:
											break;
									}
								}
							});
							byUser.schedules.push(byDate);
						});
						data.push(byUser);

						resolve({
							errCode: 0,
							message: `Get user's schedules for week ${data.week}/${data.year}`,
							data: data,
						});
					} else {
						resolve({
							errCode: 2,
							message: "Doesn't have any schedule for this week",
						});
					}
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY LỊCH LÀM VIỆC CỦA CÁC BÁC SĨ ĐIỀU TRỊ 1 DANH MỤC THEO NGÀY VÀ CA KHÁM ĐƯỢC CHỌN
//(trang đặt lịch hẹn dành cho lễ tân)
const getAllByCategoryDateSession = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.category_id || !data.date || !data.session_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const category_id = data.category_id.toLowerCase();
				const session_id = data.session_id.toLowerCase();

				let doctorsByCategory = await getAllByCategoryID({ category_id });
				doctorsByCategory = doctorsByCategory.data;

				let doctorSchedulesList = [];

				for (const doctor of doctorsByCategory) {
					const result = await getDoctorSchedulesByDate({
						doctor_id: doctor.doctor_id,
						date: data.date,
					});
					const schedules = result.data;
					if (
						schedules.find(
							(schedule) => schedule.Session.session_id === session_id,
						)
					) {
						doctorSchedulesList.push({ doctor, schedules });
					}
				}

				if (doctorSchedulesList.length) {
					resolve({
						errCode: 0,
						message: 'Get all by category, date, session',
						data: doctorSchedulesList,
					});
				} else {
					resolve({ errCode: 1, message: 'Not found' });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//THÊM MỚI LỊCH LÀM VIỆC
const createSchedule = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.date || !data.employees || !data.session_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				//lấy thời gian hiện tại
				const currentDate = util.getCurrentDate();

				//data.date là ngày tương lai
				if (data.date > currentDate) {
					const session_id = data.session_id.toLowerCase();
					const session = await db.Session.findOne({
						where: { session_id: session_id },
					});

					if (session) {
						let schedule;

						//tìm trong db.Schedule với data.date và data.session_id
						schedule = await db.Schedule.findOne({
							where: {
								session_id: session_id,
								date: data.date,
							},
						});

						//trong db.Schedule chưa có lịch của data.date và data.session -> thêm mới
						if (!schedule) {
							const schedule_id = util.createID('ll');
							schedule = await db.Schedule.create({
								schedule_id: schedule_id,
								session_id: session_id,
								date: data.date,
							});
						}

						//thêm mới bảng doctor_schedule
						const doctorIDList = data.employees.filter(
							(user_id) => user_id.slice(0, 2) === 'bs',
						);
						const resultDoctor = await createDoctorSchedule(
							doctorIDList,
							schedule.schedule_id,
						);

						//thêm mới bảng employee_schedule
						const employeeIDList = data.employees.filter(
							(user_id) => user_id.slice(0, 2) !== 'bs',
						);
						const resultEmployee = await createEmployeeSchedule(
							employeeIDList,
							schedule.schedule_id,
						);

						resolve({
							errCode: 0,
							validUsers: [...resultDoctor.valid, ...resultEmployee.valid],
							invalidUsers: [
								...resultDoctor.invalid,
								...resultEmployee.invalid,
							],
						});
					} else {
						resolve({ errCode: 1, message: "Session doesn't exist" });
					}
				} else {
					resolve({
						errCode: 2,
						message: 'Cannot create schedule for the past',
					});
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//DUYỆT 1 LỊCH LÀM VIỆC
const acceptOne = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.user_schedule_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);
				if (user) {
					let userSchedule;
					switch (prefix) {
						case 'qt':
						case 'lt':
						case 'pt':
							userSchedule = await db.EmployeeSchedule.findOne({
								where: { employee_schedule_id: data.user_schedule_id },
								include: [{ model: db.Schedule }],
								raw: true,
								nest: true,
							});
							break;
						case 'bs':
							userSchedule = await db.DoctorSchedule.findOne({
								where: { doctor_schedule_id: data.user_schedule_id },
								include: [{ model: db.Schedule }],
								raw: true,
								nest: true,
							});
							break;

						default:
							break;
					}
					if (userSchedule) {
						//lấy thời gian hiện tại
						const currentDate = util.getCurrentDate();

						//ngày của lịch làm việc là tương lai
						if (userSchedule.Schedule.date > currentDate) {
							//lịch chưa được duyệt
							if (userSchedule.status === 0) {
								let result;
								switch (prefix) {
									case 'qt':
									case 'lt':
									case 'pt':
										result = await db.EmployeeSchedule.update(
											{ status: 1 },
											{
												where: { employee_schedule_id: data.user_schedule_id },
											},
										);
										break;
									case 'bs':
										result = await db.DoctorSchedule.update(
											{ status: 1 },
											{ where: { doctor_schedule_id: data.user_schedule_id } },
										);
										break;

									default:
										break;
								}
								if (result[0] === 1) {
									resolve({ errCode: 0, message: 'Accepted' });
								} else {
									resolve({ errCode: 5, message: 'Failed' });
								}
							}

							//status === 1 || status === 2
							else {
								resolve({
									errCode: 2,
									type: 'status',
									message: 'Incorrect status',
								});
							}
						} else {
							resolve({
								errCode: 2,
								type: 'date',
								message: 'Cannot accept schedule from the past',
							});
						}
					} else {
						resolve({ errCode: 1, message: "This schedule doesn't exist" });
					}
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//DUYỆT TẤT CẢ LỊCH LÀM VIỆC CỦA 1 NGÀY (CỦA 1 NHÂN VIÊN)
const acceptAll = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.list) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);
				if (user) {
					let userSchedules;
					switch (prefix) {
						case 'qt':
						case 'lt':
						case 'pt':
							userSchedules = await db.EmployeeSchedule.findAll({
								where: { employee_schedule_id: data.list },
								include: [{ model: db.Schedule }],
								raw: true,
								nest: true,
							});
							break;
						case 'bs':
							userSchedules = await db.DoctorSchedule.findAll({
								where: { doctor_schedule_id: data.list },
								include: [{ model: db.Schedule }],
								raw: true,
								nest: true,
							});
							break;

						default:
							break;
					}
					if (userSchedules.length === data.list.length) {
						//lấy thời gian hiện tại
						const currentDate = util.getCurrentDate();

						//ngày của lịch làm việc là tương lai
						if (userSchedules[0].Schedule.date > currentDate) {
							//kiểm tra trong data.list có lịch nào đã được duyệt hay chưa
							let incorrectStatus;
							userSchedules.forEach((item) => {
								if (item.status !== 0) incorrectStatus = true;
							});

							//có lịch có status === 1 || status === 2
							if (incorrectStatus) {
								resolve({
									errCode: 2,
									type: 'status',
									message: 'Incorrect status',
								});
							}

							//data.list là những lịch chưa được duyệt
							else {
								let result;
								switch (prefix) {
									case 'qt':
									case 'lt':
									case 'pt':
										result = await db.EmployeeSchedule.update(
											{ status: 1 },
											{ where: { employee_schedule_id: data.list } },
										);
										break;
									case 'bs':
										result = await db.DoctorSchedule.update(
											{ status: 1 },
											{ where: { doctor_schedule_id: data.list } },
										);
										break;

									default:
										break;
								}
								if (result) {
									resolve({ errCode: 0, message: 'Accepted' });
								} else {
									resolve({ errCode: 5, message: 'Failed' });
								}
							}
						} else {
							resolve({
								errCode: 2,
								type: 'date',
								message: 'Cannot accept schedule from the past',
							});
						}
					} else {
						resolve({ errCode: 1, message: "This schedule doesn't exist" });
					}
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//DUYỆT LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA TẤT CẢ NHÂN VIÊN
const acceptForAWeek = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.week || !data.year) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				//lấy thời gian hiện tại
				const currentDate = util.getCurrentDate();

				//lấy 7 ngày của tuần cần duyệt
				//lọc những ngày trong tuần lớn hơn ngày hiện tại
				let daysOfWeek = getDaysOfWeek(data.week, data.year);
				daysOfWeek = daysOfWeek.filter((date) => date > currentDate);

				if (daysOfWeek.length) {
					let doctorSchedules = await db.DoctorSchedule.findAll({
						where: { status: 0 },
						include: [
							{
								model: db.Schedule,
								where: { date: daysOfWeek },
							},
						],
						raw: true,
						nest: true,
					});
					let employeeSchedules = await db.EmployeeSchedule.findAll({
						where: { status: 0 },
						include: [
							{
								model: db.Schedule,
								where: { date: daysOfWeek },
							},
						],
						raw: true,
						nest: true,
					});
					if (doctorSchedules.length) {
						doctorSchedules = doctorSchedules.map(
							(item) => item.doctor_schedule_id,
						);
						await db.DoctorSchedule.update(
							{ status: 1 },
							{ where: { doctor_schedule_id: doctorSchedules } },
						);
					}
					if (employeeSchedules.length) {
						employeeSchedules = employeeSchedules.map(
							(item) => item.employee_schedule_id,
						);
						await db.EmployeeSchedule.update(
							{ status: 1 },
							{ where: { employee_schedule_id: employeeSchedules } },
						);
					}
					if (doctorSchedules.length || employeeSchedules.length) {
						resolve({ errCode: 0, message: 'Accepted' });
					} else {
						resolve({
							errCode: 2,
							type: 'status',
							message: 'Have no schedule need to be accepted',
						});
					}
				} else {
					resolve({ errCode: 2, type: 'date', message: 'Have no valid date' });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//XÓA LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN
const deleteUserSchedule = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.user_schedule_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);

				if (user) {
					let userSchedule;
					let isBeingUsed;
					switch (prefix) {
						case 'qt':
						case 'lt':
						case 'pt':
							userSchedule = await db.EmployeeSchedule.findOne({
								where: { employee_schedule_id: data.user_schedule_id },
							});
							break;
						case 'bs':
							userSchedule = await db.DoctorSchedule.findOne({
								where: { doctor_schedule_id: data.user_schedule_id },
							});
							if (userSchedule) {
								isBeingUsed = await db.Appointment.findOne({
									where: {
										doctor_schedule_id: userSchedule.doctor_schedule_id,
										// status: {[Op.ne]: 2} -> vướng khóa ngoại nên lịch hẹn đã hủy thì không thể xóa lịch làm việc đó
									},
								});
							}
							break;
						default:
							break;
					}
					if (userSchedule) {
						if (!isBeingUsed) {
							const schedule_id = userSchedule.schedule_id;
							let result;
							let employeeSchedule;
							let doctorSchedule;
							switch (prefix) {
								case 'qt':
								case 'lt':
								case 'pt':
									result = await db.EmployeeSchedule.destroy({
										where: { employee_schedule_id: data.user_schedule_id },
									});
									employeeSchedule = await db.EmployeeSchedule.findOne({
										where: { schedule_id: schedule_id },
									});
									doctorSchedule = await db.DoctorSchedule.findOne({
										where: { schedule_id: schedule_id },
									});
									break;
								case 'bs':
									result = await db.DoctorSchedule.destroy({
										where: { doctor_schedule_id: data.user_schedule_id },
									});
									employeeSchedule = await db.EmployeeSchedule.findOne({
										where: { schedule_id: schedule_id },
									});
									doctorSchedule = await db.DoctorSchedule.findOne({
										where: { schedule_id: schedule_id },
									});
									break;

								default:
									break;
							}
							if (result === 1) {
								if (!employeeSchedule && !doctorSchedule) {
									await db.Schedule.destroy({
										where: { schedule_id: schedule_id },
									});
								}
								resolve({ errCode: 0, message: 'Deleted' });
							} else {
								resolve({ errCode: 5, message: 'Failed' });
							}
						} else {
							resolve({
								errCode: 6,
								message: 'This schedule is already booked',
							});
						}
					} else {
						resolve({ errCode: 1, message: "This schedule doesn't exist" });
					}
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	getDoctorSchedulesByMonth,
	getEmployeeSchedulesByMonth,
	getAllByWeek,
	getDoctorSchedulesByDate,
	getUserSchedulesByDate,
	getUserSchedulesByWeek,
	getAllByCategoryDateSession,
	createSchedule,
	acceptOne,
	acceptAll,
	acceptForAWeek,
	deleteUserSchedule,
};
