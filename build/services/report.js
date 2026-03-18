"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _moment = _interopRequireDefault(require("moment"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _schedule = require("./schedule");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var _createdAt, bills, currentTotal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].Bill.findAll({
              where: {
                createdAt: (_createdAt = {}, _defineProperty(_createdAt, Op.gt, new Date().setHours(0, 0, 0, 0)), _defineProperty(_createdAt, Op.lt, new Date()), _createdAt)
              }
            });
          case 3:
            bills = _context.sent;
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
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 12:
            ;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
var getCurrentAppointment = function getCurrentAppointment() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var _createdAt2, appointments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].Appointment.findAll({
              where: {
                createdAt: (_createdAt2 = {}, _defineProperty(_createdAt2, Op.gt, new Date().setHours(0, 0, 0, 0)), _defineProperty(_createdAt2, Op.lt, new Date()), _createdAt2)
              }
            });
          case 3:
            appointments = _context2.sent;
            resolve({
              errCode: 0,
              message: "Get current appointment",
              data: {
                date: (0, _moment["default"])(new Date()).format("DD-MM-YYYY"),
                total: appointments.length
              }
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

//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
var getCurrentPatient = function getCurrentPatient() {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var _createdAt3, patients;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].Patient.findAll({
              where: {
                createdAt: (_createdAt3 = {}, _defineProperty(_createdAt3, Op.gt, new Date().setHours(0, 0, 0, 0)), _defineProperty(_createdAt3, Op.lt, new Date()), _createdAt3)
              }
            });
          case 3:
            patients = _context3.sent;
            resolve({
              errCode: 0,
              message: "Get current patient",
              data: {
                date: (0, _moment["default"])(new Date()).format("DD-MM-YYYY"),
                total: patients.length
              }
            });
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 10:
            ;
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
var getServicesFor7Days = function getServicesFor7Days() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var services;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].Detail.findAll({
              attributes: ["service_id", [_sequelize["default"].fn("COUNT", _sequelize["default"].col("Detail.service_id")), "times"], [_sequelize["default"].fn("date_format", _sequelize["default"].col("Detail.createdAt"), "%Y-%m"), "month"]],
              group: ["Detail.service_id"],
              include: [{
                model: _index["default"].Service
              }],
              raw: true,
              nest: true
            });
          case 3:
            services = _context4.sent;
            resolve({
              errCode: 0,
              message: "Get services for 7 days",
              data: services
            });
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 10:
            ;
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
var getAppointmentsFor7Days = function getAppointmentsFor7Days() {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var sevenDays, appointments, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            sevenDays = get7Days();
            _context5.next = 4;
            return _index["default"].Appointment.findAll({
              attributes: ["appointment_id", "type_id", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("createdAt"), "%Y-%m-%d"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 4:
            appointments = _context5.sent;
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
            _context5.next = 13;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 13:
            ;
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 10]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
var getRevenueFor7Days = function getRevenueFor7Days() {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var sevenDays, bills, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            sevenDays = get7Days();
            _context6.next = 4;
            return _index["default"].Bill.findAll({
              attributes: ["bill_id", "total", [_sequelize["default"].fn("date_format", _sequelize["default"].col("createdAt"), "%Y-%m-%d"), "createdAt"]]
            });
          case 4:
            bills = _context6.sent;
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
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 13:
            ;
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 10]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
var reportSchedule = function reportSchedule(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var monthIndex, date, onlyDays, daysOfMonth, sessions, doctorSchedules, employeeSchedules;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!data.month || !data.year)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.next = 21;
            break;
          case 5:
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
            _context7.next = 13;
            return _index["default"].Session.findAll({
              where: {
                status: 1
              },
              order: [["createdAt", "ASC"]]
            });
          case 13:
            sessions = _context7.sent;
            _context7.next = 16;
            return (0, _schedule.getDoctorSchedulesByMonth)(daysOfMonth);
          case 16:
            doctorSchedules = _context7.sent;
            _context7.next = 19;
            return (0, _schedule.getEmployeeSchedulesByMonth)(daysOfMonth);
          case 19:
            employeeSchedules = _context7.sent;
            resolve({
              onlyDays: onlyDays,
              sessions: sessions,
              userSchedules: [].concat(_toConsumableArray(doctorSchedules), _toConsumableArray(employeeSchedules))
            });
          case 21:
            ;
            _context7.next = 27;
            break;
          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 27:
            ;
          case 28:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 24]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
var reportService = function reportService(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var services;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (data.month) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.next = 10;
            break;
          case 5:
            _context8.next = 7;
            return _index["default"].Detail.findAll({
              attributes: ["service_id", [_sequelize["default"].fn("COUNT", _sequelize["default"].col("Detail.service_id")), "times"], [_sequelize["default"].fn("date_format", _sequelize["default"].col("Detail.createdAt"), "%Y-%m"), "month"]],
              group: ["Detail.service_id"],
              include: [{
                model: _index["default"].Service
              }],
              raw: true,
              nest: true
            });
          case 7:
            services = _context8.sent;
            services = services.filter(function (service) {
              return service.month === data.month;
            });
            resolve(services);
          case 10:
            ;
            _context8.next = 16;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 16:
            ;
          case 17:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
var reportAppointment = function reportAppointment(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var daysOfMonth, appointments, appointmentByMonth;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!data.month || !data.year)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.next = 19;
            break;
          case 5:
            daysOfMonth = getDaysOfMonth(data.month, data.year);
            _context9.next = 8;
            return _index["default"].Appointment.findAll({
              attributes: ["appointment_id", "type_id", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("Appointment.createdAt"), "%d-%m-%Y"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 8:
            appointments = _context9.sent;
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
          case 19:
            ;
            _context9.next = 25;
            break;
          case 22:
            _context9.prev = 22;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 25:
            ;
          case 26:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 22]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//XUẤT FILE EXCEL DOANH THU THEO THÁNG
var reportRevenue = function reportRevenue(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var daysOfMonth, bills, revenueByMonth;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.month || !data.year)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context10.next = 16;
            break;
          case 5:
            daysOfMonth = getDaysOfMonth(data.month, data.year);
            _context10.next = 8;
            return _index["default"].Bill.findAll({
              attributes: ["bill_id", "total", "status", [_sequelize["default"].fn("date_format", _sequelize["default"].col("Bill.createdAt"), "%d-%m-%Y"), "createdAt"]],
              raw: true,
              nest: true
            });
          case 8:
            bills = _context10.sent;
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
          case 16:
            ;
            _context10.next = 22;
            break;
          case 19:
            _context10.prev = 19;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 22:
            ;
          case 23:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 19]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
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