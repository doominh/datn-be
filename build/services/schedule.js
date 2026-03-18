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
  _excluded10 = ["EmployeeSchedule"],
  _excluded11 = ["DoctorSchedule"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var doctorSchedules, invalid, valid;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].DoctorSchedule.findAll({
              where: {
                doctor_id: doctorIDList,
                schedule_id: schedule_id
              }
            });
          case 3:
            doctorSchedules = _context.sent;
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
              _context.next = 11;
              break;
            }
            _context.next = 11;
            return _index["default"].DoctorSchedule.bulkCreate(valid);
          case 11:
            resolve({
              valid: valid.map(function (item) {
                return item.doctor_id;
              }),
              invalid: invalid
            });
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//THÊM MỚI BẢNG EMPLOYEE_SCHEDULE
var createEmployeeSchedule = function createEmployeeSchedule(employeeIDList, schedule_id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var employeeSchedules, invalid, valid;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].EmployeeSchedule.findAll({
              where: {
                employee_id: employeeIDList,
                schedule_id: schedule_id
              }
            });
          case 3:
            employeeSchedules = _context2.sent;
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
              _context2.next = 11;
              break;
            }
            _context2.next = 11;
            return _index["default"].EmployeeSchedule.bulkCreate(valid);
          case 11:
            resolve({
              valid: valid.map(function (item) {
                return item.employee_id;
              }),
              invalid: invalid
            });
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC BÁC SĨ
var getDoctorSchedulesByWeek = function getDoctorSchedulesByWeek(week, year) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var daysOfWeek, rawData, doctors, doctorScheduleList, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(week, year); //join các bảng cần lấy dữ liệu
            _context3.next = 4;
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
          case 4:
            rawData = _context3.sent;
            _context3.next = 7;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              order: [['createdAt', 'ASC']]
            });
          case 7:
            doctors = _context3.sent;
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
            _context3.next = 18;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 15]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA CÁC QTV, LT, PT
var getEmployeeSchedulesByWeek = function getEmployeeSchedulesByWeek(week, year) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var daysOfWeek, rawData, employees, employeeScheduleList, data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(week, year); //join các bảng cần lấy dữ liệu
            _context4.next = 4;
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
          case 4:
            rawData = _context4.sent;
            _context4.next = 7;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              order: [['createdAt', 'ASC']]
            });
          case 7:
            employees = _context4.sent;
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
            _context4.next = 18;
            break;
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 18:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 15]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA BÁC SĨ TRONG 1 THÁNG
var getDoctorSchedulesByMonth = function getDoctorSchedulesByMonth(daysOfMonth) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var rawData, doctors, doctorScheduleList, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
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
          case 3:
            rawData = _context5.sent;
            _context5.next = 6;
            return _index["default"].Doctor.findAll({
              attributes: [['doctor_id', 'user_id'], 'fullname'],
              order: [['createdAt', 'ASC']]
            });
          case 6:
            doctors = _context5.sent;
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
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA NHÂN VIÊN TRONG 1 THÁNG
var getEmployeeSchedulesByMonth = function getEmployeeSchedulesByMonth(daysOfMonth) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var rawData, employees, employeeScheduleList, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
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
          case 3:
            rawData = _context6.sent;
            _context6.next = 6;
            return _index["default"].Employee.findAll({
              attributes: [['employee_id', 'user_id'], 'fullname', 'avatar', 'dob', 'gender', 'phone', 'email'],
              where: {
                employee_id: _defineProperty({}, Op.ne, 'none')
              },
              order: [['createdAt', 'ASC']]
            });
          case 6:
            employees = _context6.sent;
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
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//** API **//

