import doctorServices from "../services/doctor";


//LẤY TẤT CẢ BÁC SĨ
const handleGetAll = async(req, res) => {
    try {
        const result = await doctorServices.getAll();
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


//LẤY TẤT CẢ BÁC SĨ CHƯA BỊ KHÓA TÀI KHOẢN
const handleGetActive = async(req, res) => {
    try {
        const result = await doctorServices.getActive();
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


//LẤY BÁC SĨ THEO ID
const handleGetByID = async(req, res) => {
    try {
        const result = await doctorServices.getByID(req.params);
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


//LẤY TẤT CẢ BÁC SĨ THEO DANH MỤC ĐANG ĐIỀU TRỊ
const handleGetAllByCategoryID = async(req, res) => {
    try {
        const result = await doctorServices.getAllByCategoryID(req.params);
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


//LẤY CÁC BÁC SĨ CỦA NGÀY DATE VÀ CA KHÁM SESSION_ID
const handleGetAllBySchedule = async(req, res) => {
    try {
        const result  = await doctorServices.getAllBySchedule(req.params);
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


//THÊM MỚI BÁC SĨ
const handleCreate = async(req, res) => {
    try {
        const result = await doctorServices.createDoctor(req.body);
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


//CẬP NHẬT THÔNG TIN BÁC SĨ
const handleUpdate = async(req, res) => {
    try {
        const result  = await doctorServices.updateDoctor({
            ...req.body,
            doctor_id: req.params.doctor_id
        });
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


//CẬP NHẬT PROFILE
const handleUpdateProfile = async(req, res) => {
    try {
        const result  = await doctorServices.updateProfile({
            ...req.body,
            doctor_id: req.params.doctor_id
        });
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
    handleGetActive,
    handleGetByID,
    handleGetAllByCategoryID,
    handleGetAllBySchedule,
    handleCreate,
    handleUpdate,
    handleUpdateProfile,
};