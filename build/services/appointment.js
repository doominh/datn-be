"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _moment = _interopRequireDefault(require("moment"));
var _axios = _interopRequireDefault(require("axios"));
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
//ĐẶT LẠI TRẠNG THÁI LỊCH CỦA BÁC SĨ KHI HỦY HẸN
var setDoctorScheduleStatus = function setDoctorScheduleStatus(appointment) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var currentDate, currentTime, doctorSchedule, startTime, startHours, currentHours, gapHours, startMinutes, currentMinutes, gapMinutes, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //lấy thời gian của lịch hẹn cần hủy
            _context.n = 1;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              },
              include: [{
                model: _index["default"].Schedule,
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 1:
            doctorSchedule = _context.v;
            if (!(currentDate < doctorSchedule.Schedule.date)) {
              _context.n = 2;
              break;
            }
            _context.n = 2;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              }
            });
          case 2:
            ;

            //ngày hủy = ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context.n = 4;
              break;
            }
            startTime = doctorSchedule.Schedule.Session.time.slice(0, 5); //lấy giờ
            startHours = startTime.slice(0, 2);
            currentHours = currentTime.slice(0, 2);
            gapHours = Number(startHours) - Number(currentHours); //lấy phút
            startMinutes = startTime.slice(3, 5);
            currentMinutes = currentTime.slice(3, 5);
            gapMinutes = Number(startMinutes) - Number(currentMinutes); //hủy trước 15 phút so với giờ hẹn
            if (!(gapHours > 1 ||
            //hẹn: 18:00 - hủy: 14:00
            gapHours === 1 && gapMinutes >= -45 ||
            //hẹn: 18:00 - hủy: 17:45
            gapHours === 0 && gapMinutes >= 15 //hẹn: 18:30 - hủy: 18:15
            )) {
              _context.n = 3;
              break;
            }
            _context.n = 3;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              }
            });
          case 3:
            ;
          case 4:
            ;
            resolve({
              errCode: 0,
              data: {
                appointment_id: appointment.appointment_id,
                patient_id: appointment.patient_id,
                doctor_id: doctorSchedule.doctor_id
              },
              message: "Canceled"
            });
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            reject(_t);
          case 6:
            ;
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[0, 5]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/** API **/

//LẤY TẤT CẢ LỊCH HẸN
var getAll = function getAll() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var appointments, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _index["default"].Appointment.findAll({
              include: [{
                model: _index["default"].Type,
                attributes: ["type_id", "type_name"]
              }, {
                model: _index["default"].Patient,
                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].Employee,
                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].DoctorSchedule,
                include: [{
                  model: _index["default"].Doctor,
                  attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                }, {
                  model: _index["default"].Schedule,
                  include: {
                    model: _index["default"].Session
                  }
                }]
              }],
              order: [["createdAt", "DESC"]],
              raw: true,
              nest: true
            });
          case 1:
            appointments = _context2.v;
            resolve({
              errCode: 0,
              message: "Get all appointments",
              data: appointments
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

//LẤY LỊCH HẸN THEO ID
var getByID = function getByID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var user_id, prefix, appointment_id, appointment, details, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            if (!(!data.appointment_id || !data.user_id)) {
              _context3.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context3.n = 8;
            break;
          case 1:
            //nhân viên nào đang gửi yêu cầu
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2); //join các bảng dữ liệu
            appointment_id = data.appointment_id.toLowerCase();
            _context3.n = 2;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              },
              include: [{
                model: _index["default"].Type,
                attributes: ["type_id", "type_name"]
              }, {
                model: _index["default"].Patient,
                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].Employee,
                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].DoctorSchedule,
                include: [{
                  model: _index["default"].Doctor,
                  attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                }, {
                  model: _index["default"].Schedule,
                  include: {
                    model: _index["default"].Session
                  }
                }]
              }],
              raw: true,
              nest: true
            });
          case 2:
            appointment = _context3.v;
            _context3.n = 3;
            return _index["default"].Appointment.findAll({
              where: {
                appointment_id: appointment_id
              },
              include: {
                model: _index["default"].Service,
                include: _index["default"].Category
              },
              raw: true,
              nest: true
            });
          case 3:
            details = _context3.v;
            if (details[0].Services.service_id !== null) {
              details = details.map(function (item) {
                return item.Services;
              });
              appointment = _objectSpread(_objectSpread({}, appointment), {}, {
                details: details
              });
            }
            ;

            //tìm thấy lịch hẹn
            if (!appointment) {
              _context3.n = 6;
              break;
            }
            if (!(prefix === "bs" && appointment.DoctorSchedule.Doctor.doctor_id !== user_id)) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2, resolve({
              errCode: 2,
              message: "Appointment doesn't belong to this doctor"
            }));
          case 4:
            ;

            //người gửi yêu cầu: bệnh nhân và lịch hẹn này không thuộc về bệnh nhân đó
            if (!(prefix === "bn" && appointment.patient_id !== user_id)) {
              _context3.n = 5;
              break;
            }
            return _context3.a(2, resolve({
              errCode: 2,
              message: "Appointment doesn't belong to this patient"
            }));
          case 5:
            ;

            //người gửi yêu cầu: lễ tân/bác sĩ/bệnh nhân
            resolve({
              errCode: 0,
              message: "Get appointment by ID",
              data: appointment
            });
            _context3.n = 7;
            break;
          case 6:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 7:
            ;
          case 8:
            ;
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t3 = _context3.v;
            reject(_t3);
          case 10:
            ;
          case 11:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH HẸN ĐÃ ĐƯỢC DUYỆT/HỦY/HOÀN THÀNH THEO ID BÁC SĨ PHỤ TRÁCH
