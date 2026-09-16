"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _moment = _interopRequireDefault(require("moment"));
var _axios = _interopRequireDefault(require("axios"));
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
//ĐẶT LẠI TRẠNG THÁI LỊCH CỦA BÁC SĨ KHI HỦY HẸN
var setDoctorScheduleStatus = function setDoctorScheduleStatus(appointment) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var currentDate, currentTime, doctorSchedule, startTime, startHours, currentHours, gapHours, startMinutes, currentMinutes, gapMinutes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //lấy thời gian của lịch hẹn cần hủy
            _context.next = 5;
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
          case 5:
            doctorSchedule = _context.sent;
            if (!(currentDate < doctorSchedule.Schedule.date)) {
              _context.next = 9;
              break;
            }
            _context.next = 9;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              }
            });
          case 9:
            ;

            //ngày hủy = ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context.next = 22;
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
              _context.next = 21;
              break;
            }
            _context.next = 21;
            return _index["default"].DoctorSchedule.update({
              status: 1
            }, {
              where: {
                doctor_schedule_id: appointment.doctor_schedule_id
              }
            });
          case 21:
            ;
          case 22:
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
            _context.next = 29;
            break;
          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 29:
            ;
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 26]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/** API **/

//LẤY TẤT CẢ LỊCH HẸN
var getAll = function getAll() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var appointments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
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
          case 3:
            appointments = _context2.sent;
            resolve({
              errCode: 0,
              message: "Get all appointments",
              data: appointments
            });
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
            ;
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẤY LỊCH HẸN THEO ID
var getByID = function getByID(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var user_id, prefix, appointment_id, appointment, details;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(!data.appointment_id || !data.user_id)) {
              _context3.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context3.next = 28;
            break;
          case 5:
            //nhân viên nào đang gửi yêu cầu
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2); //join các bảng dữ liệu
            appointment_id = data.appointment_id.toLowerCase();
            _context3.next = 10;
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
          case 10:
            appointment = _context3.sent;
            _context3.next = 13;
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
          case 13:
            details = _context3.sent;
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
              _context3.next = 26;
              break;
            }
            if (!(prefix === "bs" && appointment.DoctorSchedule.Doctor.doctor_id !== user_id)) {
              _context3.next = 19;
              break;
            }
            return _context3.abrupt("return", resolve({
              errCode: 2,
              message: "Appointment doesn't belong to this doctor"
            }));
          case 19:
            ;

            //người gửi yêu cầu: bệnh nhân và lịch hẹn này không thuộc về bệnh nhân đó
            if (!(prefix === "bn" && appointment.patient_id !== user_id)) {
              _context3.next = 22;
              break;
            }
            return _context3.abrupt("return", resolve({
              errCode: 2,
              message: "Appointment doesn't belong to this patient"
            }));
          case 22:
            ;

            //người gửi yêu cầu: lễ tân/bác sĩ/bệnh nhân
            resolve({
              errCode: 0,
              message: "Get appointment by ID",
              data: appointment
            });
            _context3.next = 27;
            break;
          case 26:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 27:
            ;
          case 28:
            ;
            _context3.next = 34;
            break;
          case 31:
            _context3.prev = 31;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 34:
            ;
          case 35:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 31]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH HẸN ĐÃ ĐƯỢC DUYỆT/HỦY/HOÀN THÀNH THEO ID BÁC SĨ PHỤ TRÁCH
var getAllByDoctorID = function getAllByDoctorID(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var doctor_id, doctor, appointments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (data.doctor_id) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context4.next = 18;
            break;
          case 5:
            doctor_id = data.doctor_id.toLowerCase();
            _context4.next = 8;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 8:
            doctor = _context4.sent;
            if (!doctor) {
              _context4.next = 16;
              break;
            }
            _context4.next = 12;
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
          case 12:
            appointments = _context4.sent;
            resolve({
              errCode: 0,
              message: "Get all appointments by doctor ID",
              data: appointments
            });
            _context4.next = 17;
            break;
          case 16:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 17:
            ;
          case 18:
            ;
            _context4.next = 24;
            break;
          case 21:
            _context4.prev = 21;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 24:
            ;
          case 25:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 21]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ LỊCH HẸN THEO ID BỆNH NHÂN
