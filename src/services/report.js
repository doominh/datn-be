const { Op } = require("sequelize");
import db from "../models/index";
import moment from "moment";
import sequelize from "sequelize";
import { getDoctorSchedulesByMonth, getEmployeeSchedulesByMonth } from "./schedule";


//LẤY 7 NGÀY TÍNH TỪ THỜI ĐIỂM HIỆN TẠI TRỞ VỀ TRƯỚC
const get7Days = () => {
    let sevenDays = [];
    for(let i = 0; i < 7; i++) {
        sevenDays.push(moment(new Date()).subtract(i, "days").format("YYYY-MM-DD").valueOf());
    };

    //xếp theo thứ tự ngược lại -> hiển thị lên chart từ ngày nhỏ đến ngày lớn
    let reverseDays = [];
    for(let i = sevenDays.length - 1; i >= 0; i--) {
        reverseDays.push(sevenDays[i]);
    };

    return reverseDays;
};


//LẤY TẤT CẢ NGÀY TRONG 1 THÁNG NÀO ĐÓ
const getDaysOfMonth = (month, year) => {
    let monthIndex = month - 1; // 0..11 thay vì 1..12
    let date = new Date(year, monthIndex, 1);
    let result = [];
    while (date.getMonth() == monthIndex) {
        result.push(moment(date).format("DD-MM-YYYY"));
        date.setDate(date.getDate() + 1);
    };
    return result;
};


/** API **/