var getAllByDoctorID = function getAllByDoctorID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var doctor_id, doctor, appointments, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            if (data.doctor_id) {
              _context4.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context4.n = 6;
            break;
          case 1:
            doctor_id = data.doctor_id.toLowerCase();
            _context4.n = 2;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 2:
            doctor = _context4.v;
            if (!doctor) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return _index["default"].Appointment.findAll({
              where: {
                status: _defineProperty({}, Op.ne, 0)
              },
              include: [{
                model: _index["default"].Type,
                attributes: ["type_id", "type_name"]
              }, {
                model: _index["default"].Patient,
                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].Employee,
                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].DoctorSchedule,
                where: {
                  doctor_id: doctor_id
                },
                include: [{
                  model: _index["default"].Doctor,
                  attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                }, {
                  model: _index["default"].Schedule,
                  include: {
                    model: _index["default"].Session
                  }
                }]
              }],
              order: [["createdAt", "DESC"]],
              raw: true,
              nest: true
            });
          case 3:
            appointments = _context4.v;
            resolve({
              errCode: 0,
              message: "Get all appointments by doctor ID",
              data: appointments
            });
            _context4.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 5:
            ;
          case 6:
            ;
            _context4.n = 8;
            break;
          case 7:
            _context4.p = 7;
            _t4 = _context4.v;
            reject(_t4);
          case 8:
            ;
          case 9:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH HẸN THEO ID BỆNH NHÂN
