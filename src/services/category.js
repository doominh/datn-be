import db from "../models/index";
import util from "../util/index";


//LẤY DANH MỤC THEO TÊN
const getByName = (name) => {
    return new Promise(async(resolve, reject) => {
        try {
            const category_name = name.toLowerCase();
            const category = await db.Category.findOne({where: {category_name: category_name}});
            resolve(category);
        }
        catch(e) {
            reject(e);
        };
    });
};


//** API **//


//LẤY TẤT CẢ DANH MỤC
const getAll = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const categories = await db.Category.findAll({order: [["createdAt", "ASC"]]});
            resolve({
                errCode: 0,
                message: "Get all categories",
                data: categories
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY TẤT CẢ DANH MỤC ĐANG HOẠT ĐỘNG
const getActive = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const categories = await db.Category.findAll({where: {status: 1}});
            resolve({
                errCode: 0,
                message: "Get active categories",
                data: categories
            });
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY DANH MỤC BẰNG ID
const getByID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const category = await db.Category.findOne({where: {category_id: category_id}});
                if(category) {
                    resolve({
                        errCode: 0,
                        message: "Get category by ID",
                        data: category
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


//LẤY TẤT CẢ DANH MỤC THEO ID BÁC SĨ
const getAllByDoctorID = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.doctor_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const doctor_id = data.doctor_id.toLowerCase();
                const doctor = await db.Doctor.findOne({where: {doctor_id: doctor_id}});
                if(doctor) {
                    const categoryIDList = await db.DoctorCategory.findAll({
                        where: {doctor_id: doctor_id},
                        attributes: ["category_id"]
                    });
                    let list = [];
                    categoryIDList.forEach(item => list.push(item.category_id));
                    const categories = await db.Category.findAll({where: {category_id: list}});                
                    resolve({
                        errCode: 0,
                        message: "Get categories by doctor id",
                        data: categories
                    });
                }
                else {
                    resolve({errCode: 1, message: "Doctor doesn't exist"});
                };
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//THÊM MỚI DANH MỤC
const createCategory = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_name || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category = await getByName(data.category_name);
                if(category) {
                    resolve({errCode: 2, message: "Category name already exists"});
                }
                else {
                    const category_id = util.createID("ct");
                    const category_name = data.category_name.toLowerCase();
                    const newCategory = await db.Category.create({
                        category_id: category_id,
                        category_name: category_name,
                        status: data.status
                    });
                    if(newCategory.dataValues.category_id) {
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


//CẬP NHẬT DANH MỤC
const updateCategory = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id || !data.category_name || data.status === undefined) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_id = data.category_id.toLowerCase();
                const category = await db.Category.findOne({where: {category_id: category_id}});
                if(category) {
                    const categoryInDB = await getByName(data.category_name);
                    if(categoryInDB && categoryInDB.category_id !== category_id) {
                        resolve({errCode: 2, message: "Category name already exists"});
                    }
                    else {
                        const category_name = data.category_name.toLowerCase();
                        const result = await db.Category.update(
                            {
                                category_name: category_name,
                                status: data.status
                            },
                            {
                                where: {category_id: category_id}
                            }
                        );
                        if(result[0] === 1) {
                            await db.Service.update(
                                {status: data.status},
                                {where: {category_id: category_id}}
                            );
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
            };
        }
        catch(e) {
            reject(e);
        };
    });
};


//XÓA DANH MỤC
const deleteCategory = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.category_id) {
                resolve({errCode: 3, message: "Missing params"});
            }
            else {
                const category_is = data.category_id.toLowerCase();
                const isBeingUsed = await db.Service.findOne({where: {category_id: category_is}});
                if(isBeingUsed) {
                    resolve({errCode: 6, message: "Is being used"});
                }
                else {
                    const result = await db.Category.destroy({where: {category_id: category_is}});
                    if(result === 1) {
                        resolve({errCode: 0, message: "Deleted"});
                    }
                    else {
                        resolve({errCode: 1, message: "Category doesn't exist"});
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
    getAllByDoctorID,
    createCategory,
    updateCategory,
    deleteCategory
};