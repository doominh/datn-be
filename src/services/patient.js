const { Op } = require("sequelize");
import bcrypt from "bcrypt";
import db from "../models/index";
import util from "../util/index";
import mail from "./mail";
require("dotenv").config();
const saltRounds = 10;


//LẤY BỆNH NHÂN THEO EMAIL
const getByEmail = async(email) => {
    return new Promise(async(resolve, reject) => {
        try {
            const patient = await db.Patient.findOne({where: {email: email}});
            resolve(patient);
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY BỆNH NHÂN THEO SỐ ĐIỆN THOẠI
const getByPhone = async(phone) => {
    return new Promise(async(resolve, reject) => {
        try {
            const patient = await db.Patient.findOne({where: {phone: phone}});
            resolve(patient);
        }
        catch(e) {
            reject(e);
        };
    });
};


//** API **//


//LẤY TẤT CẢ BỆNH NHÂN
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const patients = await db.Patient.findAll({
                attributes: {exclude: ["password", "refresh_token"]},
                order: [["createdAt", "ASC"]]
            });
            resolve({
                errCode: 0,
                message: "Get all patients",
                data: patients
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY BỆNH NHÂN THEO ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.patient_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({
                    attributes: {exclude: ["password", "refresh_token"]},
                    where: {patient_id: patient_id}
                });
                if(patient) {
                    resolve({
                        errCode: 0,
                        message: "Get patient by ID",
                        data: patient
                    });
                }
                else {
                    resolve({errCode: 1, message: "Patient doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY HỒ SƠ BỆNH ÁN
const getMedicalRecord = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.patient_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(patient) {
                    const rawData = await db.Appointment.findAll({
                        where: {patient_id: patient_id},
                        include: [
                            {
                                model: db.DoctorSchedule,
                                include: [
                                    {
                                        model: db.Doctor,
                                        attributes: ["doctor_id", "fullname"]
                                    },
                                    {
                                        model: db.Schedule,
                                        attributes: ["date"],
                                        include: [
                                            {
                                                model: db.Session,
                                                attributes: ["session_id", "time"]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                model: db.Service
                            }
                        ],
                        order: [
                            [db.DoctorSchedule, db.Schedule, "date", "ASC"]
                        ],
                        raw: true,
                        nest: true
                    });
                    const records = rawData.filter(item => item.Services.service_id !== null);
                    resolve({
                        errCode: 0,
                        message: "Get medical record",
                        data: records
                    });
                }
                else {
                    resolve({errCode: 1, message: "Patient doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DANH SÁCH BỆNH NHÂN ĐƯỢC ĐIỀU TRỊ THEO BÁC SĨ
const getAllByDoctorID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.doctor_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const rawData = await db.Appointment.findAll({
                        include: [
                            {
                                model: db.Patient
                            },
                            {
                                model: db.DoctorSchedule,
                                where: {doctor_id: doctor_id}
                            }
                        ],
                        raw: true,
                        nest: true
                    });
                    let IDList = [];
                    rawData.forEach(item => {
                        const {Patient, ...rest} = item;
                        if(!IDList.includes(Patient.patient_id)) IDList.push(Patient.patient_id);
                    });
                    const patients = await db.Patient.findAll({
                        where: {patient_id: IDList},
                        attributes: {exclude: ["password", "refresh_token"]},
                        order: [["createdAt", "ASC"]],
                    });
                    resolve({
                        errCode: 0,
                        message: "Get all patients by doctor ID",
                        data: patients
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


//THÊM MỚI BỆNH NHÂN
const createPatient = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.fullname || !data.dob || data.gender === undefined ||
                !data.phone || !data.email || !data.password)
            {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patientByEmail = await getByEmail(data.email);
                const patientByPhone = await getByPhone(data.phone);

                if(patientByEmail) {
                    resolve({errCode: 2, type: "email", message: "Email already exists"});
                }
                else if(patientByPhone) {
                    resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                }
                else {
                    const patient_id = util.createID("bn");
                    const hashedPassword = await util.hashPassword(data.password);
                    const newPatient = await db.Patient.create({
                        patient_id: patient_id,
                        fullname: data.fullname,
                        avatar: data.avatar,
                        dob: data.dob,
                        gender: data.gender,
                        phone: data.phone,
                        street: data.street,
                        ward: data.ward,
                        district: data.district,
                        city: data.city,
                        email: data.email,
                        password: hashedPassword,
                        is_activated: false,
                        is_blocked: false
                    });
                    if(newPatient.dataValues.patient_id) {
                        const token = await bcrypt.hash(data.email, saltRounds);
                        await mail.verify({
                            ...data,
                            isPatient: true,
                            redirectLink: `${process.env.BACKEND_URL}/api/auth/verify?role=1&email=${data.email}&token=${token}`
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


//CẬP NHẬT THÔNG TIN BỆNH NHÂN
const updatePatient = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.patient_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(patient) {
                    const patientByPhone = await getByPhone(data.phone);
                    if(patientByPhone && patientByPhone.patient_id !== patient_id) {
                        resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                    }
                    else {
                        let newInfo = {
                            fullname: data.fullname,
                            avatar: data.avatar,
                            dob: data.dob,
                            gender: data.gender,
                            phone: data.phone,
                            street: data.street,
                            ward: data.ward,
                            district: data.district,
                            city: data.city
                        };
                        const result = await db.Patient.update(newInfo ,{where: {patient_id: patient_id}});
                        if(result[0] === 1) {
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Patient doesn't exist"});
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
            if(!data.patient_id || !data.fullname || !data.dob ||data.gender === undefined || !data.phone) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(patient) {
                    const patientByPhone = await getByPhone(data.phone);
                    if(patientByPhone && patientByPhone.patient_id !== patient_id) {
                        resolve({errCode: 2, type: "phone", message: "Phone already exists"});
                    }
                    else {
                        let newInfo = {
                            fullname: data.fullname,
                            avatar: data.avatar,
                            dob: data.dob,
                            gender: data.gender,
                            phone: data.phone,
                            street: data.street,
                            ward: data.ward,
                            district: data.district,
                            city: data.city
                        };
                        const result = await db.Patient.update(newInfo, {where: {patient_id: patient_id}});
                        if(result[0] === 1) {
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Patient doesn't exist"});
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
    getMedicalRecord,
    getAllByDoctorID,
    createPatient,
    updatePatient,
    updateProfile
};