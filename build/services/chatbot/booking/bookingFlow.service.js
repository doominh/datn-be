"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBookingFlow = exports.resumeBookingConfirm = exports.normalizeDoctorName = exports.handleSlotTimeChange = exports.handleSlotSelection = exports.handleSlotDoctorChange = exports.handleSlotDateChange = exports.handleBookingConfirmDecision = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _clinicContext = require("../clinicContext.service");
var _chatBooking = require("./chatBooking.service");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var normalizeDoctorName = exports.normalizeDoctorName = function normalizeDoctorName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return name.toLowerCase().replace(/^bs\.?\s*/i, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
};
var filterByDoctor = function filterByDoctor(schedules, requestedDoctor) {
  return requestedDoctor ? schedules.filter(function (s) {
    return normalizeDoctorName(s.doctor).includes(requestedDoctor);
  }) : schedules;
};
var filterByCategory = function filterByCategory(schedules, requestedCategory) {
  return requestedCategory ? schedules.filter(function (s) {
    return (s.specialty || '').toLowerCase().includes(requestedCategory.toLowerCase());
  }) : schedules;
};
var getFilteredSchedules = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(date) {
    var _ref2,
      requestedDoctor,
      requestedCategory,
      all,
      byDoctor,
      byDoctorAndCategory,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, requestedDoctor = _ref2.requestedDoctor, requestedCategory = _ref2.requestedCategory;
          _context.next = 3;
          return (0, _clinicContext.getAvailableSchedules)(date);
        case 3:
          all = _context.sent;
          byDoctor = filterByDoctor(all, requestedDoctor);
          if (requestedCategory) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", byDoctor);
        case 7:
          byDoctorAndCategory = filterByCategory(byDoctor, requestedCategory);
          return _context.abrupt("return", byDoctorAndCategory.length ? byDoctorAndCategory : byDoctor);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getFilteredSchedules(_x) {
    return _ref.apply(this, arguments);
  };
}();
var describeFilters = function describeFilters() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    requestedCategory = _ref3.requestedCategory;
  return requestedCategory ? " cho d\u1ECBch v\u1EE5 **".concat(requestedCategory, "**") : '';
};
var currentFiltersFromSession = function currentFiltersFromSession(sessionData) {
  var _sessionData$_meta, _sessionData$_meta2;
  return {
    requestedDoctor: (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta = sessionData._meta) === null || _sessionData$_meta === void 0 ? void 0 : _sessionData$_meta.requestedDoctor) || null,
    requestedCategory: (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta2 = sessionData._meta) === null || _sessionData$_meta2 === void 0 ? void 0 : _sessionData$_meta2.requestedCategory) || null
  };
};
var buildSlotOptionsReply = function buildSlotOptionsReply(schedules, message) {
  var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = schedules.slice(0, 6);
  if (!options.length) {
    return {
      directReply: "".concat(message, "\n\nHi\u1EC7n kh\xF4ng c\xF2n khung gi\u1EDD ph\xF9 h\u1EE3p trong ng\xE0y n\xE0y. {U} mu\u1ED1n ch\u1ECDn ng\xE0y kh\xE1c kh\xF4ng?"),
      sessionUpdate: {
        waitingFor: 'booking_date',
        _meta: filters
      }
    };
  }
  var list = options.map(function (s, i) {
    return "".concat(i + 1, ". **").concat(s.doctor, "** \u2014 ").concat(s.time);
  }).join('\n');
  return {
    directReply: "".concat(message, "\n\n").concat(list, "\n\n{U} ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9."),
    sessionUpdate: {
      waitingFor: 'booking_slot',
      _meta: _objectSpread(_objectSpread({}, filters), {}, {
        scheduleOptions: options
      })
    },
    quickReplies: options.map(function (s, i) {
      return {
        label: "".concat(i + 1, ". ").concat(s.doctor.replace(/^BS\.\s*/i, ''), " - ").concat(s.time),
        text: "".concat(i + 1)
      };
    })
  };
};
var buildWeekSlotOptionsReply = function buildWeekSlotOptionsReply(schedules) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = schedules.slice(0, 6);
  if (!options.length) {
    return {
      directReply: "Trong tu\u1EA7n n\xE0y hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng".concat(describeFilters(filters), ". {U} ch\u1ECDn tu\u1EA7n kh\xE1c ho\u1EB7c \u0111i\u1EC1u ki\u1EC7n kh\xE1c nh\xE9."),
      sessionUpdate: {
        waitingFor: 'booking_date',
        _meta: filters
      }
    };
  }
  var list = options.map(function (s, i) {
    var dateLabel = "".concat((0, _moment["default"])(s.date).format('DD/MM/YYYY'), " (").concat(DAY_LABELS[(0, _moment["default"])(s.date).day()], ")");
    return "".concat(i + 1, ". **").concat(s.doctor, "** \u2014 ").concat(dateLabel, " l\xFAc **").concat(s.time, "**");
  }).join('\n');
  return {
    directReply: "C\xE1c khung gi\u1EDD trong tu\u1EA7n n\xE0y".concat(describeFilters(filters), ":\n\n").concat(list, "\n\n{U} ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9."),
    sessionUpdate: {
      waitingFor: 'booking_slot',
      _meta: _objectSpread(_objectSpread({}, filters), {}, {
        scheduleOptions: options
      })
    },
    quickReplies: options.map(function (s, i) {
      return {
        label: "".concat(i + 1, ". ").concat((0, _moment["default"])(s.date).format('DD/MM'), " - ").concat(s.time),
        text: "".concat(i + 1)
      };
    })
  };
};
var buildConfirmReply = function buildConfirmReply(pendingBooking, patientId) {
  var confirmText = "{U} mu\u1ED1n \u0111\u1EB7t l\u1ECBch **".concat(pendingBooking.doctor, "** l\xFAc **").concat(pendingBooking.time, "** ng\xE0y **").concat((0, _moment["default"])(pendingBooking.date).format('DD/MM/YYYY'), "** \u2014 \u0111\xFAng kh\xF4ng?");
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
    directReply: "".concat(confirmText, "\n\n[\u0110\u0103ng nh\u1EADp \u0111\u1EC3 ti\u1EBFp t\u1EE5c](/login) \xB7 [\u0110\u0103ng k\xFD t\xE0i kho\u1EA3n](/register) \xB7 ").concat(MANUAL_LINK),
    sessionUpdate: {
      waitingFor: 'booking_confirm',
      pendingBooking: pendingBooking
    }
  };
};
var buildDateResultReply = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(targetDate, filters) {
    var schedules, formattedDate, dayOfWeek;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!targetDate || !(0, _moment["default"])(targetDate, 'YYYY-MM-DD', true).isValid())) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", {
            directReply: "{S} ch\u01B0a nh\u1EADn ra ng\xE0y {u} mu\u1ED1n kh\xE1m. {U} th\u1EED nh\u1EADp l\u1EA1i ki\u1EC3u \"ng\xE0y mai\" ho\u1EB7c \"20/09\" nh\xE9.",
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: filters
            }
          });
        case 2:
          if (!(0, _moment["default"])(targetDate).isBefore((0, _moment["default"])(), 'day')) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", {
            directReply: 'Ngày {u} chọn đã qua rồi, {u} cho {s} ngày khác nhé.',
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: filters
            }
          });
        case 4:
          _context2.next = 6;
          return getFilteredSchedules(targetDate, filters);
        case 6:
          schedules = _context2.sent;
          formattedDate = (0, _moment["default"])(targetDate).format('DD/MM/YYYY');
          dayOfWeek = DAY_LABELS[(0, _moment["default"])(targetDate).day()];
          if (schedules.length) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng").concat(describeFilters(filters), ". {U} ch\u1ECDn ng\xE0y kh\xE1c gi\xFAp {s}, ho\u1EB7c ").concat(MANUAL_LINK, "."),
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: filters
            }
          });
        case 11:
          return _context2.abrupt("return", buildSlotOptionsReply(schedules, "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") c\xF2n c\xE1c khung gi\u1EDD sau").concat(describeFilters(filters), ", {u} ch\u1ECDn s\u1ED1 t\u01B0\u01A1ng \u1EE9ng nh\xE9:"), _objectSpread(_objectSpread({}, filters), {}, {
            requestedDate: targetDate
          })));
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function buildDateResultReply(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var startBookingFlow = exports.startBookingFlow = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _sessionData$_meta3, _sessionData$_meta4, _sessionData$_meta5;
    var args,
      sessionData,
      requestedDoctor,
      matchedCategory,
      requestedCategory,
      filters,
      startDate,
      endDate,
      weekSchedules,
      d,
      targetDate,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          args = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
          sessionData = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          requestedDoctor = args.doctor_name ? normalizeDoctorName(args.doctor_name) : (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta3 = sessionData._meta) === null || _sessionData$_meta3 === void 0 ? void 0 : _sessionData$_meta3.requestedDoctor) || null;
          if (!args.service_name) {
            _context3.next = 9;
            break;
          }
          _context3.next = 6;
          return (0, _clinicContext.matchServiceCategory)(args.service_name);
        case 6:
          _context3.t0 = _context3.sent;
          _context3.next = 10;
          break;
        case 9:
          _context3.t0 = null;
        case 10:
          matchedCategory = _context3.t0;
          requestedCategory = matchedCategory || (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta4 = sessionData._meta) === null || _sessionData$_meta4 === void 0 ? void 0 : _sessionData$_meta4.requestedCategory) || null;
          filters = {
            requestedDoctor: requestedDoctor,
            requestedCategory: requestedCategory
          };
          if (!(args.is_whole_week && !args.date)) {
            _context3.next = 31;
            break;
          }
          startDate = (0, _moment["default"])().startOf('day');
          endDate = startDate.clone().endOf('isoWeek');
          weekSchedules = [];
          d = startDate.clone();
        case 18:
          if (!d.isSameOrBefore(endDate, 'day')) {
            _context3.next = 30;
            break;
          }
          _context3.t1 = weekSchedules.push;
          _context3.t2 = weekSchedules;
          _context3.t3 = _toConsumableArray;
          _context3.next = 24;
          return getFilteredSchedules(d.format('YYYY-MM-DD'), filters);
        case 24:
          _context3.t4 = _context3.sent;
          _context3.t5 = (0, _context3.t3)(_context3.t4);
          _context3.t1.apply.call(_context3.t1, _context3.t2, _context3.t5);
        case 27:
          d.add(1, 'day');
          _context3.next = 18;
          break;
        case 30:
          return _context3.abrupt("return", buildWeekSlotOptionsReply(weekSchedules, filters));
        case 31:
          targetDate = args.date || (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta5 = sessionData._meta) === null || _sessionData$_meta5 === void 0 ? void 0 : _sessionData$_meta5.requestedDate) || null;
          if (targetDate) {
            _context3.next = 34;
            break;
          }
          return _context3.abrupt("return", {
            directReply: "{U} mu\u1ED1n \u0111\u1EB7t l\u1ECBch kh\xE1m".concat(describeFilters(filters), " v\xE0o ng\xE0y n\xE0o? (VD: \"ng\xE0y mai\", \"20/09\")\n\nHo\u1EB7c {u} c\xF3 th\u1EC3 ").concat(MANUAL_LINK, " n\u1EBFu mu\u1ED1n t\u1EF1 ch\u1ECDn."),
            sessionUpdate: {
              waitingFor: 'booking_date',
              pendingBooking: null,
              _meta: filters
            }
          });
        case 34:
          return _context3.abrupt("return", buildDateResultReply(targetDate, filters));
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function startBookingFlow() {
    return _ref5.apply(this, arguments);
  };
}();
var handleSlotSelection = exports.handleSlotSelection = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(index, sessionData, patientId) {
    var _sessionData$_meta6;
    var options, slot, list, pendingBooking;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta6 = sessionData._meta) === null || _sessionData$_meta6 === void 0 ? void 0 : _sessionData$_meta6.scheduleOptions) || [];
          slot = options[index - 1];
          if (slot) {
            _context4.next = 5;
            break;
          }
          list = options.map(function (s, i) {
            return "".concat(i + 1, ". **").concat(s.doctor, "** \u2014 ").concat(s.time);
          }).join('\n');
          return _context4.abrupt("return", {
            directReply: "{S} ch\u01B0a r\xF5 {u} mu\u1ED1n ch\u1ECDn m\u1EE5c n\xE0o, {u} ch\u1ECDn gi\xFAp {s} theo s\u1ED1 th\u1EE9 t\u1EF1 b\xEAn d\u01B0\u1EDBi nh\xE9:\n\n".concat(list),
            sessionUpdate: {
              waitingFor: 'booking_slot',
              _meta: sessionData === null || sessionData === void 0 ? void 0 : sessionData._meta
            }
          });
        case 5:
          pendingBooking = {
            doctor_schedule_id: slot.doctor_schedule_id,
            doctor: slot.doctor,
            date: slot.date,
            time: slot.time
          };
          return _context4.abrupt("return", buildConfirmReply(pendingBooking, patientId));
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function handleSlotSelection(_x4, _x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
var handleSlotDateChange = exports.handleSlotDateChange = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(date, sessionData) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", buildDateResultReply(date, currentFiltersFromSession(sessionData)));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function handleSlotDateChange(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
var handleSlotDoctorChange = exports.handleSlotDoctorChange = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(doctorName, sessionData) {
    var _sessionData$_meta7, _options$;
    var options, date, currentFilters, doctorFilters, doctorSchedules;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta7 = sessionData._meta) === null || _sessionData$_meta7 === void 0 ? void 0 : _sessionData$_meta7.scheduleOptions) || [];
          date = (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.date;
          currentFilters = currentFiltersFromSession(sessionData);
          if (!(!doctorName || !date)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", {
            directReply: '{U} muốn đổi sang bác sĩ nào ạ?',
            sessionUpdate: {
              waitingFor: 'booking_slot',
              _meta: sessionData === null || sessionData === void 0 ? void 0 : sessionData._meta
            }
          });
        case 5:
          doctorFilters = _objectSpread(_objectSpread({}, currentFilters), {}, {
            requestedDoctor: normalizeDoctorName(doctorName)
          });
          _context6.next = 8;
          return getFilteredSchedules(date, doctorFilters);
        case 8:
          doctorSchedules = _context6.sent;
          if (doctorSchedules.length) {
            _context6.next = 11;
            break;
          }
          return _context6.abrupt("return", {
            directReply: "Ng\xE0y **".concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng cho b\xE1c s\u0129 **").concat(doctorName, "**. {U} mu\u1ED1n ch\u1ECDn b\xE1c s\u0129 kh\xE1c hay ng\xE0y kh\xE1c?"),
            sessionUpdate: {
              waitingFor: 'booking_slot',
              _meta: _objectSpread(_objectSpread({}, currentFilters), {}, {
                scheduleOptions: options
              })
            }
          });
        case 11:
          return _context6.abrupt("return", buildSlotOptionsReply(doctorSchedules, "C\xE1c khung gi\u1EDD c\u1EE7a **".concat(doctorSchedules[0].doctor, "** v\xE0o ng\xE0y **").concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** l\xE0:"), doctorFilters));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function handleSlotDoctorChange(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();
var handleSlotTimeChange = exports.handleSlotTimeChange = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(sessionData) {
    var _sessionData$_meta8, _options$2;
    var options, date, currentFilters, doctorSchedules;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta8 = sessionData._meta) === null || _sessionData$_meta8 === void 0 ? void 0 : _sessionData$_meta8.scheduleOptions) || [];
          date = (_options$2 = options[0]) === null || _options$2 === void 0 ? void 0 : _options$2.date;
          currentFilters = currentFiltersFromSession(sessionData);
          if (date) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", {
            directReply: '{U} muốn xem khung giờ ngày nào ạ?',
            sessionUpdate: {
              waitingFor: 'booking_date',
              _meta: currentFilters
            }
          });
        case 5:
          _context7.next = 7;
          return getFilteredSchedules(date, currentFilters);
        case 7:
          doctorSchedules = _context7.sent;
          return _context7.abrupt("return", buildSlotOptionsReply(doctorSchedules, "C\xE1c khung gi\u1EDD c\xF2n l\u1EA1i v\xE0o ng\xE0y **".concat((0, _moment["default"])(date).format('DD/MM/YYYY'), "** l\xE0:"), currentFilters));
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function handleSlotTimeChange(_x11) {
    return _ref9.apply(this, arguments);
  };
}();
var handleBookingConfirmDecision = exports.handleBookingConfirmDecision = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(decision, sessionData, patientId) {
    var pendingBooking, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          pendingBooking = sessionData === null || sessionData === void 0 ? void 0 : sessionData.pendingBooking;
          if (pendingBooking) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", {
            directReply: '{U} muốn đặt lịch khám mới phải không? Cho {s} biết ngày {u} muốn khám nhé.',
            sessionUpdate: {
              waitingFor: null
            }
          });
        case 3:
          if (!(decision === 'decline')) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", {
            directReply: '{S} đã hủy yêu cầu đặt lịch này. {U} cần gì khác cứ nhắn {s} nhé.',
            sessionUpdate: {
              waitingFor: null,
              pendingBooking: null,
              _meta: null
            }
          });
        case 5:
          if (patientId) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", buildConfirmReply(pendingBooking, null));
        case 7:
          _context8.next = 9;
          return (0, _chatBooking.commitBooking)(pendingBooking, patientId);
        case 9:
          result = _context8.sent;
          return _context8.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
            sessionUpdate: {
              waitingFor: null,
              pendingBooking: null,
              _meta: null
            }
          }));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function handleBookingConfirmDecision(_x12, _x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();
var resumeBookingConfirm = exports.resumeBookingConfirm = function resumeBookingConfirm(sessionData, patientId) {
  var pendingBooking = sessionData === null || sessionData === void 0 ? void 0 : sessionData.pendingBooking;
  if (!pendingBooking) return null;
  return buildConfirmReply(pendingBooking, patientId);
};