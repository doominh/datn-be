import db from '../models/index';
import util from '../util/index';
import mail from './mail';

//LẤY TẤT CẢ HÓA ĐƠN
const getAll = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const bills = await db.Bill.findAll({
				order: [['createdAt', 'DESC']],
				include: [
					{
						model: db.Patient,
						attributes: ['patient_id', 'fullname', 'phone'],
					},
				],
				raw: true,
				nest: true,
			});
			resolve({
				errCode: 0,
				message: 'Get all bills',
				data: bills,
			});
		} catch (e) {
			reject(e);
		}
	});
};

//LẤY THEO ID
const getByID = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.bill_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const bill_id = data.bill_id.toLowerCase();
				const rawData = await db.Bill.findAll({
					where: { bill_id: bill_id },
					include: [
						{
							model: db.Method,
							attributes: ['method_id', 'method_name'],
						},
						{
							model: db.Employee,
							attributes: ['employee_id', 'fullname'],
						},
						{
							model: db.Service,
							include: [{ model: db.Category }],
						},
					],
					raw: true,
					nest: true,
				});

				if (rawData) {
					const { Services, ...rest } = rawData[0];
					const details = rawData.map((item) => item.Services);

					resolve({
						errCode: 0,
						message: 'Get bill by ID',
						data: { ...rest, details },
					});
				} else {
					resolve({ errCode: 1, message: "Bill doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//LẬP HÓA ĐƠN
const createBill = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (
				data.appointment_id === undefined ||
				!data.patient_id ||
				!data.employee_id ||
				!data.list
			) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const appointment_id = data.appointment_id
					? data.appointment_id.toLowerCase()
					: null;
				const employee_id = data.employee_id.toLowerCase();
				const patient_id = data.patient_id.toLowerCase();
				const employee = await db.Employee.findOne({
					where: { employee_id: employee_id },
				});

				if (employee) {
					const patient = await db.Patient.findOne({
						where: { patient_id: patient_id },
					});
					if (patient) {
						let total = 0;

						//data.list là mảng chứa {service_id, price và quantity}
						data.list.forEach((item) => (total += item.quantity * item.price));

						const bill_id = util.createID('hd');
						const newBill = await db.Bill.create({
							bill_id: bill_id,
							patient_id: patient_id,
							employee_id: employee_id,
							method_id: 1,
							total: total,
							status: 0,
						});
						if (newBill.dataValues.bill_id) {
							//data.list là mảng chứa {service_id, price và quantity}
							const list = data.list.map((item) => {
								return {
									bill_id: bill_id,
									service_id: item.service_id,
									quantity: item.quantity,
									subtotal: item.quantity * item.price,
								};
							});
							const result = await db.BillService.bulkCreate(list);
							if (result.length === list.length) {
								//nếu lập hóa đơn từ trang chi tiết lịch hẹn
								if (appointment_id) {
									await db.Appointment.update(
										{ status: 3 }, //đã hoàn thành lịch hẹn
										{ where: { appointment_id: appointment_id } },
									);
								}
								resolve({
									errCode: 0,
									message: 'Created',
									data: { bill_id },
								});
							} else {
								resolve({ errCode: 5, message: 'Failed' });
							}
						} else {
							resolve({ errCode: 5, message: 'Failed' });
						}
					} else {
						resolve({ errCode: 1, message: "Patient doesn't exist" });
					}
				} else {
					resolve({ errCode: 1, message: "Employee doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//XÁC NHẬN ĐÃ THANH TOÁN
const confirmBill = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.bill_id || data.method_id === undefined) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const bill_id = data.bill_id.toLowerCase();
				const bill = await db.Bill.findOne({ where: { bill_id: bill_id } });
				if (bill) {
					//status === 0
					if (!bill.status) {
						const result = await db.Bill.update(
							{
								status: 1,
								method_id: data.method_id,
							},
							{ where: { bill_id: bill_id } },
						);
						if (result[0] === 1) {
							resolve({ errCode: 0, message: 'Confirmed' });
						} else {
							resolve({ errCode: 5, message: 'Failed' });
						}
					} else {
						resolve({ errCode: 2, message: 'Incorrect status' });
					}
				} else {
					resolve({ errCode: 1, message: "Bill doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//GỬI HÓA ĐƠN TỚI EMAIL
const sendToEmail = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.patient_id || !data.filename || !data.file) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const patient_id = data.patient_id.toLowerCase();
				const patient = await db.Patient.findOne({
					where: { patient_id: patient_id },
				});

				if (patient) {
					await mail.billInfo({
						email: patient.email,
						fullname: patient.fullname,
						filename: data.filename,
						file: data.file,
					});
					resolve({ errCode: 0, message: 'Sent to email' });
				} else {
					resolve({ errCode: 1, message: "Patient doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	getAll,
	getByID,
	createBill,
	confirmBill,
	sendToEmail,
};
