"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _auth = require("./auth");
var _doctor = require("./doctor");
var _moment = _interopRequireDefault(require("moment"));
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _excluded = ["DoctorSchedule"],
  _excluded2 = ["EmployeeSchedule"],
  _excluded3 = ["DoctorSchedule"],
  _excluded4 = ["EmployeeSchedule"],
  _excluded5 = ["Schedules"],
  _excluded6 = ["DoctorSchedule"],
  _excluded7 = ["EmployeeSchedule"],
  _excluded8 = ["Schedules"],
  _excluded9 = ["Schedules"],
  _excluded0 = ["EmployeeSchedule"],
  _excluded1 = ["DoctorSchedule"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  Op = _require.Op;
//LẤY 7 NGÀY CỦA 1 TUẦN THEO ISO WEEK
var getDaysOfWeek = function getDaysOfWeek(week, year) {
  var daysOfWeek = [];
  var date = (0, _moment["default"])(String(year).padStart(4, '0') + 'W' + String(week).padStart(2, '0'));
  for (var i = 0; i < 7; i++) {
    daysOfWeek.push(date.format('YYYY-MM-DD').valueOf());
    date.add(1, 'day');
  }
  return daysOfWeek;
};

//THÊM MỚI BẢNG DOCTOR_SCHEDULE
var createDoctorSchedule = function createDoctorSchedule(doctorIDList, schedule_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var doctorSchedules, invalid, valid, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _index["default"].DoctorSchedule.findAll({
              where: {
                doctor_id: doctorIDList,
                schedule_id: schedule_id
              }
            });
          case 1:
            doctorSchedules = _context.v;
            doctorSchedules = doctorSchedules.map(function (doctorSchedule) {
              return doctorSchedule.doctor_id;
            });
            invalid = [];
            valid = [];
            doctorIDList.forEach(function (doctor_id) {
              if (doctorSchedules.includes(doctor_id)) {
                invalid.push(doctor_id);
              } else {
                valid.push({
                  doctor_id: doctor_id,
                  schedule_id: schedule_id,
                  status: 0
                });
              }
            });
            if (!valid.length) {
              _context.n = 2;
              break;
            }
            _context.n = 2;
            return _index["default"].DoctorSchedule.bulkCreate(valid);
          case 2:
            resolve({
              valid: valid.map(function (item) {
                return item.doctor_id;
              }),
              invalid: invalid
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            reject(_t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//THÊM MỚI BẢNG EMPLOYEE_SCHEDULE
var createEmployeeSchedule = function createEmployeeSchedule(employeeIDList, schedule_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var employeeSchedules, invalid, valid, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _index["default"].EmployeeSchedule.findAll({
              where: {
                employee_id: employeeIDList,
                schedule_id: schedule_id
              }
            });
          case 1:
            employeeSchedules = _context2.v;
            employeeSchedules = employeeSchedules.map(function (employeeSchedule) {
              return employeeSchedule.employee_id;
            });
            invalid = [];
            valid = [];
            employeeIDList.forEach(function (employee_id) {
              if (employeeSchedules.includes(employee_id)) {
                invalid.push(employee_id);
              } else {
                valid.push({
                  employee_id: employee_id,
                  schedule_id: schedule_id,
                  status: 0
                });
              }
            });
            if (!valid.length) {
              _context2.n = 2;
              break;
            }
            _context2.n = 2;
            return _index["default"].EmployeeSchedule.bulkCreate(valid);
          case 2:
            resolve({
              valid: valid.map(function (item) {
                return item.employee_id;
              }),
              invalid: invalid
            });
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            reject(_t2);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC BÁC SĨ
var getDoctorSchedulesByWeek = function getDoctorSchedulesByWeek(week, year) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var daysOfWeek, rawData, doctors, doctorScheduleList, data, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(week, year); //join các bảng cần lấy dữ liệu
            _context3.n = 1;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 1:
            rawData = _context3.v;
            _context3.n = 2;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              order: [['createdAt', 'ASC']]
            });
          case 2:
            doctors = _context3.v;
            //thiết kế cấu trúc api
            doctorScheduleList = [];
            doctors.forEach(function (doctor) {
              var obj = {};
              var schedules = [];
              obj.doctor = doctor;
              rawData.forEach(function (item) {
                if (item.user_id === doctor.user_id) schedules.push(item.Schedules);
              });
              obj.schedules = schedules;
              doctorScheduleList.push(obj);
            });

            //thiết kế cấu trúc api
            data = [];
            doctorScheduleList.forEach(function (doctorSchedule) {
              var byUser = {};
              byUser.user = doctorSchedule.doctor;
              byUser.schedules = [];
              daysOfWeek.forEach(function (date) {
                var byDate = {};
                byDate.date = date;
                byDate.list = [];
                doctorSchedule.schedules.forEach(function (schedule) {
                  if (schedule.date === date) {
                    //thống nhất tên các biến
                    var DoctorSchedule = schedule.DoctorSchedule,
                      rest = _objectWithoutProperties(schedule, _excluded);
                    byDate.list.push(_objectSpread(_objectSpread({}, rest), {}, {
                      UserSchedule: {
                        user_schedule_id: DoctorSchedule.doctor_schedule_id,
                        user_id: DoctorSchedule.doctor_id,
                        schedule_id: DoctorSchedule.schedule_id,
                        status: DoctorSchedule.status,
                        createdAt: DoctorSchedule.createdAt,
                        updatedAt: DoctorSchedule.updatedAt
                      }
                    }));
                  }
                });
                byUser.schedules.push(byDate);
              });
              data.push(byUser);
            });
            resolve(data);
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            reject(_t3);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC QTV, LT, PT
var getEmployeeSchedulesByWeek = function getEmployeeSchedulesByWeek(week, year) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var daysOfWeek, rawData, employees, employeeScheduleList, data, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(week, year); //join các bảng cần lấy dữ liệu
            _context4.n = 1;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 1:
            rawData = _context4.v;
            _context4.n = 2;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              order: [['createdAt', 'ASC']]
            });
          case 2:
            employees = _context4.v;
            //thiết kế cấu trúc api
            employeeScheduleList = [];
            employees.forEach(function (employee) {
              var obj = {};
              var schedules = [];
              obj.employee = employee;
              rawData.forEach(function (item) {
                if (item.user_id === employee.user_id) schedules.push(item.Schedules);
              });
              obj.schedules = schedules;
              employeeScheduleList.push(obj);
            });

            //thiết kế cấu trúc api
            data = [];
            employeeScheduleList.forEach(function (employeeSchedule) {
              var byUser = {};
              byUser.user = employeeSchedule.employee;
              byUser.schedules = [];
              daysOfWeek.forEach(function (date) {
                var byDate = {};
                byDate.date = date;
                byDate.list = [];
                employeeSchedule.schedules.forEach(function (schedule) {
                  if (schedule.date === date) {
                    //thống nhất tên các biến
                    var EmployeeSchedule = schedule.EmployeeSchedule,
                      rest = _objectWithoutProperties(schedule, _excluded2);
                    byDate.list.push(_objectSpread(_objectSpread({}, rest), {}, {
                      UserSchedule: {
                        user_schedule_id: EmployeeSchedule.employee_schedule_id,
                        user_id: EmployeeSchedule.employee_id,
                        schedule_id: EmployeeSchedule.schedule_id,
                        status: EmployeeSchedule.status,
                        createdAt: EmployeeSchedule.createdAt,
                        updatedAt: EmployeeSchedule.updatedAt
                      }
                    }));
                  }
                });
                byUser.schedules.push(byDate);
              });
              data.push(byUser);
            });
            resolve(data);
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            reject(_t4);
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA BÁC SĨ TRONG 1 THÁNG
var getDoctorSchedulesByMonth = function getDoctorSchedulesByMonth(daysOfMonth) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var rawData, doctors, doctorScheduleList, data, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname'],
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfMonth
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 1:
            rawData = _context5.v;
            _context5.n = 2;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname'],
              order: [['createdAt', 'ASC']]
            });
          case 2:
            doctors = _context5.v;
            //thiết kế cấu trúc api
            doctorScheduleList = [];
            doctors.forEach(function (doctor) {
              var obj = {};
              var schedules = [];
              obj.doctor = doctor;
              rawData.forEach(function (item) {
                if (item.user_id === doctor.user_id) schedules.push(item.Schedules);
              });
              obj.schedules = schedules;
              doctorScheduleList.push(obj);
            });

            //thiết kế cấu trúc api
            data = [];
            doctorScheduleList.forEach(function (doctorSchedule) {
              var byUser = {};
              byUser.user = doctorSchedule.doctor;
              byUser.schedules = [];
              daysOfMonth.forEach(function (date) {
                var byDate = {};
                byDate.date = date;
                byDate.list = [];
                doctorSchedule.schedules.forEach(function (schedule) {
                  if (schedule.date === date) {
                    //thống nhất tên các biến
                    var DoctorSchedule = schedule.DoctorSchedule,
                      rest = _objectWithoutProperties(schedule, _excluded3);
                    byDate.list.push(_objectSpread(_objectSpread({}, rest), {}, {
                      UserSchedule: {
                        user_schedule_id: DoctorSchedule.doctor_schedule_id,
                        user_id: DoctorSchedule.doctor_id,
                        schedule_id: DoctorSchedule.schedule_id,
                        status: DoctorSchedule.status,
                        createdAt: DoctorSchedule.createdAt,
                        updatedAt: DoctorSchedule.updatedAt
                      }
                    }));
                  }
                });
                byUser.schedules.push(byDate);
              });
              data.push(byUser);
            });
            resolve(data);
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            reject(_t5);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA NHÂN VIÊN TRONG 1 THÁNG
var getEmployeeSchedulesByMonth = function getEmployeeSchedulesByMonth(daysOfMonth) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var rawData, employees, employeeScheduleList, data, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfMonth
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 1:
            rawData = _context6.v;
            _context6.n = 2;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              order: [['createdAt', 'ASC']]
            });
          case 2:
            employees = _context6.v;
            //thiết kế cấu trúc api
            employeeScheduleList = [];
            employees.forEach(function (employee) {
              var obj = {};
              var schedules = [];
              obj.employee = employee;
              rawData.forEach(function (item) {
                if (item.user_id === employee.user_id) schedules.push(item.Schedules);
              });
              obj.schedules = schedules;
              employeeScheduleList.push(obj);
            });

            //thiết kế cấu trúc api
            data = [];
            employeeScheduleList.forEach(function (employeeSchedule) {
              var byUser = {};
              byUser.user = employeeSchedule.employee;
              byUser.schedules = [];
              daysOfMonth.forEach(function (date) {
                var byDate = {};
                byDate.date = date;
                byDate.list = [];
                employeeSchedule.schedules.forEach(function (schedule) {
                  if (schedule.date === date) {
                    //thống nhất tên các biến
                    var EmployeeSchedule = schedule.EmployeeSchedule,
                      rest = _objectWithoutProperties(schedule, _excluded4);
                    byDate.list.push(_objectSpread(_objectSpread({}, rest), {}, {
                      UserSchedule: {
                        user_schedule_id: EmployeeSchedule.employee_schedule_id,
                        user_id: EmployeeSchedule.employee_id,
                        schedule_id: EmployeeSchedule.schedule_id,
                        status: EmployeeSchedule.status,
                        createdAt: EmployeeSchedule.createdAt,
                        updatedAt: EmployeeSchedule.updatedAt
                      }
                    }));
                  }
                });
                byUser.schedules.push(byDate);
              });
              data.push(byUser);
            });
            resolve(data);
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            reject(_t6);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//** API **//