var getAllByPatientID = function getAllByPatientID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var patient_id, patient, appointments, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            if (data.patient_id) {
              _context5.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context5.n = 6;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context5.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context5.v;
            if (!patient) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return _index["default"].Appointment.findAll({
              where: {
                patient_id: patient_id
              },
              include: [{
                model: _index["default"].Type,
                attributes: ["type_id", "type_name"]
              }, {
                model: _index["default"].Patient,
                attributes: ["patient_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].Employee,
                attributes: ["employee_id", "fullname", "dob", "gender", "phone"]
              }, {
                model: _index["default"].DoctorSchedule,
                include: [{
                  model: _index["default"].Doctor,
                  attributes: ["doctor_id", "fullname", "dob", "gender", "phone"]
                }, {
                  model: _index["default"].Schedule,
                  include: {
                    model: _index["default"].Session
                  }
                }]
              }],
              order: [["createdAt", "DESC"]],
              raw: true,
              nest: true
            });
          case 3:
            appointments = _context5.v;
            resolve({
              errCode: 0,
              message: "Get all appointments by patient ID",
              data: appointments
            });
            _context5.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 5:
            ;
          case 6:
            ;
            _context5.n = 8;
            break;
          case 7:
            _context5.p = 7;
            _t5 = _context5.v;
            reject(_t5);
          case 8:
            ;
          case 9:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//ĐẶT LỊCH HẸN
var bookAppointment = function bookAppointment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var patient_id, patient, creator_id, appointmentCount, doctorSchedule, currentDate, currentTime, startTime, appointment_id, newAppointment, result, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (!(!data.creator_id || !data.type_id || !data.doctor_schedule_id || !data.patient_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone)) {
              _context6.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context6.n = 22;
            break;
          case 1:
            if (!(data.type_id === 2)) {
              _context6.n = 2;
              break;
            }
            if (data.reExamServices) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2, resolve({
              errCode: 3,
              message: "Missing params"
            }));
          case 2:
            ;
            patient_id = data.patient_id.toLowerCase();
            _context6.n = 3;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 3:
            patient = _context6.v;
            if (!patient) {
              _context6.n = 20;
              break;
            }
            //id của người tạo lịch hẹn
            creator_id = data.creator_id.toLowerCase(); //nếu là bệnh nhân thì kiểm tra số lần đặt lịch hẹn của ngày hôm nay
            if (!(creator_id.slice(0, 2) === "bn")) {
              _context6.n = 6;
              break;
            }
            _context6.n = 4;
            return _index["default"].Appointment.findAll({
              where: {
                patient_id: patient_id,
                createdAt: _defineProperty(_defineProperty({}, Op.gt, new Date().setHours(0, 0, 0, 0)), Op.lt, new Date())
              }
            });
          case 4:
            appointmentCount = _context6.v;
            if (!(appointmentCount.length >= 3)) {
              _context6.n = 5;
              break;
            }
            return _context6.a(2, resolve({
              errCode: 10,
              message: "Reached the limit times for booking per day"
            }));
          case 5:
            ;
          case 6:
            ;

            //tìm lịch làm việc được đặt
            _context6.n = 7;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: data.doctor_schedule_id
              },
              include: [{
                model: _index["default"].Schedule,
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 7:
            doctorSchedule = _context6.v;
            if (!doctorSchedule) {
              _context6.n = 18;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //ngày đặt lớn hơn ngày hẹn -> không thể đặt lịch của quá khứ
            if (!(currentDate > doctorSchedule.Schedule.date)) {
              _context6.n = 8;
              break;
            }
            return _context6.a(2, resolve({
              errCode: 2,
              type: "date",
              message: "Can't book for the past"
            }));
          case 8:
            ;

            //ngày đặt cùng ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context6.n = 10;
              break;
            }
            startTime = doctorSchedule.Schedule.Session.time.slice(0, 5); //thời gian đặt lịch > thời gian bắt đầu ca khám
            if (!(currentTime > startTime)) {
              _context6.n = 9;
              break;
            }
            return _context6.a(2, resolve({
              errCode: 2,
              type: "time",
              message: "This session is over"
            }));
          case 9:
            ;
          case 10:
            ;

            //thỏa các điều kiện:
            //điều kiện 1: ngày đặt <= ngày hẹn
            //điều kiện 2: cùng ngày thì thời gian đặt phải <= thời gian bắt đầu ca khám

            //lịch còn khả dụng
            if (!(doctorSchedule.status === 1)) {
              _context6.n = 16;
              break;
            }
            appointment_id = _index2["default"].createID("lh");
            _context6.n = 11;
            return _index["default"].Appointment.create({
              appointment_id: appointment_id,
              type_id: data.type_id,
              doctor_schedule_id: data.doctor_schedule_id,
              patient_id: patient_id,
              employee_id: "none",
              //id của lễ tân ảo
              fullname: data.fullname,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              status: 0 //chờ xác nhận
            });
          case 11:
            newAppointment = _context6.v;
            if (!newAppointment.dataValues.appointment_id) {
              _context6.n = 14;
              break;
            }
            if (!(data.type_id === 2)) {
              _context6.n = 12;
              break;
            }
            _context6.n = 12;
            return _index["default"].Detail.bulkCreate(data.reExamServices.map(function (service) {
              return {
                appointment_id: appointment_id,
                service_id: service.service_id,
                quantity: service.quantity
              };
            }));
          case 12:
            ;

            //cập nhật status cho doctor_schedule này thành 2 -> đã được đặt
            _context6.n = 13;
            return _index["default"].DoctorSchedule.update({
              status: 2
            }, {
              where: {
                doctor_schedule_id: data.doctor_schedule_id
              }
            });
          case 13:
            result = _context6.v;
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: "Created",
                data: {
                  appointment_id: appointment_id,
                  fullname: patient.fullname
                }
              });
            } else {
              resolve({
                errCode: 5,
                message: "Failed"
              });
            }
            ;
            _context6.n = 15;
            break;
          case 14:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 15:
            ;
            _context6.n = 17;
            break;
          case 16:
            if (doctorSchedule.status === 2) {
              resolve({
                errCode: 9,
                message: "Has been used"
              });
            }

            //lịch làm việc chưa được duyệt
            else {
              resolve({
                errCode: 2,
                type: "status",
                message: "Not accepted yet"
              });
            }
          case 17:
            ;
            _context6.n = 19;
            break;
          case 18:
            resolve({
              errCode: 1,
              message: "Doctor's schedule doesn't exist"
            });
          case 19:
            ;
            _context6.n = 21;
            break;
          case 20:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 21:
            ;
          case 22:
            ;
            _context6.n = 24;
            break;
          case 23:
            _context6.p = 23;
            _t6 = _context6.v;
            reject(_t6);
          case 24:
            ;
          case 25:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 23]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//DUYỆT LỊCH HẸN
