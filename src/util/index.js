import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import moment from "moment";
const saltRounds = 10;


//TẠO ID
const createID = (prefix) => {
    const idv4 = uuid();
    const id = prefix + idv4.slice(0, 8);
    return id;
};


//MÃ HÓA MẬT KHẨU
const hashPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            resolve(hashedPassword);
        }
        catch(e) {
            reject(e);
        };
    });
};


//LẤY NGÀY HIỆN TẠI
const getCurrentDate = () => moment(new Date()).format("YYYY-MM-DD");


//LẤY THỜI GIAN HIỆN TẠI
const getCurrentTime = () => {
    const newDate = new Date();
    let currentHours = newDate.getHours();
    let currentMinutes = newDate.getMinutes();

    if(currentHours < 10) currentHours = "0" + currentHours;
    if(currentMinutes < 10) currentMinutes = "0" + currentMinutes;

    const currentTime = `${currentHours}:${currentMinutes}`;

    return currentTime;
};


//VIẾT HOA CHỮ CÁI ĐẦU CỦA MỖI TỪ
const capitalizeEachWord = (string) => {
    const arr = string.split(" ");
    const length = arr.length;
    for(let i = 0; i < length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    };
    const result = arr.join(" ");
    return result;
};


module.exports = {
    createID,
    hashPassword,
    getCurrentDate,
    getCurrentTime,
    capitalizeEachWord
};