//LẤY TẤT CẢ LỊCH LÀM VIỆC THEO TUẦN
//(datatable lịch của quản trị viên)
var getAllByWeek = function getAllByWeek(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var doctorSchedules, employeeSchedules, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (!(!data.week || !data.year)) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context7.n = 4;
            break;
          case 1:
            _context7.n = 2;
            return getDoctorSchedulesByWeek(data.week, data.year);
          case 2:
            doctorSchedules = _context7.v;
            _context7.n = 3;
            return getEmployeeSchedulesByWeek(data.week, data.year);
          case 3:
            employeeSchedules = _context7.v;
            resolve({
              errCode: 0,
              message: "Get all of the week ".concat(data.week, "/").concat(data.year),
              data: [].concat(_toConsumableArray(doctorSchedules), _toConsumableArray(employeeSchedules))
            });
          case 4:
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t7 = _context7.v;
            reject(_t7);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 5]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA 1 BÁC SĨ THEO NGÀY
//(hiển thị bên client)
var getDoctorSchedulesByDate = function getDoctorSchedulesByDate(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var currentDate, currentTime, doctor_id, doctor, rawData, schedules, length, temp, i, j, time_i, time_j, _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (!(!data.doctor_id || !data.date)) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context8.n = 7;
            break;
          case 1:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //data.date là ngày hiện tại hoặc tương lai
            if (!(data.date >= currentDate)) {
              _context8.n = 6;
              break;
            }
            doctor_id = data.doctor_id.toLowerCase();
            _context8.n = 2;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 2:
            doctor = _context8.v;
            if (!doctor) {
              _context8.n = 4;
              break;
            }
            _context8.n = 3;
            return _index["default"].Doctor.findAll({
              where: {
                doctor_id: doctor_id
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: data.date
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            rawData = _context8.v;
            //lọc để chỉ lấy phần lịch làm việc còn khả dụng
            schedules = rawData.map(function (item) {
              return item.Schedules;
            });
            schedules = schedules.filter(function (item) {
              return item.DoctorSchedule.status === 1;
            });

            //nếu data.date là ngày hiện tại thì lọc các lịch có ca khám >= thời gian hiện tại
            if (data.date === currentDate) {
              schedules = schedules.filter(function (item) {
                return item.Session.time.slice(0, 5) >= currentTime;
              });
            }

            //sắp xếp theo thứ tự tăng dần của thời gian ca khám
            length = schedules.length;
            for (i = 0; i < length - 1; i++) {
              for (j = i + 1; j < length; j++) {
                time_i = schedules[i].Session.time.slice(0, 2);
                time_j = schedules[j].Session.time.slice(0, 2);
                if (time_i > time_j) {
                  temp = schedules[i];
                  schedules[i] = schedules[j];
                  schedules[j] = temp;
                }
              }
            }
            resolve({
              errCode: 0,
              message: 'Get doctor schedule by date',
              data: schedules
            });
            _context8.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 5:
            _context8.n = 7;
            break;
          case 6:
            resolve({
              errCode: 2,
              message: "Can't get doctor's schedule from the past"
            });
          case 7:
            _context8.n = 9;
            break;
          case 8:
            _context8.p = 8;
            _t8 = _context8.v;
            reject(_t8);
          case 9:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 8]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN (QT, LT, BS, PT) THEO NGÀY
//(trang chi tiết lịch làm việc)
var getUserSchedulesByDate = function getUserSchedulesByDate(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var user_id, prefix, user, rawData, _rawData$, Schedules, _user, schedules, length, temp, i, j, time_i, time_j, _t9, _t0;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.user_id || !data.date)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context9.n = 10;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context9.n = 2;
            return (0, _auth.getUserByID)(user_id);
          case 2:
            user = _context9.v;
            if (!user) {
              _context9.n = 9;
              break;
            }
            _t9 = prefix;
            _context9.n = _t9 === 'qt' ? 3 : _t9 === 'lt' ? 3 : _t9 === 'pt' ? 3 : _t9 === 'bs' ? 5 : 7;
            break;
          case 3:
            _context9.n = 4;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: user_id
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: data.date
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 4:
            rawData = _context9.v;
            return _context9.a(3, 8);
          case 5:
            _context9.n = 6;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                doctor_id: user_id
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: data.date
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 6:
            rawData = _context9.v;
            return _context9.a(3, 8);
          case 7:
            return _context9.a(3, 8);
          case 8:
            //trong DB có lịch của data.date
            if (rawData.length) {
              //lọc lấy thông tin nhân viên và lịch làm việc
              _rawData$ = rawData[0], Schedules = _rawData$.Schedules, _user = _objectWithoutProperties(_rawData$, _excluded5);
              schedules = rawData.map(function (item) {
                return item.Schedules;
              }); //thống nhất tên biến trong bảng nhiều nhiều: employee_schedule và doctor_schedule
              schedules = schedules.map(function (item) {
                var UserSchedule;
                var info;
                if (prefix === 'bs') {
                  var DoctorSchedule = item.DoctorSchedule,
                    rest = _objectWithoutProperties(item, _excluded6);
                  info = rest;
                  UserSchedule = {
                    user_schedule_id: DoctorSchedule.doctor_schedule_id,
                    user_id: DoctorSchedule.doctor_id,
                    schedule_id: DoctorSchedule.schedule_id,
                    status: DoctorSchedule.status,
                    createdAt: DoctorSchedule.createdAt,
                    updatedAt: DoctorSchedule.updatedAt
                  };
                } else {
                  var EmployeeSchedule = item.EmployeeSchedule,
                    _rest = _objectWithoutProperties(item, _excluded7);
                  info = _rest;
                  UserSchedule = {
                    user_schedule_id: EmployeeSchedule.employee_schedule_id,
                    user_id: EmployeeSchedule.employee_id,
                    schedule_id: EmployeeSchedule.schedule_id,
                    status: EmployeeSchedule.status,
                    createdAt: EmployeeSchedule.createdAt,
                    updatedAt: EmployeeSchedule.updatedAt
                  };
                }
                return _objectSpread(_objectSpread({}, info), {}, {
                  UserSchedule: UserSchedule
                });
              });

              //sắp xếp theo thứ tự tăng dần của thời gian ca khám
              length = schedules.length;
              for (i = 0; i < length - 1; i++) {
                for (j = i + 1; j < length; j++) {
                  time_i = schedules[i].Session.time.slice(0, 2);
                  time_j = schedules[j].Session.time.slice(0, 2);
                  if (time_i > time_j) {
                    temp = schedules[i];
                    schedules[i] = schedules[j];
                    schedules[j] = temp;
                  }
                }
              }
              resolve({
                errCode: 0,
                message: "Get user's schedules by ".concat(data.date),
                data: {
                  user: _user,
                  schedules: schedules
                }
              });
            } else {
              resolve({
                errCode: 2,
                message: "Doesn't have any schedule for this date"
              });
            }
            _context9.n = 10;
            break;
          case 9:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 10:
            _context9.n = 12;
            break;
          case 11:
            _context9.p = 11;
            _t0 = _context9.v;
            reject(_t0);
          case 12:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 11]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC THEO TUẦN CỦA 1 NHÂN VIÊN
//(datatable lịch của 1 nhân viên)
var getUserSchedulesByWeek = function getUserSchedulesByWeek(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var user_id, prefix, user, daysOfWeek, rawData, _rawData$2, Schedules, _user2, _data, byUser, _t1, _t10;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.user_id || !data.week || !data.year)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context0.n = 10;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context0.n = 2;
            return (0, _auth.getUserByID)(user_id);
          case 2:
            user = _context0.v;
            if (!user) {
              _context0.n = 9;
              break;
            }
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(data.week, data.year); //join các bảng cần lấy dữ liệu
            _t1 = prefix;
            _context0.n = _t1 === 'lt' ? 3 : _t1 === 'pt' ? 3 : _t1 === 'bs' ? 5 : 7;
            break;
          case 3:
            _context0.n = 4;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: user_id
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 4:
            rawData = _context0.v;
            return _context0.a(3, 8);
          case 5:
            _context0.n = 6;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                doctor_id: user_id
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                },
                include: [{
                  model: _index["default"].Session
                }]
              }],
              raw: true,
              nest: true
            });
          case 6:
            rawData = _context0.v;
            return _context0.a(3, 8);
          case 7:
            return _context0.a(3, 8);
          case 8:
            if (rawData.length) {
              _rawData$2 = rawData[0], Schedules = _rawData$2.Schedules, _user2 = _objectWithoutProperties(_rawData$2, _excluded8);
              _data = [];
              byUser = {};
              byUser.user = _user2;
              byUser.schedules = [];
              daysOfWeek.forEach(function (date) {
                var byDate = {};
                byDate.date = date;
                byDate.list = [];
                rawData.forEach(function (item) {
                  var Schedules = item.Schedules,
                    rest = _objectWithoutProperties(item, _excluded9);
                  if (Schedules.date === date) {
                    switch (prefix) {
                      case 'lt':
                      case 'pt':
                        //thống nhất tên các biến
                        var EmployeeSchedule = Schedules.EmployeeSchedule,
                          restEmployee = _objectWithoutProperties(Schedules, _excluded0);
                        byDate.list.push(_objectSpread(_objectSpread({}, restEmployee), {}, {
                          UserSchedule: {
                            user_schedule_id: EmployeeSchedule.employee_schedule_id,
                            user_id: EmployeeSchedule.employee_id,
                            schedule_id: EmployeeSchedule.schedule_id,
                            status: EmployeeSchedule.status,
                            createdAt: EmployeeSchedule.createdAt,
                            updatedAt: EmployeeSchedule.updatedAt
                          }
                        }));
                        break;
                      case 'bs':
                        //thống nhất tên các biến
                        var DoctorSchedule = Schedules.DoctorSchedule,
                          restDoctor = _objectWithoutProperties(Schedules, _excluded1);
                        byDate.list.push(_objectSpread(_objectSpread({}, restDoctor), {}, {
                          UserSchedule: {
                            user_schedule_id: DoctorSchedule.employee_schedule_id,
                            user_id: DoctorSchedule.employee_id,
                            schedule_id: DoctorSchedule.schedule_id,
                            status: DoctorSchedule.status,
                            createdAt: DoctorSchedule.createdAt,
                            updatedAt: DoctorSchedule.updatedAt
                          }
                        }));
                        break;
                      default:
                        break;
                    }
                  }
                });
                byUser.schedules.push(byDate);
              });
              _data.push(byUser);
              resolve({
                errCode: 0,
                message: "Get user's schedules for week ".concat(_data.week, "/").concat(_data.year),
                data: _data
              });
            } else {
              resolve({
                errCode: 2,
                message: "Doesn't have any schedule for this week"
              });
            }
            _context0.n = 10;
            break;
          case 9:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 10:
            _context0.n = 12;
            break;
          case 11:
            _context0.p = 11;
            _t10 = _context0.v;
            reject(_t10);
          case 12:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 11]]);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA CÁC BÁC SĨ ĐIỀU TRỊ 1 DANH MỤC THEO NGÀY VÀ CA KHÁM ĐƯỢC CHỌN