var getAllByPatientID = function getAllByPatientID(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var patient_id, patient, appointments, detailsRaw, detailsMap, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (data.patient_id) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context5.next = 24;
            break;
          case 5:
            patient_id = data.patient_id.toLowerCase();
            _context5.next = 8;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 8:
            patient = _context5.sent;
            if (!patient) {
              _context5.next = 22;
              break;
            }
            _context5.next = 12;
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
          case 12:
            appointments = _context5.sent;
            _context5.next = 15;
            return _index["default"].Appointment.findAll({
              where: {
                patient_id: patient_id
              },
              include: {
                model: _index["default"].Service,
                include: _index["default"].Category
              },
              raw: true,
              nest: true
            });
          case 15:
            detailsRaw = _context5.sent;
            detailsMap = {};
            detailsRaw.forEach(function (item) {
              if (item.Services && item.Services.service_id !== null) {
                if (!detailsMap[item.appointment_id]) detailsMap[item.appointment_id] = [];
                detailsMap[item.appointment_id].push(item.Services);
              }
              ;
            });
            result = appointments.map(function (appointment) {
              return _objectSpread(_objectSpread({}, appointment), {}, {
                details: detailsMap[appointment.appointment_id] || []
              });
            });
            resolve({
              errCode: 0,
              message: "Get all appointments by patient ID",
              data: result
            });
            _context5.next = 23;
            break;
          case 22:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 23:
            ;
          case 24:
            ;
            _context5.next = 30;
            break;
          case 27:
            _context5.prev = 27;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 30:
            ;
          case 31:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 27]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//ĐẶT LỊCH HẸN
var bookAppointment = function bookAppointment(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var patient_id, patient, creator_id, _createdAt, appointmentCount, doctorSchedule, currentDate, currentTime, startTime, appointment_id, newAppointment, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (!(!data.creator_id || !data.type_id || !data.doctor_schedule_id || !data.patient_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone)) {
              _context6.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context6.next = 69;
            break;
          case 5:
            if (!(data.type_id === 2)) {
              _context6.next = 8;
              break;
            }
            if (data.reExamServices) {
              _context6.next = 8;
              break;
            }
            return _context6.abrupt("return", resolve({
              errCode: 3,
              message: "Missing params"
            }));
          case 8:
            ;
            patient_id = data.patient_id.toLowerCase();
            _context6.next = 12;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 12:
            patient = _context6.sent;
            if (!patient) {
              _context6.next = 67;
              break;
            }
            //id của người tạo lịch hẹn
            creator_id = data.creator_id.toLowerCase(); //nếu là bệnh nhân thì kiểm tra số lần đặt lịch hẹn của ngày hôm nay
            if (!(creator_id.slice(0, 2) === "bn")) {
              _context6.next = 22;
              break;
            }
            _context6.next = 18;
            return _index["default"].Appointment.findAll({
              where: {
                patient_id: patient_id,
                createdAt: (_createdAt = {}, _defineProperty(_createdAt, Op.gt, new Date().setHours(0, 0, 0, 0)), _defineProperty(_createdAt, Op.lt, new Date()), _createdAt)
              }
            });
          case 18:
            appointmentCount = _context6.sent;
            if (!(appointmentCount.length >= 3)) {
              _context6.next = 21;
              break;
            }
            return _context6.abrupt("return", resolve({
              errCode: 10,
              message: "Reached the limit times for booking per day"
            }));
          case 21:
            ;
          case 22:
            ;

            //tìm lịch làm việc được đặt
            _context6.next = 25;
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
          case 25:
            doctorSchedule = _context6.sent;
            if (!doctorSchedule) {
              _context6.next = 63;
              break;
            }
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //ngày đặt lớn hơn ngày hẹn -> không thể đặt lịch của quá khứ
            if (!(currentDate > doctorSchedule.Schedule.date)) {
              _context6.next = 31;
              break;
            }
            return _context6.abrupt("return", resolve({
              errCode: 2,
              type: "date",
              message: "Can't book for the past"
            }));
          case 31:
            ;

            //ngày đặt cùng ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context6.next = 37;
              break;
            }
            startTime = doctorSchedule.Schedule.Session.time.slice(0, 5); //thời gian đặt lịch > thời gian bắt đầu ca khám
            if (!(currentTime > startTime)) {
              _context6.next = 36;
              break;
            }
            return _context6.abrupt("return", resolve({
              errCode: 2,
              type: "time",
              message: "This session is over"
            }));
          case 36:
            ;
          case 37:
            ;

            //thỏa các điều kiện:
            //điều kiện 1: ngày đặt <= ngày hẹn
            //điều kiện 2: cùng ngày thì thời gian đặt phải <= thời gian bắt đầu ca khám

            //lịch còn khả dụng
            if (!(doctorSchedule.status === 1)) {
              _context6.next = 59;
              break;
            }
            appointment_id = _index2["default"].createID("lh");
            _context6.next = 42;
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
          case 42:
            newAppointment = _context6.sent;
            if (!newAppointment.dataValues.appointment_id) {
              _context6.next = 55;
              break;
            }
            if (!(data.type_id === 2)) {
              _context6.next = 47;
              break;
            }
            _context6.next = 47;
            return _index["default"].Detail.bulkCreate(data.reExamServices.map(function (service) {
              return {
                appointment_id: appointment_id,
                service_id: service.service_id,
                quantity: service.quantity
              };
            }));
          case 47:
            ;

            //cập nhật status cho doctor_schedule này thành 2 -> đã được đặt
            _context6.next = 50;
            return _index["default"].DoctorSchedule.update({
              status: 2
            }, {
              where: {
                doctor_schedule_id: data.doctor_schedule_id
              }
            });
          case 50:
            result = _context6.sent;
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
            _context6.next = 56;
            break;
          case 55:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 56:
            ;
            _context6.next = 60;
            break;
          case 59:
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
          case 60:
            ;
            _context6.next = 64;
            break;
          case 63:
            resolve({
              errCode: 1,
              message: "Doctor's schedule doesn't exist"
            });
          case 64:
            ;
            _context6.next = 68;
            break;
          case 67:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 68:
            ;
          case 69:
            ;
            _context6.next = 75;
            break;
          case 72:
            _context6.prev = 72;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 75:
            ;
          case 76:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 72]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//DUYỆT LỊCH HẸN