//LẤY TẤT CẢ LỊCH LÀM VIỆC THEO TUẦN
//(datatable lịch của quản trị viên)
var getAllByWeek = function getAllByWeek(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var doctorSchedules, employeeSchedules;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!data.week || !data.year)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context7.next = 12;
            break;
          case 5:
            _context7.next = 7;
            return getDoctorSchedulesByWeek(data.week, data.year);
          case 7:
            doctorSchedules = _context7.sent;
            _context7.next = 10;
            return getEmployeeSchedulesByWeek(data.week, data.year);
          case 10:
            employeeSchedules = _context7.sent;
            resolve({
              errCode: 0,
              message: "Get all of the week ".concat(data.week, "/").concat(data.year),
              data: [].concat(_toConsumableArray(doctorSchedules), _toConsumableArray(employeeSchedules))
            });
          case 12:
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 14]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA 1 BÁC SĨ THEO NGÀY
//(hiển thị bên client)
var getDoctorSchedulesByDate = function getDoctorSchedulesByDate(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var currentDate, currentTime, doctor_id, doctor, rawData, schedules, length, temp, i, j, time_i, time_j;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (!(!data.doctor_id || !data.date)) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context8.next = 28;
            break;
          case 5:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //data.date là ngày hiện tại hoặc tương lai
            if (!(data.date >= currentDate)) {
              _context8.next = 27;
              break;
            }
            doctor_id = data.doctor_id.toLowerCase();
            _context8.next = 11;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 11:
            doctor = _context8.sent;
            if (!doctor) {
              _context8.next = 24;
              break;
            }
            _context8.next = 15;
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
          case 15:
            rawData = _context8.sent;
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
            _context8.next = 25;
            break;
          case 24:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 25:
            _context8.next = 28;
            break;
          case 27:
            resolve({
              errCode: 2,
              message: "Can't get doctor's schedule from the past"
            });
          case 28:
            _context8.next = 33;
            break;
          case 30:
            _context8.prev = 30;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 33:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 30]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN (QT, LT, BS, PT) THEO NGÀY
//(trang chi tiết lịch làm việc)
var getUserSchedulesByDate = function getUserSchedulesByDate(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var user_id, prefix, user, rawData, _rawData$, Schedules, _user, schedules, length, temp, i, j, time_i, time_j;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!data.user_id || !data.date)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context9.next = 27;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context9.next = 9;
            return (0, _auth.getUserByID)(user_id);
          case 9:
            user = _context9.sent;
            if (!user) {
              _context9.next = 26;
              break;
            }
            _context9.t0 = prefix;
            _context9.next = _context9.t0 === 'qt' ? 14 : _context9.t0 === 'lt' ? 14 : _context9.t0 === 'pt' ? 14 : _context9.t0 === 'bs' ? 18 : 22;
            break;
          case 14:
            _context9.next = 16;
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
          case 16:
            rawData = _context9.sent;
            return _context9.abrupt("break", 23);
          case 18:
            _context9.next = 20;
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
          case 20:
            rawData = _context9.sent;
            return _context9.abrupt("break", 23);
          case 22:
            return _context9.abrupt("break", 23);
          case 23:
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
            _context9.next = 27;
            break;
          case 26:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 27:
            _context9.next = 32;
            break;
          case 29:
            _context9.prev = 29;
            _context9.t1 = _context9["catch"](0);
            reject(_context9.t1);
          case 32:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 29]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC THEO TUẦN CỦA 1 NHÂN VIÊN
//(datatable lịch của 1 nhân viên)
var getUserSchedulesByWeek = function getUserSchedulesByWeek(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var user_id, prefix, user, daysOfWeek, rawData, _rawData$2, Schedules, _user2, _data, byUser;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.user_id || !data.week || !data.year)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context10.next = 28;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context10.next = 9;
            return (0, _auth.getUserByID)(user_id);
          case 9:
            user = _context10.sent;
            if (!user) {
              _context10.next = 27;
              break;
            }
            //lấy 7 ngày của tuần cần xem
            daysOfWeek = getDaysOfWeek(data.week, data.year); //join các bảng cần lấy dữ liệu
            _context10.t0 = prefix;
            _context10.next = _context10.t0 === 'lt' ? 15 : _context10.t0 === 'pt' ? 15 : _context10.t0 === 'bs' ? 19 : 23;
            break;
          case 15:
            _context10.next = 17;
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
          case 17:
            rawData = _context10.sent;
            return _context10.abrupt("break", 24);
          case 19:
            _context10.next = 21;
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
          case 21:
            rawData = _context10.sent;
            return _context10.abrupt("break", 24);
          case 23:
            return _context10.abrupt("break", 24);
          case 24:
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
                          restEmployee = _objectWithoutProperties(Schedules, _excluded10);
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
                          restDoctor = _objectWithoutProperties(Schedules, _excluded11);
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
            _context10.next = 28;
            break;
          case 27:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 28:
            _context10.next = 33;
            break;
          case 30:
            _context10.prev = 30;
            _context10.t1 = _context10["catch"](0);
            reject(_context10.t1);
          case 33:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 30]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH LÀM VIỆC CỦA CÁC BÁC SĨ ĐIỀU TRỊ 1 DANH MỤC THEO NGÀY VÀ CA KHÁM ĐƯỢC CHỌN