//(trang đặt lịch hẹn dành cho lễ tân)
var getAllByCategoryDateSession = function getAllByCategoryDateSession(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(resolve, reject) {
      var category_id, session_id, doctorsByCategory, doctorSchedulesList, _iterator, _step, doctor, result, schedules, _t11, _t12;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            if (!(!data.category_id || !data.date || !data.session_id)) {
              _context1.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context1.n = 11;
            break;
          case 1:
            category_id = data.category_id.toLowerCase();
            session_id = data.session_id.toLowerCase();
            _context1.n = 2;
            return (0, _doctor.getAllByCategoryID)({
              category_id: category_id
            });
          case 2:
            doctorsByCategory = _context1.v;
            doctorsByCategory = doctorsByCategory.data;
            doctorSchedulesList = [];
            _iterator = _createForOfIteratorHelper(doctorsByCategory);
            _context1.p = 3;
            _iterator.s();
          case 4:
            if ((_step = _iterator.n()).done) {
              _context1.n = 7;
              break;
            }
            doctor = _step.value;
            _context1.n = 5;
            return getDoctorSchedulesByDate({
              doctor_id: doctor.doctor_id,
              date: data.date
            });
          case 5:
            result = _context1.v;
            schedules = result.data;
            if (schedules.find(function (schedule) {
              return schedule.Session.session_id === session_id;
            })) {
              doctorSchedulesList.push({
                doctor: doctor,
                schedules: schedules
              });
            }
          case 6:
            _context1.n = 4;
            break;
          case 7:
            _context1.n = 9;
            break;
          case 8:
            _context1.p = 8;
            _t11 = _context1.v;
            _iterator.e(_t11);
          case 9:
            _context1.p = 9;
            _iterator.f();
            return _context1.f(9);
          case 10:
            if (doctorSchedulesList.length) {
              resolve({
                errCode: 0,
                message: 'Get all by category, date, session',
                data: doctorSchedulesList
              });
            } else {
              resolve({
                errCode: 1,
                message: 'Not found'
              });
            }
          case 11:
            _context1.n = 13;
            break;
          case 12:
            _context1.p = 12;
            _t12 = _context1.v;
            reject(_t12);
          case 13:
            return _context1.a(2);
        }
      }, _callee1, null, [[3, 8, 9, 10], [0, 12]]);
    }));
    return function (_x19, _x20) {
      return _ref1.apply(this, arguments);
    };
  }());
};

