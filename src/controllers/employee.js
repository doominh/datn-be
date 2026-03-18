import employeeServices from "../services/employee";


//LẤY TẤT CẢ NHÂN VIÊN
const handleGetAll = async(req, res) => {
    try {
        const result = await employeeServices.getAll();
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


//LẤY NHÂN VIÊN THEO ID
const handleGetByID = async(req, res) => {
    try {
        const result = await employeeServices.getByID(req.params);
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


//LẤY CÁC NHÂN VIÊN CỦA NGÀY DATE VÀ CA KHÁM SESSION_ID
const handleGetAllBySchedule = async(req, res) => {
    try {
        const result  = await employeeServices.getAllBySchedule(req.params);
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


//THÊM MỚI NHÂN VIÊN
const handleCreate = async(req, res) => {
    try {
        const result = await employeeServices.createEmployee(req.body);
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


//CẬP NHẬT THÔNG TIN NHÂN VIÊN
const handleUpdate = async(req, res) => {
    try {
        const result  = await employeeServices.updateEmployee({
            ...req.body,
            employee_id: req.params.employee_id
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
        const result  = await employeeServices.updateProfile({
            ...req.body,
            employee_id: req.params.employee_id
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
    handleGetByID,
    handleGetAllBySchedule,
    handleCreate,
    handleUpdate,
    handleUpdateProfile
};