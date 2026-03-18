import bcrypt from "bcrypt";
import db from "../models/index";
import util from "../util/index";
import mail from "./mail";
require("dotenv").config();
const saltRounds = 10;


//LẤY BÁC SĨ THEO EMAIL
const getByEmail = async(email) => {
    return new Promise(async(resolve, reject) => {
        try {
            const doctor = await db.Doctor.findOne({where: {email: email}});
            resolve(doctor);
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY BÁC SĨ THEO SỐ ĐIỆN THOẠI
const getByPhone = async(phone) => {
    return new Promise(async(resolve, reject) => {
        try {
            const doctor = await db.Doctor.findOne({where: {phone: phone}});
            resolve(doctor);
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT BẢNG DOCTOR_CATEGORY
const updateDoctorCategory = async(data, lowerCaseID) => {
    return new Promise(async(resolve, reject) => {
        try {
            const categories = await db.DoctorCategory.findAll({where: {doctor_id: lowerCaseID}});
            if(data.categories) {
                const a = categories.map(category => category.category_id);
                const b = data.categories;
                const equal = a.every(item => b.includes(item)) && b.every(item => a.includes(item));

                if(!equal) {
                    let addList = [];
                    let deleteList = [];

                    a.forEach(category_id => {
                        if(!b.includes(category_id)) deleteList.push(category_id);
                    });
                    b.forEach(category_id => {
                        if(!a.includes(category_id)) addList.push(category_id);
                    });

                    if(addList.length > 0) {
                        const list = addList.map(category_id => {
                            return {
                                doctor_id: lowerCaseID,
                                category_id: category_id
                            };
                        });
                        const result = await db.DoctorCategory.bulkCreate(list);
                        if(result.length > 0) resolve(true);
                    };
                    if(deleteList.length > 0) {
                        const result = await db.DoctorCategory.destroy({
                            where: {
                                doctor_id: lowerCaseID,
                                category_id: deleteList
                            }
                        });
                        if(result) resolve(true);
                    };
                }
                else {
                    resolve(true);
                };
            }
            else {
                if(categories.length > 0) {
                    const a = categories.map(category => category.category_id);
                    const result = await db.DoctorCategory.destroy({where: {category_id: a}});
                    if(result) resolve(true);
                }
                else {
                    resolve(true);
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//** API **//


//LẤY TẤT CẢ BÁC SĨ
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const doctors = await db.Doctor.findAll({
                attributes: {exclude: ["password", "refresh_token"]},
                order: [["createdAt", "ASC"]]
            });
            resolve({
                errCode: 0,
                message: "Get all doctors",
                data: doctors
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ BÁC SĨ CHƯA BỊ KHÓA TÀI KHOẢN
const getActive = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const doctors = await db.Doctor.findAll({
                where: {is_blocked: 0},
                attributes: {exclude: ["password", "refresh_token"]},
                order: [["createdAt", "ASC"]]
            });
            resolve({
                errCode: 0,
                message: "Get active doctors",
                data: doctors
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY BÁC SĨ THEO ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.doctor_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({
                    attributes: {exclude: ["password", "refresh_token"]},
                    where: {doctor_id: doctor_id}
                });
                if(doctor) {
                    resolve({
                        errCode: 0,
                        message: "Get doctor by ID",
                        data: doctor
                    });
                }
                else {
                    resolve({errCode: 1, message: "Doctor doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ BÁC SĨ THEO DANH MỤC ĐANG ĐIỀU TRỊ
const getAllByCategoryID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const category = await db.Category.findOne({where: {category_id: category_id}});
                if(category) {
                    const doctorIDList = await db.DoctorCategory.findAll({
                        where: {category_id: category_id},
                        attributes: ["doctor_id"]
                    });
                    let list = [];
                    doctorIDList.forEach(item => list.push(item.doctor_id));
                    const doctors = await db.Doctor.findAll({
                        attributes: {exclude: ["password", "refresh_token"]},
                        where: {
                            doctor_id: list,
                            is_blocked: 0
                        },
                        order: [["createdAt", "ASC"]]
                    });                
                    resolve({
                        errCode: 0,
                        message: "Get doctors by category id",
                        data: doctors
                    });
                }
                else {
                    resolve({errCode: 1, message: "Category doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        }
    });
};


//LẤY CÁC BÁC SĨ CỦA NGÀY DATE VÀ CA KHÁM SESSION_ID
const getAllBySchedule = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.date || !data.session_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {

                //các bác sĩ có lịch làm việc của data.date và data.session_id
                const doctorSchedules = await db.DoctorSchedule.findAll({
                    include: [
                        {
                            model: db.Doctor,
                            attributes: [["doctor_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"]
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
                const doctorIDList = doctorSchedules.map(item => item.doctor_id);

                //lấy tất cả bác sĩ
                const doctors = await db.Doctor.findAll({
                    attributes: [["doctor_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"],
                    order: [["createdAt", "ASC"]]
                });

                //lọc để lấy các bác sĩ chưa có lịch làm việc
                let available = [];
                doctors.forEach(doctor => {
                    if(!doctorIDList.includes(doctor.user_id)) available.push(doctor);
                });

                //cấu trúc lại các bác sĩ đã có lịch làm việc
                let unavailable = doctorSchedules.map(item => {
                    return {
                        ...item.Doctor,
                        user_schedule_id: item.doctor_schedule_id
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


//THÊM MỚI BÁC SĨ
const createDoctor = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.fullname || !data.dob || data.gender === undefined ||
                !data.phone || !data.degree || !data.email || !data.password)
            {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctorByEmail = await getByEmail(data.email);
                const doctorByPhone = await getByPhone(data.phone);
                const employeeByEmail = await db.Employee.findOne({where: {email: data.email}});
                const employeeByPhone = await db.Employee.findOne({where: {phone: data.phone}});

                if(doctorByEmail || employeeByEmail) {
                    resolve({errCode: 2, type: "email", message: "Email already exists"});
                }
                else if(doctorByPhone || employeeByPhone) {
                    resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                }
                else {
                    //kiểm tra các danh mục có tồn tại không
                    if(data.categories) {
                        const isInDB = await db.Category.findAll({where: {category_id: data.categories}});
                        if(isInDB.length < data.categories.length) {
                            return resolve({errCode: 1, message: "Category doesn't exist"});
                        };
                    };
                    const doctor_id = util.createID("bs");
                    const hashedPassword = await util.hashPassword(data.password);
                    const newDoctor = await db.Doctor.create({
                        doctor_id: doctor_id,
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
                        html: data.html,
                        markdown: data.markdown,
                        email: data.email,
                        password: hashedPassword,
                        is_activated: false,
                        is_blocked: false
                    });
                    if(newDoctor.dataValues.doctor_id) {

                        //thêm mới bác sĩ điều trị những danh mục
                        if(data.categories) {
                            let list = [];
                            data.categories.forEach(category_id => {
                                list.push({doctor_id: doctor_id, category_id: category_id});
                            });
                            await db.DoctorCategory.bulkCreate(list);
                        };

                        //gửi mail xác nhận tài khoản
                        const token = await bcrypt.hash(data.email, saltRounds);
                        await mail.verify({
                            ...data,
                            isPatient: false,
                            redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=4&email=${data.email}&token=${token}`
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


//CẬP NHẬT THÔNG TIN BÁC SĨ
const updateDoctor = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.doctor_id || !data.fullname || !data.dob || data.gender === undefined ||
                !data.phone || !data.degree || !data.email)
            {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const doctorByEmail = await getByEmail(data.email);
                    const doctorByPhone = await getByPhone(data.phone);
                    const employeeByEmail = await db.Employee.findOne({where: {email: data.email}});
                    const employeeByPhone = await db.Employee.findOne({where: {phone: data.phone}});

                    if((doctorByEmail && doctorByEmail.doctor_id !== doctor_id) || employeeByEmail) {
                        resolve({errCode: 2, type: "email", message: "Email already exists"});
                    }
                    else if((doctorByPhone && doctorByPhone.doctor_id !== doctor_id) || employeeByPhone) {
                        resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                    }
                    else {
                        //kiểm tra các danh mục có tồn tại không
                        if(data.categories) {
                            const isInDB = await db.Category.findAll({where: {category_id: data.categories}});
                            if(isInDB.length < data.categories.length) {
                                return resolve({errCode: 1, message: "Category doesn't exist"});
                            };
                        };
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
                            html: data.html,
                            markdown: data.markdown,
                            email: data.email
                        };

                        //trạng thái tài khoản khi không cập nhật email
                        if(data.email === doctor.email) newInfo = {...newInfo, is_activated: doctor.is_activated};

                        //trạng thái tài khoản khi có cập nhật email
                        else newInfo = {...newInfo, is_activated: false};
                        
                        const result_1 = await db.Doctor.update(newInfo, {where: {doctor_id: doctor_id}});
                        const result_2 = await updateDoctorCategory(data, doctor_id);

                        if(result_1[0] === 1 && result_2) {

                            //gửi lại email xác nhận tài khoản nếu cập nhật email khác
                            if(data.email !== doctor.email) {
                                const token = await bcrypt.hash(data.email, saltRounds);
                                await mail.verify({
                                    ...data,
                                    isPatient: false,
                                    redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=4&email=${data.email}&token=${token}`
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
                    resolve({errCode: 1, message: "Doctor doesn't exist"});
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
            if(!data.doctor_id || !data.fullname || !data.dob ||data.gender === undefined || !data.phone) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const doctorByPhone = await getByPhone(data.phone);
                    const employeeByPhone = await db.Employee.findOne({where: {phone: data.phone}});

                    if((doctorByPhone && doctorByPhone.doctor_id !== doctor_id) || employeeByPhone) {
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
                            city: data.city,
                            html: data.html,
                            markdown: data.markdown
                        };
                        const result = await db.Doctor.update(newInfo, {where: {doctor_id: doctor_id}});
                        if(result[0] === 1) {
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Doctor doesn't exist"});
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
    getActive,
    getByID,
    getAllByCategoryID,
    getAllBySchedule,
    createDoctor,
    updateDoctor,
    updateProfile,
};