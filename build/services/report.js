"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _moment = _interopRequireDefault(require("moment"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _schedule = require("./schedule");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
//LẤY 7 NGÀY TÍNH TỪ THỜI ĐIỂM HIỆN TẠI TRỞ VỀ TRƯỚC
var get7Days = function get7Days() {
  var sevenDays = [];
  for (var i = 0; i < 7; i++) {
    sevenDays.push((0, _moment["default"])(new Date()).subtract(i, "days").format("YYYY-MM-DD").valueOf());
  }
  ;

  //xếp theo thứ tự ngược lại -> hiển thị lên chart từ ngày nhỏ đến ngày lớn
  var reverseDays = [];
  for (var _i = sevenDays.length - 1; _i >= 0; _i--) {
    reverseDays.push(sevenDays[_i]);
  }
  ;
  return reverseDays;
};

//LẤY TẤT CẢ NGÀY TRONG 1 THÁNG NÀO ĐÓ
var getDaysOfMonth = function getDaysOfMonth(month, year) {
  var monthIndex = month - 1; // 0..11 thay vì 1..12
  var date = new Date(year, monthIndex, 1);
  var result = [];
  while (date.getMonth() == monthIndex) {
    result.push((0, _moment["default"])(date).format("DD-MM-YYYY"));
    date.setDate(date.getDate() + 1);
  }
  ;
  return result;
};

/** API **/

