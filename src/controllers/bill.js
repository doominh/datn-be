import billServices from "../services/bill";


//LẤY TẤT CẢ HÓA ĐƠN
const handleGetAll = async(req, res) => {
    try {
        const result = await billServices.getAll();
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


//LẤY THEO ID
const handleGetByID = async(req, res) => {
    try {
        const result = await billServices.getByID(req.params);
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


//LẬP HÓA ĐƠN
const handleCreate = async(req, res) => {
    try {
        const result = await billServices.createBill(req.body);
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


//XÁC NHẬN ĐÃ THANH TOÁN
const handleConfirm = async(req, res) => {
    try {
        const result = await billServices.confirmBill(req.body);
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


//GỬI HÓA ĐƠN TỚI EMAIL
const handleSendToEmail = async(req, res) => {
    try {
        const result = await billServices.sendToEmail(req.body);
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
    handleCreate,
    handleConfirm,
    handleSendToEmail
};