import jwt from "jsonwebtoken";
require("dotenv").config();


//XÁC THỰC BỆNH NHÂN
const verifyPatient = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                if(user.user_id.slice(0, 2) === "bn") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};

//XÁC THỰC BỆNH NHÂN KHÔNG BẮT BUỘC
const verifyPatientOptional = async (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if (!err && user?.user_id?.slice(0, 2) === "bn") {
                req.verifiedPatientId = user.user_id;
            }
            next();
        });
    } else {
        next();
    }
};

//XÁC THỰC QUẢN TRỊ VIÊN
const verifyAdmin = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                if(user.user_id.slice(0, 2) === "qt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC LỄ TÂN
const verifyReceptionist = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                if(user.user_id.slice(0, 2) === "lt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC BÁC SĨ
const verifyDoctor = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                if(user.user_id.slice(0, 2) === "bs") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC NGƯỜI DÙNG (BN, QT, LT, BS, PT)
const verifyUser = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "bn" || prefix === "qt" || prefix === "lt" || prefix === "bs" || prefix === "pt") {
                    next();
                }
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC ADMIN / LỄ TÂN
const verifyAdminOrReceptionist = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "qt" || prefix === "lt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC LỄ TÂN / BÁC SĨ
const verifyReceptionistOrDoctor = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "lt" || prefix === "bs") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC ADMIN / LỄ TÂN / BÁC SĨ
const verifyAdminOrReceptionistOrDoctor = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "qt" || prefix === "lt" || prefix === "bs") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC BỆNH NHÂN / LỄ TÂN / BÁC SĨ
const verifyPatientOrReceptionistOrDoctor = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "bn" || prefix === "lt" || prefix === "bs") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC ADMIN / LỄ TÂN / BÁC SĨ / PHỤ TÁ
const verifyAdminOrReceptionistOrDoctorOrAssistant = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "qt" || prefix === "lt" || prefix === "bs" || prefix === "pt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC LỄ TÂN / BÁC SĨ / PHỤ TÁ
const verifyReceptionistOrDoctorOrAssistant = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "lt" || prefix === "bs" || prefix === "pt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC ADMIN / LỄ TÂN / PHỤ TÁ
const verifyAdminOrReceptionistOrAssistant = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "qt" || prefix === "lt" || prefix === "pt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC BỆNH NHÂN / ADMIN / LỄ TÂN
const verifyPatientOrAdminOrReceptionist = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "bn" || prefix === "qt" || prefix === "lt") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


//XÁC THỰC BỆNH NHÂN / ADMIN / LỄ TÂN / BÁC SĨ
const verifyPatientOrAdminOrReceptionistOrDoctor = async(req, res, next) => {
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(" ")[1];
        jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
            if(err) {
                return res.status(403).json("Token is not valid");
            }
            else {
                const prefix = user.user_id.slice(0, 2);
                if(prefix === "bn" || prefix === "qt" || prefix === "lt" || prefix === "bs") next();
                else return res.status(403).json("Role is not valid");
            };
        });   
    }
    else return res.status(401).json("You are not authenticated");
};


module.exports = {
    verifyPatient,
    verifyPatientOptional,
    verifyAdmin,
    verifyReceptionist,
    verifyDoctor,
    verifyUser,
    verifyAdminOrReceptionist,
    verifyReceptionistOrDoctor,
    verifyAdminOrReceptionistOrDoctor,
    verifyPatientOrReceptionistOrDoctor,
    verifyAdminOrReceptionistOrDoctorOrAssistant,
    verifyReceptionistOrDoctorOrAssistant,
    verifyAdminOrReceptionistOrAssistant,
    verifyPatientOrAdminOrReceptionist,
    verifyPatientOrAdminOrReceptionistOrDoctor
};