var acceptAppointment = function acceptAppointment(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var appointment_id, employee_id, employee, appointment, doctorSchedule, currentDate, currentTime, startTime, result, patient;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!data.appointment_id || !data.employee_id)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.next = 52;
            break;
          case 5:
            appointment_id = data.appointment_id.toLowerCase();
            employee_id = data.employee_id.toLowerCase(); //tìm lễ tân duyệt lịch hẹn này
            _context7.next = 9;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 9:
            employee = _context7.sent;
            if (employee) {
              _context7.next = 12;
              break;
            }
            return _context7.abrupt("return", resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            }));
          case 12:
            ;

            //tìm lịch hẹn
            _context7.next = 15;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 15:
            appointment = _context7.sent;
            if (appointment) {
              _context7.next = 18;
              break;
            }
            return _context7.abrupt("return", resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 18:
            ;

            //đã tìm thấy lễ tân và lịch hẹn
            //lịch hẹn chưa được duyệt
            if (!(appointment.status === 0)) {
              _context7.next = 50;
              break;
            }
            _context7.next = 22;
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
          case 22:
            doctorSchedule = _context7.sent;
            //lấy thời gian hiện tại
            currentDate = _index2["default"].getCurrentDate();
            currentTime = _index2["default"].getCurrentTime(); //ngày duyệt > ngày hẹn
            if (!(currentDate > doctorSchedule.Schedule.date)) {
              _context7.next = 27;
              break;
            }
            return _context7.abrupt("return", resolve({
              errCode: 2,
              type: "date",
              message: "Can't accept appointment for the past"
            }));
          case 27:
            ;

            //ngày duyệt cùng ngày hẹn
            if (!(currentDate === doctorSchedule.Schedule.date)) {
              _context7.next = 33;
              break;
            }
            startTime = doctorSchedule.Schedule.Session.time.slice(0, 5); //thời gian duyệt > thời gian bắt đầu ca khám
            if (!(currentTime > startTime)) {
              _context7.next = 32;
              break;
            }
            return _context7.abrupt("return", resolve({
              errCode: 2,
              type: "time",
              message: "This session is over"
            }));
          case 32:
            ;
          case 33:
            ;

            //thỏa các điều kiện
            //điều kiện 1: ngày duyệt <= ngày hẹn (doctor_schedule.date)
            //điều kiện 2: cùng ngày thì thời gian duyệt phải <= thời gian bắt đầu ca khám
            _context7.next = 36;
            return _index["default"].Appointment.update({
              employee_id: employee_id,
              //lễ tân nào duyệt lịch hẹn này
              status: 1 //đã xác nhận
            }, {
              where: {
                appointment_id: appointment_id
              }
            });
          case 36:
            result = _context7.sent;
            if (!(result[0] === 1)) {
              _context7.next = 46;
              break;
            }
            _context7.next = 40;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: appointment.patient_id
              }
            });
          case 40:
            patient = _context7.sent;
            _context7.next = 43;
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
          case 43:
            resolve({
              errCode: 0,
              data: {
                appointment_id: appointment_id,
                patient_id: patient.patient_id,
                doctor_id: doctorSchedule.doctor_id
              },
              message: "Accepted"
            });
            _context7.next = 47;
            break;
          case 46:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 47:
            ;
            _context7.next = 51;
            break;
          case 50:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 51:
            ;
          case 52:
            ;
            _context7.next = 58;
            break;
          case 55:
            _context7.prev = 55;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 58:
            ;
          case 59:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 55]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//HỦY LỊCH HẸN BỞI LỄ TÂN