//(trang đặt lịch hẹn dành cho lễ tân)
var getAllByCategoryDateSession = function getAllByCategoryDateSession(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var category_id, session_id, doctorsByCategory, doctorSchedulesList, _iterator, _step, doctor, result, schedules;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!(!data.category_id || !data.date || !data.session_id)) {
              _context11.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context11.next = 33;
            break;
          case 5:
            category_id = data.category_id.toLowerCase();
            session_id = data.session_id.toLowerCase();
            _context11.next = 9;
            return (0, _doctor.getAllByCategoryID)({
              category_id: category_id
            });
          case 9:
            doctorsByCategory = _context11.sent;
            doctorsByCategory = doctorsByCategory.data;
            doctorSchedulesList = [];
            _iterator = _createForOfIteratorHelper(doctorsByCategory);
            _context11.prev = 13;
            _iterator.s();
          case 15:
            if ((_step = _iterator.n()).done) {
              _context11.next = 24;
              break;
            }
            doctor = _step.value;
            _context11.next = 19;
            return getDoctorSchedulesByDate({
              doctor_id: doctor.doctor_id,
              date: data.date
            });
          case 19:
            result = _context11.sent;
            schedules = result.data;
            if (schedules.find(function (schedule) {
              return schedule.Session.session_id === session_id;
            })) {
              doctorSchedulesList.push({
                doctor: doctor,
                schedules: schedules
              });
            }
          case 22:
            _context11.next = 15;
            break;
          case 24:
            _context11.next = 29;
            break;
          case 26:
            _context11.prev = 26;
            _context11.t0 = _context11["catch"](13);
            _iterator.e(_context11.t0);
          case 29:
            _context11.prev = 29;
            _iterator.f();
            return _context11.finish(29);
          case 32:
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
          case 33:
            _context11.next = 38;
            break;
          case 35:
            _context11.prev = 35;
            _context11.t1 = _context11["catch"](0);
            reject(_context11.t1);
          case 38:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 35], [13, 26, 29, 32]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};

//THÊM MỚI LỊCH LÀM VIỆC
var createSchedule = function createSchedule(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var currentDate, session_id, session, schedule, schedule_id, doctorIDList, resultDoctor, employeeIDList, resultEmployee;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(!data.date || !data.employees || !data.session_id)) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context12.next = 35;
            break;
          case 5:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //data.date là ngày tương lai
            if (!(data.date > currentDate)) {
              _context12.next = 34;
              break;
            }
            session_id = data.session_id.toLowerCase();
            _context12.next = 10;
            return _index["default"].Session.findOne({
              where: {
                session_id: session_id
              }
            });
          case 10:
            session = _context12.sent;
            if (!session) {
              _context12.next = 31;
              break;
            }
            _context12.next = 14;
            return _index["default"].Schedule.findOne({
              where: {
                session_id: session_id,
                date: data.date
              }
            });
          case 14:
            schedule = _context12.sent;
            if (schedule) {
              _context12.next = 20;
              break;
            }
            schedule_id = _index2["default"].createID('ll');
            _context12.next = 19;
            return _index["default"].Schedule.create({
              schedule_id: schedule_id,
              session_id: session_id,
              date: data.date
            });
          case 19:
            schedule = _context12.sent;
          case 20:
            //thêm mới bảng doctor_schedule
            doctorIDList = data.employees.filter(function (user_id) {
              return user_id.slice(0, 2) === 'bs';
            });
            _context12.next = 23;
            return createDoctorSchedule(doctorIDList, schedule.schedule_id);
          case 23:
            resultDoctor = _context12.sent;
            //thêm mới bảng employee_schedule
            employeeIDList = data.employees.filter(function (user_id) {
              return user_id.slice(0, 2) !== 'bs';
            });
            _context12.next = 27;
            return createEmployeeSchedule(employeeIDList, schedule.schedule_id);
          case 27:
            resultEmployee = _context12.sent;
            resolve({
              errCode: 0,
              validUsers: [].concat(_toConsumableArray(resultDoctor.valid), _toConsumableArray(resultEmployee.valid)),
              invalidUsers: [].concat(_toConsumableArray(resultDoctor.invalid), _toConsumableArray(resultEmployee.invalid))
            });
            _context12.next = 32;
            break;
          case 31:
            resolve({
              errCode: 1,
              message: "Session doesn't exist"
            });
          case 32:
            _context12.next = 35;
            break;
          case 34:
            resolve({
              errCode: 2,
              message: 'Cannot create schedule for the past'
            });
          case 35:
            _context12.next = 40;
            break;
          case 37:
            _context12.prev = 37;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 40:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 37]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};

