"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStructuredIntent = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _extractPhone = require("../utils/extractPhone");
var _clinicContext = require("../clinicContext.service");
var _appointment = require("../appointment.service");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var handleStructuredIntent = exports.handleStructuredIntent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(intent, message, sessionData) {
    var phone, appointments, list, today, schedules, _list, _ref2, targetDate, _schedules, formattedDate, dayOfWeek, _list2, _yield$getClinicConte, doctorList, _yield$getClinicConte2, serviceList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = intent;
          _context.next = _context.t0 === 'CHECK_APPOINTMENT' ? 3 : _context.t0 === 'ASK_SCHEDULE' ? 13 : _context.t0 === 'ASK_SCHEDULE_BY_DATE' ? 21 : _context.t0 === 'ASK_DOCTOR' ? 33 : _context.t0 === 'BOOK_APPOINTMENT' ? 40 : _context.t0 === 'ASK_PRICE' ? 41 : _context.t0 === 'ASK_WORKING_HOURS' ? 48 : 49;
          break;
        case 3:
          phone = (0, _extractPhone.extractPhone)(message) || (sessionData === null || sessionData === void 0 ? void 0 : sessionData.phone);
          if (phone) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Để tra cứu lịch hẹn, bạn vui lòng cung cấp **số điện thoại** đã đặt lịch.',
            sessionUpdate: {
              waitingFor: 'phone_for_lookup'
            }
          });
        case 6:
          _context.next = 8;
          return (0, _appointment.getAppointmentsByPhone)(phone);
        case 8:
          appointments = _context.sent;
          if (appointments.length) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", {
            directReply: "Kh\xF4ng t\xECm th\u1EA5y l\u1ECBch h\u1EB9n \u0111ang ch\u1EDD x\u1EED l\xFD v\u1EDBi s\u1ED1 \u0111i\u1EC7n tho\u1EA1i **".concat(phone, "**.\n\nB\u1EA1n c\xF3 mu\u1ED1n [\u0111\u1EB7t l\u1ECBch kh\xE1m m\u1EDBi](/dat-lich) kh\xF4ng?"),
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 11:
          list = appointments.map(function (a, i) {
            return "**".concat(i + 1, ". ").concat(a.patient_name, "** \u2014 ").concat(a.doctor, "\n   Ng\xE0y: ").concat(a.date, " l\xFAc ").concat(a.time, "\n   Tr\u1EA1ng th\xE1i: ").concat(a.status);
          }).join('\n\n');
          return _context.abrupt("return", {
            directReply: "T\xECm th\u1EA5y **".concat(appointments.length, " l\u1ECBch h\u1EB9n** v\u1EDBi s\u1ED1 **").concat(phone, "**:\n\n").concat(list, "\n\nB\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm kh\xF4ng?"),
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 13:
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context.next = 16;
          return (0, _clinicContext.getAvailableSchedules)(today);
        case 16:
          schedules = _context.sent;
          if (schedules.length) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Hiện tại chưa có lịch trống hôm nay. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.'
          });
        case 19:
          _list = schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context.abrupt("return", {
            directReply: "**L\u1ECBch tr\u1ED1ng h\xF4m nay (".concat((0, _moment["default"])().format('DD/MM/YYYY'), "):**\n\n").concat(_list, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 21:
          _ref2 = sessionData._meta || {}, targetDate = _ref2.targetDate;
          if (targetDate) {
            _context.next = 24;
            break;
          }
          return _context.abrupt("return", null);
        case 24:
          _context.next = 26;
          return (0, _clinicContext.getAvailableSchedules)(targetDate);
        case 26:
          _schedules = _context.sent;
          formattedDate = (0, _moment["default"])(targetDate).format('DD/MM/YYYY');
          dayOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][(0, _moment["default"])(targetDate).day()];
          if (_schedules.length) {
            _context.next = 31;
            break;
          }
          return _context.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng.\n\nB\u1EA1n c\xF3 mu\u1ED1n ki\u1EC3m tra ng\xE0y kh\xE1c kh\xF4ng? Ho\u1EB7c g\u1ECDi hotline **(028) 1234 5678**.")
          });
        case 31:
          _list2 = _schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") c\xF3 c\xE1c b\xE1c s\u0129 sau:\n\n").concat(_list2, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 33:
          _context.next = 35;
          return (0, _clinicContext.getClinicContext)();
        case 35:
          _yield$getClinicConte = _context.sent;
          doctorList = _yield$getClinicConte.doctorList;
          if (doctorList.length) {
            _context.next = 39;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Hiện tại chưa có thông tin bác sĩ. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 39:
          return _context.abrupt("return", {
            directReply: "**\u0110\u1ED9i ng\u0169 b\xE1c s\u0129 Toothhive:**\n\n".concat(doctorList.join('\n'), "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 40:
          return _context.abrupt("return", {
            directReply: 'Bạn có thể đặt lịch khám trực tuyến: [**Đặt lịch ngay**](/dat-lich)\n\nHoặc gọi hotline **(028) 1234 5678** để được hỗ trợ trực tiếp.'
          });
        case 41:
          _context.next = 43;
          return (0, _clinicContext.getClinicContext)();
        case 43:
          _yield$getClinicConte2 = _context.sent;
          serviceList = _yield$getClinicConte2.serviceList;
          if (serviceList.length) {
            _context.next = 47;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Bảng giá hiện đang cập nhật. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 47:
          return _context.abrupt("return", {
            directReply: "**B\u1EA3ng gi\xE1 d\u1ECBch v\u1EE5 Toothhive:**\n\n".concat(serviceList.slice(0, 25).join('\n'), "\n\n_Gi\xE1 c\xF3 th\u1EC3 thay \u0111\u1ED5i. Vui l\xF2ng g\u1ECDi **(028) 1234 5678** \u0111\u1EC3 x\xE1c nh\u1EADn._")
          });
        case 48:
          return _context.abrupt("return", {
            directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\nBạn có muốn đặt lịch không? [Đặt lịch tại đây](/dat-lich)'
          });
        case 49:
          return _context.abrupt("return", null);
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleStructuredIntent(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();