import db from "../models/index";
import util from "../util/index";


//LẤY TẤT CẢ CA KHÁM
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const sessions = await db.Session.findAll({order: [["createdAt", "ASC"]]});
            resolve({
                errCode: 0,
                message: "Get all sessions",
                data: sessions
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ CA KHÁM ĐANG HOẠT ĐỘNG
const getActive = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const sessions = await db.Session.findAll({
                where: {status: 1},
                order: [["createdAt", "ASC"]]
            });
            resolve({
                errCode: 0,
                message: "Get active sessions",
                data: sessions
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY CA KHÁM BẰNG ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.session_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const session_id = data.session_id.toLowerCase();
                const session = await db.Session.findOne({where: {session_id: session_id}});
                if(session) {
                    resolve({
                        errCode: 0,
                        message: "Get session by ID",
                        data: session
                    });
                }
                else {
                    resolve({errCode: 1, message: "Session doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//THÊM MỚI CA KHÁM
const createSession = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.time || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const session = await db.Session.findOne({where: {time: data.time}});
                if(session) {
                    resolve({errCode: 2, message: "Session already exists"});
                }
                else {
                    const session_id = util.createID("ck");
                    const newSession = await db.Session.create({
                        session_id: session_id,
                        time: data.time,
                        status: data.status
                    });
                    if(newSession.dataValues.session_id) {
                        resolve({errCode: 0, message: "Created"});
                    }
                    else {
                        resolve({errCode: 5, message: "Failed"});
                    };
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT CA KHÁM
const updateSession = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.session_id || !data.time || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const session_id = data.session_id.toLowerCase();
                const session = await db.Session.findOne({where: {session_id: session_id}});
                if(session) {
                    const sessionInDB = await db.Session.findOne({where: {time: data.time}});
                    if(sessionInDB && sessionInDB.session_id !== session_id) {
                        resolve({errCode: 2, message: "Session already exists"});
                    }
                    else {
                        const result = await db.Session.update(
                            {time: data.time, status: data.status},
                            {where: {session_id: session_id}}
                        );
                        if(result[0] === 1) {
                            resolve({errCode: 0, message: "Updated"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Session doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XÓA CA KHÁM
const deleteSession = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.session_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const session_id = data.session_id.toLowerCase();
                const isBeingUsed = await db.Schedule.findOne({where: {session_id: session_id}});
                if(isBeingUsed) {
                    resolve({errCode: 6, message: "Is being used"});
                }
                else {
                    const result = await db.Session.destroy({where: {session_id: session_id}});
                    if(result === 1) {
                        resolve({errCode: 0, message: "Deleted"});
                    }
                    else {
                        resolve({errCode: 1, message: "Session doesn't exist"});
                    };
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


module.exports = {
    getAll,
    getActive,
    getByID,
    createSession,
    updateSession,
    deleteSession
};