//DUYỆT 1 LỊCH LÀM VIỆC
var acceptOne = function acceptOne(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var user_id, prefix, user, userSchedule, currentDate, result;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            if (!(!data.user_id || !data.user_schedule_id)) {
              _context13.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context13.next = 52;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context13.next = 9;
            return (0, _auth.getUserByID)(user_id);
          case 9:
            user = _context13.sent;
            if (!user) {
              _context13.next = 51;
              break;
            }
            _context13.t0 = prefix;
            _context13.next = _context13.t0 === 'qt' ? 14 : _context13.t0 === 'lt' ? 14 : _context13.t0 === 'pt' ? 14 : _context13.t0 === 'bs' ? 18 : 22;
            break;
          case 14:
            _context13.next = 16;
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
          case 16:
            userSchedule = _context13.sent;
            return _context13.abrupt("break", 23);
          case 18:
            _context13.next = 20;
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
          case 20:
            userSchedule = _context13.sent;
            return _context13.abrupt("break", 23);
          case 22:
            return _context13.abrupt("break", 23);
          case 23:
            if (!userSchedule) {
              _context13.next = 48;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //ngày của lịch làm việc là tương lai
            if (!(userSchedule.Schedule.date > currentDate)) {
              _context13.next = 45;
              break;
            }
            if (!(userSchedule.status === 0)) {
              _context13.next = 42;
              break;
            }
            _context13.t1 = prefix;
            _context13.next = _context13.t1 === 'qt' ? 30 : _context13.t1 === 'lt' ? 30 : _context13.t1 === 'pt' ? 30 : _context13.t1 === 'bs' ? 34 : 38;
            break;
          case 30:
            _context13.next = 32;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 32:
            result = _context13.sent;
            return _context13.abrupt("break", 39);
          case 34:
            _context13.next = 36;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 36:
            result = _context13.sent;
            return _context13.abrupt("break", 39);
          case 38:
            return _context13.abrupt("break", 39);
          case 39:
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
            _context13.next = 43;
            break;
          case 42:
            resolve({
              errCode: 2,
              type: 'status',
              message: 'Incorrect status'
            });
          case 43:
            _context13.next = 46;
            break;
          case 45:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Cannot accept schedule from the past'
            });
          case 46:
            _context13.next = 49;
            break;
          case 48:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 49:
            _context13.next = 52;
            break;
          case 51:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 52:
            _context13.next = 57;
            break;
          case 54:
            _context13.prev = 54;
            _context13.t2 = _context13["catch"](0);
            reject(_context13.t2);
          case 57:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 54]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};

