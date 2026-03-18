import authServices from "../services/auth";
require("dotenv").config();


//XÁC MINH EMAIL BỆNH NHÂN
const handleVerify = async(req, res) => {
    try {
        const result = await authServices.verify(req.query);
        const {errCode, role} = result;
        if(errCode === 0) {
            if(role == 1) {
                res.redirect(`${process.env.REACT_CLIENT_URL}`);
            }
            else {
                res.redirect(`${process.env.REACT_ADMIN_URL}`);
            };
        }
        else if(errCode === 2) {
            res.send("page phía react: đã xác minh");
        }
        else if(errCode === 3 || errCode === 5) {
            return res.status(200).json(result);
        }
        else {
            res.send("page 404 phía react");
        };
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//ĐĂNG KÝ
const handleRegister = async(req, res) => {
    try {
        const result = await authServices.register(req.body);
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


//ĐĂNG NHẬP CHO BỆNH NHÂN
const handleLoginClient = async(req, res) => {
    try {
        const result = await authServices.loginClient(req.body);
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


//ĐĂNG NHẬP TRANG QUẢN TRỊ
const handleLoginAdmin = async(req, res) => {
    try {
        const result = await authServices.loginAdmin(req.body);
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


//ĐỔI MẬT KHẨU
const handleChangePassword = async(req, res) => {
    try {
        const result = await authServices.changePassword({...req.body, user_id: req.params.user_id});
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


//GỬI EMAIL CHO CASE QUÊN MẬT KHẨU
const handleSendResetLink = async(req, res) => {
    try {
        const result = await authServices.sendResetLink(req.body);
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


//XÁC MINH LINK ĐẶT LẠI MẬT KHẨU
const handleVerifyResetLink = async(req, res) => {
    try {
        const result = await authServices.verifyResetLink(req.params);
        const {errCode} = result;
        const {role} = result.data;

        if(errCode === 1 || errCode === 2 || errCode === 7) {
            if(role == 1) {
                res.redirect(`${process.env.REACT_CLIENT_URL}`);
            }
            else {
                res.redirect(`${process.env.REACT_ADMIN_URL}`);
            };
        }
        else if(errCode === 0) {
            const {user_id, token} = result.data;
            if(role == 1) {
                res.redirect(`${process.env.REACT_CLIENT_URL}/dat-lai-mat-khau/${user_id}/${token}`);
            }
            else {
                res.redirect(`${process.env.REACT_ADMIN_URL}/dat-lai-mat-khau/${user_id}/${token}`);
            };
        }
        else return res.status(200).json(result);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//ĐẶT LẠI MẬT KHẨU CHO CASE QUÊN MẬT KHẨU
const handleResetPassword = async(req, res) => {
    try {
        const result = await authServices.resetPassword({...req.params, ...req.body});
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


//KHÓA - MỞ KHÓA TÀI KHOẢN
const handleChangeBlockStatus = async(req, res) => {
    try {
        const result = await authServices.changeBlockStatus(req.body);
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


//ĐỔI EMAIL
const handleChangeEmail = async(req, res) => {
    try {
        const result = await authServices.changeEmail({...req.body, user_id: req.params.user_id});
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


//KIỂM TRA PASSWORD (XÁC NHẬN LƯU THÔNG TIN)
const handleCheckPassword = async(req, res) => {
    try {
        const result = await authServices.checkPassword(req.body);
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


//REFRESH TOKEN
const handleRefreshToken = async(req, res) => {
    try {
        const result = await authServices.refreshToken(req.body);
        // if(result.refreshToken) {
        //     res.cookie("refreshToken", result.refreshToken, {
        //         httpOnly: true,
        //         secure: false, //deploy thì để thành true
        //         sameSite: "strict"
        //     });
        //     const {refreshToken, ...rest} = result;
        //     return res.status(200).json(rest);
        // };
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
    handleVerify,
    handleRegister,
    handleLoginClient,
    handleLoginAdmin,
    handleChangePassword,
    handleSendResetLink,
    handleVerifyResetLink,
    handleResetPassword,
    handleChangeBlockStatus,
    handleChangeEmail,
    handleCheckPassword,
    handleRefreshToken
};