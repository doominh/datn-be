import exceljs from "exceljs";
import reportServices from "../services/report";
import moment, { max } from "moment";
import util from "../util/index";


//LẤY DOANH THU CỦA NGÀY HIỆN TẠI
const handleGetCurrentRevenue = async(req, res) => {
    try {
        const result = await reportServices.getCurrentRevenue();
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


//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
const handleGetCurrentAppointment = async(req, res) => {
    try {
        const result = await reportServices.getCurrentAppointment();
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


//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
const handleGetCurrentPatient = async(req, res) => {
    try {
        const result = await reportServices.getCurrentPatient();
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


//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
const handleGetServicesFor7Days = async(req, res) => {
    try {
        const result = await reportServices.getServicesFor7Days();
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


//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
const handleGetAppointmentsFor7Days = async(req, res) => {
    try {
        const result = await reportServices.getAppointmentsFor7Days();
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


//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
const handleGetRevenueFor7Days = async(req, res) => {
    try {
        const result = await reportServices.getRevenueFor7Days();
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


//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
const handleReportSchedule = async(req, res) => {
    try {
        const {month, year} = req.params
        const data = await reportServices.reportSchedule(req.params);
        const workbook = new exceljs.Workbook();
        const sheet = workbook.addWorksheet(`LichLamViec_${month}-${year}`);

        //khai báo các cột sẽ có trong worksheet
        sheet.columns = [
            {header: "Mã nhân viên", key: "user_id", width: 15},
            {header: "Chức vụ", key: "role", width: 15},
            {header: "Họ và tên", key: "fullname", width: 30},
            {header: "Ca khám", key: "time", width: 15},
            ...data.onlyDays.map(date => {
                return {
                    header: date, width: 3
                }
            })
        ];

        //max columns là 31 cột cho 31 ngày
        const maxColumns = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI"];

        //căn chỉnh số column cho phù hợp với số ngày của tháng cần xem
        const lengthDayOfMonth = data.onlyDays.length;
        const dayColumns = maxColumns.slice(0, lengthDayOfMonth);

        //column của thông tin nhân viên
        const infoColumns = ["A", "B", "C", "D"];

        //tạo giá trị cho các hàng
        let row = 2;
        await data.userSchedules.map(userSchedule => {
            data.sessions.forEach(session => {            
                sheet.addRow({
                    user_id: userSchedule.user.user_id.toUpperCase(),
                    role:
                        userSchedule.user.user_id.slice(0, 2) === "qt" ? "Quản trị viên" :
                        userSchedule.user.user_id.slice(0, 2) === "lt" ? "Lễ tân" :
                        userSchedule.user.user_id.slice(0, 2) === "bs" ? "Bác sĩ" : "Phụ tá",
                    fullname: userSchedule.user.fullname,
                    time: session.time
                });
                dayColumns.forEach((column, index) => {

                    //bao nhiêu column là userSchedule.schedules có bấy nhiêu phần từ
                    //vì dayColumns và userSchedule.schedules đều có thông tin các ngày của 1 tháng
                    let byDate = userSchedule.schedules[index];
                    if(byDate.list.length) {
                        byDate.list.forEach(schedule => {
                            if(schedule.Session.session_id === session.session_id) {
                                sheet.getCell(`${column}${row}`).value = "x";
                            };
                        });
                    };
                });
                row++;
            });
            dayColumns.forEach(column => {                
                sheet.getCell(`${column}${row - 1}`).border = {
                    bottom: {style: "thin"}
                };
            });
        });

        //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
        sheet.getRow(1).height = 30;

        //custom màu, kiểu chữ cho hàng tiêu đề
        [...infoColumns, ...dayColumns].map(column => {
            sheet.getCell(`${column}1`).alignment = {
                vertical: "middle",
                horizontal: "center"
            };
            sheet.getCell(`${column}1`).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(`${column}1`).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        //canh giữa tất cả hàng của cột
        ["A", "B", "D", ...dayColumns].map(column => {
            sheet.getColumn(column).alignment = {
                vertical: "middle",
                horizontal: "center"
            };
        });

        //border 2 cạnh của cột
        infoColumns.map(column => {
            sheet.getColumn(column).border = {
                left: {style: "thin"},
                right: {style: "thin"}
            };
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment;filename=LichLamViec_${month}-${year}.xlsx`
        );
        workbook.xlsx.write(res);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
const handleReportService = async(req, res) => {
    try {
        const services = await reportServices.reportService(req.params);
        const workbook = new exceljs.Workbook();
        const sheet = workbook.addWorksheet(`DichVu_${moment(req.params.month).format("MM-YYYY")}`);

        //khai báo các cột sẽ có trong worksheet
        sheet.columns = [
            {header: "Mã dịch vụ", key: "service_id", width: 20},
            {header: "Tên dịch vụ", key: "service_name", width: 35},
            {header: "Đơn giá", key: "price", width: 20},
            {header: "Số lần", key: "times", width: 10}
        ];

        //tạo giá trị cho các hàng
        await services.map(s => {
            sheet.addRow({
                service_id: s.service_id.toUpperCase(),
                service_name: util.capitalizeEachWord(s.Service.service_name),
                price: s.Service.price,
                times: s.times
            });
        });

        //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
        sheet.getRow(1).height = 30;

        //custom màu, kiểu chữ cho hàng tiêu đề
        ["A1", "B1", "C1", "D1"].map(cell => {
            sheet.getCell(cell).alignment = {
                vertical: "middle",
                horizontal: "center"
            };
            sheet.getCell(cell).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(cell).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        //border 2 cạnh của cột
        ["A", "B", "C", "D"].map(column => {
            sheet.getColumn(column).border = {
                left: {style: "thin"},
                right: {style: "thin"}
            }; 
        });

        //canh giữa tất cả hàng của cột A
        sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
        };

        //format giá tiền
        sheet.getColumn("C").numFmt = "#,##0";

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment;filename=DichVu_${moment(req.params.month).format("MM-YYYY")}.xlsx`
        );
        workbook.xlsx.write(res);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
const handleReportAppointment = async(req, res) => {
    try {
        const {month, year} = req.params
        const appointmentByMonth = await reportServices.reportAppointment(req.params);
        const workbook = new exceljs.Workbook();
        const sheet = workbook.addWorksheet(`LichHen_${month}-${year}`);

        //khai báo các cột sẽ có trong worksheet
        sheet.columns = [
            {header: "Ngày", key: "date", width: 15},
            {header: "Tổng", key: "total", width: 15},
            {header: "Đặt mới", key: "new", width: 15},
            {header: "Tái khám", key: "reExam", width: 15},
            {header: "Chờ xác nhận", key: "notAccepted", width: 15},
            {header: "Đã xác nhận", key: "accepted", width: 15},
            {header: "Đã hùy", key: "canceled", width: 15}
        ];

        //tạo giá trị cho các hàng
        await appointmentByMonth.details.map(appointmentByDate => {
            sheet.addRow({
                date: appointmentByDate.date,
                total: appointmentByDate.total,
                new: appointmentByDate.new,
                reExam: appointmentByDate.reExam,
                notAccepted: appointmentByDate.notAccepted,
                accepted: appointmentByDate.accepted,
                canceled: appointmentByDate.canceled
            });
        });

        sheet.mergeCells("I1:K1");
        sheet.getCell("K1").value = `TỔNG SỐ LỊCH HẸN ${month}/${year}`;
        sheet.getCell("L1").value = appointmentByMonth.totalByMonth;

        sheet.mergeCells("I2:K2");
        sheet.getCell("K2").value = "Lịch hẹn đặt mới";
        sheet.getCell("L2").value = appointmentByMonth.totalNew;

        sheet.mergeCells("I3:K3");
        sheet.getCell("K3").value = "Lịch hẹn tái khám";
        sheet.getCell("L3").value = appointmentByMonth.totalReExam;

        sheet.mergeCells("I4:K4");
        sheet.getCell("K4").value = "Chờ xác nhận";
        sheet.getCell("L4").value = appointmentByMonth.totalNotAccepted;

        sheet.mergeCells("I5:K5");
        sheet.getCell("K5").value = "Đã xác nhận";
        sheet.getCell("L5").value = appointmentByMonth.totalAccepted;

        sheet.mergeCells("I6:K6");
        sheet.getCell("K6").value = "Đã hủy";
        sheet.getCell("L6").value = appointmentByMonth.totalCanceled;

        //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
        sheet.getRow(1).height = 30;

        //custom màu, kiểu chữ cho hàng tiêu đề
        ["A1", "B1", "C1", "D1", "E1", "F1", "G1"].map(cell => {
            sheet.getCell(cell).alignment = {
                vertical: "middle",
                horizontal: "center"
            };
            sheet.getCell(cell).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(cell).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        ["I1", "L1"].map(cell => {
            sheet.getCell(cell).alignment = {
                vertical: "middle"
            };
            sheet.getCell(cell).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(cell).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        //border 4 cạnh
        ["I1", "L1", "I2", "L2", "I3", "L3", "I4", "L4", "I5", "L5", "I6", "L6"].map(cell => {
            sheet.getCell(cell).border = {
                top: {style: "thin"},
                left: {style: "thin"},
                bottom: {style: "thin"},
                right: {style: "thin"}
            }; 
        });

        //canh giữa tất cả hàng của cột A
        sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
        };

        //border 2 cạnh của cột
        ["A", "B", "C", "D", "E", "F", "G"].map(column => {
            sheet.getColumn(column).border = {
                left: {style: "thin"},
                right: {style: "thin"}
            }; 
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment;filename=LichHen_${month}-${year}.xlsx`
        );
        workbook.xlsx.write(res);
    }
    catch(e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: "Error from the server"
        });
    };
};


//XUẤT FILE EXCEL DOANH THU THEO THÁNG
const handleReportRevenue = async(req, res) => {
    try {
        const {month, year} = req.params
        const revenueByMonth = await reportServices.reportRevenue(req.params);
        const workbook = new exceljs.Workbook();
        const sheet = workbook.addWorksheet(`DoanhThu_${month}-${year}`);

        //khai báo các cột sẽ có trong worksheet
        sheet.columns = [
            {header: "Ngày", key: "date", width: 20},
            {header: "Doanh thu", key: "total", width: 20},
            {header: "Đã thu", key: "paid", width: 20},
            {header: "Chưa thu", key: "unpaid", width: 20}
        ];

        //tạo giá trị cho các hàng
        await revenueByMonth.details.map(revenueByDate => {
            sheet.addRow({
                date: revenueByDate.date,
                total: revenueByDate.total,
                paid: revenueByDate.paid,
                unpaid: revenueByDate.unpaid
            });
        });

        sheet.mergeCells("F1:I1");
        sheet.getCell("I1").value = `TỔNG DOANH THU ${month}/${year}`;
        sheet.mergeCells("J1:K1");
        sheet.getCell("K1").value = revenueByMonth.totalByMonth;

        sheet.mergeCells("F2:I2");
        sheet.getCell("I2").value = "Tổng đã thu";
        sheet.mergeCells("J2:K2");
        sheet.getCell("K2").value = revenueByMonth.totalPaid;

        sheet.mergeCells("F3:I3");
        sheet.getCell("I3").value = "Tổng chưa thu";
        sheet.mergeCells("J3:K3");
        sheet.getCell("K3").value = revenueByMonth.totalUnpaid;

        //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
        sheet.getRow(1).height = 30;

        //custom màu, kiểu chữ cho hàng tiêu đề
        ["A1", "B1", "C1", "D1"].map(cell => {
            sheet.getCell(cell).alignment = {
                vertical: "middle",
                horizontal: "center"
            };
            sheet.getCell(cell).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(cell).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        ["I1", "K1"].map(cell => {
            sheet.getCell(cell).alignment = {
                vertical: "middle"
            };
            sheet.getCell(cell).font = {
                bold: true,
                color: {argb: "1F4E78"}
            };
            sheet.getCell(cell).fill = {
                type: "pattern",
                pattern: "solid",
                fgColor:{argb: "B7DEE8"}
            };
        });

        //border 4 cạnh
        ["I1", "K1", "I2", "K2", "I3", "K3"].map(cell => {
            sheet.getCell(cell).border = {
                top: {style: "thin"},
                left: {style: "thin"},
                bottom: {style: "thin"},
                right: {style: "thin"}
            }; 
        });

        //canh giữa tất cả hàng của cột A
        sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
        };

        //border 2 cạnh của cột
        ["A", "B", "C", "D"].map(column => {
            sheet.getColumn(column).border = {
                left: {style: "thin"},
                right: {style: "thin"}
            }; 
        });

        //format giá tiền
        ["B", "C", "D", "K"].map(column => {
            sheet.getColumn(column).numFmt = "#,##0";
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader(
            "Content-Disposition",
            `attachment;filename=DoanhThu_${month}-${year}.xlsx`
        );
        workbook.xlsx.write(res);
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
    handleGetCurrentRevenue,
    handleGetCurrentAppointment,
    handleGetCurrentPatient,
    handleGetServicesFor7Days,
    handleGetAppointmentsFor7Days,
    handleGetRevenueFor7Days,
    handleReportSchedule,
    handleReportService,
    handleReportAppointment,
    handleReportRevenue
};