import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import db from '../models/index';
import mail from './mail';
import util from '../util';
import patientServices from './patient';
import employeeServices from './employee';
import doctorServices from './doctor';
require('dotenv').config();
const saltRounds = 10;

//TẠO ACCESS TOKEN
const createAccessToken = (user_id) => {
	const accessToken = jwt.sign(
		{ user_id: user_id },
		process.env.JWT_ACCESS_TOKEN,
		{ expiresIn: process.env.JWT_ACCESS_EXPIRES_IN },
	);
	return accessToken;
};

//TẠO REFRESH TOKEN
const createRefreshToken = (user_id) => {
	const refreshToken = jwt.sign(
		{ user_id: user_id },
		process.env.JWT_REFRESH_TOKEN,
		{ expiresIn: process.env.JWT_REFRESH_EXPIRES_IN },
	);
	return refreshToken;
};

//LẤY NGƯỜI DÙNG THEO ID
const getUserByID = (user_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const prefix = user_id.slice(0, 2);
			let user;
			switch (prefix) {
				case 'bn': //bệnh nhân
					user = await db.Patient.findOne({ where: { patient_id: user_id } });
					break;
				case 'qt':
				case 'lt':
				case 'pt': //quản trị viên, lễ tân, phụ tá
					user = await db.Employee.findOne({ where: { employee_id: user_id } });
					break;
				case 'bs': //bác sĩ
					user = await db.Doctor.findOne({ where: { doctor_id: user_id } });
					break;
				default:
					break;
			}
			resolve(user);
		} catch (e) {
			reject(e);
		}
	});
};

//** API **//

//XÁC MINH EMAIL TÀI KHOẢN
const verify = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.role || !data.email || !data.token) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const result = await bcrypt.compare(data.email, data.token);
				if (result) {
					let user;
					switch (data.role) {
						case '1': //bệnh nhân
							user = await patientServices.getByEmail(data.email);
							break;
						case '2':
						case '3':
						case '5': //quản trị viên, lễ tân, phụ tá
							user = await employeeServices.getByEmail(data.email);
							break;
						case '4': //bác sĩ
							user = await doctorServices.getByEmail(data.email);
							break;
						default:
							break;
					}
					if (!user.is_activated) {
						let result;
						switch (data.role) {
							case '1': //bệnh nhân
								result = await db.Patient.update(
									{ is_activated: true },
									{ where: { email: data.email } },
								);
								break;
							case '2':
							case '3':
							case '5': //quản trị viên, lễ tân, phụ tá
								result = await db.Employee.update(
									{ is_activated: true },
									{ where: { email: data.email } },
								);
								break;
							case '4': //bác sĩ
								result = await db.Doctor.update(
									{ is_activated: true },
									{ where: { email: data.email } },
								);
								break;
							default:
								break;
						}
						if (result[0] === 1) {
							resolve({
								errCode: 0,
								message: 'Successful',
								role: data.role,
							});
						} else {
							resolve({ errCode: 5, message: 'Failed' });
						}
					} else {
						resolve({ errCode: 2, message: 'Already verified' });
					}
				} else {
					resolve(false);
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//ĐĂNG KÝ CHO BỆNH NHÂN
const register = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (
				!data.fullname ||
				!data.dob ||
				data.gender === undefined ||
				!data.phone ||
				!data.email ||
				!data.password
			) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const result = await patientServices.createPatient(data);
				resolve(result);
			}
		} catch (e) {
			reject(e);
		}
	});
};