//LẤY DOANH THU CỦA NGÀY HIỆN TẠI
const getCurrentRevenue = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const bills = await db.Bill.findAll({
                where: {
                    createdAt: { 
                        [Op.gt]: new Date().setHours(0, 0, 0, 0),
                        [Op.lt]: new Date()
                    }
                }
            });
            let currentTotal = 0;
            bills.forEach(bill => currentTotal += bill.total);
            resolve({
                errCode: 0,
                message: "Get current revenue",
                data: {
                    date: moment(new Date()).format("DD-MM-YYYY"),
                    total: currentTotal
                }
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
const getCurrentAppointment = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const appointments = await db.Appointment.findAll({
                where: {
                    createdAt: { 
                        [Op.gt]: new Date().setHours(0, 0, 0, 0),
                        [Op.lt]: new Date()
                    }
                }
            });
            resolve({
                errCode: 0,
                message: "Get current appointment",
                data: {
                    date: moment(new Date()).format("DD-MM-YYYY"),
                    total: appointments.length
                }
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
const getCurrentPatient = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const patients = await db.Patient.findAll({
                where: {
                    createdAt: { 
                        [Op.gt]: new Date().setHours(0, 0, 0, 0),
                        [Op.lt]: new Date()
                    }
                }
            });
            resolve({
                errCode: 0,
                message: "Get current patient",
                data: {
                    date: moment(new Date()).format("DD-MM-YYYY"),
                    total: patients.length
                }
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
const getServicesFor7Days = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const services = await db.Detail.findAll({
                attributes: [
                    "service_id",
                    [sequelize.fn("COUNT", sequelize.col("Detail.service_id")), "times"],
                    [sequelize.fn("date_format", sequelize.col("Detail.createdAt"), "%Y-%m"), "month"]
                ],
                group: ["Detail.service_id"],
                include: [
                    {
                        model: db.Service
                    }
                ],
                raw: true,
                nest: true
            });
            resolve({
                errCode: 0,
                message: "Get services for 7 days",
                data: services
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
const getAppointmentsFor7Days = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const sevenDays = get7Days();
            const appointments = await db.Appointment.findAll({
                attributes: [
                    "appointment_id",
                    "type_id",
                    "status",
                    [sequelize.fn("date_format", sequelize.col("createdAt"), "%Y-%m-%d"), "createdAt"]
                ],
                raw: true,
                nest: true
            });
            let data = [];
            sevenDays.forEach(date => {
                const appointmentByDate = {};
                appointmentByDate.date = date,
                appointmentByDate.new = [];
                appointmentByDate.reExam = [];

                appointments.forEach(appointment => {
                    if(appointment.createdAt === date) {
                        if(appointment.type_id === 1) appointmentByDate.new.push(appointment);
                        else appointmentByDate.reExam.push(appointment);
                    };
                });
                data.push(appointmentByDate);
            });
            resolve({
                errCode: 0,
                message: "Get appointments for 7 days",
                data: data
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
const getRevenueFor7Days = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const sevenDays = get7Days();
            const bills = await db.Bill.findAll({
                attributes: [
                    "bill_id",
                    "total",
                    [sequelize.fn("date_format", sequelize.col("createdAt"), "%Y-%m-%d"), "createdAt"]
                ]
            });
            let data = [];
            sevenDays.forEach(date => {
                const revenueByDate = {};
                revenueByDate.date = date,
                revenueByDate.total = 0;
                revenueByDate.bills = [];

                bills.forEach(bill => {
                    if(bill.createdAt === date) {
                        revenueByDate.total += bill.total;
                        revenueByDate.bills.push(bill);
                    };
                });
                data.push(revenueByDate);
            });
            resolve({
                errCode: 0,
                message: "Get revenue for 7 days",
                data: data
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
const reportSchedule = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.month || !data.year) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {

                //chỉ lấy ngày (vd: 1, 2, 12, 28...)
                let monthIndex = data.month - 1; // 0..11 thay vì 1..12
                let date = new Date(data.year, monthIndex, 1);
                const onlyDays = [];
                const daysOfMonth = [];
                while (date.getMonth() == monthIndex) {
                    onlyDays.push(date.getDate());
                    daysOfMonth.push(moment(date).format("YYYY-MM-DD"));
                    date.setDate(date.getDate() + 1);
                };

                //lấy tất cả ca khám đang hoạt động
                const sessions = await db.Session.findAll({
                    where: {status: 1},
                    order: [["createdAt", "ASC"]]
                });

                //lấy lịch của bác sĩ theo 1 tháng
                const doctorSchedules = await getDoctorSchedulesByMonth(daysOfMonth);

                //lấy lịch của bác sĩ theo 1 tháng
                const employeeSchedules = await getEmployeeSchedulesByMonth(daysOfMonth);

                resolve({
                    onlyDays,
                    sessions,
                    userSchedules: [...doctorSchedules, ...employeeSchedules]
                });
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
const reportService = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.month) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                let services = await db.Detail.findAll({
                    attributes: [
                        "service_id",
                        [sequelize.fn("COUNT", sequelize.col("Detail.service_id")), "times"],
                        [sequelize.fn("date_format", sequelize.col("Detail.createdAt"), "%Y-%m"), "month"]
                    ],
                    group: ["Detail.service_id"],
                    include: [
                        {
                            model: db.Service
                        }
                    ],
                    raw: true,
                    nest: true
                });
                services = services.filter(service => service.month === data.month);
                resolve(services);
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
const reportAppointment = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.month || !data.year) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const daysOfMonth = getDaysOfMonth(data.month, data.year);
                const appointments = await db.Appointment.findAll({
                    attributes: [
                        "appointment_id",
                        "type_id",
                        "status",
                        [sequelize.fn("date_format", sequelize.col("Appointment.createdAt"), "%d-%m-%Y"), "createdAt"]
                    ],
                    raw: true,
                    nest: true
                });
                const appointmentByMonth = {};
                appointmentByMonth.totalByMonth = 0;
                appointmentByMonth.totalNew = 0;
                appointmentByMonth.totalReExam = 0;
                appointmentByMonth.totalNotAccepted = 0;
                appointmentByMonth.totalAccepted = 0;
                appointmentByMonth.totalCanceled = 0;
                appointmentByMonth.details = [];

                //lọc lấy những lịch hẹn của các ngày của tháng cần xem
                daysOfMonth.forEach(date => {
                    let byDate = {};
                    byDate.date = date;
                    byDate.total = 0;
                    byDate.new = 0;
                    byDate.reExam = 0;
                    byDate.notAccepted = 0;
                    byDate.accepted = 0;
                    byDate.canceled = 0;

                    appointments.forEach(appointment => {
                        if(appointment.createdAt === date) {
                            byDate.total++;

                            if(appointment.type_id === 1) byDate.new++;
                            else byDate.reExam++;

                            if(appointment.status === 0) byDate.notAccepted++;
                            if(appointment.status === 2) byDate.canceled++;
                            if(appointment.status === 1 || appointment.status === 3) byDate.accepted++;
                        };
                    });
                    appointmentByMonth.totalByMonth += byDate.total;
                    appointmentByMonth.totalNew += byDate.new;
                    appointmentByMonth.totalReExam += byDate.reExam;
                    appointmentByMonth.totalNotAccepted += byDate.notAccepted;
                    appointmentByMonth.totalAccepted += byDate.accepted;
                    appointmentByMonth.totalCanceled += byDate.canceled;
                    appointmentByMonth.details.push(byDate);
                });
                resolve(appointmentByMonth);
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XUẤT FILE EXCEL DOANH THU THEO THÁNG
const reportRevenue = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.month || !data.year) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const daysOfMonth = getDaysOfMonth(data.month, data.year);
                const bills = await db.Bill.findAll({
                    attributes: [
                        "bill_id",
                        "total",
                        "status",
                        [sequelize.fn("date_format", sequelize.col("Bill.createdAt"), "%d-%m-%Y"), "createdAt"]
                    ],
                    raw: true,
                    nest: true
                });
                const revenueByMonth = {};
                revenueByMonth.totalByMonth = 0;
                revenueByMonth.totalPaid = 0;
                revenueByMonth.totalUnpaid = 0;
                revenueByMonth.details = [];

                //lọc lấy những bill của các ngày của tháng cần xem
                daysOfMonth.forEach(date => {
                    let byDate = {};
                    byDate.date = date;
                    byDate.total = 0;
                    byDate.paid = 0;
                    byDate.unpaid = 0;

                    bills.forEach(bill => {
                        if(bill.createdAt === date) {
                            if(bill.status) {
                                byDate.paid += bill.total;
                            }
                            else {
                                byDate.unpaid += bill.total;
                            };
                            byDate.total += bill.total;
                        };
                    });
                    revenueByMonth.totalByMonth += byDate.total;
                    revenueByMonth.totalPaid += byDate.paid;
                    revenueByMonth.totalUnpaid += byDate.unpaid;
                    revenueByMonth.details.push(byDate);
                });
                resolve(revenueByMonth);
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


module.exports = {
    getCurrentRevenue,
    getCurrentAppointment,
    getCurrentPatient,
    getServicesFor7Days,
    getAppointmentsFor7Days,
    getRevenueFor7Days,
    reportSchedule,
    reportService,
    reportAppointment,
    reportRevenue,
};