//THÊM MỚI LỊCH LÀM VIỆC
var createSchedule = function createSchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(resolve, reject) {
      var currentDate, session_id, session, schedule, schedule_id, doctorIDList, resultDoctor, employeeIDList, resultEmployee, _t13;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            if (!(!data.date || !data.employees || !data.session_id)) {
              _context10.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context10.n = 11;
            break;
          case 1:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //data.date là ngày tương lai
            if (!(data.date > currentDate)) {
              _context10.n = 10;
              break;
            }
            session_id = data.session_id.toLowerCase();
            _context10.n = 2;
            return _index["default"].Session.findOne({
              where: {
                session_id: session_id
              }
            });
          case 2:
            session = _context10.v;
            if (!session) {
              _context10.n = 8;
              break;
            }
            _context10.n = 3;
            return _index["default"].Schedule.findOne({
              where: {
                session_id: session_id,
                date: data.date
              }
            });
          case 3:
            schedule = _context10.v;
            if (schedule) {
              _context10.n = 5;
              break;
            }
            schedule_id = _index2["default"].createID('ll');
            _context10.n = 4;
            return _index["default"].Schedule.create({
              schedule_id: schedule_id,
              session_id: session_id,
              date: data.date
            });
          case 4:
            schedule = _context10.v;
          case 5:
            //thêm mới bảng doctor_schedule
            doctorIDList = data.employees.filter(function (user_id) {
              return user_id.slice(0, 2) === 'bs';
            });
            _context10.n = 6;
            return createDoctorSchedule(doctorIDList, schedule.schedule_id);
          case 6:
            resultDoctor = _context10.v;
            //thêm mới bảng employee_schedule
            employeeIDList = data.employees.filter(function (user_id) {
              return user_id.slice(0, 2) !== 'bs';
            });
            _context10.n = 7;
            return createEmployeeSchedule(employeeIDList, schedule.schedule_id);
          case 7:
            resultEmployee = _context10.v;
            resolve({
              errCode: 0,
              validUsers: [].concat(_toConsumableArray(resultDoctor.valid), _toConsumableArray(resultEmployee.valid)),
              invalidUsers: [].concat(_toConsumableArray(resultDoctor.invalid), _toConsumableArray(resultEmployee.invalid))
            });
            _context10.n = 9;
            break;
          case 8:
            resolve({
              errCode: 1,
              message: "Session doesn't exist"
            });
          case 9:
            _context10.n = 11;
            break;
          case 10:
            resolve({
              errCode: 2,
              message: 'Cannot create schedule for the past'
            });
          case 11:
            _context10.n = 13;
            break;
          case 12:
            _context10.p = 12;
            _t13 = _context10.v;
            reject(_t13);
          case 13:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 12]]);
    }));
    return function (_x21, _x22) {
      return _ref10.apply(this, arguments);
    };
  }());
};