//ĐĂNG NHẬP CHO BỆNH NHÂN
const loginClient = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.email || !data.password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const patient = await patientServices.getByEmail(data.email);
				if (patient) {
					if (!patient.is_blocked) {
						if (patient.is_activated) {
							const isValidPassword = await bcrypt.compare(
								data.password,
								patient.password,
							);
							if (isValidPassword) {
								const accessToken = createAccessToken(patient.patient_id);
								const refreshToken = createRefreshToken(patient.patient_id);
								const result = await db.Patient.update(
									{ refresh_token: refreshToken },
									{ where: { patient_id: patient.patient_id } },
								);
								if (result[0] === 1) {
									resolve({
										errCode: 0,
										message: 'Successful',
										data: {
											patient_id: patient.patient_id,
											fullname: patient.fullname,
											access_token: accessToken,
											refresh_token: refreshToken,
										},
									});
								} else {
									resolve({ errCode: 5, message: 'Failed' });
								}
							} else {
								resolve({
									errCode: 2,
									type: 'password',
									message: 'Invalid login info',
								});
							}
						} else {
							resolve({ errCode: 4, message: 'Not activated yet' });
						}
					} else {
						resolve({ errCode: 8, message: 'This account is being blocked' });
					}
				} else {
					resolve({ errCode: 2, type: 'email', message: 'Invalid login info' });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//ĐĂNG NHẬP TRANG QUẢN TRỊ
const loginAdmin = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.role || !data.email || !data.password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				let user;
				let user_id;
				switch (data.role) {
					case 2:
					case 3:
					case 5: //quản trị viên, lễ tân, phụ tá
						user = await employeeServices.getByEmail(data.email);
						if (user) user_id = user.employee_id;
						break;
					case 4: //bác sĩ
						user = await doctorServices.getByEmail(data.email);
						if (user) user_id = user.doctor_id;
						break;
					default:
						break;
				}
				if (user) {
					const prefix = user_id.slice(0, 2);
					if (data.role === 2 && prefix !== 'qt') {
						resolve({
							errCode: 2,
							type: 'role',
							message: 'Invalid login info',
						});
					} else if (data.role === 3 && prefix !== 'lt') {
						resolve({
							errCode: 2,
							type: 'role',
							message: 'Invalid login info',
						});
					} else if (data.role === 5 && prefix !== 'pt') {
						resolve({
							errCode: 2,
							type: 'role',
							message: 'Invalid login info',
						});
					} else {
						if (!user.is_blocked) {
							if (user.is_activated) {
								const isValidPassword = await bcrypt.compare(
									data.password,
									user.password,
								);
								if (isValidPassword) {
									const accessToken = createAccessToken(user_id);
									const refreshToken = createRefreshToken(user_id);
									let result;
									switch (prefix) {
										case 'qt':
										case 'lt':
										case 'pt': //quản trị viên, lễ tân, phụ tá
											result = await db.Employee.update(
												{ refresh_token: refreshToken },
												{ where: { employee_id: user_id } },
											);
											break;
										case 'bs': //bác sĩ
											result = await db.Doctor.update(
												{ refresh_token: refreshToken },
												{ where: { doctor_id: user_id } },
											);
											break;
										default:
											break;
									}
									if (result[0] === 1) {
										resolve({
											errCode: 0,
											message: 'Successful',
											data: {
												user_id,
												access_token: accessToken,
												refresh_token: refreshToken,
											},
										});
									} else {
										resolve({ errCode: 5, message: 'Failed' });
									}
								} else {
									resolve({
										errCode: 2,
										type: 'password',
										message: 'Invalid login info',
									});
								}
							} else {
								resolve({ errCode: 4, message: 'Not activated yet' });
							}
						} else {
							resolve({ errCode: 8, message: 'This account is being blocked' });
						}
					}
				} else {
					resolve({ errCode: 2, type: 'email', message: 'Invalid login info' });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//ĐỔI MẬT KHẨU
const changePassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.current_password || !data.new_password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);
				if (user) {
					const isValidCurrent = await bcrypt.compare(
						data.current_password,
						user.password,
					);
					if (isValidCurrent) {
						const isDifferent = await bcrypt.compare(
							data.new_password,
							user.password,
						);

						//pass mới khác pass hiện tại
						if (!isDifferent) {
							const hashNew = await bcrypt.hash(data.new_password, saltRounds);
							let result;
							switch (prefix) {
								case 'bn':
									result = await db.Patient.update(
										{ password: hashNew },
										{ where: { patient_id: user_id } },
									);
									break;
								case 'qt':
								case 'lt':
								case 'pt':
									result = await db.Employee.update(
										{ password: hashNew },
										{ where: { employee_id: user_id } },
									);
									break;
								case 'bs':
									result = await db.Doctor.update(
										{ password: hashNew },
										{ where: { doctor_id: user_id } },
									);
									break;
								default:
									break;
							}
							if (result[0] === 1) {
								resolve({ errCode: 0, message: 'Successful' });
							} else {
								resolve({ errCode: 5, message: 'Failed' });
							}
						} else {
							resolve({ errCode: 2, message: 'Invalid new password' });
						}
					} else {
						resolve({ errCode: 2, message: 'Invalid current password' });
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

//GỬI EMAIL CHO CASE QUÊN MẬT KHẨU
const sendResetLink = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.role || !data.email) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				let user;
				let user_id;
				switch (data.role) {
					case 1:
						user = await patientServices.getByEmail(data.email);
						if (user) user_id = user.patient_id;
						break;
					case 2:
					case 3:
					case 5:
						user = await employeeServices.getByEmail(data.email);
						if (user) user_id = user.employee_id;
						break;
					case 4:
						user = await doctorServices.getByEmail(data.email);
						if (user) user_id = user.doctor_id;
						break;
					default:
						break;
				}
				if (user) {
					const secretKey = process.env.JWT_RESET_PASSWORD + user.password;
					const token = jwt.sign(
						{ role: data.role, user_id: user_id },
						secretKey,
						{ expiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN },
					);
					await mail.forgotPassword({
						email: data.email,
						fullname: user.fullname,
						redirectLink: `${process.env.BACKEND_URL}/api/auth/password/reset/${user_id}/${token}`,
					});
					resolve({ errCode: 0, message: 'Successful' });
				} else {
					resolve({ errCode: 1, message: "User doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//XÁC MINH LINK ĐẶT LẠI MẬT KHẨU
const verifyResetLink = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.token) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const user = await getUserByID(user_id);
				if (user) {
					const secretKey = process.env.JWT_RESET_PASSWORD + user.password;
					try {
						const result = jwt.verify(data.token, secretKey);

						//jwt.verify không có lỗi
						resolve({
							errCode: 0,
							message: 'Successful',
							data: {
								role: result.role,
								user_id: result.user_id,
								token: data.token,
							},
						});
					} catch (e) {
						const prefix = user_id.slice(0, 2);
						let role;
						switch (prefix) {
							case 'bn':
								role = 1;
								break;
							case 'qt':
								role = 2;
								break;
							case 'lt':
								role = 3;
								break;
							case 'bs':
								role = 4;
								break;
							case 'pt':
								role = 5;
								break;
							default:
								break;
						}
						if (e.message === 'jwt expired') {
							resolve({
								errCode: 7,
								message: 'Token is expired',
								data: { role },
							});
						} else {
							resolve({
								errCode: 2,
								message: 'Token is not valid',
								data: { role },
							});
						}
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

//ĐẶT LẠI MẬT KHẨU CHO CASE QUÊN MẬT KHẨU
const resetPassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.token || !data.password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const user = await getUserByID(user_id);
				if (user) {
					const secretKey = process.env.JWT_RESET_PASSWORD + user.password;
					try {
						const payload = jwt.verify(data.token, secretKey);

						//jwt.verify không có lỗi
						const hashedPassword = await util.hashPassword(data.password);
						let result;
						switch (payload.role) {
							case 1:
								result = await db.Patient.update(
									{ password: hashedPassword },
									{ where: { patient_id: user_id } },
								);
								break;
							case 2:
							case 3:
							case 5:
								result = await db.Employee.update(
									{ password: hashedPassword },
									{ where: { employee_id: user_id } },
								);
								break;
							case 4:
								result = await db.Doctor.update(
									{ password: hashedPassword },
									{ where: { doctor_id: user_id } },
								);
								break;
							default:
								break;
						}
						if (result[0] === 1) {
							resolve({ errCode: 0, message: 'Successful' });
						} else {
							resolve({ errCode: 5, message: 'Failed' });
						}
					} catch (e) {
						if (e.message === 'jwt expired') {
							resolve({ errCode: 7, message: 'Token is expired' });
						} else {
							resolve({ errCode: 2, message: 'Token is not valid' });
						}
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

//KHÓA - MỞ KHÓA TÀI KHOẢN
const changeBlockStatus = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.admin_id || !data.password || !data.user_id) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const admin_id = data.admin_id.toLowerCase();
				const admin = await db.Employee.findOne({
					where: {
						employee_id: admin_id,
						is_admin: true,
					},
				});
				if (admin) {
					const isValidPassword = await bcrypt.compare(
						data.password,
						admin.password,
					);
					if (isValidPassword) {
						const user_id = data.user_id.toLowerCase();
						const prefix = user_id.slice(0, 2);
						const user = await getUserByID(user_id);
						if (user) {
							let result;
							switch (prefix) {
								case 'bn':
									result = await db.Patient.update(
										{ is_blocked: !user.is_blocked },
										{ where: { patient_id: user_id } },
									);
									break;
								case 'qt':
								case 'lt':
								case 'pt':
									result = await db.Employee.update(
										{ is_blocked: !user.is_blocked },
										{ where: { employee_id: user_id } },
									);
									break;
								case 'bs':
									result = await db.Doctor.update(
										{ is_blocked: !user.is_blocked },
										{ where: { doctor_id: user_id } },
									);
									break;
								default:
									break;
							}
							if (result[0] === 1) {
								resolve({ errCode: 0, message: 'Successful' });
							} else {
								resolve({ errCode: 5, message: 'Failed' });
							}
						} else {
							resolve({ errCode: 1, message: "User doesn't exist" });
						}
					} else {
						resolve({ errCode: 2, message: 'Invalid password' });
					}
				} else {
					resolve({ errCode: 1, message: "Admin doesn't exist" });
				}
			}
		} catch (e) {
			reject(e);
		}
	});
};

//ĐỔI EMAIL
const changeEmail = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.new_email || !data.password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				const user = await getUserByID(user_id);
				if (user) {
					const isValidPassword = await bcrypt.compare(
						data.password,
						user.password,
					);
					if (isValidPassword) {
						let result;
						if (prefix === 'bn') {
							const patientByEmail = await db.Patient.findOne({
								where: { email: data.new_email },
							});
							if (patientByEmail && patientByEmail.patient_id !== user_id) {
								resolve({
									errCode: 2,
									type: 'email',
									message: 'Email already exists',
								});
							} else {
								result = await db.Patient.update(
									{
										email: data.new_email,
										is_activated: false,
									},
									{ where: { patient_id: user_id } },
								);
							}
						} else {
							const doctorByEmail = await db.Doctor.findOne({
								where: { email: data.new_email },
							});
							const employeeByEmail = await db.Employee.findOne({
								where: { email: data.new_email },
							});

							if (
								(doctorByEmail && doctorByEmail.doctor_id !== user_id) ||
								(employeeByEmail && employeeByEmail.employee_id !== user_id)
							) {
								resolve({
									errCode: 2,
									type: 'email',
									message: 'Email already exists',
								});
							} else {
								switch (prefix) {
									case 'qt':
									case 'lt':
									case 'pt':
										result = await db.Employee.update(
											{
												email: data.new_email,
												is_activated: false,
											},
											{ where: { employee_id: user_id } },
										);
										break;
									case 'bs':
										result = await db.Doctor.update(
											{
												email: data.new_email,
												is_activated: false,
											},
											{ where: { doctor_id: user_id } },
										);
										break;
									default:
										break;
								}
							}
						}
						if (result[0] === 1) {
							const token = await bcrypt.hash(data.new_email, saltRounds);
							let role;
							switch (prefix) {
								case 'bn':
									role = 1;
									break;
								case 'qt':
									role = 2;
									break;
								case 'lt':
									role = 3;
									break;
								case 'bs':
									role = 4;
									break;
								case 'pt':
									role = 5;
									break;
								default:
									break;
							}
							await mail.verify({
								fullname: user.fullname,
								email: data.new_email,
								isPatient: prefix === 'bn' ? true : false,
								redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=${role}&email=${data.new_email}&token=${token}`,
							});
							resolve({ errCode: 0, message: 'Updated' });
						} else {
							resolve({ errCode: 5, message: 'Failed' });
						}
					} else {
						resolve({
							errCode: 2,
							type: 'password',
							message: 'Invalid password',
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

//KIỂM TRA PASSWORD (XÁC NHẬN LƯU THÔNG TIN)
const checkPassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.user_id || !data.password) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const user_id = data.user_id.toLowerCase();
				const prefix = user_id.slice(0, 2);
				let user;
				switch (prefix) {
					case 'bn':
						user = await db.Patient.findOne({ where: { patient_id: user_id } });
						break;
					case 'qt':
					case 'lt':
					case 'pt':
						user = await db.Employee.findOne({
							where: { employee_id: user_id },
						});
						break;
					case 'bs':
						user = await db.Doctor.findOne({ where: { doctor_id: user_id } });
						break;
					default:
						break;
				}
				if (user) {
					const isValidPassword = await bcrypt.compare(
						data.password,
						user.password,
					);
					if (isValidPassword) {
						resolve({ errCode: 0, message: 'Valid password' });
					} else {
						resolve({ errCode: 2, message: 'Invalid password' });
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

//REFRESH TOKEN
const refreshToken = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.refreshToken) {
				resolve({ errCode: 3, message: 'Missing params' });
			} else {
				const refreshToken = data.refreshToken;
				jwt.verify(
					refreshToken,
					process.env.JWT_REFRESH_TOKEN,
					async (err, user) => {
						if (err) {
							resolve({ errCode: 2, message: 'Invalid refresh token' });
						} else {
							const prefix = user.user_id.slice(0, 2);
							let refreshTokenInDB;
							switch (prefix) {
								case 'bn':
									refreshTokenInDB = await db.Patient.findOne({
										where: { patient_id: user.user_id },
										attributes: ['refresh_token'],
									});
									break;
								case 'qt':
								case 'lt':
								case 'pt':
									refreshTokenInDB = await db.Employee.findOne({
										where: { employee_id: user.user_id },
										attributes: ['refresh_token'],
									});
									break;
								case 'bs':
									refreshTokenInDB = await db.Doctor.findOne({
										where: { doctor_id: user.user_id },
										attributes: ['refresh_token'],
									});
									break;
								default:
									break;
							}
							if (refreshTokenInDB.refresh_token == refreshToken) {
								const newAccessToken = createAccessToken(user.user_id);
								const newRefreshToken = createRefreshToken(user.user_id);
								let result;
								switch (prefix) {
									case 'bn':
										result = await db.Patient.update(
											{ refresh_token: newRefreshToken },
											{ where: { patient_id: user.user_id } },
										);
										break;
									case 'qt':
									case 'lt':
									case 'pt':
										result = await db.Employee.update(
											{ refresh_token: newRefreshToken },
											{ where: { employee_id: user.user_id } },
										);
										break;
									case 'bs':
										result = await db.Doctor.update(
											{ refresh_token: newRefreshToken },
											{ where: { doctor_id: user.user_id } },
										);
										break;
									default:
										break;
								}
								if (result[0] === 1) {
									resolve({
										errCode: 0,
										message: 'Successful',
										data: {
											access_token: newAccessToken,
											refresh_token: newRefreshToken,
										},
									});
								} else {
									resolve({ errCode: 5, message: 'Failed' });
								}
							} else {
								resolve({ errCode: 2, message: 'Invalid refresh token' });
							}
						}
					},
				);
			}
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	getUserByID,
	verify,
	register,
	loginClient,
	loginAdmin,
	changePassword,
	sendResetLink,
	verifyResetLink,
	resetPassword,
	changeBlockStatus,
	changeEmail,
	checkPassword,
	refreshToken,
};
