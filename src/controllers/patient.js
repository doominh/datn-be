import patientServices from "../services/patient";


//LẤY TẤT CẢ BỆNH NHÂN
const handleGetAll = async(req, res) => {
    try {
        const result = await patientServices.getAll();
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


//LẤY BỆNH NHÂN THEO ID
const handleGetByID = async(req, res) => {
    try {
        const result = await patientServices.getByID(req.params);
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


//LẤY HỒ SƠ BỆNH ÁN
const handleGetMedicalRecord = async(req, res) => {
    try {
        const result = await patientServices.getMedicalRecord(req.params);
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


//LẤY DANH SÁCH BỆNH NHÂN ĐƯỢC ĐIỀU TRỊ THEO BÁC SĨ
const handleGetAllByDoctorID = async(req, res) => {
    try {
        const result = await patientServices.getAllByDoctorID(req.params);
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


//THÊM MỚI BỆNH NHÂN
const handleCreate = async(req, res) => {
    try {
        const result = await patientServices.createPatient(req.body);
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


//CẬP NHẬT THÔNG TIN BỆNH NHÂn
const handleUpdate = async(req, res) => {
    try {
        const result  = await patientServices.updatePatient({
            ...req.body,
            patient_id: req.params.patient_id
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
        const result  = await patientServices.updateProfile({
            ...req.body,
            patient_id: req.params.patient_id
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
    handleGetMedicalRecord,
    handleGetAllByDoctorID,
    handleCreate,
    handleUpdate,
    handleUpdateProfile
};