//DUYỆT 1 LỊCH LÀM VIỆC
var acceptOne = function acceptOne(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(resolve, reject) {
      var user_id, prefix, user, userSchedule, currentDate, result, _t14, _t15, _t16;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            _context11.p = 0;
            if (!(!data.user_id || !data.user_schedule_id)) {
              _context11.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context11.n = 22;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context11.n = 2;
            return (0, _auth.getUserByID)(user_id);
          case 2:
            user = _context11.v;
            if (!user) {
              _context11.n = 21;
              break;
            }
            _t14 = prefix;
            _context11.n = _t14 === 'qt' ? 3 : _t14 === 'lt' ? 3 : _t14 === 'pt' ? 3 : _t14 === 'bs' ? 5 : 7;
            break;
          case 3:
            _context11.n = 4;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                employee_schedule_id: data.user_schedule_id
              },
              include: [{
                model: _index["default"].Schedule
              }],
              raw: true,
              nest: true
            });
          case 4:
            userSchedule = _context11.v;
            return _context11.a(3, 8);
          case 5:
            _context11.n = 6;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: data.user_schedule_id
              },
              include: [{
                model: _index["default"].Schedule
              }],
              raw: true,
              nest: true
            });
          case 6:
            userSchedule = _context11.v;
            return _context11.a(3, 8);
          case 7:
            return _context11.a(3, 8);
          case 8:
            if (!userSchedule) {
              _context11.n = 19;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //ngày của lịch làm việc là tương lai
            if (!(userSchedule.Schedule.date > currentDate)) {
              _context11.n = 17;
              break;
            }
            if (!(userSchedule.status === 0)) {
              _context11.n = 15;
              break;
            }
            _t15 = prefix;
            _context11.n = _t15 === 'qt' ? 9 : _t15 === 'lt' ? 9 : _t15 === 'pt' ? 9 : _t15 === 'bs' ? 11 : 13;
            break;
          case 9:
            _context11.n = 10;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 10:
            result = _context11.v;
            return _context11.a(3, 14);
          case 11:
            _context11.n = 12;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 12:
            result = _context11.v;
            return _context11.a(3, 14);
          case 13:
            return _context11.a(3, 14);
          case 14:
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Accepted'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context11.n = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              type: 'status',
              message: 'Incorrect status'
            });
          case 16:
            _context11.n = 18;
            break;
          case 17:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Cannot accept schedule from the past'
            });
          case 18:
            _context11.n = 20;
            break;
          case 19:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 20:
            _context11.n = 22;
            break;
          case 21:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 22:
            _context11.n = 24;
            break;
          case 23:
            _context11.p = 23;
            _t16 = _context11.v;
            reject(_t16);
          case 24:
            return _context11.a(2);
        }
      }, _callee11, null, [[0, 23]]);
    }));
    return function (_x23, _x24) {
      return _ref11.apply(this, arguments);
    };
  }());
};

