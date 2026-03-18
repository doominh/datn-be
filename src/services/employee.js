const { Op } = require("sequelize");
import bcrypt from "bcrypt";
import db from "../models/index";
import util from "../util/index";
import mail from "./mail";
require("dotenv").config();
const saltRounds = 10;


//LẤY NHÂN VIÊN THEO EMAIL
const getByEmail = async(email) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employee = await db.Employee.findOne({where: {email: email}});
            resolve(employee);
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY NHÂN VIÊN THEO SỐ ĐIỆN THOẠI
const getByPhone = async(phone) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employee = await db.Employee.findOne({where: {phone: phone}});
            resolve(employee);
        }
        catch(e) {
            reject(e);
        };
    });
};


//** API **//


//LẤY TẤT CẢ NHÂN VIÊN
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const employees = await db.Employee.findAll({
                attributes: {exclude: ["password", "refresh_token"]},
                where: {employee_id: {[Op.ne]: "none"}},
                order: [["createdAt", "ASC"]]
            });
            resolve({
                errCode: 0,
                message: "Get all employees",
                data: employees
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY NHÂN VIÊN THEO ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.employee_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const employee_id = data.employee_id.toLowerCase();
                const employee = await db.Employee.findOne({
                    attributes: {exclude: ["password", "refresh_token"]},
                    where: {employee_id: employee_id}
                });
                if(employee) {
                    resolve({
                        errCode: 0,
                        message: "Get employee by ID",
                        data: employee
                    });
                }
                else {
                    resolve({errCode: 1, message: "Employee doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY CÁC NHÂN VIÊN CỦA NGÀY DATE VÀ CA KHÁM SESSION_ID
const getAllBySchedule = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.date || !data.session_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {

                //các nhân viên có lịch làm việc của data.date và data.session_id
                const employeeSchedules = await db.EmployeeSchedule.findAll({
                    include: [
                        {
                            model: db.Employee,
                            attributes: [["employee_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"]
                        },
                        {
                            model: db.Schedule,
                            where: {
                                session_id: data.session_id.toLowerCase(),
                                date: data.date
                            }
                        }
                    ],
                    raw: true,
                    nest: true
                });

                //lọc chỉ để lấy id
                const employeeIDList = employeeSchedules.map(item => item.employee_id);

                //lấy tất cả nhân viên
                const employees = await db.Employee.findAll({
                    attributes: [["employee_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"],
                    where: {employee_id: {[Op.ne]: "none"}},
                    order: [["createdAt", "ASC"]]
                });

                //lọc để lấy các nhân viên chưa có lịch làm việc
                let available = [];
                employees.forEach(employee => {
                    if(!employeeIDList.includes(employee.user_id)) available.push(employee);
                });

                //cấu trúc lại các nhân viên đã có lịch làm việc
                let unavailable = employeeSchedules.map(item => {
                    return {
                        ...item.Employee,
                        user_schedule_id: item.employee_schedule_id
                    };
                });

                resolve({
                    errCode: 0,
                    message: "Get all for date and session_id",
                    data: [...available, ...unavailable]
                });
            };
        }
        catch(e) {
            reject(e);
        };
    });
};



//THÊM MỚI NHÂN VIÊN
const createEmployee = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.role || !data.fullname || !data.dob || data.gender === undefined ||
                !data.phone || !data.email || !data.password)
            {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const employeeByEmail = await getByEmail(data.email);
                const employeeByPhone = await getByPhone(data.phone);
                const doctorByEmail = await db.Doctor.findOne({where: {email: data.email}});
                const doctorByphone = await db.Doctor.findOne({where: {phone: data.phone}});

                if(employeeByEmail || doctorByEmail) {
                    resolve({errCode: 2, type: "email", message: "Email already exists"});
                }
                else if(employeeByPhone || doctorByphone) {
                    resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                }
                else {
                    let employee_id;
                    let is_admin = false;
                    switch(data.role) {
                        case 2: //quản trị viên
                            employee_id = util.createID("qt");
                            is_admin = true;
                            break;
                        case 3: //lễ tân
                            employee_id = util.createID("lt");
                            break;
                        case 5: //phụ tá
                            employee_id = util.createID("pt");
                            break;
                        default: break;
                    };
                    const hashedPassword = await util.hashPassword(data.password);
                    const newEmployee = await db.Employee.create({
                        employee_id: employee_id,
                        is_admin: is_admin,
                        fullname: data.fullname,
                        avatar: data.avatar,
                        dob: data.dob,
                        gender: data.gender,
                        phone: data.phone,
                        degree: data.degree,
                        start_date: data.start_date,
                        street: data.street,
                        ward: data.ward,
                        district: data.district,
                        city: data.city,
                        email: data.email,
                        password: hashedPassword,
                        is_activated: false,
                        is_blocked: false
                    });
                    if(newEmployee.dataValues.employee_id) {

                        //gửi mail xác nhận tài khoản
                        const token = await bcrypt.hash(data.email, saltRounds);
                        await mail.verify({
                            ...data,
                            isPatient: false,
                            redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=${data.role}&email=${data.email}&token=${token}`
                        });
                        resolve({errCode: 0, message: "Created"});
                    }
                    else {
                        resolve({errCode: 5, message: "Failed"});
                    };
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT THÔNG TIN NHÂN VIÊN
const updateEmployee = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.employee_id || !data.role || !data.fullname ||
                !data.dob || data.gender === undefined || !data.phone || !data.email)
            {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const employee_id = data.employee_id.toLowerCase();
                const employee = await db.Employee.findOne({where: {employee_id: employee_id}});
                if(employee) {
                    const employeeByEmail = await getByEmail(data.email);
                    const employeeByPhone = await getByPhone(data.phone);
                    const doctorByEmail = await db.Doctor.findOne({where: {email: data.email}});
                    const doctorByPhone = await db.Doctor.findOne({where: {phone: data.phone}});

                    if((employeeByEmail && employeeByEmail.employee_id !== employee_id) || doctorByEmail) {
                        resolve({errCode: 2, type: "email", message: "Email already exists"});
                    }
                    else if((employeeByPhone && employeeByPhone.employee_id !== employee_id) || doctorByPhone) {
                        resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                    }
                    else {
                        let newInfo = {
                            fullname: data.fullname,
                            avatar: data.avatar,
                            dob: data.dob,
                            gender: data.gender,
                            phone: data.phone,
                            degree: data.degree,
                            start_date: data.start_date,
                            street: data.street,
                            ward: data.ward,
                            district: data.district,
                            city: data.city,
                            email: data.email
                        };

                        //trạng thái tài khoản khi không cập nhật email
                        if(data.email === employee.email) newInfo = {...newInfo, is_activated: employee.is_activated};

                        //trạng thái tài khoản khi có cập nhật email
                        else newInfo = {...newInfo, is_activated: false};

                        const result = await db.Employee.update(newInfo ,{where: {employee_id: employee_id}});
                        if(result[0] === 1) {

                            //gửi lại email xác nhận tài khoản nếu cập nhật email khác
                            if(data.email !== employee.email) {
                                const token = await bcrypt.hash(data.email, saltRounds);
                                await mail.verify({
                                    ...data,
                                    isPatient: false,
                                    redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=${data.role}&email=${data.email}&token=${token}`
                                });
                            };
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Employee doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT PROFILE
const updateProfile = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.employee_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const employee_id = data.employee_id.toLowerCase();
                const employee = await db.Employee.findOne({where: {employee_id: employee_id}});
                if(employee) {
                    const employeeByPhone = await getByPhone(data.phone);
                    const doctorByPhone = await db.Doctor.findOne({where: {phone: data.phone}});

                    if((employeeByPhone && employeeByPhone.employee_id !== employee_id) || doctorByPhone) {
                        resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                    }
                    else {
                        let newInfo = {
                            fullname: data.fullname,
                            avatar: data.avatar,
                            dob: data.dob,
                            gender: data.gender,
                            phone: data.phone,
                            start_date: data.start_date,
                            street: data.street,
                            ward: data.ward,
                            district: data.district,
                            city: data.city
                        };
                        const result = await db.Employee.update(newInfo ,{where: {employee_id: employee_id}});
                        if(result[0] === 1) {
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Employee doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


module.exports = {
    getByEmail,
    getAll,
    getByID,
    getAllBySchedule,
    createEmployee,
    updateEmployee,
    updateProfile
};