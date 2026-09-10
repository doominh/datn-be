"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStructuredIntent = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _bookingFlow = require("../booking/bookingFlow.service");
var _cancelFlow = require("../booking/cancelFlow.service");
var _clinicContext = require("../clinicContext.service");
var _appointment = require("../appointment.service");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var DAY_LABELS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
var handleStructuredIntent = exports.handleStructuredIntent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(functionName, sessionData) {
    var args,
      patientId,
      phone,
      appointments,
      list,
      today,
      schedules,
      _list,
      targetDate,
      _schedules,
      formattedDate,
      dayOfWeek,
      _list2,
      _sessionData$_meta,
      requestedDoctor,
      startDate,
      upcomingSchedules,
      offset,
      date,
      _schedules2,
      filteredSchedules,
      _list3,
      _yield$getClinicConte,
      doctorList,
      _yield$getClinicConte2,
      serviceList,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          args = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          patientId = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
          _context.t0 = functionName;
          _context.next = _context.t0 === 'book_appointment' ? 5 : _context.t0 === 'cancel_appointment' ? 6 : _context.t0 === 'check_appointment' ? 7 : _context.t0 === 'ask_schedule_today' ? 17 : _context.t0 === 'ask_schedule_by_date' ? 25 : _context.t0 === 'ask_upcoming_schedule' ? 37 : _context.t0 === 'ask_doctor_list' ? 55 : _context.t0 === 'ask_price' ? 62 : _context.t0 === 'ask_working_hours' ? 69 : _context.t0 === 'answer_directly' ? 70 : _context.t0 === 'select_slot' ? 71 : _context.t0 === 'reselect_slot' ? 71 : _context.t0 === 'change_date' ? 72 : _context.t0 === 'change_doctor' ? 73 : _context.t0 === 'change_time' ? 74 : _context.t0 === 'confirm_booking' ? 75 : _context.t0 === 'decline_booking' ? 76 : _context.t0 === 'select_cancel_target' ? 77 : _context.t0 === 'reselect_cancel_target' ? 77 : _context.t0 === 'confirm_cancel' ? 78 : _context.t0 === 'decline_cancel' ? 79 : 80;
          break;
        case 5:
          return _context.abrupt("return", (0, _bookingFlow.startBookingFlow)(args, sessionData));
        case 6:
          return _context.abrupt("return", (0, _cancelFlow.startCancelFlow)((args === null || args === void 0 ? void 0 : args.phone) || (sessionData === null || sessionData === void 0 ? void 0 : sessionData.phone)));
        case 7:
          phone = (args === null || args === void 0 ? void 0 : args.phone) || (sessionData === null || sessionData === void 0 ? void 0 : sessionData.phone);
          if (phone) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Để tra cứu lịch hẹn, {u} vui lòng cung cấp **số điện thoại** đã đặt lịch.',
            sessionUpdate: {
              waitingFor: 'phone_for_lookup'
            }
          });
        case 10:
          _context.next = 12;
          return (0, _appointment.getAppointmentsByPhone)(phone);
        case 12:
          appointments = _context.sent;
          if (appointments.length) {
            _context.next = 15;
            break;
          }
          return _context.abrupt("return", {
            directReply: "Kh\xF4ng t\xECm th\u1EA5y l\u1ECBch h\u1EB9n \u0111ang ch\u1EDD x\u1EED l\xFD v\u1EDBi s\u1ED1 \u0111i\u1EC7n tho\u1EA1i **".concat(phone, "**.\n\n{U} c\xF3 mu\u1ED1n [\u0111\u1EB7t l\u1ECBch kh\xE1m m\u1EDBi](/dat-lich) kh\xF4ng?"),
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 15:
          list = appointments.map(function (a, i) {
            var name = (a.patient_name || '').trim();
            return "".concat(i + 1, ". **").concat(name, "** \u2014 ").concat(a.doctor, "<br>Ng\xE0y: ").concat(a.date, " l\xFAc ").concat(a.time, "<br>Tr\u1EA1ng th\xE1i: ").concat(a.status);
          }).join('\n\n');
          return _context.abrupt("return", {
            directReply: "T\xECm th\u1EA5y **".concat(appointments.length, " l\u1ECBch h\u1EB9n** v\u1EDBi s\u1ED1 **").concat(phone, "**:\n\n").concat(list, "\n\n{U} c\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm kh\xF4ng?"),
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 17:
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context.next = 20;
          return (0, _clinicContext.getAvailableSchedules)(today);
        case 20:
          schedules = _context.sent;
          if (schedules.length) {
            _context.next = 23;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Hiện tại chưa có lịch trống hôm nay. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.'
          });
        case 23:
          _list = schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context.abrupt("return", {
            directReply: "**L\u1ECBch tr\u1ED1ng h\xF4m nay (".concat((0, _moment["default"])().format('DD/MM/YYYY'), "):**\n\n").concat(_list, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 25:
          targetDate = args === null || args === void 0 ? void 0 : args.date;
          if (targetDate) {
            _context.next = 28;
            break;
          }
          return _context.abrupt("return", null);
        case 28:
          _context.next = 30;
          return (0, _clinicContext.getAvailableSchedules)(targetDate);
        case 30:
          _schedules = _context.sent;
          formattedDate = (0, _moment["default"])(targetDate).format('DD/MM/YYYY');
          dayOfWeek = DAY_LABELS[(0, _moment["default"])(targetDate).day()];
          if (_schedules.length) {
            _context.next = 35;
            break;
          }
          return _context.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng.\n\n{U} c\xF3 mu\u1ED1n ki\u1EC3m tra ng\xE0y kh\xE1c kh\xF4ng? Ho\u1EB7c g\u1ECDi hotline **(028) 1234 5678**.")
          });
        case 35:
          _list2 = _schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") c\xF3 c\xE1c b\xE1c s\u0129 sau:\n\n").concat(_list2, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 37:
          requestedDoctor = args !== null && args !== void 0 && args.doctor_name ? (0, _bookingFlow.normalizeDoctorName)(args.doctor_name) : (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta = sessionData._meta) === null || _sessionData$_meta === void 0 ? void 0 : _sessionData$_meta.requestedDoctor) || null;
          startDate = (0, _moment["default"])().add(1, 'day');
          upcomingSchedules = [];
          offset = 0;
        case 41:
          if (!(offset < 7)) {
            _context.next = 51;
            break;
          }
          date = startDate.clone().add(offset, 'days').format('YYYY-MM-DD');
          _context.next = 45;
          return (0, _clinicContext.getAvailableSchedules)(date);
        case 45:
          _schedules2 = _context.sent;
          filteredSchedules = requestedDoctor ? _schedules2.filter(function (s) {
            return (0, _bookingFlow.normalizeDoctorName)(s.doctor).includes(requestedDoctor);
          }) : _schedules2;
          if (filteredSchedules.length) upcomingSchedules.push({
            date: date,
            schedules: filteredSchedules
          });
        case 48:
          offset += 1;
          _context.next = 41;
          break;
        case 51:
          if (upcomingSchedules.length) {
            _context.next = 53;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Trong 7 ngày tới hiện chưa có lịch làm việc của bác sĩ. {U} thử chọn một ngày khác hoặc gọi hotline **(028) 1234 5678** nhé.'
          });
        case 53:
          _list3 = upcomingSchedules.map(function (_ref2) {
            var date = _ref2.date,
              schedules = _ref2.schedules;
            var formattedDate = (0, _moment["default"])(date).format('DD/MM/YYYY');
            var dayOfWeek = DAY_LABELS[(0, _moment["default"])(date).day()];
            var slots = schedules.slice(0, 10).map(function (s) {
              return "- **".concat(s.doctor, "** \u2014 ").concat(s.time);
            }).join('\n');
            return "**".concat(formattedDate, " (").concat(dayOfWeek, ")**\n").concat(slots);
          }).join('\n\n');
          return _context.abrupt("return", {
            directReply: "L\u1ECBch l\xE0m vi\u1EC7c c\u1EE7a c\xE1c b\xE1c s\u0129 trong 7 ng\xE0y t\u1EDBi:\n\n".concat(_list3, "\n\n{U} mu\u1ED1n \u0111\u1EB7t l\u1ECBch v\xE0o ng\xE0y n\xE0o?"),
            sessionUpdate: requestedDoctor ? {
              _meta: {
                requestedDoctor: requestedDoctor
              }
            } : undefined
          });
        case 55:
          _context.next = 57;
          return (0, _clinicContext.getClinicContext)();
        case 57:
          _yield$getClinicConte = _context.sent;
          doctorList = _yield$getClinicConte.doctorList;
          if (doctorList.length) {
            _context.next = 61;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Hiện tại chưa có thông tin bác sĩ. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 61:
          return _context.abrupt("return", {
            directReply: "**\u0110\u1ED9i ng\u0169 b\xE1c s\u0129 Toothhive:**\n\n".concat(doctorList.join('\n'), "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 62:
          _context.next = 64;
          return (0, _clinicContext.getClinicContext)();
        case 64:
          _yield$getClinicConte2 = _context.sent;
          serviceList = _yield$getClinicConte2.serviceList;
          if (serviceList.length) {
            _context.next = 68;
            break;
          }
          return _context.abrupt("return", {
            directReply: 'Bảng giá hiện đang cập nhật. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 68:
          return _context.abrupt("return", {
            directReply: "**B\u1EA3ng gi\xE1 d\u1ECBch v\u1EE5 Toothhive:**\n\n".concat(serviceList.slice(0, 25).join('\n'), "\n\n_Gi\xE1 c\xF3 th\u1EC3 thay \u0111\u1ED5i. Vui l\xF2ng g\u1ECDi **(028) 1234 5678** \u0111\u1EC3 x\xE1c nh\u1EADn._")
          });
        case 69:
          return _context.abrupt("return", {
            directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\n{U} có muốn đặt lịch không? [Đặt lịch tại đây](/dat-lich)'
          });
        case 70:
          return _context.abrupt("return", {
            directReply: (args === null || args === void 0 ? void 0 : args.reply) || 'Dạ {s} chưa rõ ý {u}, {u} có thể nói rõ hơn được không ạ?',
            action: null
          });
        case 71:
          return _context.abrupt("return", (0, _bookingFlow.handleSlotSelection)(args === null || args === void 0 ? void 0 : args.index, sessionData, patientId));
        case 72:
          return _context.abrupt("return", (0, _bookingFlow.handleSlotDateChange)(args === null || args === void 0 ? void 0 : args.date, sessionData));
        case 73:
          return _context.abrupt("return", (0, _bookingFlow.handleSlotDoctorChange)(args === null || args === void 0 ? void 0 : args.doctor_name, sessionData));
        case 74:
          return _context.abrupt("return", (0, _bookingFlow.handleSlotTimeChange)(sessionData));
        case 75:
          return _context.abrupt("return", (0, _bookingFlow.handleBookingConfirmDecision)('confirm', sessionData, patientId));
        case 76:
          return _context.abrupt("return", (0, _bookingFlow.handleBookingConfirmDecision)('decline', sessionData, patientId));
        case 77:
          return _context.abrupt("return", (0, _cancelFlow.handleCancelSelection)(args === null || args === void 0 ? void 0 : args.index, sessionData));
        case 78:
          return _context.abrupt("return", (0, _cancelFlow.handleCancelConfirmDecision)('confirm', sessionData));
        case 79:
          return _context.abrupt("return", (0, _cancelFlow.handleCancelConfirmDecision)('decline', sessionData));
        case 80:
          return _context.abrupt("return", null);
        case 81:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleStructuredIntent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();