var canceledByEmployee = function canceledByEmployee(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var appointment_id, employee_id, employee, appointment, details, result, patient, returnData;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (!(!data.appointment_id || !data.employee_id)) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.next = 47;
            break;
          case 5:
            appointment_id = data.appointment_id.toLowerCase();
            employee_id = data.employee_id.toLowerCase(); //tìm lễ tân hủy lịch hẹn này
            _context8.next = 9;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 9:
            employee = _context8.sent;
            if (employee) {
              _context8.next = 12;
              break;
            }
            return _context8.abrupt("return", resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            }));
          case 12:
            ;

            //tìm lịch hẹn
            _context8.next = 15;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 15:
            appointment = _context8.sent;
            if (appointment) {
              _context8.next = 18;
              break;
            }
            return _context8.abrupt("return", resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 18:
            ;

            //đã tìm thấy lễ tân và lịch hẹn
            //lịch hẹn ở trạng thái chờ xác nhận hoặc đã xác nhận
            if (!(appointment.status === 0 || appointment.status === 1)) {
              _context8.next = 45;
              break;
            }
            _context8.next = 22;
            return _index["default"].Detail.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 22:
            details = _context8.sent;
            if (!details) {
              _context8.next = 25;
              break;
            }
            return _context8.abrupt("return", resolve({
              errCode: 6,
              message: "Appointment has details"
            }));
          case 25:
            ;

            //lịch hẹn chưa được khám
            _context8.next = 28;
            return _index["default"].Appointment.update({
              employee_id: employee_id,
              //lễ tân nào hủy lịch hẹn này
              status: 2 //đã hủy
            }, {
              where: {
                appointment_id: appointment_id
              }
            });
          case 28:
            result = _context8.sent;
            if (!(result[0] === 1)) {
              _context8.next = 41;
              break;
            }
            _context8.next = 32;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: appointment.patient_id
              }
            });
          case 32:
            patient = _context8.sent;
            _context8.next = 35;
            return _mail["default"].canceledAppointment({
              email: patient.email,
              fullname: patient.fullname,
              appointment_id: appointment_id
            });
          case 35:
            _context8.next = 37;
            return setDoctorScheduleStatus(appointment);
          case 37:
            returnData = _context8.sent;
            resolve(returnData);
            _context8.next = 42;
            break;
          case 41:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 42:
            ;
            _context8.next = 46;
            break;
          case 45:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 46:
            ;
          case 47:
            ;
            _context8.next = 53;
            break;
          case 50:
            _context8.prev = 50;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 53:
            ;
          case 54:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 50]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//HỦY LỊCH HẸN BỞI BỆNH NHÂN