//DUYỆT TẤT CẢ LỊCH LÀM VIỆC CỦA 1 NGÀY (CỦA 1 NHÂN VIÊN)
var acceptAll = function acceptAll(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var user_id, prefix, user, userSchedules, currentDate, incorrectStatus, result;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            if (!(!data.user_id || !data.list)) {
              _context14.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context14.next = 53;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context14.next = 9;
            return (0, _auth.getUserByID)(user_id);
          case 9:
            user = _context14.sent;
            if (!user) {
              _context14.next = 52;
              break;
            }
            _context14.t0 = prefix;
            _context14.next = _context14.t0 === 'qt' ? 14 : _context14.t0 === 'lt' ? 14 : _context14.t0 === 'pt' ? 14 : _context14.t0 === 'bs' ? 18 : 22;
            break;
          case 14:
            _context14.next = 16;
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
          case 16:
            userSchedules = _context14.sent;
            return _context14.abrupt("break", 23);
          case 18:
            _context14.next = 20;
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
          case 20:
            userSchedules = _context14.sent;
            return _context14.abrupt("break", 23);
          case 22:
            return _context14.abrupt("break", 23);
          case 23:
            if (!(userSchedules.length === data.list.length)) {
              _context14.next = 49;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //ngày của lịch làm việc là tương lai
            if (!(userSchedules[0].Schedule.date > currentDate)) {
              _context14.next = 46;
              break;
            }
            //kiểm tra trong data.list có lịch nào đã được duyệt hay chưa

            userSchedules.forEach(function (item) {
              if (item.status !== 0) incorrectStatus = true;
            });

            //có lịch có status === 1 || status === 2
            if (!incorrectStatus) {
              _context14.next = 31;
              break;
            }
            resolve({
              errCode: 2,
              type: 'status',
              message: 'Incorrect status'
            });
            _context14.next = 44;
            break;
          case 31:
            _context14.t1 = prefix;
            _context14.next = _context14.t1 === 'qt' ? 34 : _context14.t1 === 'lt' ? 34 : _context14.t1 === 'pt' ? 34 : _context14.t1 === 'bs' ? 38 : 42;
            break;
          case 34:
            _context14.next = 36;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: data.list
              }
            });
          case 36:
            result = _context14.sent;
            return _context14.abrupt("break", 43);
          case 38:
            _context14.next = 40;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: data.list
              }
            });
          case 40:
            result = _context14.sent;
            return _context14.abrupt("break", 43);
          case 42:
            return _context14.abrupt("break", 43);
          case 43:
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
          case 44:
            _context14.next = 47;
            break;
          case 46:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Cannot accept schedule from the past'
            });
          case 47:
            _context14.next = 50;
            break;
          case 49:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 50:
            _context14.next = 53;
            break;
          case 52:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 53:
            _context14.next = 58;
            break;
          case 55:
            _context14.prev = 55;
            _context14.t2 = _context14["catch"](0);
            reject(_context14.t2);
          case 58:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 55]]);
    }));
    return function (_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }());
};

//DUYỆT LỊCH LÀM VIỆC TRONG 1 TUẦN CỦA TẤT CẢ NHÂN VIÊN
var acceptForAWeek = function acceptForAWeek(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var currentDate, daysOfWeek, doctorSchedules, employeeSchedules;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            if (!(!data.week || !data.year)) {
              _context15.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context15.next = 27;
            break;
          case 5:
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate(); //lấy 7 ngày của tuần cần duyệt
            //lọc những ngày trong tuần lớn hơn ngày hiện tại
            daysOfWeek = getDaysOfWeek(data.week, data.year);
            daysOfWeek = daysOfWeek.filter(function (date) {
              return date > currentDate;
            });
            if (!daysOfWeek.length) {
              _context15.next = 26;
              break;
            }
            _context15.next = 11;
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
          case 11:
            doctorSchedules = _context15.sent;
            _context15.next = 14;
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
          case 14:
            employeeSchedules = _context15.sent;
            if (!doctorSchedules.length) {
              _context15.next = 19;
              break;
            }
            doctorSchedules = doctorSchedules.map(function (item) {
              return item.doctor_schedule_id;
            });
            _context15.next = 19;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: doctorSchedules
              }
            });
          case 19:
            if (!employeeSchedules.length) {
              _context15.next = 23;
              break;
            }
            employeeSchedules = employeeSchedules.map(function (item) {
              return item.employee_schedule_id;
            });
            _context15.next = 23;
            return _index["default"].EmployeeSchedule.update({
              status: 1
            }, {
              where: {
                employee_schedule_id: employeeSchedules
              }
            });
          case 23:
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
            _context15.next = 27;
            break;
          case 26:
            resolve({
              errCode: 2,
              type: 'date',
              message: 'Have no valid date'
            });
          case 27:
            _context15.next = 32;
            break;
          case 29:
            _context15.prev = 29;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 32:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 29]]);
    }));
    return function (_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }());
};

