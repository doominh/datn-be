import serviceServices from "../services/service";


//LẤY TẤT CẢ DỊCH VỤ
const handleGetAll = async(req, res) => {
    try {
        const result = await serviceServices.getAll();
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


//LẤY DỊCH VỤ BẰNG ID
const handleGetByID = async (req, res) => {
    try {
        const result = await serviceServices.getByID(req.params);
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


//LẤY TẤT CẢ DỊCH VỤ ĐANG HOẠT ĐỘNG THEO ID DANH MỤC
const handleGetActiveByCategoryID = async (req, res) => {
    try {
        const result = await serviceServices.getActiveByCategoryID(req.params);
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


//THÊM MỚI DỊCH VỤ
const handleCreate = async(req, res) => {
    try {
        const result = await serviceServices.createService(req.body);
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


//CẬP NHẬT DỊCH VỤ
const handleUpdate = async(req, res) => {
    try {
        const result = await serviceServices.updateService({
            ...req.body,
            service_id: req.params.service_id
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


//XÓA DỊCH VỤ
const handleDelete = async(req, res) => {
    try {
        const result = await serviceServices.deleteService(req.params);
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
    handleGetActiveByCategoryID,
    handleCreate,
    handleUpdate,
    handleDelete
};