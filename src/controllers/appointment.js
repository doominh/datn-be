import appointmentServices from "../services/appointment";


//LẤY TẤT CẢ LỊCH HẸN
const handleGetAll = async(req, res) => {
    try {
        const result = await appointmentServices.getAll();
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//LẤY LỊCH HẸN THEO ID
const handleGetByID = async(req, res) => {
    try {
        const result = await appointmentServices.getByID(req.params);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//LẤY TẤT CẢ LỊCH HẸN ĐÃ ĐƯỢC DUYỆT/HỦY/HOÀN THÀNH THEO ID BÁC SĨ PHỤ TRÁCH
const handleGetAllByDoctorID = async(req, res) => {
    try {
        const result = await appointmentServices.getAllByDoctorID(req.params);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//LẤY TẤT CẢ THEO ID BỆNH NHÂN
const handleGetAllByPatientID = async(req, res) => {
    try {
        const result = await appointmentServices.getAllByPatientID(req.params);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//ĐẶT LỊCH HẸN
const handleBookAppointment = async(req, res) => {
    try {
        const result = await appointmentServices.bookAppointment(req.body);
        if(result.errCode === 0) {
            const socket = req.app.get("socketio");
            socket.emit("new_appointment", {
                message: "Yêu cầu đặt lịch hẹn mới",
                appointment_id: result.data.appointment_id,
                fullname: result.data.fullname
            });
        };
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//DUYỆT LỊCH HẸN
const handleAcceptAppointment = async(req, res) => {
    try {
        const result = await appointmentServices.acceptAppointment(req.body);
        if(result.errCode === 0) {
            const socket = req.app.get("socketio");
            socket.emit("new_accepted_appointment", {
                ...result.data,
                message: "Có lịch hẹn mới"
            });
        };
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//HỦY LỊCH HẸN BỞI LỄ TÂN
const handleCanceledByEmployee = async(req, res) => {
    try {
        const result = await appointmentServices.canceledByEmployee(req.body);
        if(result.errCode === 0) {
            const socket = req.app.get("socketio");
            socket.emit("new_canceled_appointment", {
                ...result.data,
                message: "Có lịch hẹn đã bị hủy"
            });
        };
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//HỦY LỊCH HẸN BỞI BỆNH NHÂN
const handleCanceledByPatient = async(req, res) => {
    try {
        const result = await appointmentServices.canceledByPatient(req.body);
        if(result.errCode === 0) {
            const socket = req.app.get("socketio");
            socket.emit("new_canceled_appointment", {
                ...result.data,
                message: "Có lịch hẹn đã bị hủy"
            });
        };
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//CẬP NHẬT CÁC DỊCH VỤ ĐÃ THỰC HIỆN CỦA LỊCH HẸN
const handleSaveDetails = async(req, res) => {
    try {
        const result = await appointmentServices.saveDetails(req.body);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//CẬP NHẬT LỊCH HẸN ĐÃ HOÀN THÀNH (khi lịch hẹn là tái khám và không phát sinh dịch vụ)
const handleConfirmDone = async(req, res) => {
    try {
        const result = await appointmentServices.confirmDone(req.body);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//GỬI CHI TIẾT LỊCH HẸN TỚI EMAIL
const handleSendToEmail = async(req, res) => {
    try {
        const result = await appointmentServices.sendToEmail(req.body);
        return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


module.exports = {
    handleGetAll,
    handleGetByID,
    handleGetAllByDoctorID,
    handleGetAllByPatientID,
    handleBookAppointment,
    handleAcceptAppointment,
    handleCanceledByEmployee,
    handleCanceledByPatient,
    handleSaveDetails,
    handleConfirmDone,
    handleSendToEmail
};