//LẤY DOANH THU CỦA NGÀY HIỆN TẠI
var getCurrentRevenue = function getCurrentRevenue() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var bills, currentTotal, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _index["default"].Bill.findAll({
              where: {
                createdAt: _defineProperty(_defineProperty({}, Op.gt, new Date().setHours(0, 0, 0, 0)), Op.lt, new Date())
              }
            });
          case 1:
            bills = _context.v;
            currentTotal = 0;
            bills.forEach(function (bill) {
              return currentTotal += bill.total;
            });
            resolve({
              errCode: 0,
              message: "Get current revenue",
              data: {
                date: (0, _moment["default"])(new Date()).format("DD-MM-YYYY"),
                total: currentTotal
              }
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            reject(_t);
          case 3:
            ;
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
var getCurrentAppointment = function getCurrentAppointment() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var appointments, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _index["default"].Appointment.findAll({
              where: {
                createdAt: _defineProperty(_defineProperty({}, Op.gt, new Date().setHours(0, 0, 0, 0)), Op.lt, new Date())
              }
            });
          case 1:
            appointments = _context2.v;
            resolve({
              errCode: 0,
              message: "Get current appointment",
              data: {
                date: (0, _moment["default"])(new Date()).format("DD-MM-YYYY"),
                total: appointments.length
              }
            });
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            reject(_t2);
          case 3:
            ;
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
var getCurrentPatient = function getCurrentPatient() {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var patients, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return _index["default"].Patient.findAll({
              where: {
                createdAt: _defineProperty(_defineProperty({}, Op.gt, new Date().setHours(0, 0, 0, 0)), Op.lt, new Date())
              }
            });
          case 1:
            patients = _context3.v;
            resolve({
              errCode: 0,
              message: "Get current patient",
              data: {
                date: (0, _moment["default"])(new Date()).format("DD-MM-YYYY"),
                total: patients.length
              }
            });
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            reject(_t3);
          case 3:
            ;
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
var getServicesFor7Days = function getServicesFor7Days() {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var services, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return _index["default"].Detail.findAll({
              attributes: ["service_id", [_sequelize["default"].fn("COUNT", _sequelize["default"].col("Detail.service_id")), "times"], [_sequelize["default"].fn("date_format", _sequelize["default"].col("Detail.createdAt"), "%Y-%m"), "month"]],
              group: ["Detail.service_id"],
              include: [{
                model: _index["default"].Service
              }],
              raw: true,
              nest: true
            });
          case 1:
            services = _context4.v;
            resolve({
              errCode: 0,
              message: "Get services for 7 days",
              data: services
            });
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            reject(_t4);
          case 3:
            ;
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
var getAppointmentsFor7Days = function getAppointmentsFor7Days() {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var sevenDays, appointments, data, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            sevenDays = get7Days();
            _context5.n = 1;
            return _index["default"].Appointment.findAll({
              attributes: ["appointment_id", "type_id", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("createdAt"), "%Y-%m-%d"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 1:
            appointments = _context5.v;
            data = [];
            sevenDays.forEach(function (date) {
              var appointmentByDate = {};
              appointmentByDate.date = date, appointmentByDate["new"] = [];
              appointmentByDate.reExam = [];
              appointments.forEach(function (appointment) {
                if (appointment.createdAt === date) {
                  if (appointment.type_id === 1) appointmentByDate["new"].push(appointment);else appointmentByDate.reExam.push(appointment);
                }
                ;
              });
              data.push(appointmentByDate);
            });
            resolve({
              errCode: 0,
              message: "Get appointments for 7 days",
              data: data
            });
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            reject(_t5);
          case 3:
            ;
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
var getRevenueFor7Days = function getRevenueFor7Days() {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var sevenDays, bills, data, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            sevenDays = get7Days();
            _context6.n = 1;
            return _index["default"].Bill.findAll({
              attributes: ["bill_id", "total", [_sequelize["default"].fn("date_format", _sequelize["default"].col("createdAt"), "%Y-%m-%d"), "createdAt"]]
            });
          case 1:
            bills = _context6.v;
            data = [];
            sevenDays.forEach(function (date) {
              var revenueByDate = {};
              revenueByDate.date = date, revenueByDate.total = 0;
              revenueByDate.bills = [];
              bills.forEach(function (bill) {
                if (bill.createdAt === date) {
                  revenueByDate.total += bill.total;
                  revenueByDate.bills.push(bill);
                }
                ;
              });
              data.push(revenueByDate);
            });
            resolve({
              errCode: 0,
              message: "Get revenue for 7 days",
              data: data
            });
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
            reject(_t6);
          case 3:
            ;
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
var reportSchedule = function reportSchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var monthIndex, date, onlyDays, daysOfMonth, sessions, doctorSchedules, employeeSchedules, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (!(!data.month || !data.year)) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.n = 5;
            break;
          case 1:
            //chỉ lấy ngày (vd: 1, 2, 12, 28...)
            monthIndex = data.month - 1; // 0..11 thay vì 1..12
            date = new Date(data.year, monthIndex, 1);
            onlyDays = [];
            daysOfMonth = [];
            while (date.getMonth() == monthIndex) {
              onlyDays.push(date.getDate());
              daysOfMonth.push((0, _moment["default"])(date).format("YYYY-MM-DD"));
              date.setDate(date.getDate() + 1);
            }
            ;

            //lấy tất cả ca khám đang hoạt động
            _context7.n = 2;
            return _index["default"].Session.findAll({
              where: {
                status: 1
              },
              order: [["createdAt", "ASC"]]
            });
          case 2:
            sessions = _context7.v;
            _context7.n = 3;
            return (0, _schedule.getDoctorSchedulesByMonth)(daysOfMonth);
          case 3:
            doctorSchedules = _context7.v;
            _context7.n = 4;
            return (0, _schedule.getEmployeeSchedulesByMonth)(daysOfMonth);
          case 4:
            employeeSchedules = _context7.v;
            resolve({
              onlyDays: onlyDays,
              sessions: sessions,
              userSchedules: [].concat(_toConsumableArray(doctorSchedules), _toConsumableArray(employeeSchedules))
            });
          case 5:
            ;
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t7 = _context7.v;
            reject(_t7);
          case 7:
            ;
          case 8:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 6]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
var reportService = function reportService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var services, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (data.month) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.n = 3;
            break;
          case 1:
            _context8.n = 2;
            return _index["default"].Detail.findAll({
              attributes: ["service_id", [_sequelize["default"].fn("COUNT", _sequelize["default"].col("Detail.service_id")), "times"], [_sequelize["default"].fn("date_format", _sequelize["default"].col("Detail.createdAt"), "%Y-%m"), "month"]],
              group: ["Detail.service_id"],
              include: [{
                model: _index["default"].Service
              }],
              raw: true,
              nest: true
            });
          case 2:
            services = _context8.v;
            services = services.filter(function (service) {
              return service.month === data.month;
            });
            resolve(services);
          case 3:
            ;
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t8 = _context8.v;
            reject(_t8);
          case 5:
            ;
          case 6:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 4]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
var reportAppointment = function reportAppointment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var daysOfMonth, appointments, appointmentByMonth, _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.month || !data.year)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.n = 3;
            break;
          case 1:
            daysOfMonth = getDaysOfMonth(data.month, data.year);
            _context9.n = 2;
            return _index["default"].Appointment.findAll({
              attributes: ["appointment_id", "type_id", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("Appointment.createdAt"), "%d-%m-%Y"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 2:
            appointments = _context9.v;
            appointmentByMonth = {};
            appointmentByMonth.totalByMonth = 0;
            appointmentByMonth.totalNew = 0;
            appointmentByMonth.totalReExam = 0;
            appointmentByMonth.totalNotAccepted = 0;
            appointmentByMonth.totalAccepted = 0;
            appointmentByMonth.totalCanceled = 0;
            appointmentByMonth.details = [];

            //lọc lấy những lịch hẹn của các ngày của tháng cần xem
            daysOfMonth.forEach(function (date) {
              var byDate = {};
              byDate.date = date;
              byDate.total = 0;
              byDate["new"] = 0;
              byDate.reExam = 0;
              byDate.notAccepted = 0;
              byDate.accepted = 0;
              byDate.canceled = 0;
              appointments.forEach(function (appointment) {
                if (appointment.createdAt === date) {
                  byDate.total++;
                  if (appointment.type_id === 1) byDate["new"]++;else byDate.reExam++;
                  if (appointment.status === 0) byDate.notAccepted++;
                  if (appointment.status === 2) byDate.canceled++;
                  if (appointment.status === 1 || appointment.status === 3) byDate.accepted++;
                }
                ;
              });
              appointmentByMonth.totalByMonth += byDate.total;
              appointmentByMonth.totalNew += byDate["new"];
              appointmentByMonth.totalReExam += byDate.reExam;
              appointmentByMonth.totalNotAccepted += byDate.notAccepted;
              appointmentByMonth.totalAccepted += byDate.accepted;
              appointmentByMonth.totalCanceled += byDate.canceled;
              appointmentByMonth.details.push(byDate);
            });
            resolve(appointmentByMonth);
          case 3:
            ;
            _context9.n = 5;
            break;
          case 4:
            _context9.p = 4;
            _t9 = _context9.v;
            reject(_t9);
          case 5:
            ;
          case 6:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 4]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL DOANH THU THEO THÁNG
var reportRevenue = function reportRevenue(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var daysOfMonth, bills, revenueByMonth, _t0;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.month || !data.year)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context0.n = 3;
            break;
          case 1:
            daysOfMonth = getDaysOfMonth(data.month, data.year);
            _context0.n = 2;
            return _index["default"].Bill.findAll({
              attributes: ["bill_id", "total", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("Bill.createdAt"), "%d-%m-%Y"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 2:
            bills = _context0.v;
            revenueByMonth = {};
            revenueByMonth.totalByMonth = 0;
            revenueByMonth.totalPaid = 0;
            revenueByMonth.totalUnpaid = 0;
            revenueByMonth.details = [];

            //lọc lấy những bill của các ngày của tháng cần xem
            daysOfMonth.forEach(function (date) {
              var byDate = {};
              byDate.date = date;
              byDate.total = 0;
              byDate.paid = 0;
              byDate.unpaid = 0;
              bills.forEach(function (bill) {
                if (bill.createdAt === date) {
                  if (bill.status) {
                    byDate.paid += bill.total;
                  } else {
                    byDate.unpaid += bill.total;
                  }
                  ;
                  byDate.total += bill.total;
                }
                ;
              });
              revenueByMonth.totalByMonth += byDate.total;
              revenueByMonth.totalPaid += byDate.paid;
              revenueByMonth.totalUnpaid += byDate.unpaid;
              revenueByMonth.details.push(byDate);
            });
            resolve(revenueByMonth);
          case 3:
            ;
            _context0.n = 5;
            break;
          case 4:
            _context0.p = 4;
            _t0 = _context0.v;
            reject(_t0);
          case 5:
            ;
          case 6:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 4]]);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};
module.exports = {
  getCurrentRevenue: getCurrentRevenue,
  getCurrentAppointment: getCurrentAppointment,
  getCurrentPatient: getCurrentPatient,
  getServicesFor7Days: getServicesFor7Days,
  getAppointmentsFor7Days: getAppointmentsFor7Days,
  getRevenueFor7Days: getRevenueFor7Days,
  reportSchedule: reportSchedule,
  reportService: reportService,
  reportAppointment: reportAppointment,
  reportRevenue: reportRevenue
};