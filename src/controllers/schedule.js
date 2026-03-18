import scheduleServices from "../services/schedule";


//LẤY TẤT CẢ LỊCH LÀM VIỆC THEO TUẦN
const handleGetAllByWeek = async(req, res) => {
    try {
        const result = await scheduleServices.getAllByWeek(req.params);
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


//LẤY LỊCH LÀM VIỆC CỦA 1 BÁC SĨ THEO NGÀY
const handleGetDoctorSchedulesByDate = async(req, res) => {
    try {
        const result = await scheduleServices.getDoctorSchedulesByDate(req.params);
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


//LẤY LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN (QT, LT, BS, PT) THEO NGÀY
const handleGetUserSchedulesByDate = async(req, res) => {
    try {
        const result = await scheduleServices.getUserSchedulesByDate(req.params);
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


//LẤY LỊCH LÀM VIỆC THEO TUẦN CỦA 1 NHÂN VIÊN
const handleGetUserSchedulesByWeek = async(req, res) => {
    try {
        const result = await scheduleServices.getUserSchedulesByWeek(req.params);
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


//LẤY LỊCH LÀM VIỆC CỦA CÁC BÁC SĨ ĐIỀU TRỊ 1 DANH MỤC THEO NGÀY VÀ CA KHÁM ĐƯỢC CHỌN
const handleGetAllByCategoryDateSession = async(req, res) => {
    try {
        const result = await scheduleServices.getAllByCategoryDateSession(req.params);
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


//THÊM MỚI LỊCH LÀM VIỆC
const handleCreate = async(req, res) => {
    try {
        const result = await scheduleServices.createSchedule(req.body);
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


//DUYỆT 1 LỊCH LÀM VIỆC
const handleAcceptOne = async(req, res) => {
    try {
        const result = await scheduleServices.acceptOne(req.body);
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


//DUYỆT TẤT CẢ LỊCH LÀM VIỆC CỦA 1 NGÀY (CỦA 1 NHÂN VIÊN)
const handleAcceptAll = async(req, res) => {
    try {
        const result = await scheduleServices.acceptAll(req.body);
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


//DUYỆT LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA TẤT CẢ NHÂN VIÊN
const handleAcceptForAWeek = async(req, res) => {
    try {
        const result = await scheduleServices.acceptForAWeek(req.body);
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


//XÓA LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN
const handleDeleteUserSchedule = async(req, res) => {
    try {
        const result = await scheduleServices.deleteUserSchedule(req.params);
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
    handleGetAllByWeek,
    handleGetDoctorSchedulesByDate,
    handleGetUserSchedulesByDate,
    handleGetUserSchedulesByWeek,
    handleGetAllByCategoryDateSession,
    handleCreate,
    handleAcceptOne,
    handleAcceptAll,
    handleAcceptForAWeek,
    handleDeleteUserSchedule
};