//XÓA LỊCH LÀM VIỆC CỦA 1 NHÂN VIÊN
var deleteUserSchedule = function deleteUserSchedule(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var user_id, prefix, user, userSchedule, isBeingUsed, schedule_id, result, employeeSchedule, doctorSchedule;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            if (!(!data.user_id || !data.user_schedule_id)) {
              _context16.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context16.next = 71;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context16.next = 9;
            return (0, _auth.getUserByID)(user_id);
          case 9:
            user = _context16.sent;
            if (!user) {
              _context16.next = 70;
              break;
            }
            _context16.t0 = prefix;
            _context16.next = _context16.t0 === 'qt' ? 14 : _context16.t0 === 'lt' ? 14 : _context16.t0 === 'pt' ? 14 : _context16.t0 === 'bs' ? 18 : 26;
            break;
          case 14:
            _context16.next = 16;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 16:
            userSchedule = _context16.sent;
            return _context16.abrupt("break", 27);
          case 18:
            _context16.next = 20;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 20:
            userSchedule = _context16.sent;
            if (!userSchedule) {
              _context16.next = 25;
              break;
            }
            _context16.next = 24;
            return _index["default"].Appointment.findOne({
              where: {
                doctor_schedule_id: userSchedule.doctor_schedule_id
                // status: {[Op.ne]: 2} -> vướng khóa ngoại nên lịch hẹn đã hủy thì không thể xóa lịch làm việc đó
              }
            });
          case 24:
            isBeingUsed = _context16.sent;
          case 25:
            return _context16.abrupt("break", 27);
          case 26:
            return _context16.abrupt("break", 27);
          case 27:
            if (!userSchedule) {
              _context16.next = 67;
              break;
            }
            if (isBeingUsed) {
              _context16.next = 64;
              break;
            }
            schedule_id = userSchedule.schedule_id;
            _context16.t1 = prefix;
            _context16.next = _context16.t1 === 'qt' ? 33 : _context16.t1 === 'lt' ? 33 : _context16.t1 === 'pt' ? 33 : _context16.t1 === 'bs' ? 43 : 53;
            break;
          case 33:
            _context16.next = 35;
            return _index["default"].EmployeeSchedule.destroy({
              where: {
                employee_schedule_id: data.user_schedule_id
              }
            });
          case 35:
            result = _context16.sent;
            _context16.next = 38;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 38:
            employeeSchedule = _context16.sent;
            _context16.next = 41;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 41:
            doctorSchedule = _context16.sent;
            return _context16.abrupt("break", 54);
          case 43:
            _context16.next = 45;
            return _index["default"].DoctorSchedule.destroy({
              where: {
                doctor_schedule_id: data.user_schedule_id
              }
            });
          case 45:
            result = _context16.sent;
            _context16.next = 48;
            return _index["default"].EmployeeSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 48:
            employeeSchedule = _context16.sent;
            _context16.next = 51;
            return _index["default"].DoctorSchedule.findOne({
              where: {
                schedule_id: schedule_id
              }
            });
          case 51:
            doctorSchedule = _context16.sent;
            return _context16.abrupt("break", 54);
          case 53:
            return _context16.abrupt("break", 54);
          case 54:
            if (!(result === 1)) {
              _context16.next = 61;
              break;
            }
            if (!(!employeeSchedule && !doctorSchedule)) {
              _context16.next = 58;
              break;
            }
            _context16.next = 58;
            return _index["default"].Schedule.destroy({
              where: {
                schedule_id: schedule_id
              }
            });
          case 58:
            resolve({
              errCode: 0,
              message: 'Deleted'
            });
            _context16.next = 62;
            break;
          case 61:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 62:
            _context16.next = 65;
            break;
          case 64:
            resolve({
              errCode: 6,
              message: 'This schedule is already booked'
            });
          case 65:
            _context16.next = 68;
            break;
          case 67:
            resolve({
              errCode: 1,
              message: "This schedule doesn't exist"
            });
          case 68:
            _context16.next = 71;
            break;
          case 70:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 71:
            _context16.next = 76;
            break;
          case 73:
            _context16.prev = 73;
            _context16.t2 = _context16["catch"](0);
            reject(_context16.t2);
          case 76:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 73]]);
    }));
    return function (_x31, _x32) {
      return _ref16.apply(this, arguments);
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