var acceptAppointment = function acceptAppointment(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var appointment_id, employee_id, employee, appointment, doctorSchedule, currentDate, currentTime, startTime, result, patient, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (!(!data.appointment_id || !data.employee_id)) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.n = 17;
            break;
          case 1:
            appointment_id = data.appointment_id.toLowerCase();
            employee_id = data.employee_id.toLowerCase(); //tìm lễ tân duyệt lịch hẹn này
            _context7.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context7.v;
            if (employee) {
              _context7.n = 3;
              break;
            }
            return _context7.a(2, resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            }));
          case 3:
            ;

            //tìm lịch hẹn
            _context7.n = 4;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 4:
            appointment = _context7.v;
            if (appointment) {
              _context7.n = 5;
              break;
            }
            return _context7.a(2, resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 5:
            ;

            //đã tìm thấy lễ tân và lịch hẹn
            //lịch hẹn chưa được duyệt
            if (!(appointment.status === 0)) {
              _context7.n = 15;
              break;
            }
            _context7.n = 6;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              },
              include: [{
                model: _index["default"].Doctor,
                attributes: ["doctor_id", "fullname"]
              }, {
                model: _index["default"].Schedule,
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 6:
            doctorSchedule = _context7.v;
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //ngày duyệt > ngày hẹn
            if (!(currentDate > doctorSchedule.Schedule.date)) {
              _context7.n = 7;
              break;
            }
            return _context7.a(2, resolve({
              errCode: 2,
              type: "date",
              message: "Can't accept appointment for the past"
            }));
          case 7:
            ;

            //ngày duyệt cùng ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context7.n = 9;
              break;
            }
            startTime = doctorSchedule.Schedule.Session.time.slice(0, 5); //thời gian duyệt > thời gian bắt đầu ca khám
            if (!(currentTime > startTime)) {
              _context7.n = 8;
              break;
            }
            return _context7.a(2, resolve({
              errCode: 2,
              type: "time",
              message: "This session is over"
            }));
          case 8:
            ;
          case 9:
            ;

            //thỏa các điều kiện
            //điều kiện 1: ngày duyệt <= ngày hẹn (doctor_schedule.date)
            //điều kiện 2: cùng ngày thì thời gian duyệt phải <= thời gian bắt đầu ca khám
            _context7.n = 10;
            return _index["default"].Appointment.update({
              employee_id: employee_id,
              //lễ tân nào duyệt lịch hẹn này
              status: 1 //đã xác nhận
            }, {
              where: {
                appointment_id: appointment_id
              }
            });
          case 10:
            result = _context7.v;
            if (!(result[0] === 1)) {
              _context7.n = 13;
              break;
            }
            _context7.n = 11;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: appointment.patient_id
              }
            });
          case 11:
            patient = _context7.v;
            _context7.n = 12;
            return _mail["default"].appointmentInfo({
              email: patient.email,
              appointment_id: data.appointment_id.toUpperCase(),
              fullname: appointment.fullname,
              dob: (0, _moment["default"])(appointment.dob).format("DD-MM-YYYY"),
              gender: appointment.gender,
              phone: appointment.phone,
              doctor_name: doctorSchedule.Doctor.fullname,
              date: (0, _moment["default"])(doctorSchedule.Schedule.date).format("DD-MM-YYYY"),
              time: doctorSchedule.Schedule.Session.time,
              status: "Đã xác nhận"
            });
          case 12:
            resolve({
              errCode: 0,
              data: {
                appointment_id: appointment_id,
                patient_id: patient.patient_id,
                doctor_id: doctorSchedule.doctor_id
              },
              message: "Accepted"
            });
            _context7.n = 14;
            break;
          case 13:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 14:
            ;
            _context7.n = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 16:
            ;
          case 17:
            ;
            _context7.n = 19;
            break;
          case 18:
            _context7.p = 18;
            _t7 = _context7.v;
            reject(_t7);
          case 19:
            ;
          case 20:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 18]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//HỦY LỊCH HẸN BỞI LỄ TÂN