//DUYỆT TẤT CẢ LỊCH LÀM VIỆC CỦA 1 NGÀY (CỦA 1 NHÂN VIÊN)
var acceptAll = function acceptAll(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(resolve, reject) {
      var user_id, prefix, user, userSchedules, currentDate, incorrectStatus, result, _t17, _t18, _t19;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            _context12.p = 0;
            if (!(!data.user_id || !data.list)) {
              _context12.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context12.n = 22;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context12.n = 2;
            return (0, _auth.getUserByID)(user_id);
          case 2:
            user = _context12.v;
            if (!user) {
              _context12.n = 21;
              break;
            }
            _t17 = prefix;
            _context12.n = _t17 === 'qt' ? 3 : _t17 === 'lt' ? 3 : _t17 === 'pt' ? 3 : _t17 === 'bs' ? 5 : 7;
            break;
          case 3:
            _context12.n = 4;
            return _index["default"].EmployeeSchedule.findAll({
              where: {
                employee_schedule_id: data.list
              },
              include: [{
                model: _index["default"].Schedule
              }],
              raw: true,
              nest: true
            });
          case 4:
            userSchedules = _context12.v;
            return _context12.a(3, 8);
          case 5:
            _context12.n = 6;
            return _index["default"].DoctorSchedule.findAll({
              where: {
                doctor_schedule_id: data.list
              },
              include: [{
                model: _index["default"].Schedule
              }],
              raw: true,
              nest: true
            });
          case 6:
            userSchedules = _context12.v;
            return _context12.a(3, 8);
          case 7:
            return _context12.a(3, 8);
          case 8:
            if (!(userSchedules.length === data.list.length)) {
              _context12.n = 19;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //ngày của lịch làm việc là tương lai
            if (!(userSchedules[0].Schedule.date > currentDate)) {
              _context12.n = 17;
              break;
            }
            //kiểm tra trong data.list có lịch nào đã được duyệt hay chưa

            userSchedules.forEach(function (item) {
              if (item.status !== 0) incorrectStatus = true;
            });

            //có lịch có status === 1 || status === 2
            if (!incorrectStatus) {
              _context12.n = 9;
              break;
            }
            resolve({
              errCode: 2,
              type: 'status',
              message: 'Incorrect status'
            });
            _context12.n = 16;
            break;
          case 9:
            _t18 = prefix;
            _context12.n = _t18 === 'qt' ? 10 : _t18 === 'lt' ? 10 : _t18 === 'pt' ? 10 : _t18 === 'bs' ? 12 : 14;
            break;
          case 10:
            _context12.n = 11;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: data.list
              }
            });
          case 11:
            result = _context12.v;
            return _context12.a(3, 15);
          case 12:
            _context12.n = 13;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: data.list
              }
            });
          case 13:
            result = _context12.v;
            return _context12.a(3, 15);
          case 14:
            return _context12.a(3, 15);
          case 15:
            if (result) {
              resolve({
                errCode: 0,
                message: 'Accepted'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
          case 16:
            _context12.n = 18;
            break;
          case 17:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Cannot accept schedule from the past'
            });
          case 18:
            _context12.n = 20;
            break;
          case 19:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 20:
            _context12.n = 22;
            break;
          case 21:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 22:
            _context12.n = 24;
            break;
          case 23:
            _context12.p = 23;
            _t19 = _context12.v;
            reject(_t19);
          case 24:
            return _context12.a(2);
        }
      }, _callee12, null, [[0, 23]]);
    }));
    return function (_x25, _x26) {
      return _ref12.apply(this, arguments);
    };
  }());
};

