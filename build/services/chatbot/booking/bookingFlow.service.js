"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBookingFlow = exports.handleBookingFlow = exports.extractDoctorName = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _extractDate = require("../utils/extractDate");
var _clinicContext = require("../clinicContext.service");
var _chatBooking = require("./chatBooking.service");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var DAY_LABELS = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
var MANUAL_LINK = '[Tự đặt tại đây](/dat-lich)';
var CONFIRM_QUICK_REPLIES = [{
  label: 'Xác nhận đặt lịch',
  text: 'Xác nhận đặt lịch'
}, {
  label: 'Hủy',
  text: 'Hủy'
}];
var normalizeDoctorName = function normalizeDoctorName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return name.toLowerCase().replace(/^bs\.?\s*/i, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
};
var extractDoctorName = exports.extractDoctorName = function extractDoctorName() {
  var _match$;
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = message.match(/(?:với|cùng|của)\s+bác sĩ\s+(.+?)(?=\s+(?:vào|ngày|hôm|thứ|trong|tuần)\b|$)/i) || message.match(/bác sĩ\s+(.+?)(?=\s+(?:vào|ngày|hôm|thứ|trong|tuần)\b|$)/i);
  var doctorName = match === null || match === void 0 ? void 0 : (_match$ = match[1]) === null || _match$ === void 0 ? void 0 : _match$.trim();
  if (!doctorName || /^(này|đó|ấy)$/i.test(doctorName)) return null;
  return normalizeDoctorName(doctorName);
};
var isAskingForAnotherDoctor = function isAskingForAnotherDoctor() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return /(?:còn|cho|tìm|đổi|chọn)\s+(?:bác sĩ|bs)\s+(?:nào\s+)?(?:khác|không)/i.test(message) || /bác sĩ\s+(?:nào\s+)?khác/i.test(message);
};
var isAskingForAnotherDate = function isAskingForAnotherDate() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return /(?:đổi|chọn|sang|xem|tìm)\s+(?:ngày|lịch)\s+khác/i.test(message) || /ngày khác/i.test(message);
};
var isAskingForAnotherTime = function isAskingForAnotherTime() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return /(?:còn|cho|tìm|đổi|chọn)\s+(?:khung giờ|giờ)\s+(?:nào\s+)?khác/i.test(message) || /giờ khác/i.test(message);
};
var isAskingForThisWeek = function isAskingForThisWeek() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return /tuần này/i.test(message);
};
var getDoctorSchedules = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(date) {
    var doctorName,
      schedules,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          doctorName = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
          _context.next = 3;
          return (0, _clinicContext.getAvailableSchedules)(date);
        case 3:
          schedules = _context.sent;
          return _context.abrupt("return", doctorName ? schedules.filter(function (schedule) {
            return normalizeDoctorName(schedule.doctor).includes(doctorName);
          }) : schedules);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDoctorSchedules(_x) {
    return _ref.apply(this, arguments);
  };
}();
var buildSlotOptionsReply = function buildSlotOptionsReply(date, schedules, message) {
  var options = schedules.slice(0, 6);
  if (!options.length) {
    return {
      directReply: "".concat(message, "\n\nHi\u1EC7n kh\xF4ng c\xF2n khung gi\u1EDD ph\xF9 h\u1EE3p trong ng\xE0y n\xE0y. B\u1EA1n mu\u1ED1n ch\u1ECDn ng\xE0y kh\xE1c kh\xF4ng?"),
      sessionUpdate: {
        waitingFor: 'booking_date'
      }
    };
  }
  var list = options.map(function (schedule, index) {
    return "".concat(index + 1, ". **").concat(schedule.doctor, "** \u2014 ").concat(schedule.time);
  }).join('\n');
  return {
    directReply: "".concat(message, "\n\n").concat(list, "\n\nB\u1EA1n ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9."),
    sessionUpdate: {
      waitingFor: 'booking_slot',
      _meta: {
        scheduleOptions: options,
        requestedDoctor: null
      }
    },
    quickReplies: options.map(function (schedule, index) {
      return {
        label: "".concat(index + 1, ". ").concat(schedule.doctor.replace(/^BS\.\s*/i, ''), " - ").concat(schedule.time),
        text: "".concat(index + 1)
      };
    })
  };
};
var buildWeekSlotOptionsReply = function buildWeekSlotOptionsReply(schedules, requestedDoctor) {
  var options = schedules.slice(0, 6);
  if (!options.length) {
    return {
      directReply: requestedDoctor ? "Trong tu\u1EA7n n\xE0y hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng cho **".concat(requestedDoctor, "**. B\u1EA1n ch\u1ECDn tu\u1EA7n kh\xE1c ho\u1EB7c b\xE1c s\u0129 kh\xE1c nh\xE9.") : 'Trong tuần này hiện không còn lịch trống. Bạn chọn tuần khác nhé.',
      sessionUpdate: {
        waitingFor: 'booking_date',
        _meta: {
          requestedDoctor: requestedDoctor
        }
      }
    };
  }
  var list = options.map(function (schedule, index) {
    var dateLabel = "".concat((0, _moment["default"])(schedule.date).format('DD/MM/YYYY'), " (").concat(DAY_LABELS[(0, _moment["default"])(schedule.date).day()], ")");
    return "".concat(index + 1, ". **").concat(schedule.doctor, "** \u2014 ").concat(dateLabel, " l\xFAc **").concat(schedule.time, "**");
  }).join('\n');
  return {
    directReply: "C\xE1c khung gi\u1EDD c\u1EE7a **".concat(options[0].doctor, "** trong tu\u1EA7n n\xE0y:\n\n").concat(list, "\n\nB\u1EA1n ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9."),
    sessionUpdate: {
      waitingFor: 'booking_slot',
      _meta: {
        scheduleOptions: options,
        requestedDoctor: requestedDoctor
      }
    },
    quickReplies: options.map(function (schedule, index) {
      return {
        label: "".concat(index + 1, ". ").concat((0, _moment["default"])(schedule.date).format('DD/MM'), " - ").concat(schedule.time),
        text: "".concat(index + 1)
      };
    })
  };
};