var canceledByEmployee = function canceledByEmployee(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var appointment_id, employee_id, employee, appointment, details, result, patient, returnData, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (!(!data.appointment_id || !data.employee_id)) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.n = 16;
            break;
          case 1:
            appointment_id = data.appointment_id.toLowerCase();
            employee_id = data.employee_id.toLowerCase(); //tìm lễ tân hủy lịch hẹn này
            _context8.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context8.v;
            if (employee) {
              _context8.n = 3;
              break;
            }
            return _context8.a(2, resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            }));
          case 3:
            ;

            //tìm lịch hẹn
            _context8.n = 4;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 4:
            appointment = _context8.v;
            if (appointment) {
              _context8.n = 5;
              break;
            }
            return _context8.a(2, resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 5:
            ;

            //đã tìm thấy lễ tân và lịch hẹn
            //lịch hẹn ở trạng thái chờ xác nhận hoặc đã xác nhận
            if (!(appointment.status === 0 || appointment.status === 1)) {
              _context8.n = 14;
              break;
            }
            _context8.n = 6;
            return _index["default"].Detail.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 6:
            details = _context8.v;
            if (!details) {
              _context8.n = 7;
              break;
            }
            return _context8.a(2, resolve({
              errCode: 6,
              message: "Appointment has details"
            }));
          case 7:
            ;

            //lịch hẹn chưa được khám
            _context8.n = 8;
            return _index["default"].Appointment.update({
              employee_id: employee_id,
              //lễ tân nào hủy lịch hẹn này
              status: 2 //đã hủy
            }, {
              where: {
                appointment_id: appointment_id
              }
            });
          case 8:
            result = _context8.v;
            if (!(result[0] === 1)) {
              _context8.n = 12;
              break;
            }
            _context8.n = 9;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: appointment.patient_id
              }
            });
          case 9:
            patient = _context8.v;
            _context8.n = 10;
            return _mail["default"].canceledAppointment({
              email: patient.email,
              fullname: patient.fullname,
              appointment_id: appointment_id
            });
          case 10:
            _context8.n = 11;
            return setDoctorScheduleStatus(appointment);
          case 11:
            returnData = _context8.v;
            resolve(returnData);
            _context8.n = 13;
            break;
          case 12:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 13:
            ;
            _context8.n = 15;
            break;
          case 14:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 15:
            ;
          case 16:
            ;
            _context8.n = 18;
            break;
          case 17:
            _context8.p = 17;
            _t8 = _context8.v;
            reject(_t8);
          case 18:
            ;
          case 19:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 17]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//HỦY LỊCH HẸN BỞI BỆNH NHÂN