var canceledByPatient = function canceledByPatient(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var appointment_id, patient_id, patient, appointment, result, returnData;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!data.appointment_id || !data.patient_id)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.next = 36;
            break;
          case 5:
            appointment_id = data.appointment_id.toLowerCase();
            patient_id = data.patient_id.toLowerCase(); //tìm bệnh nhân
            _context9.next = 9;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 9:
            patient = _context9.sent;
            if (patient) {
              _context9.next = 12;
              break;
            }
            return _context9.abrupt("return", resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            }));
          case 12:
            ;

            //tìm lịch hẹn
            _context9.next = 15;
            return _index["default"].Appointment.findOne({
              where: {
                appointment_id: appointment_id
              }
            });
          case 15:
            appointment = _context9.sent;
            if (appointment) {
              _context9.next = 18;
              break;
            }
            return _context9.abrupt("return", resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            }));
          case 18:
            ;

            //đã tìm thấy bệnh nhân và lịch hẹn
            //lịch hẹn ở trạng thái chờ xác nhận
            if (!(appointment.status === 0)) {
              _context9.next = 34;
              break;
            }
            _context9.next = 22;
            return _index["default"].Appointment.update({
              status: 2
            },
            //đã hủy
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 22:
            result = _context9.sent;
            if (!(result[0] === 1)) {
              _context9.next = 30;
              break;
            }
            _context9.next = 26;
            return setDoctorScheduleStatus(appointment);
          case 26:
            returnData = _context9.sent;
            resolve(returnData);
            _context9.next = 31;
            break;
          case 30:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 31:
            ;
            _context9.next = 35;
            break;
          case 34:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 35:
            ;
          case 36:
            ;
            _context9.next = 42;
            break;
          case 39:
            _context9.prev = 39;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 42:
            ;
          case 43:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 39]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT CÁC DỊCH VỤ ĐÃ THỰC HIỆN CỦA LỊCH HẸN
var saveDetails = function saveDetails(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var doctor_id, doctor, appointment_id, appointment, appointmentDetails, addList, oldList, deleteList, updateList, _iterator, _step, details;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.doctor_id || !data.appointment_id || !data.detailsList)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context10.next = 71;
            break;
          case 5:
            doctor_id = data.doctor_id.toLowerCase();
            _context10.next = 8;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 8:
            doctor = _context10.sent;
            if (!doctor) {
              _context10.next = 69;
              break;
            }
            appointment_id = data.appointment_id.toLowerCase();
            _context10.next = 13;
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
          case 13:
            appointment = _context10.sent;
            if (!appointment) {
              _context10.next = 65;
              break;
            }
            if (!(appointment.DoctorSchedule.doctor_id === doctor_id)) {
              _context10.next = 61;
              break;
            }
            if (!(appointment.status === 1)) {
              _context10.next = 57;
              break;
            }
            _context10.next = 19;
            return _index["default"].Detail.findAll({
              where: {
                appointment_id: appointment_id
              }
            });
          case 19:
            appointmentDetails = _context10.sent;
            //thêm mới chi tiết
            addList = data.detailsList.filter(function (details) {
              return !details.detail_id;
            });
            if (!addList.length) {
              _context10.next = 25;
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
            _context10.next = 25;
            return _index["default"].Detail.bulkCreate(addList);
          case 25:
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
              _context10.next = 33;
              break;
            }
            _context10.next = 33;
            return _index["default"].Detail.destroy({
              where: {
                detail_id: deleteList
              }
            });
          case 33:
            ;
            if (!updateList.length) {
              _context10.next = 53;
              break;
            }
            _iterator = _createForOfIteratorHelper(updateList);
            _context10.prev = 36;
            _iterator.s();
          case 38:
            if ((_step = _iterator.n()).done) {
              _context10.next = 44;
              break;
            }
            details = _step.value;
            _context10.next = 42;
            return _index["default"].Detail.update({
              service_id: details.service_id,
              quantity: details.quantity,
              description: details.description
            }, {
              where: {
                detail_id: details.detail_id
              }
            });
          case 42:
            _context10.next = 38;
            break;
          case 44:
            _context10.next = 49;
            break;
          case 46:
            _context10.prev = 46;
            _context10.t0 = _context10["catch"](36);
            _iterator.e(_context10.t0);
          case 49:
            _context10.prev = 49;
            _iterator.f();
            return _context10.finish(49);
          case 52:
            ;
          case 53:
            ;
            resolve({
              errCode: 0,
              message: "Saved"
            });
            _context10.next = 58;
            break;
          case 57:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 58:
            ;
            _context10.next = 62;
            break;
          case 61:
            resolve({
              errCode: 2,
              type: "doctor",
              message: "Appointment doesn't belong to this doctor"
            });
          case 62:
            ;
            _context10.next = 66;
            break;
          case 65:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 66:
            ;
            _context10.next = 70;
            break;
          case 69:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 70:
            ;
          case 71:
            ;
            _context10.next = 77;
            break;
          case 74:
            _context10.prev = 74;
            _context10.t1 = _context10["catch"](0);
            reject(_context10.t1);
          case 77:
            ;
          case 78:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 74], [36, 46, 49, 52]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT LỊCH HẸN ĐÃ HOÀN THÀNH (khi lịch hẹn là tái khám và không phát sinh dịch vụ)
