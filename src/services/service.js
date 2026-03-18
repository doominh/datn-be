import db from "../models/index";
import util from "../util/index";


//LẤY DỊCH VỤ THEO TÊN
const getByName = (name) => {
    return new Promise(async(resolve, reject) => {
        try {
            const service_name = name.toLowerCase();
            const service = await db.Service.findOne({where: {service_name: service_name}});
            resolve(service);
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ DỊCH VỤ
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const services = await db.Service.findAll({
                attributes: {exclude: ["category_id"]},
                order: [["createdAt", "ASC"]],
                include: [{model: db.Category, attributes: ["category_id", "category_name"]}],
                raw: true,
                nest: true
            });
            resolve({
                errCode: 0,
                message: "Get all services",
                data: services
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DỊCH VỤ BẰNG ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.service_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const service_id = data.service_id.toLowerCase();
                const service = await db.Service.findOne({where: {service_id: service_id}});
                if(service) {
                    resolve({
                        errCode: 0,
                        message: "Get service by ID",
                        data: service
                    });
                }
                else {
                    resolve({errCode: 1, message: "Service doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ DỊCH VỤ ĐANG HOẠT ĐỘNG THEO ID DANH MỤC
const getActiveByCategoryID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id){
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const category = await db.Category.findOne({where: {category_id: category_id}});
                if(category) {
                    const services = await db.Service.findAll({
                        where: {
                            category_id: category_id,
                            status: 1
                        }
                    });
                    resolve({
                        errCode: 0,
                        message: "Get active services by category id",
                        data: services
                    });
                }
                else {
                    resolve({errCode: 1, message: "Category doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//THÊM MỚI DỊCH VỤ
const createService = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id || !data.service_name || data.price === undefined || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const category = await db.Category.findOne({where: {category_id: category_id}});
                if(category) {
                    const service = await getByName(data.service_name.toLowerCase());
                    if(service) {
                        resolve({errCode: 2, message: "Service name already exists"});
                    }
                    else {
                        const service_id = util.createID("dv");
                        const service_name = data.service_name.toLowerCase();
                        const newService = await db.Service.create({
                            service_id: service_id,
                            category_id: category_id,
                            service_name: service_name,
                            price: data.price,
                            status: data.status
                        });
                        if(newService.dataValues.service_id) {
                            resolve({errCode: 0, message: "Created"});
                        }
                        else {
                            resolve({errCode: 5, message: "Failed"});
                        };
                    };
                }
                else {
                    resolve({errCode: 1, message: "Category doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//CẬP NHẬT DỊCH VỤ
const updateService = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.service_id || !data.category_id || !data.service_name || data.price === undefined || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const service_id = data.service_id.toLowerCase();
                const service = await db.Service.findOne({where: {service_id: service_id}});
                if(service) {
                    const category = await db.Category.findOne({where: {category_id: category_id}});
                    if(category) {    
                        const serviceInDB = await getByName(data.service_name);
                        if(serviceInDB && serviceInDB.service_id !== service_id) {
                            resolve({errCode: 2, message: "Service name already exists"});
                        }
                        else {
                            const service_name = data.service_name.toLowerCase();
                            const result = await db.Service.update(
                                {
                                    category_id: category_id,
                                    service_name: service_name,
                                    price: data.price,
                                    status: data.status
                                },
                                {
                                    where: {service_id: service_id}
                                }
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
                        resolve({errCode: 1, message: "Category doesn't exist"});
                    };
                }
                else {
                    resolve({errCode: 1, message: "Service doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XÓA DỊCH VỤ
const deleteService = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.service_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const service_id = data.service_id.toLowerCase();
                let isBeingUsed = await db.Detail.findOne({where: {service_id: service_id}});
                if(!isBeingUsed) isBeingUsed = await db.BillService.findOne({where: {service_id: service_id}});

                if(isBeingUsed) {
                    resolve({errCode: 6, message: "Is being used"});
                }
                else {
                    const result = await db.Service.destroy({where: {service_id: service_id}});
                    if(result === 1) {
                        resolve({errCode: 0, message: "Deleted"});
                    }
                    else {
                        resolve({errCode: 1, message: "Service doesn't exist"});
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
    getByID,
    getActiveByCategoryID,
    createService,
    updateService,
    deleteService
};