var canceledByPatient = function canceledByPatient(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var appointment_id, patient_id, patient, appointment, result, returnData, _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.appointment_id || !data.patient_id)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.n = 12;
            break;
          case 1:
            appointment_id = data.appointment_id.toLowerCase();
            patient_id = data.patient_id.toLowerCase(); //tìm bệnh nhân
            _context9.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context9.v;
            if (patient) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2, resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            }));
          case 3:
            ;

            //tìm lịch hẹn
            _context9.n = 4;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 4:
            appointment = _context9.v;
            if (appointment) {
              _context9.n = 5;
              break;
            }
            return _context9.a(2, resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 5:
            ;

            //đã tìm thấy bệnh nhân và lịch hẹn
            //lịch hẹn ở trạng thái chờ xác nhận
            if (!(appointment.status === 0)) {
              _context9.n = 10;
              break;
            }
            _context9.n = 6;
            return _index["default"].Appointment.update({
              status: 2
            },
            //đã hủy
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 6:
            result = _context9.v;
            if (!(result[0] === 1)) {
              _context9.n = 8;
              break;
            }
            _context9.n = 7;
            return setDoctorScheduleStatus(appointment);
          case 7:
            returnData = _context9.v;
            resolve(returnData);
            _context9.n = 9;
            break;
          case 8:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 9:
            ;
            _context9.n = 11;
            break;
          case 10:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 11:
            ;
          case 12:
            ;
            _context9.n = 14;
            break;
          case 13:
            _context9.p = 13;
            _t9 = _context9.v;
            reject(_t9);
          case 14:
            ;
          case 15:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 13]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT CÁC DỊCH VỤ ĐÃ THỰC HIỆN CỦA LỊCH HẸN
var saveDetails = function saveDetails(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var doctor_id, doctor, appointment_id, appointment, appointmentDetails, addList, oldList, deleteList, updateList, _iterator, _step, details, _t0, _t1;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.doctor_id || !data.appointment_id || !data.detailsList)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context0.n = 23;
            break;
          case 1:
            doctor_id = data.doctor_id.toLowerCase();
            _context0.n = 2;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 2:
            doctor = _context0.v;
            if (!doctor) {
              _context0.n = 21;
              break;
            }
            appointment_id = data.appointment_id.toLowerCase();
            _context0.n = 3;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              },
              include: {
                model: _index["default"].DoctorSchedule
              },
              raw: true,
              nest: true
            });
          case 3:
            appointment = _context0.v;
            if (!appointment) {
              _context0.n = 19;
              break;
            }
            if (!(appointment.DoctorSchedule.doctor_id === doctor_id)) {
              _context0.n = 17;
              break;
            }
            if (!(appointment.status === 1)) {
              _context0.n = 15;
              break;
            }
            _context0.n = 4;
            return _index["default"].Detail.findAll({
              where: {
                appointment_id: appointment_id
              }
            });
          case 4:
            appointmentDetails = _context0.v;
            //thêm mới chi tiết
            addList = data.detailsList.filter(function (details) {
              return !details.detail_id;
            });
            if (!addList.length) {
              _context0.n = 5;
              break;
            }
            addList = addList.map(function (details) {
              return {
                appointment_id: details.appointment_id,
                service_id: details.service_id,
                quantity: details.quantity,
                description: details.description
              };
            });
            _context0.n = 5;
            return _index["default"].Detail.bulkCreate(addList);
          case 5:
            ;

            //sửa chi tiết
            oldList = data.detailsList.filter(function (details) {
              return details.detail_id;
            });
            deleteList = [];
            updateList = [];
            appointmentDetails.forEach(function (appointmentDetail) {
              var details = oldList.find(function (oldDetails) {
                return oldDetails.detail_id === appointmentDetail.detail_id;
              });

              //không tìm thấy do phía fe xóa details đó
              if (!details) {
                deleteList.push(appointmentDetail.detail_id);
              }

              //tìm thấy
              else {
                //phía fe không thay đổi dịch vụ
                if (appointmentDetail.service_id === details.service_id) {
                  var updateQuantity;
                  var updateDescription;
                  if (appointmentDetail.quantity !== details.quantity) {
                    updateQuantity = details.quantity;
                  }
                  ;
                  if (appointmentDetail.description !== details.description) {
                    updateDescription = details.description;
                  }
                  ;
                  if (updateQuantity || updateDescription) {
                    updateList.push({
                      detail_id: appointmentDetail.detail_id,
                      service_id: appointmentDetail.service_id,
                      quantity: updateQuantity ? updateQuantity : appointmentDetail.quantity,
                      description: updateDescription ? updateDescription : appointmentDetail.description
                    });
                  }
                  ;
                }

                //phía fe thay đổi dịch vụ của row đó
                else {
                  updateList.push({
                    detail_id: appointmentDetail.detail_id,
                    service_id: details.service_id,
                    quantity: details.quantity,
                    description: details.description
                  });
                }
                ;
              }
              ;
            });
            if (!deleteList.length) {
              _context0.n = 6;
              break;
            }
            _context0.n = 6;
            return _index["default"].Detail.destroy({
              where: {
                detail_id: deleteList
              }
            });
          case 6:
            ;
            if (!updateList.length) {
              _context0.n = 14;
              break;
            }
            _iterator = _createForOfIteratorHelper(updateList);
            _context0.p = 7;
            _iterator.s();
          case 8:
            if ((_step = _iterator.n()).done) {
              _context0.n = 10;
              break;
            }
            details = _step.value;
            _context0.n = 9;
            return _index["default"].Detail.update({
              service_id: details.service_id,
              quantity: details.quantity,
              description: details.description
            }, {
              where: {
                detail_id: details.detail_id
              }
            });
          case 9:
            _context0.n = 8;
            break;
          case 10:
            _context0.n = 12;
            break;
          case 11:
            _context0.p = 11;
            _t0 = _context0.v;
            _iterator.e(_t0);
          case 12:
            _context0.p = 12;
            _iterator.f();
            return _context0.f(12);
          case 13:
            ;
          case 14:
            ;
            resolve({
              errCode: 0,
              message: "Saved"
            });
            _context0.n = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 16:
            ;
            _context0.n = 18;
            break;
          case 17:
            resolve({
              errCode: 2,
              type: "doctor",
              message: "Appointment doesn't belong to this doctor"
            });
          case 18:
            ;
            _context0.n = 20;
            break;
          case 19:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 20:
            ;
            _context0.n = 22;
            break;
          case 21:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 22:
            ;
          case 23:
            ;
            _context0.n = 25;
            break;
          case 24:
            _context0.p = 24;
            _t1 = _context0.v;
            reject(_t1);
          case 25:
            ;
          case 26:
            return _context0.a(2);
        }
      }, _callee0, null, [[7, 11, 12, 13], [0, 24]]);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT LỊCH HẸN ĐÃ HOÀN THÀNH (khi lịch hẹn là tái khám và không phát sinh dịch vụ)