//DUYỆT LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA TẤT CẢ NHÂN VIÊN
var acceptForAWeek = function acceptForAWeek(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(resolve, reject) {
      var currentDate, daysOfWeek, doctorSchedules, employeeSchedules, _t20;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            _context13.p = 0;
            if (!(!data.week || !data.year)) {
              _context13.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context13.n = 7;
            break;
          case 1:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //lấy 7 ngày của tuần cần duyệt
            //lọc những ngày trong tuần lớn hơn ngày hiện tại
            daysOfWeek = getDaysOfWeek(data.week, data.year);
            daysOfWeek = daysOfWeek.filter(function (date) {
              return date > currentDate;
            });
            if (!daysOfWeek.length) {
              _context13.n = 6;
              break;
            }
            _context13.n = 2;
            return _index["default"].DoctorSchedule.findAll({
              where: {
                status: 0
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                }
              }],
              raw: true,
              nest: true
            });
          case 2:
            doctorSchedules = _context13.v;
            _context13.n = 3;
            return _index["default"].EmployeeSchedule.findAll({
              where: {
                status: 0
              },
              include: [{
                model: _index["default"].Schedule,
                where: {
                  date: daysOfWeek
                }
              }],
              raw: true,
              nest: true
            });
          case 3:
            employeeSchedules = _context13.v;
            if (!doctorSchedules.length) {
              _context13.n = 4;
              break;
            }
            doctorSchedules = doctorSchedules.map(function (item) {
              return item.doctor_schedule_id;
            });
            _context13.n = 4;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: doctorSchedules
              }
            });
          case 4:
            if (!employeeSchedules.length) {
              _context13.n = 5;
              break;
            }
            employeeSchedules = employeeSchedules.map(function (item) {
              return item.employee_schedule_id;
            });
            _context13.n = 5;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: employeeSchedules
              }
            });
          case 5:
            if (doctorSchedules.length || employeeSchedules.length) {
              resolve({
                errCode: 0,
                message: 'Accepted'
              });
            } else {
              resolve({
                errCode: 2,
                type: 'status',
                message: 'Have no schedule need to be accepted'
              });
            }
            _context13.n = 7;
            break;
          case 6:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Have no valid date'
            });
          case 7:
            _context13.n = 9;
            break;
          case 8:
            _context13.p = 8;
            _t20 = _context13.v;
            reject(_t20);
          case 9:
            return _context13.a(2);
        }
      }, _callee13, null, [[0, 8]]);
    }));
    return function (_x27, _x28) {
      return _ref13.apply(this, arguments);
    };
  }());
};

