const { Op } = require("sequelize");
import moment from "moment";
import axios from "axios";
import db from "../models/index";
import util from "../util/index";
import mail from "./mail";


//ĐẶT LẠI TRẠNG THÁI LỊCH CỦA BÁC SĨ KHI HỦY HẸN
const setDoctorScheduleStatus = (appointment) => {
    return new Promise(async(resolve, reject) => {
        try {
            //lấy thời gian hiện tại
            const currentDate = util.getCurrentDate();
            const currentTime = util.getCurrentTime();

            //lấy thời gian của lịch hẹn cần hủy
            const doctorSchedule = await db.DoctorSchedule.findOne({
                where: {doctor_schedule_id: appointment.doctor_schedule_id},
                include: [{
                    model: db.Schedule,
                    include: [{model: db.Session}]
                }],
                raw: true,
                nest: true
            });

            //ngày hủy < ngày hẹn
            if(currentDate < doctorSchedule.Schedule.date) {
                await db.DoctorSchedule.update(
                    {status: 1},
                    {where: {doctor_schedule_id: appointment.doctor_schedule_id}}
                );
            };

            //ngày hủy = ngày hẹn
            if(currentDate === doctorSchedule.Schedule.date) {

                const startTime = doctorSchedule.Schedule.Session.time.slice(0, 5);

                //lấy giờ
                const startHours = startTime.slice(0, 2);
                const currentHours = currentTime.slice(0, 2);
                const gapHours = Number(startHours) - Number(currentHours);

                //lấy phút
                const startMinutes = startTime.slice(3, 5);
                const currentMinutes = currentTime.slice(3, 5);
                const gapMinutes = Number(startMinutes) - Number(currentMinutes);

                //hủy trước 15 phút so với giờ hẹn
                if(
                    gapHours > 1 || //hẹn: 18:00 - hủy: 14:00
                    (gapHours === 1 && gapMinutes >= -45) || //hẹn: 18:00 - hủy: 17:45
                    (gapHours === 0 && gapMinutes >= 15) //hẹn: 18:30 - hủy: 18:15
                ) {
                    await db.DoctorSchedule.update(
                        {status: 1},
                        {where: {doctor_schedule_id: appointment.doctor_schedule_id}}
                    );
                };
            };
            resolve({
                errCode: 0,
                data: {
                    appointment_id: appointment.appointment_id,
                    patient_id: appointment.patient_id,
                    doctor_id: doctorSchedule.doctor_id
                },
                message: "Canceled"
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


/** API **/


//LẤY TẤT CẢ LỊCH HẸN
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const appointments = await db.Appointment.findAll({
                include: [
                    {
                        model: db.Type,
                        attributes: ["type_id", "type_name"]
                    },
                    {
                        model: db.Patient,
                        attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
                    },
                    {
                        model: db.Employee,
                        attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
                    },
                    {
                        model: db.DoctorSchedule,
                        include: [
                            {
                                model: db.Doctor,
                                attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                            },
                            {
                                model: db.Schedule,
                                include: {model: db.Session}
                            }
                        ]
                    }
                ],
                order: [["createdAt", "DESC"]],
                raw: true,
                nest: true
            });
            resolve({
                errCode: 0,
                message: "Get all appointments",
                data: appointments
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY LỊCH HẸN THEO ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.appointment_id || !data.user_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {

                //nhân viên nào đang gửi yêu cầu
                const user_id = data.user_id.toLowerCase();
                const prefix = user_id.slice(0, 2);

                //join các bảng dữ liệu
                const appointment_id = data.appointment_id.toLowerCase();
                let appointment = await db.Appointment.findOne({
                    where: {appointment_id: appointment_id},
                    include: [
                        {
                            model: db.Type,
                            attributes: ["type_id", "type_name"]
                        },
                        {
                            model: db.Patient,
                            attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
                        },
                        {
                            model: db.Employee,
                            attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
                        },
                        {
                            model: db.DoctorSchedule,
                            include: [
                                {
                                    model: db.Doctor,
                                    attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                                },
                                {
                                    model: db.Schedule,
                                    include: {model: db.Session}
                                }
                            ]
                        }
                    ],
                    raw: true,
                    nest: true
                });

                //thiết kế cấu trúc api
                let details = await db.Appointment.findAll({
                    where: {appointment_id: appointment_id},
                    include: {
                        model: db.Service,
                        include: db.Category
                    },
                    raw: true,
                    nest: true
                });
                if(details[0].Services.service_id !== null) {
                    details = details.map(item => item.Services);
                    appointment = {...appointment, details};
                };
                
                //tìm thấy lịch hẹn
                if(appointment) {

                    //người gửi yêu cầu: bác sĩ và lịch hẹn này không thuộc về bác sĩ đó
                    if(prefix === "bs" && appointment.DoctorSchedule.Doctor.doctor_id !== user_id) {
                        return resolve({errCode: 2, message: "Appointment doesn't belong to this doctor"});
                    };

                    //người gửi yêu cầu: bệnh nhân và lịch hẹn này không thuộc về bệnh nhân đó
                    if(prefix === "bn" && appointment.patient_id !== user_id) {
                        return resolve({errCode: 2, message: "Appointment doesn't belong to this patient"});
                    };

                    //người gửi yêu cầu: lễ tân/bác sĩ/bệnh nhân
                    resolve({errCode: 0, message: "Get appointment by ID", data: appointment});
                }
                else {
                    resolve({errCode: 1, message: "Appointment doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ LỊCH HẸN ĐÃ ĐƯỢC DUYỆT/HỦY/HOÀN THÀNH THEO ID BÁC SĨ PHỤ TRÁCH
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
                    const appointments = await db.Appointment.findAll({
                        where: {status: {[Op.ne]: 0}},
                        include: [
                            {
                                model: db.Type,
                                attributes: ["type_id", "type_name"]
                            },
                            {
                                model: db.Patient,
                                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
                            },
                            {
                                model: db.Employee,
                                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
                            },
                            {
                                model: db.DoctorSchedule,
                                where: {doctor_id: doctor_id},
                                include: [
                                    {
                                        model: db.Doctor,
                                        attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                                    },
                                    {
                                        model: db.Schedule,
                                        include: {model: db.Session}
                                    }
                                ]
                            }
                        ],
                        order: [["createdAt", "DESC"]],
                        raw: true,
                        nest: true
                    });
                    resolve({
                        errCode: 0,
                        message: "Get all appointments by doctor ID",
                        data: appointments
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


//LẤY TẤT CẢ LỊCH HẸN THEO ID BỆNH NHÂN
const getAllByPatientID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.patient_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(patient) {
                    const appointments = await db.Appointment.findAll({
                        where: {patient_id: patient_id},
                        include: [
                            {
                                model: db.Type,
                                attributes: ["type_id", "type_name"]
                            },
                            {
                                model: db.Patient,
                                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
                            },
                            {
                                model: db.Employee,
                                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
                            },
                            {
                                model: db.DoctorSchedule,
                                include: [
                                    {
                                        model: db.Doctor,
                                        attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                                    },
                                    {
                                        model: db.Schedule,
                                        include: {model: db.Session}
                                    }
                                ]
                            }
                        ],
                        order: [["createdAt", "DESC"]],
                        raw: true,
                        nest: true
                    });

                    //lấy chi tiết dịch vụ (nếu có) của các lịch hẹn
                    const detailsRaw = await db.Appointment.findAll({
                        where: {patient_id: patient_id},
                        include: {
                            model: db.Service,
                            include: db.Category
                        },
                        raw: true,
                        nest: true
                    });

                    const detailsMap = {};
                    detailsRaw.forEach(item => {
                        if(item.Services && item.Services.service_id !== null) {
                            if(!detailsMap[item.appointment_id]) detailsMap[item.appointment_id] = [];
                            detailsMap[item.appointment_id].push(item.Services);
                        };
                    });

                    const result = appointments.map(appointment => {
                        return {
                            ...appointment,
                            details: detailsMap[appointment.appointment_id] || []
                        };
                    });

                    resolve({
                        errCode: 0,
                        message: "Get all appointments by patient ID",
                        data: result
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


//ĐẶT LỊCH HẸN
const bookAppointment = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(
                !data.creator_id || !data.type_id || !data.doctor_schedule_id || !data.patient_id ||
                !data.fullname || !data.dob || data.gender === undefined || !data.phone
            ) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {

                //nếu là bác sĩ đặt lịch hẹn tái khám thì không được thiếu array tái khám dịch vụ nào
                if(data.type_id === 2) {
                    if(!data.reExamServices) return resolve({errCode: 3, message: "Missing params"});
                };

                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(patient) {

                    //id của người tạo lịch hẹn
                    const creator_id = data.creator_id.toLowerCase();

                    //nếu là bệnh nhân thì kiểm tra số lần đặt lịch hẹn của ngày hôm nay
                    if(creator_id.slice(0, 2) === "bn") {

                      

                       
                     
                            const appointmentCount = await db.Appointment.findAll({
                                where: {
                                    patient_id: patient_id,
                                    createdAt: { 
                                        [Op.gt]: new Date().setHours(0, 0, 0, 0),
                                        [Op.lt]: new Date()
                                    }
                                }
                            });
                            if(appointmentCount.length >= 3) {
                                return resolve({errCode: 10, message: "Reached the limit times for booking per day"});
                            };
                        
                      
                    };

                    //tìm lịch làm việc được đặt
                    const doctorSchedule = await db.DoctorSchedule.findOne({
                        where: {doctor_schedule_id: data.doctor_schedule_id},
                        include: [{
                            model: db.Schedule,
                            include: [{model: db.Session}]
                        }],
                        raw: true,
                        nest: true
                    });
                    if(doctorSchedule) {

                        //lấy thời gian hiện tại
                        const currentDate = util.getCurrentDate();
                        const currentTime = util.getCurrentTime();

                        //ngày đặt lớn hơn ngày hẹn -> không thể đặt lịch của quá khứ
                        if(currentDate > doctorSchedule.Schedule.date) {
                            return resolve({errCode: 2, type: "date", message: "Can't book for the past"});
                        };

                        //ngày đặt cùng ngày hẹn
                        if(currentDate === doctorSchedule.Schedule.date) {
                            const startTime = doctorSchedule.Schedule.Session.time.slice(0, 5);

                            //thời gian đặt lịch > thời gian bắt đầu ca khám
                            if(currentTime > startTime) {
                                return resolve({errCode: 2, type: "time", message: "This session is over"});
                            };
                        };

                        //thỏa các điều kiện:
                        //điều kiện 1: ngày đặt <= ngày hẹn
                        //điều kiện 2: cùng ngày thì thời gian đặt phải <= thời gian bắt đầu ca khám

                        //lịch còn khả dụng
                        if(doctorSchedule.status === 1) {
                            const appointment_id = util.createID("lh");
                            const newAppointment = await db.Appointment.create({
                                appointment_id: appointment_id,
                                type_id: data.type_id,
                                doctor_schedule_id: data.doctor_schedule_id,
                                patient_id: patient_id,
                                employee_id: "none", //id của lễ tân ảo
                                fullname: data.fullname,
                                dob: data.dob,
                                gender: data.gender,
                                phone: data.phone,
                                status: 0 //chờ xác nhận
                            });
                            if(newAppointment.dataValues.appointment_id) {

                                //thêm chi tiết lịch hẹn nếu là tái khám
                                if(data.type_id === 2) {
                                    await db.Detail.bulkCreate(data.reExamServices.map(service => {
                                        return {
                                            appointment_id: appointment_id,
                                            service_id: service.service_id,
                                            quantity: service.quantity
                                        };
                                    }));
                                };
    
                                //cập nhật status cho doctor_schedule này thành 2 -> đã được đặt
                                const result = await db.DoctorSchedule.update(
                                    {status: 2},
                                    {where: {doctor_schedule_id: data.doctor_schedule_id}}
                                );
                                if(result[0] === 1) {
                                    resolve({
                                        errCode: 0,
                                        message: "Created",
                                        data: {
                                            appointment_id: appointment_id,
                                            fullname: patient.fullname
                                        }
                                    });
                                }
                                else {
                                    resolve({errCode: 5, message: "Failed"});
                                };
                            }
                            else {
                                resolve({errCode: 5, message: "Failed"});
                            };
                        }

                        //đã có người khác đặt
                        else if(doctorSchedule.status === 2) {
                            resolve({errCode: 9, message: "Has been used"});
                        }

                        //lịch làm việc chưa được duyệt
                        else {
                            resolve({errCode: 2, type: "status", message: "Not accepted yet"});
                        };
                    }
                    else {
                        resolve({errCode: 1, message: "Doctor's schedule doesn't exist"});
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


//DUYỆT LỊCH HẸN
const acceptAppointment = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.appointment_id || !data.employee_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const appointment_id = data.appointment_id.toLowerCase();
                const employee_id = data.employee_id.toLowerCase();

                //tìm lễ tân duyệt lịch hẹn này
                const employee = await db.Employee.findOne({where: {employee_id: employee_id}});
                if(!employee) {
                    return resolve({errCode: 1, message: "Employee doesn't exist"});
                };

                //tìm lịch hẹn
                const appointment = await db.Appointment.findOne({
                    where: {appointment_id: appointment_id}
                });
                if(!appointment) {
                    return resolve({errCode: 1, message: "Appointment doesn't exist"});
                };

                //đã tìm thấy lễ tân và lịch hẹn
                //lịch hẹn chưa được duyệt
                if(appointment.status === 0) {
                    const doctorSchedule = await db.DoctorSchedule.findOne({
                        where: {doctor_schedule_id: appointment.doctor_schedule_id},
                        include: [
                            {
                                model: db.Doctor,
                                attributes: ["doctor_id", "fullname"]
                            },
                            {
                                model: db.Schedule,
                                include: [{model: db.Session}]
                            }
                        ],
                        raw: true,
                        nest: true
                    });

                    //lấy thời gian hiện tại
                    const currentDate = util.getCurrentDate();
                    const currentTime = util.getCurrentTime();

                    //ngày duyệt > ngày hẹn
                    if(currentDate > doctorSchedule.Schedule.date) {
                        return resolve({errCode: 2, type: "date", message: "Can't accept appointment for the past"});
                    };

                    //ngày duyệt cùng ngày hẹn
                    if(currentDate === doctorSchedule.Schedule.date) {
                        const startTime = doctorSchedule.Schedule.Session.time.slice(0, 5);

                        //thời gian duyệt > thời gian bắt đầu ca khám
                        if(currentTime > startTime) {
                            return resolve({errCode: 2, type: "time", message: "This session is over"});
                        };
                    };

                    //thỏa các điều kiện
                    //điều kiện 1: ngày duyệt <= ngày hẹn (doctor_schedule.date)
                    //điều kiện 2: cùng ngày thì thời gian duyệt phải <= thời gian bắt đầu ca khám

                    const result = await db.Appointment.update(
                        {
                            employee_id: employee_id, //lễ tân nào duyệt lịch hẹn này
                            status: 1 //đã xác nhận
                        },
                        {
                            where: {appointment_id: appointment_id}
                        }
                    );
                    if(result[0] === 1) {
                        const patient = await db.Patient.findOne({
                            where: {patient_id: appointment.patient_id}
                        });
                        await mail.appointmentInfo({
                            email: patient.email,
                            appointment_id: data.appointment_id.toUpperCase(),
                            fullname: appointment.fullname,
                            dob: moment(appointment.dob).format("DD-MM-YYYY"),
                            gender: appointment.gender,
                            phone: appointment.phone,
                            doctor_name: doctorSchedule.Doctor.fullname,
                            date: moment(doctorSchedule.Schedule.date).format("DD-MM-YYYY"),
                            time: doctorSchedule.Schedule.Session.time,
                            status: "Đã xác nhận"
                        });
                        resolve({
                            errCode: 0,
                            data: {
                                appointment_id,
                                patient_id: patient.patient_id,
                                doctor_id: doctorSchedule.doctor_id
                            },
                            message: "Accepted"
                        });
                    }
                    else {
                        resolve({errCode: 5, message: "Failed"});
                    };
                }
                else {
                    resolve({errCode: 2, type: "status", message: "Incorrect status"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//HỦY LỊCH HẸN BỞI LỄ TÂN
const canceledByEmployee = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.appointment_id || !data.employee_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const appointment_id = data.appointment_id.toLowerCase();
                const employee_id = data.employee_id.toLowerCase();

                //tìm lễ tân hủy lịch hẹn này
                const employee = await db.Employee.findOne({where: {employee_id: employee_id}});
                if(!employee) {
                    return resolve({errCode: 1, message: "Employee doesn't exist"});
                };

                //tìm lịch hẹn
                const appointment = await db.Appointment.findOne({
                    where: {appointment_id: appointment_id}
                });
                if(!appointment) {
                    return resolve({errCode: 1, message: "Appointment doesn't exist"});
                };

                //đã tìm thấy lễ tân và lịch hẹn
                //lịch hẹn ở trạng thái chờ xác nhận hoặc đã xác nhận
                if(appointment.status === 0 || appointment.status === 1) {

                    //lịch hẹn đã được khám
                    const details = await db.Detail.findOne({
                        where: {appointment_id: appointment_id}
                    });
                    if(details) {
                        return resolve({errCode: 6, message: "Appointment has details"});
                    };

                    //lịch hẹn chưa được khám
                    const result = await db.Appointment.update(
                        {
                            employee_id: employee_id, //lễ tân nào hủy lịch hẹn này
                            status: 2 //đã hủy
                        },
                        {
                            where: {appointment_id: appointment_id}
                        }
                    );
                    if(result[0] === 1) {
                        const patient = await db.Patient.findOne({
                            where: {patient_id: appointment.patient_id}
                        });
                        await mail.canceledAppointment({
                            email: patient.email,
                            fullname: patient.fullname,
                            appointment_id: appointment_id
                        });
                        const returnData = await setDoctorScheduleStatus(appointment);
                        resolve(returnData);
                    }
                    else {
                        resolve({errCode: 5, message: "Failed"});
                    };
                }
                else {
                    resolve({errCode: 2, type: "status", message: "Incorrect status"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//HỦY LỊCH HẸN BỞI BỆNH NHÂN
const canceledByPatient = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.appointment_id || !data.patient_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const appointment_id = data.appointment_id.toLowerCase();
                const patient_id = data.patient_id.toLowerCase();

                //tìm bệnh nhân
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                if(!patient) {
                    return resolve({errCode: 1, message: "Patient doesn't exist"});
                };

                //tìm lịch hẹn
                const appointment = await db.Appointment.findOne({
                    where: {appointment_id: appointment_id}
                });
                if(!appointment) {
                    return resolve({errCode: 1, message: "Appointment doesn't exist"});
                };

                //đã tìm thấy bệnh nhân và lịch hẹn
                //lịch hẹn ở trạng thái chờ xác nhận
                if(appointment.status === 0) {
                    const result = await db.Appointment.update(
                        {status: 2}, //đã hủy
                        {where: {appointment_id: appointment_id}}
                    );
                    if(result[0] === 1) {
                        const returnData = await setDoctorScheduleStatus(appointment);
                        resolve(returnData);
                    }
                    else {
                        resolve({errCode: 5, message: "Failed"});
                    };
                }
                else {
                    resolve({errCode: 2, type: "status", message: "Incorrect status"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT CÁC DỊCH VỤ ĐÃ THỰC HIỆN CỦA LỊCH HẸN
const saveDetails = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.doctor_id || !data.appointment_id || !data.detailsList) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const appointment_id = data.appointment_id.toLowerCase();
                    const appointment = await db.Appointment.findOne({
                        where: {appointment_id: appointment_id},
                        include: {model: db.DoctorSchedule},
                        raw: true,
                        nest: true
                    });
                    if(appointment) {

                        if(appointment.DoctorSchedule.doctor_id === doctor_id) {
                            if(appointment.status === 1) {
        
                                const appointmentDetails = await db.Detail.findAll({
                                    where: {appointment_id: appointment_id}
                                });

                                //thêm mới chi tiết
                                let addList = data.detailsList.filter(details => !details.detail_id);
                                if(addList.length) {
                                    addList = addList.map(details => {
                                        return {
                                            appointment_id: details.appointment_id,
                                            service_id: details.service_id,
                                            quantity: details.quantity,
                                            description: details.description
                                        }
                                    });
                                    await db.Detail.bulkCreate(addList);
                                };

                                //sửa chi tiết
                                const oldList = data.detailsList.filter(details => details.detail_id);
                                let deleteList = [];
                                let updateList = [];

                                appointmentDetails.forEach(appointmentDetail => {
                                    const details = oldList.find(oldDetails => {
                                        return oldDetails.detail_id === appointmentDetail.detail_id;
                                    });

                                    //không tìm thấy do phía fe xóa details đó
                                    if(!details) {
                                        deleteList.push(appointmentDetail.detail_id);
                                    }

                                    //tìm thấy
                                    else {

                                        //phía fe không thay đổi dịch vụ
                                        if(appointmentDetail.service_id === details.service_id) {
                                            let updateQuantity;
                                            let updateDescription;

                                            if(appointmentDetail.quantity !== details.quantity) {
                                                updateQuantity = details.quantity;
                                            };

                                            if(appointmentDetail.description !== details.description) {
                                                updateDescription = details.description;
                                            };

                                            if(updateQuantity || updateDescription) {
                                                updateList.push({
                                                    detail_id: appointmentDetail.detail_id,
                                                    service_id: appointmentDetail.service_id,
                                                    quantity: updateQuantity ? updateQuantity : appointmentDetail.quantity,
                                                    description: updateDescription ? updateDescription : appointmentDetail.description
                                                });
                                            };
                                        }

                                        //phía fe thay đổi dịch vụ của row đó
                                        else {
                                            updateList.push({
                                                detail_id: appointmentDetail.detail_id,
                                                service_id: details.service_id,
                                                quantity: details.quantity,
                                                description: details.description
                                            });
                                        };
                                    };
                                });

                                if(deleteList.length) {
                                    await db.Detail.destroy({where: {detail_id: deleteList}});
                                };

                                if(updateList.length) {
                                    for(const details of updateList) {
                                        await db.Detail.update(
                                            {
                                                service_id: details.service_id,
                                                quantity: details.quantity,
                                                description: details.description
                                            },
                                            {
                                                where: {detail_id: details.detail_id}
                                            }
                                        );
                                    };
                                };

                                resolve({errCode: 0, message: "Saved"});
                            }
                            else {
                                resolve({errCode: 2, type: "status", message: "Incorrect status"});
                            };
                        }
                        else {
                            resolve({
                                errCode: 2,
                                type: "doctor",
                                message: "Appointment doesn't belong to this doctor"
                            });
                        };
                    }
                    else {
                        resolve({errCode: 1, message: "Appointment doesn't exist"});
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


//CẬP NHẬT LỊCH HẸN ĐÃ HOÀN THÀNH (khi lịch hẹn là tái khám và không phát sinh dịch vụ)
const confirmDone = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.doctor_id || !data.appointment_id || !data.detailsList) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const appointment_id = data.appointment_id.toLowerCase();
                    const appointment = await db.Appointment.findOne({
                        where: {appointment_id: appointment_id},
                        include: {model: db.DoctorSchedule},
                        raw: true,
                        nest: true
                    });
                    if(appointment) {
                        if(appointment.DoctorSchedule.doctor_id === doctor_id) {
                            if(appointment.status === 1) {
                                const appointmentDetails = await db.Detail.findAll({
                                    where: {
                                        appointment_id: appointment_id
                                    }
                                });

                                //cập nhật chi tiết lịch hẹn
                                let deleteList = [];
                                let updateList = [];
                                appointmentDetails.forEach(appointmentDetail => {
                                    const details = data.detailsList.find(d => d.detail_id === appointmentDetail.detail_id);

                                    //không tìm thấy do phía fe xóa details đó
                                    if(!details) {
                                        deleteList.push(appointmentDetail.detail_id);
                                    }

                                    //tìm thấy
                                    else {
                                        updateList.push({
                                            detail_id: appointmentDetail.detail_id,
                                            description: details.description
                                        });
                                    };
                                });

                                if(deleteList.length) {
                                    await db.Detail.destroy({where: {detail_id: deleteList}});
                                };

                                if(updateList.length) {
                                    for(const details of updateList) {
                                        await db.Detail.update(
                                            {
                                                description: details.description
                                            },
                                            {
                                                where: {detail_id: details.detail_id}
                                            }
                                        );
                                    };
                                };

                                //cập nhật trạng thái lịch hẹn
                                const result = await db.Appointment.update(
                                    {status: 3}, //đã hoàn thành lịch hẹn
                                    {where: {appointment_id: appointment_id}}
                                );
                                if(result[0] === 1) {
                                    resolve({errCode: 0, message: "Confirmed"});
                                }
                                else {
                                    resolve({errCode: 5, message: "Failed"});
                                };
                            }
                            else {
                                resolve({errCode: 2, type: "status", message: "Incorrect status"});
                            };
                        }
                        else {
                            resolve({errCode: 2, type: "doctor", message: "Appointment doesn't belong to this doctor"}); 
                        };
                    }
                    else {
                        resolve({errCode: 1, message: "Appointment doesn't exist"});
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


//GỬI CHI TIẾT LỊCH HẸN TỚI EMAIL
const sendToEmail = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.patient_id || !data.filename || !data.file) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const patient_id = data.patient_id.toLowerCase();
                const patient = await db.Patient.findOne({where: {patient_id: patient_id}});
                
                if(patient) {
                    await mail.detailsInfo({
                        email: patient.email,
                        fullname: patient.fullname,
                        filename: data.filename,
                        file: data.file
                    });
                    resolve({errCode: 0, message: "Sent to email"});
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
    getAll,
    getByID,
    getAllByDoctorID,
    getAllByPatientID,
    bookAppointment,
    acceptAppointment,
    canceledByEmployee,
    canceledByPatient,
    saveDetails,
    confirmDone,
    sendToEmail
};