var confirmDone = function confirmDone(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(resolve, reject) {
      var doctor_id, doctor, appointment_id, appointment, appointmentDetails, deleteList, updateList, _iterator2, _step2, details, result, _t10, _t11;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            if (!(!data.doctor_id || !data.appointment_id || !data.detailsList)) {
              _context1.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context1.n = 23;
            break;
          case 1:
            doctor_id = data.doctor_id.toLowerCase();
            _context1.n = 2;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 2:
            doctor = _context1.v;
            if (!doctor) {
              _context1.n = 21;
              break;
            }
            appointment_id = data.appointment_id.toLowerCase();
            _context1.n = 3;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              },
              include: {
                model: _index["default"].DoctorSchedule
              },
              raw: true,
              nest: true
            });
          case 3:
            appointment = _context1.v;
            if (!appointment) {
              _context1.n = 19;
              break;
            }
            if (!(appointment.DoctorSchedule.doctor_id === doctor_id)) {
              _context1.n = 17;
              break;
            }
            if (!(appointment.status === 1)) {
              _context1.n = 15;
              break;
            }
            _context1.n = 4;
            return _index["default"].Detail.findAll({
              where: {
                appointment_id: appointment_id
              }
            });
          case 4:
            appointmentDetails = _context1.v;
            //cập nhật chi tiết lịch hẹn
            deleteList = [];
            updateList = [];
            appointmentDetails.forEach(function (appointmentDetail) {
              var details = data.detailsList.find(function (d) {
                return d.detail_id === appointmentDetail.detail_id;
              });

              //không tìm thấy do phía fe xóa details đó
              if (!details) {
                deleteList.push(appointmentDetail.detail_id);
              }

              //tìm thấy
              else {
                updateList.push({
                  detail_id: appointmentDetail.detail_id,
                  description: details.description
                });
              }
              ;
            });
            if (!deleteList.length) {
              _context1.n = 5;
              break;
            }
            _context1.n = 5;
            return _index["default"].Detail.destroy({
              where: {
                detail_id: deleteList
              }
            });
          case 5:
            ;
            if (!updateList.length) {
              _context1.n = 13;
              break;
            }
            _iterator2 = _createForOfIteratorHelper(updateList);
            _context1.p = 6;
            _iterator2.s();
          case 7:
            if ((_step2 = _iterator2.n()).done) {
              _context1.n = 9;
              break;
            }
            details = _step2.value;
            _context1.n = 8;
            return _index["default"].Detail.update({
              description: details.description
            }, {
              where: {
                detail_id: details.detail_id
              }
            });
          case 8:
            _context1.n = 7;
            break;
          case 9:
            _context1.n = 11;
            break;
          case 10:
            _context1.p = 10;
            _t10 = _context1.v;
            _iterator2.e(_t10);
          case 11:
            _context1.p = 11;
            _iterator2.f();
            return _context1.f(11);
          case 12:
            ;
          case 13:
            ;

            //cập nhật trạng thái lịch hẹn
            _context1.n = 14;
            return _index["default"].Appointment.update({
              status: 3
            },
            //đã hoàn thành lịch hẹn
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 14:
            result = _context1.v;
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: "Confirmed"
              });
            } else {
              resolve({
                errCode: 5,
                message: "Failed"
              });
            }
            ;
            _context1.n = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 16:
            ;
            _context1.n = 18;
            break;
          case 17:
            resolve({
              errCode: 2,
              type: "doctor",
              message: "Appointment doesn't belong to this doctor"
            });
          case 18:
            ;
            _context1.n = 20;
            break;
          case 19:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 20:
            ;
            _context1.n = 22;
            break;
          case 21:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 22:
            ;
          case 23:
            ;
            _context1.n = 25;
            break;
          case 24:
            _context1.p = 24;
            _t11 = _context1.v;
            reject(_t11);
          case 25:
            ;
          case 26:
            return _context1.a(2);
        }
      }, _callee1, null, [[6, 10, 11, 12], [0, 24]]);
    }));
    return function (_x19, _x20) {
      return _ref1.apply(this, arguments);
    };
  }());
};

