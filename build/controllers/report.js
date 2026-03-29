"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _exceljs = _interopRequireDefault(require("exceljs"));
var _report = _interopRequireDefault(require("../services/report"));
var _moment = _interopRequireWildcard(require("moment"));
var _index = _interopRequireDefault(require("../util/index"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t1 in e) "default" !== _t1 && {}.hasOwnProperty.call(e, _t1) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t1)) && (i.get || i.set) ? o(f, _t1, i) : f[_t1] = e[_t1]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//LẤY DOANH THU CỦA NGÀY HIỆN TẠI
var handleGetCurrentRevenue = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _report["default"].getCurrentRevenue();
        case 1:
          result = _context.v;
          return _context.a(2, res.status(200).json(result));
        case 2:
          _context.p = 2;
          _t = _context.v;
          console.log(_t);
          return _context.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function handleGetCurrentRevenue(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
var handleGetCurrentAppointment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var result, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _report["default"].getCurrentAppointment();
        case 1:
          result = _context2.v;
          return _context2.a(2, res.status(200).json(result));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.log(_t2);
          return _context2.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function handleGetCurrentAppointment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
var handleGetCurrentPatient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var result, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _report["default"].getCurrentPatient();
        case 1:
          result = _context3.v;
          return _context3.a(2, res.status(200).json(result));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.log(_t3);
          return _context3.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function handleGetCurrentPatient(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
var handleGetServicesFor7Days = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var result, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _report["default"].getServicesFor7Days();
        case 1:
          result = _context4.v;
          return _context4.a(2, res.status(200).json(result));
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.log(_t4);
          return _context4.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function handleGetServicesFor7Days(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
var handleGetAppointmentsFor7Days = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var result, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _report["default"].getAppointmentsFor7Days();
        case 1:
          result = _context5.v;
          return _context5.a(2, res.status(200).json(result));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.log(_t5);
          return _context5.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function handleGetAppointmentsFor7Days(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
var handleGetRevenueFor7Days = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var result, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _report["default"].getRevenueFor7Days();
        case 1:
          result = _context6.v;
          return _context6.a(2, res.status(200).json(result));
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.log(_t6);
          return _context6.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function handleGetRevenueFor7Days(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
var handleReportSchedule = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$params, month, year, data, workbook, sheet, maxColumns, lengthDayOfMonth, dayColumns, infoColumns, row, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$params = req.params, month = _req$params.month, year = _req$params.year;
          _context7.n = 1;
          return _report["default"].reportSchedule(req.params);
        case 1:
          data = _context7.v;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("LichLamViec_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Mã nhân viên",
            key: "user_id",
            width: 15
          }, {
            header: "Chức vụ",
            key: "role",
            width: 15
          }, {
            header: "Họ và tên",
            key: "fullname",
            width: 30
          }, {
            header: "Ca khám",
            key: "time",
            width: 15
          }].concat(_toConsumableArray(data.onlyDays.map(function (date) {
            return {
              header: date,
              width: 3
            };
          })));

          //max columns là 31 cột cho 31 ngày
          maxColumns = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI"]; //căn chỉnh số column cho phù hợp với số ngày của tháng cần xem
          lengthDayOfMonth = data.onlyDays.length;
          dayColumns = maxColumns.slice(0, lengthDayOfMonth); //column của thông tin nhân viên
          infoColumns = ["A", "B", "C", "D"]; //tạo giá trị cho các hàng
          row = 2;
          _context7.n = 2;
          return data.userSchedules.map(function (userSchedule) {
            data.sessions.forEach(function (session) {
              sheet.addRow({
                user_id: userSchedule.user.user_id.toUpperCase(),
                role: userSchedule.user.user_id.slice(0, 2) === "qt" ? "Quản trị viên" : userSchedule.user.user_id.slice(0, 2) === "lt" ? "Lễ tân" : userSchedule.user.user_id.slice(0, 2) === "bs" ? "Bác sĩ" : "Phụ tá",
                fullname: userSchedule.user.fullname,
                time: session.time
              });
              dayColumns.forEach(function (column, index) {
                //bao nhiêu column là userSchedule.schedules có bấy nhiêu phần từ
                //vì dayColumns và userSchedule.schedules đều có thông tin các ngày của 1 tháng
                var byDate = userSchedule.schedules[index];
                if (byDate.list.length) {
                  byDate.list.forEach(function (schedule) {
                    if (schedule.Session.session_id === session.session_id) {
                      sheet.getCell("".concat(column).concat(row)).value = "x";
                    }
                    ;
                  });
                }
                ;
              });
              row++;
            });
            dayColumns.forEach(function (column) {
              sheet.getCell("".concat(column).concat(row - 1)).border = {
                bottom: {
                  style: "thin"
                }
              };
            });
          });
        case 2:
          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          [].concat(infoColumns, _toConsumableArray(dayColumns)).map(function (column) {
            sheet.getCell("".concat(column, "1")).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell("".concat(column, "1")).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell("".concat(column, "1")).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //canh giữa tất cả hàng của cột
          ["A", "B", "D"].concat(_toConsumableArray(dayColumns)).map(function (column) {
            sheet.getColumn(column).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
          });

          //border 2 cạnh của cột
          infoColumns.map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=LichLamViec_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context7.n = 4;
          break;
        case 3:
          _context7.p = 3;
          _t7 = _context7.v;
          console.log(_t7);
          return _context7.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 4:
          ;
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 3]]);
  }));
  return function handleReportSchedule(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
var handleReportService = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var services, workbook, sheet, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return _report["default"].reportService(req.params);
        case 1:
          services = _context8.v;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("DichVu_".concat((0, _moment["default"])(req.params.month).format("MM-YYYY"))); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Mã dịch vụ",
            key: "service_id",
            width: 20
          }, {
            header: "Tên dịch vụ",
            key: "service_name",
            width: 35
          }, {
            header: "Đơn giá",
            key: "price",
            width: 20
          }, {
            header: "Số lần",
            key: "times",
            width: 10
          }];

          //tạo giá trị cho các hàng
          _context8.n = 2;
          return services.map(function (s) {
            sheet.addRow({
              service_id: s.service_id.toUpperCase(),
              service_name: _index["default"].capitalizeEachWord(s.Service.service_name),
              price: s.Service.price,
              times: s.times
            });
          });
        case 2:
          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          ["A1", "B1", "C1", "D1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 2 cạnh của cột
          ["A", "B", "C", "D"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //format giá tiền
          sheet.getColumn("C").numFmt = "#,##0";
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=DichVu_".concat((0, _moment["default"])(req.params.month).format("MM-YYYY"), ".xlsx"));
          workbook.xlsx.write(res);
          _context8.n = 4;
          break;
        case 3:
          _context8.p = 3;
          _t8 = _context8.v;
          console.log(_t8);
          return _context8.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 4:
          ;
        case 5:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function handleReportService(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
var handleReportAppointment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var _req$params2, month, year, appointmentByMonth, workbook, sheet, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _req$params2 = req.params, month = _req$params2.month, year = _req$params2.year;
          _context9.n = 1;
          return _report["default"].reportAppointment(req.params);
        case 1:
          appointmentByMonth = _context9.v;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("LichHen_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Ngày",
            key: "date",
            width: 15
          }, {
            header: "Tổng",
            key: "total",
            width: 15
          }, {
            header: "Đặt mới",
            key: "new",
            width: 15
          }, {
            header: "Tái khám",
            key: "reExam",
            width: 15
          }, {
            header: "Chờ xác nhận",
            key: "notAccepted",
            width: 15
          }, {
            header: "Đã xác nhận",
            key: "accepted",
            width: 15
          }, {
            header: "Đã hùy",
            key: "canceled",
            width: 15
          }];

          //tạo giá trị cho các hàng
          _context9.n = 2;
          return appointmentByMonth.details.map(function (appointmentByDate) {
            sheet.addRow({
              date: appointmentByDate.date,
              total: appointmentByDate.total,
              "new": appointmentByDate["new"],
              reExam: appointmentByDate.reExam,
              notAccepted: appointmentByDate.notAccepted,
              accepted: appointmentByDate.accepted,
              canceled: appointmentByDate.canceled
            });
          });
        case 2:
          sheet.mergeCells("I1:K1");
          sheet.getCell("K1").value = "T\u1ED4NG S\u1ED0 L\u1ECACH H\u1EB8N ".concat(month, "/").concat(year);
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
          ["A1", "B1", "C1", "D1", "E1", "F1", "G1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });
          ["I1", "L1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 4 cạnh
          ["I1", "L1", "I2", "L2", "I3", "L3", "I4", "L4", "I5", "L5", "I6", "L6"].map(function (cell) {
            sheet.getCell(cell).border = {
              top: {
                style: "thin"
              },
              left: {
                style: "thin"
              },
              bottom: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //border 2 cạnh của cột
          ["A", "B", "C", "D", "E", "F", "G"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=LichHen_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context9.n = 4;
          break;
        case 3:
          _context9.p = 3;
          _t9 = _context9.v;
          console.log(_t9);
          return _context9.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 4:
          ;
        case 5:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 3]]);
  }));
  return function handleReportAppointment(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL DOANH THU THEO THÁNG
var handleReportRevenue = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var _req$params3, month, year, revenueByMonth, workbook, sheet, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _req$params3 = req.params, month = _req$params3.month, year = _req$params3.year;
          _context0.n = 1;
          return _report["default"].reportRevenue(req.params);
        case 1:
          revenueByMonth = _context0.v;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("DoanhThu_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Ngày",
            key: "date",
            width: 20
          }, {
            header: "Doanh thu",
            key: "total",
            width: 20
          }, {
            header: "Đã thu",
            key: "paid",
            width: 20
          }, {
            header: "Chưa thu",
            key: "unpaid",
            width: 20
          }];

          //tạo giá trị cho các hàng
          _context0.n = 2;
          return revenueByMonth.details.map(function (revenueByDate) {
            sheet.addRow({
              date: revenueByDate.date,
              total: revenueByDate.total,
              paid: revenueByDate.paid,
              unpaid: revenueByDate.unpaid
            });
          });
        case 2:
          sheet.mergeCells("F1:I1");
          sheet.getCell("I1").value = "T\u1ED4NG DOANH THU ".concat(month, "/").concat(year);
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
          ["A1", "B1", "C1", "D1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });
          ["I1", "K1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 4 cạnh
          ["I1", "K1", "I2", "K2", "I3", "K3"].map(function (cell) {
            sheet.getCell(cell).border = {
              top: {
                style: "thin"
              },
              left: {
                style: "thin"
              },
              bottom: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //border 2 cạnh của cột
          ["A", "B", "C", "D"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //format giá tiền
          ["B", "C", "D", "K"].map(function (column) {
            sheet.getColumn(column).numFmt = "#,##0";
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=DoanhThu_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t0 = _context0.v;
          console.log(_t0);
          return _context0.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 4:
          ;
        case 5:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 3]]);
  }));
  return function handleReportRevenue(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();
module.exports = {
  handleGetCurrentRevenue: handleGetCurrentRevenue,
  handleGetCurrentAppointment: handleGetCurrentAppointment,
  handleGetCurrentPatient: handleGetCurrentPatient,
  handleGetServicesFor7Days: handleGetServicesFor7Days,
  handleGetAppointmentsFor7Days: handleGetAppointmentsFor7Days,
  handleGetRevenueFor7Days: handleGetRevenueFor7Days,
  handleReportSchedule: handleReportSchedule,
  handleReportService: handleReportService,
  handleReportAppointment: handleReportAppointment,
  handleReportRevenue: handleReportRevenue
};