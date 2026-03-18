import sessionServices from "../services/session";


//LẤY TẤT CẢ CA KHÁM
const handleGetAll = async(req, res) => {
    try {
        const result = await sessionServices.getAll();
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


//LẤY TẤT CẢ CA KHÁM ĐANG HOẠT ĐỘNG
const handleGetActive = async (req, res) => {
    try {
        const result = await sessionServices.getActive();
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


//LẤY CA KHÁM BẰNG ID
const handleGetByID = async (req, res) => {
    try {
        const result = await sessionServices.getByID(req.params);
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


//THÊM MỚI CA KHÁM
const handleCreate = async(req, res) => {
    try {
        const result = await sessionServices.createSession(req.body);
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


//CẬP NHẬT CA KHÁM
const handleUpdate = async(req, res) => {
    try {
        const result = await sessionServices.updateSession({
            ...req.body,
            session_id: req.params.session_id
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


//XÓA CA KHÁM
const handleDelete = async(req, res) => {
    try {
        const result = await sessionServices.deleteSession(req.params);
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
    handleCreate,
    handleUpdate,
    handleDelete
};