//GỬI CHI TIẾT LỊCH HẸN TỚI EMAIL
var sendToEmail = function sendToEmail(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(resolve, reject) {
      var patient_id, patient, _t12;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            if (!(!data.patient_id || !data.filename || !data.file)) {
              _context10.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context10.n = 6;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context10.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context10.v;
            if (!patient) {
              _context10.n = 4;
              break;
            }
            _context10.n = 3;
            return _mail["default"].detailsInfo({
              email: patient.email,
              fullname: patient.fullname,
              filename: data.filename,
              file: data.file
            });
          case 3:
            resolve({
              errCode: 0,
              message: "Sent to email"
            });
            _context10.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 5:
            ;
          case 6:
            ;
            _context10.n = 8;
            break;
          case 7:
            _context10.p = 7;
            _t12 = _context10.v;
            reject(_t12);
          case 8:
            ;
          case 9:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 7]]);
    }));
    return function (_x21, _x22) {
      return _ref10.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAll: getAll,
  getByID: getByID,
  getAllByDoctorID: getAllByDoctorID,
  getAllByPatientID: getAllByPatientID,
  bookAppointment: bookAppointment,
  acceptAppointment: acceptAppointment,
  canceledByEmployee: canceledByEmployee,
  canceledByPatient: canceledByPatient,
  saveDetails: saveDetails,
  confirmDone: confirmDone,
  sendToEmail: sendToEmail
};