// Câu hỏi xác nhận
var buildConfirmReply = function buildConfirmReply(pendingBooking, patientId) {
  var confirmText = "B\u1EA1n mu\u1ED1n \u0111\u1EB7t l\u1ECBch **".concat(pendingBooking.doctor, "** l\xFAc **").concat(pendingBooking.time, "** ng\xE0y **").concat((0, _moment["default"])(pendingBooking.date).format('DD/MM/YYYY'), "** \u2014 \u0111\xFAng kh\xF4ng?");
  if (patientId) {
    return {
      directReply: confirmText,
      sessionUpdate: {
        waitingFor: 'booking_confirm',
        pendingBooking: pendingBooking
      },
      quickReplies: CONFIRM_QUICK_REPLIES
    };
  }
  return {
    directReply: "".concat(confirmText, "\n\n[\u0110\u0103ng nh\u1EADp \u0111\u1EC3 m\xECnh \u0111\u1EB7t gi\xFAp](/login) \xB7 [\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n](/register) \xB7 ").concat(MANUAL_LINK),
    sessionUpdate: {
      waitingFor: 'booking_confirm',
      pendingBooking: pendingBooking
    }
  };
};

// BƯỚC 1 — nhận ngày, gợi ý slot trống
var handleBookingDate = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {
    var requestedDoctor,
      startDate,
      endDate,
      weekSchedules,
      date,
      _schedules,
      targetDate,
      allSchedules,
      schedules,
      formattedDate,
      dayOfWeek,
      options,
      list,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          requestedDoctor = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
          if (!isAskingForThisWeek(message)) {
            _context2.next = 15;
            break;
          }
          startDate = (0, _moment["default"])().startOf('day');
          endDate = startDate.clone().endOf('isoWeek');
          weekSchedules = [];
          date = startDate.clone();
        case 6:
          if (!date.isSameOrBefore(endDate, 'day')) {
            _context2.next = 14;
            break;
          }
          _context2.next = 9;
          return (0, _clinicContext.getAvailableSchedules)(date.format('YYYY-MM-DD'));
        case 9:
          _schedules = _context2.sent;
          weekSchedules.push.apply(weekSchedules, _toConsumableArray(requestedDoctor ? _schedules.filter(function (schedule) {
            return normalizeDoctorName(schedule.doctor).includes(requestedDoctor);
          }) : _schedules));
        case 11:
          date.add(1, 'day');
          _context2.next = 6;
          break;
        case 14:
          return _context2.abrupt("return", buildWeekSlotOptionsReply(weekSchedules, requestedDoctor));
        case 15:
          targetDate = (0, _extractDate.extractDate)(message);
          if (targetDate) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", {
            directReply: "M\xECnh ch\u01B0a nh\u1EADn ra ng\xE0y b\u1EA1n mu\u1ED1n kh\xE1m. B\u1EA1n th\u1EED nh\u1EADp l\u1EA1i ki\u1EC3u \"ng\xE0y mai\" ho\u1EB7c \"20/09\" nh\xE9.",
            sessionUpdate: {
              waitingFor: 'booking_date'
            }
          });
        case 18:
          if (!(0, _moment["default"])(targetDate).isBefore((0, _moment["default"])(), 'day')) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", {
            directReply: 'Ngày bạn chọn đã qua rồi, bạn cho mình ngày khác nhé.',
            sessionUpdate: {
              waitingFor: 'booking_date'
            }
          });
        case 20:
          _context2.next = 22;
          return (0, _clinicContext.getAvailableSchedules)(targetDate);
        case 22:
          allSchedules = _context2.sent;
          schedules = requestedDoctor ? allSchedules.filter(function (schedule) {
            return normalizeDoctorName(schedule.doctor).includes(requestedDoctor);
          }) : allSchedules;
          formattedDate = (0, _moment["default"])(targetDate).format('DD/MM/YYYY');
          dayOfWeek = DAY_LABELS[(0, _moment["default"])(targetDate).day()];
          if (schedules.length) {
            _context2.next = 28;
            break;
          }
          return _context2.abrupt("return", {
            directReply: requestedDoctor ? "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng cho **").concat(requestedDoctor, "**. B\u1EA1n ch\u1ECDn ng\xE0y kh\xE1c gi\xFAp m\xECnh, ho\u1EB7c ").concat(MANUAL_LINK, ".") : "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF2n l\u1ECBch tr\u1ED1ng. B\u1EA1n ch\u1ECDn ng\xE0y kh\xE1c gi\xFAp m\xECnh, ho\u1EB7c ").concat(MANUAL_LINK, "."),
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: {
                requestedDoctor: requestedDoctor
              }
            }
          });
        case 28:
          options = schedules.slice(0, 6);
          list = options.map(function (s, i) {
            return "".concat(i + 1, ". **").concat(s.doctor, "** \u2014 ").concat(s.time);
          }).join('\n');
          return _context2.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") c\xF2n c\xE1c khung gi\u1EDD sau, b\u1EA1n ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9:\n\n").concat(list, "\n\nHo\u1EB7c ").concat(MANUAL_LINK, "."),
            sessionUpdate: {
              waitingFor: 'booking_slot',
              _meta: {
                scheduleOptions: options,
                requestedDoctor: requestedDoctor
              }
            },
            quickReplies: options.map(function (schedule, index) {
              return {
                label: "".concat(index + 1, ". ").concat(schedule.doctor.replace(/^BS\.\s*/i, ''), " - ").concat(schedule.time),
                text: "".concat(index + 1)
              };
            })
          });
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handleBookingDate(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// BƯỚC 2 — nhận số thứ tự, tạo pendingBooking, hỏi xác nhận
var handleBookingSlot = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message, sessionData, patientId) {
    var _sessionData$_meta, _options$, _sessionData$_meta2;
    var options, date, currentDoctor, otherSchedules, requestedDoctor, doctorSchedules, _doctorSchedules, match, picked, slot, pendingBooking;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta = sessionData._meta) === null || _sessionData$_meta === void 0 ? void 0 : _sessionData$_meta.scheduleOptions) || [];
          date = (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.date;
          currentDoctor = sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta2 = sessionData._meta) === null || _sessionData$_meta2 === void 0 ? void 0 : _sessionData$_meta2.requestedDoctor;
          if (!isAskingForAnotherDate(message)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", {
            directReply: 'Bạn cho mình ngày cụ thể muốn đổi sang nhé, ví dụ “ngày kia” hoặc “10/09”.',
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: {
                requestedDoctor: currentDoctor
              }
            }
          });
        case 5:
          if (!isAskingForAnotherDoctor(message)) {
            _context3.next = 17;
            break;
          }
          if (!date) {
            _context3.next = 12;
            break;
          }
          _context3.next = 9;
          return getDoctorSchedules(date);
        case 9:
          _context3.t0 = _context3.sent.filter(function (schedule) {
            return !currentDoctor || !normalizeDoctorName(schedule.doctor).includes(currentDoctor);
          });
          _context3.next = 13;
          break;
        case 12:
          _context3.t0 = [];
        case 13:
          otherSchedules = _context3.t0;
          if (otherSchedules.length) {
            _context3.next = 16;
            break;
          }
          return _context3.abrupt("return", {
            directReply: 'Ngày này hiện không còn lịch của bác sĩ nào khác. Bạn có muốn tiếp tục với bác sĩ đang hiển thị hoặc chọn ngày khác không?',
            sessionUpdate: {
              waitingFor: 'booking_slot'
            }
          });
        case 16:
          return _context3.abrupt("return", buildSlotOptionsReply(date, otherSchedules, "Ngo\xE0i b\xE1c s\u0129 \u0111ang ch\u1ECDn, ng\xE0y **".concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** c\xF2n c\xE1c l\u1EF1a ch\u1ECDn sau:")));
        case 17:
          requestedDoctor = extractDoctorName(message);
          if (!(requestedDoctor && date)) {
            _context3.next = 25;
            break;
          }
          _context3.next = 21;
          return getDoctorSchedules(date, requestedDoctor);
        case 21:
          doctorSchedules = _context3.sent;
          if (doctorSchedules.length) {
            _context3.next = 24;
            break;
          }
          return _context3.abrupt("return", {
            directReply: "Ng\xE0y **".concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng cho b\xE1c s\u0129 **").concat(requestedDoctor, "**. B\u1EA1n mu\u1ED1n ch\u1ECDn b\xE1c s\u0129 kh\xE1c hay ng\xE0y kh\xE1c?"),
            sessionUpdate: {
              waitingFor: 'booking_slot',
              _meta: {
                scheduleOptions: options,
                requestedDoctor: currentDoctor
              }
            }
          });
        case 24:
          return _context3.abrupt("return", buildSlotOptionsReply(date, doctorSchedules, "C\xE1c khung gi\u1EDD c\u1EE7a **".concat(doctorSchedules[0].doctor, "** v\xE0o ng\xE0y **").concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** l\xE0:")));
        case 25:
          if (!(isAskingForAnotherTime(message) && date)) {
            _context3.next = 30;
            break;
          }
          _context3.next = 28;
          return getDoctorSchedules(date, currentDoctor);
        case 28:
          _doctorSchedules = _context3.sent;
          return _context3.abrupt("return", buildSlotOptionsReply(date, _doctorSchedules, "C\xE1c khung gi\u1EDD c\xF2n l\u1EA1i v\xE0o ng\xE0y **".concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** l\xE0:")));
        case 30:
          match = message.match(/\d+/);
          picked = match ? parseInt(match[0], 10) : null;
          if (!(!picked || !options[picked - 1])) {
            _context3.next = 34;
            break;
          }
          return _context3.abrupt("return", {
            directReply: 'Bạn chọn giúp mình đúng số thứ tự trong danh sách ở trên nhé.',
            sessionUpdate: {
              waitingFor: 'booking_slot'
            }
          });
        case 34:
          slot = options[picked - 1];
          pendingBooking = {
            doctor_schedule_id: slot.doctor_schedule_id,
            doctor: slot.doctor,
            date: slot.date,
            time: slot.time
          };
          return _context3.abrupt("return", buildConfirmReply(pendingBooking, patientId));
        case 37:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function handleBookingSlot(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

// BƯỚC 3 — xác nhận (hoặc nhắc lại sau khi vừa đăng nhập xong)
var handleBookingConfirm = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message, sessionData, patientId) {
    var pendingBooking, msg, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          pendingBooking = sessionData === null || sessionData === void 0 ? void 0 : sessionData.pendingBooking;
          if (pendingBooking) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Bạn muốn đặt lịch khám mới phải không? Cho mình biết ngày bạn muốn khám nhé.',
            sessionUpdate: {
              waitingFor: null
            }
          });
        case 3:
          msg = message.trim().toLowerCase();
          if (!/^(hủy|huỷ|không|thôi)/.test(msg)) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Mình đã hủy yêu cầu đặt lịch này. Bạn cần gì khác cứ nhắn mình nhé.',
            sessionUpdate: {
              waitingFor: null,
              pendingBooking: null
            }
          });
        case 6:
          if (patientId) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", buildConfirmReply(pendingBooking, null));
        case 8:
          if (/^(xác nhận|có|đồng ý|ok|yes|đặt)/.test(msg)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", buildConfirmReply(pendingBooking, patientId));
        case 10:
          _context4.next = 12;
          return (0, _chatBooking.commitBooking)(pendingBooking, patientId);
        case 12:
          result = _context4.sent;
          return _context4.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
            sessionUpdate: {
              waitingFor: null,
              pendingBooking: null
            }
          }));
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function handleBookingConfirm(_x6, _x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var handleBookingFlow = exports.handleBookingFlow = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(waitingFor, message, sessionData, patientId) {
    var _sessionData$_meta3;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.t0 = waitingFor;
          _context5.next = _context5.t0 === 'booking_date' ? 3 : _context5.t0 === 'booking_slot' ? 4 : _context5.t0 === 'booking_confirm' ? 5 : 6;
          break;
        case 3:
          return _context5.abrupt("return", handleBookingDate(message, sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta3 = sessionData._meta) === null || _sessionData$_meta3 === void 0 ? void 0 : _sessionData$_meta3.requestedDoctor));
        case 4:
          return _context5.abrupt("return", handleBookingSlot(message, sessionData, patientId));
        case 5:
          return _context5.abrupt("return", handleBookingConfirm(message, sessionData, patientId));
        case 6:
          return _context5.abrupt("return", null);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function handleBookingFlow(_x9, _x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

// BƯỚC 0 — bắt đầu luồng, đồng thời xử lý ngày nếu người dùng đã nêu
var startBookingFlow = exports.startBookingFlow = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _sessionData$_meta4;
    var message,
      sessionData,
      requestedDoctor,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          message = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : '';
          sessionData = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
          requestedDoctor = extractDoctorName(message) || (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta4 = sessionData._meta) === null || _sessionData$_meta4 === void 0 ? void 0 : _sessionData$_meta4.requestedDoctor) || null;
          if (!(0, _extractDate.extractDate)(message)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", handleBookingDate(message, requestedDoctor));
        case 5:
          return _context6.abrupt("return", {
            directReply: "B\u1EA1n mu\u1ED1n \u0111\u1EB7t l\u1ECBch kh\xE1m v\xE0o ng\xE0y n\xE0o? (VD: \"ng\xE0y mai\", \"20/09\")\n\nHo\u1EB7c b\u1EA1n c\xF3 th\u1EC3 ".concat(MANUAL_LINK, " n\u1EBFu mu\u1ED1n t\u1EF1 ch\u1ECDn."),
            sessionUpdate: {
              waitingFor: 'booking_date',
              pendingBooking: null,
              _meta: {
                requestedDoctor: requestedDoctor
              }
            }
          });
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function startBookingFlow() {
    return _ref6.apply(this, arguments);
  };
}();