var confirmDone = function confirmDone(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var doctor_id, doctor, appointment_id, appointment, appointmentDetails, deleteList, updateList, _iterator2, _step2, details, result;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!(!data.doctor_id || !data.appointment_id || !data.detailsList)) {
              _context11.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context11.next = 68;
            break;
          case 5:
            doctor_id = data.doctor_id.toLowerCase();
            _context11.next = 8;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 8:
            doctor = _context11.sent;
            if (!doctor) {
              _context11.next = 66;
              break;
            }
            appointment_id = data.appointment_id.toLowerCase();
            _context11.next = 13;
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
          case 13:
            appointment = _context11.sent;
            if (!appointment) {
              _context11.next = 62;
              break;
            }
            if (!(appointment.DoctorSchedule.doctor_id === doctor_id)) {
              _context11.next = 58;
              break;
            }
            if (!(appointment.status === 1)) {
              _context11.next = 54;
              break;
            }
            _context11.next = 19;
            return _index["default"].Detail.findAll({
              where: {
                appointment_id: appointment_id
              }
            });
          case 19:
            appointmentDetails = _context11.sent;
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
              _context11.next = 26;
              break;
            }
            _context11.next = 26;
            return _index["default"].Detail.destroy({
              where: {
                detail_id: deleteList
              }
            });
          case 26:
            ;
            if (!updateList.length) {
              _context11.next = 46;
              break;
            }
            _iterator2 = _createForOfIteratorHelper(updateList);
            _context11.prev = 29;
            _iterator2.s();
          case 31:
            if ((_step2 = _iterator2.n()).done) {
              _context11.next = 37;
              break;
            }
            details = _step2.value;
            _context11.next = 35;
            return _index["default"].Detail.update({
              description: details.description
            }, {
              where: {
                detail_id: details.detail_id
              }
            });
          case 35:
            _context11.next = 31;
            break;
          case 37:
            _context11.next = 42;
            break;
          case 39:
            _context11.prev = 39;
            _context11.t0 = _context11["catch"](29);
            _iterator2.e(_context11.t0);
          case 42:
            _context11.prev = 42;
            _iterator2.f();
            return _context11.finish(42);
          case 45:
            ;
          case 46:
            ;

            //cập nhật trạng thái lịch hẹn
            _context11.next = 49;
            return _index["default"].Appointment.update({
              status: 3
            },
            //đã hoàn thành lịch hẹn
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 49:
            result = _context11.sent;
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
            _context11.next = 55;
            break;
          case 54:
            resolve({
              errCode: 2,
              type: "status",
              message: "Incorrect status"
            });
          case 55:
            ;
            _context11.next = 59;
            break;
          case 58:
            resolve({
              errCode: 2,
              type: "doctor",
              message: "Appointment doesn't belong to this doctor"
            });
          case 59:
            ;
            _context11.next = 63;
            break;
          case 62:
            resolve({
              errCode: 1,
              message: "Appointment doesn't exist"
            });
          case 63:
            ;
            _context11.next = 67;
            break;
          case 66:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 67:
            ;
          case 68:
            ;
            _context11.next = 74;
            break;
          case 71:
            _context11.prev = 71;
            _context11.t1 = _context11["catch"](0);
            reject(_context11.t1);
          case 74:
            ;
          case 75:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 71], [29, 39, 42, 45]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};

//GỬI CHI TIẾT LỊCH HẸN TỚI EMAIL
var sendToEmail = function sendToEmail(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var patient_id, patient;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(!data.patient_id || !data.filename || !data.file)) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context12.next = 17;
            break;
          case 5:
            patient_id = data.patient_id.toLowerCase();
            _context12.next = 8;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 8:
            patient = _context12.sent;
            if (!patient) {
              _context12.next = 15;
              break;
            }
            _context12.next = 12;
            return _mail["default"].detailsInfo({
              email: patient.email,
              fullname: patient.fullname,
              filename: data.filename,
              file: data.file
            });
          case 12:
            resolve({
              errCode: 0,
              message: "Sent to email"
            });
            _context12.next = 16;
            break;
          case 15:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 16:
            ;
          case 17:
            ;
            _context12.next = 23;
            break;
          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 23:
            ;
          case 24:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 20]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
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