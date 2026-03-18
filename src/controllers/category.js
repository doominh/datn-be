import categoryServices from "../services/category";


//LẤY TẤT CẢ DANH MỤC
const handleGetAll = async(req, res) => {
    try {
        const result = await categoryServices.getAll();
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


//LẤY TẤT CẢ DANH MỤC ĐANG HOẠT ĐỘNG
const handleGetActive = async (req, res) => {
    try {
        const result = await categoryServices.getActive();
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


//LẤY DANH MỤC BẰNG ID
const handleGetByID = async (req, res) => {
    try {
        const result = await categoryServices.getByID(req.params);
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


//LẤY TẤT CẢ DANH MỤC THEO ID BÁC SĨ
const handleGetAllByDoctorID = async (req, res) => {
    try {
        const result = await categoryServices.getAllByDoctorID(req.params);
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


//THÊM MỚI DANH MỤC
const handleCreate = async(req, res) => {
    try {
        const result = await categoryServices.createCategory(req.body);
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


//CẬP NHẬT DANH MỤC
const handleUpdate = async(req, res) => {
    try {
        const result = await categoryServices.updateCategory({
            ...req.body,
            category_id: req.params.category_id
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


//XÓA DANH MỤC
const handleDelete = async(req, res) => {
    try {
        const result = await categoryServices.deleteCategory(req.params);
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
    handleGetAllByDoctorID,
    handleCreate,
    handleUpdate,
    handleDelete
};