//XÓA LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN
var deleteUserSchedule = function deleteUserSchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(resolve, reject) {
      var user_id, prefix, user, userSchedule, isBeingUsed, schedule_id, result, employeeSchedule, doctorSchedule, _t21, _t22, _t23;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            if (!(!data.user_id || !data.user_schedule_id)) {
              _context14.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context14.n = 29;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context14.n = 2;
            return (0, _auth.getUserByID)(user_id);
          case 2:
            user = _context14.v;
            if (!user) {
              _context14.n = 28;
              break;
            }
            _t21 = prefix;
            _context14.n = _t21 === 'qt' ? 3 : _t21 === 'lt' ? 3 : _t21 === 'pt' ? 3 : _t21 === 'bs' ? 5 : 9;
            break;
          case 3:
            _context14.n = 4;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 4:
            userSchedule = _context14.v;
            return _context14.a(3, 10);
          case 5:
            _context14.n = 6;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 6:
            userSchedule = _context14.v;
            if (!userSchedule) {
              _context14.n = 8;
              break;
            }
            _context14.n = 7;
            return _index["default"].Appointment.findOne({
              where: {
                doctor_schedule_id: userSchedule.doctor_schedule_id
                // status: {[Op.ne]: 2} -> vướng khóa ngoại nên lịch hẹn đã hủy thì không thể xóa lịch làm việc đó
              }
            });
          case 7:
            isBeingUsed = _context14.v;
          case 8:
            return _context14.a(3, 10);
          case 9:
            return _context14.a(3, 10);
          case 10:
            if (!userSchedule) {
              _context14.n = 26;
              break;
            }
            if (isBeingUsed) {
              _context14.n = 24;
              break;
            }
            schedule_id = userSchedule.schedule_id;
            _t22 = prefix;
            _context14.n = _t22 === 'qt' ? 11 : _t22 === 'lt' ? 11 : _t22 === 'pt' ? 11 : _t22 === 'bs' ? 15 : 19;
            break;
          case 11:
            _context14.n = 12;
            return _index["default"].EmployeeSchedule.destroy({
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 12:
            result = _context14.v;
            _context14.n = 13;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 13:
            employeeSchedule = _context14.v;
            _context14.n = 14;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 14:
            doctorSchedule = _context14.v;
            return _context14.a(3, 20);
          case 15:
            _context14.n = 16;
            return _index["default"].DoctorSchedule.destroy({
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 16:
            result = _context14.v;
            _context14.n = 17;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 17:
            employeeSchedule = _context14.v;
            _context14.n = 18;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 18:
            doctorSchedule = _context14.v;
            return _context14.a(3, 20);
          case 19:
            return _context14.a(3, 20);
          case 20:
            if (!(result === 1)) {
              _context14.n = 22;
              break;
            }
            if (!(!employeeSchedule && !doctorSchedule)) {
              _context14.n = 21;
              break;
            }
            _context14.n = 21;
            return _index["default"].Schedule.destroy({
              where: {
                schedule_id: schedule_id
              }
            });
          case 21:
            resolve({
              errCode: 0,
              message: 'Deleted'
            });
            _context14.n = 23;
            break;
          case 22:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 23:
            _context14.n = 25;
            break;
          case 24:
            resolve({
              errCode: 6,
              message: 'This schedule is already booked'
            });
          case 25:
            _context14.n = 27;
            break;
          case 26:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 27:
            _context14.n = 29;
            break;
          case 28:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 29:
            _context14.n = 31;
            break;
          case 30:
            _context14.p = 30;
            _t23 = _context14.v;
            reject(_t23);
          case 31:
            return _context14.a(2);
        }
      }, _callee14, null, [[0, 30]]);
    }));
    return function (_x29, _x30) {
      return _ref14.apply(this, arguments);
    };
  }());
};
module.exports = {
  getDoctorSchedulesByMonth: getDoctorSchedulesByMonth,
  getEmployeeSchedulesByMonth: getEmployeeSchedulesByMonth,
  getAllByWeek: getAllByWeek,
  getDoctorSchedulesByDate: getDoctorSchedulesByDate,
  getUserSchedulesByDate: getUserSchedulesByDate,
  getUserSchedulesByWeek: getUserSchedulesByWeek,
  getAllByCategoryDateSession: getAllByCategoryDateSession,
  createSchedule: createSchedule,
  acceptOne: acceptOne,
  acceptAll: acceptAll,
  acceptForAWeek: acceptForAWeek,
  deleteUserSchedule: deleteUserSchedule
};