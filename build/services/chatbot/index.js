"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _extractPhone = require("./utils/extractPhone");
var _clinicContext = require("./clinicContext.service");
var _quickReply = require("./intent/quickReply.map");
var _intentHandler = require("./intent/intentHandler");
var _promptBuilder = require("./gemini/promptBuilder");
var _geminiClient = require("./gemini/geminiClient");
var _geminiTools = require("./intent/geminiTools");
var _bookingFlow = require("./booking/bookingFlow.service");
var _addressStyle = require("./utils/addressStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var LOGIN_RESUME_TRIGGER = 'Tiếp tục đặt lịch';
var buildFlowContext = function buildFlowContext(waitingFor, sessionData) {
  switch (waitingFor) {
    case 'booking_date':
      {
        var filters = (sessionData === null || sessionData === void 0 ? void 0 : sessionData._meta) || {};
        var known = [];
        if (filters.requestedCategory) known.push("d\u1ECBch v\u1EE5 \u0111\xE3 bi\u1EBFt: ".concat(filters.requestedCategory));
        if (filters.requestedDoctor) known.push("b\xE1c s\u0129 \u0111\xE3 bi\u1EBFt: ".concat(filters.requestedDoctor));
        return "Kh\xE1ch \u0111ang \u0111\u01B0\u1EE3c h\u1ECFi mu\u1ED1n \u0111\u1EB7t l\u1ECBch v\xE0o NG\xC0Y n\xE0o.".concat(known.length ? " (".concat(known.join(', '), ")") : '');
      }
    case 'booking_slot':
      {
        var _sessionData$_meta;
        var options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta = sessionData._meta) === null || _sessionData$_meta === void 0 ? void 0 : _sessionData$_meta.scheduleOptions) || [];
        var list = options.map(function (o, i) {
          return "".concat(i + 1, ". ").concat(o.doctor, " \u2014 ").concat(o.time, " (ng\xE0y ").concat(o.date, ")");
        }).join('\n');
        return "Kh\xE1ch \u0111ang xem danh s\xE1ch khung gi\u1EDD tr\u1ED1ng sau, \u0111\xE1nh s\u1ED1 t\u1EEB 1:\n".concat(list);
      }
    case 'booking_confirm':
      {
        var _sessionData$_meta2;
        var p = sessionData === null || sessionData === void 0 ? void 0 : sessionData.pendingBooking;
        var _options = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta2 = sessionData._meta) === null || _sessionData$_meta2 === void 0 ? void 0 : _sessionData$_meta2.scheduleOptions) || [];
        var prevList = _options.length ? "\n\nDanh s\xE1ch \u0111\xE3 xem tr\u01B0\u1EDBc \u0111\xF3 (\u0111\u1EC3 tham kh\u1EA3o n\u1EBFu kh\xE1ch mu\u1ED1n \u0111\u1ED5i m\u1EE5c kh\xE1c):\n".concat(_options.map(function (o, i) {
          return "".concat(i + 1, ". ").concat(o.doctor, " \u2014 ").concat(o.time, " (ng\xE0y ").concat(o.date, ")");
        }).join('\n')) : '';
        return "Kh\xE1ch \u0111ang \u0111\u01B0\u1EE3c h\u1ECFi X\xC1C NH\u1EACN l\u1ECBch h\u1EB9n: ".concat(p === null || p === void 0 ? void 0 : p.doctor, " l\xFAc ").concat(p === null || p === void 0 ? void 0 : p.time, " ng\xE0y ").concat(p === null || p === void 0 ? void 0 : p.date, " \u2014 \u0111\xFAng hay kh\xF4ng?").concat(prevList);
      }
    case 'cancel_select':
      {
        var _sessionData$_meta3;
        var _options2 = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta3 = sessionData._meta) === null || _sessionData$_meta3 === void 0 ? void 0 : _sessionData$_meta3.cancelOptions) || [];
        var _list = _options2.map(function (o, i) {
          return "".concat(i + 1, ". ").concat(o.doctor, " \u2014 ").concat(o.date, " l\xFAc ").concat(o.time, " (").concat(o.status, ")");
        }).join('\n');
        return "Kh\xE1ch \u0111ang xem danh s\xE1ch l\u1ECBch h\u1EB9n c\xF3 th\u1EC3 h\u1EE7y sau, \u0111\xE1nh s\u1ED1 t\u1EEB 1:\n".concat(_list);
      }
    case 'cancel_confirm':
      {
        var _sessionData$_meta4;
        var _p = sessionData === null || sessionData === void 0 ? void 0 : sessionData.pendingCancel;
        var _options3 = (sessionData === null || sessionData === void 0 ? void 0 : (_sessionData$_meta4 = sessionData._meta) === null || _sessionData$_meta4 === void 0 ? void 0 : _sessionData$_meta4.cancelOptions) || [];
        var _prevList = _options3.length ? "\n\nDanh s\xE1ch \u0111\xE3 xem tr\u01B0\u1EDBc \u0111\xF3 (\u0111\u1EC3 tham kh\u1EA3o n\u1EBFu kh\xE1ch mu\u1ED1n \u0111\u1ED5i m\u1EE5c kh\xE1c):\n".concat(_options3.map(function (o, i) {
          return "".concat(i + 1, ". ").concat(o.doctor, " \u2014 ").concat(o.date, " l\xFAc ").concat(o.time);
        }).join('\n')) : '';
        return "Kh\xE1ch \u0111ang \u0111\u01B0\u1EE3c h\u1ECFi X\xC1C NH\u1EACN h\u1EE7y l\u1ECBch h\u1EB9n: ".concat(_p === null || _p === void 0 ? void 0 : _p.doctor, " l\xFAc ").concat(_p === null || _p === void 0 ? void 0 : _p.time, " ng\xE0y ").concat(_p === null || _p === void 0 ? void 0 : _p.date, " \u2014 \u0111\xFAng hay kh\xF4ng?").concat(_prevList);
      }
    case 'phone_for_lookup':
      return 'Khách vừa được hỏi SỐ ĐIỆN THOẠI để tra cứu lịch hẹn cũ, nhưng tin nhắn này không chứa số điện thoại hợp lệ.';
    case 'phone_for_cancel':
      return 'Khách vừa được hỏi SỐ ĐIỆN THOẠI để tìm lịch hẹn cần hủy, nhưng tin nhắn này không chứa số điện thoại hợp lệ.';
    default:
      return null;
  }
};
var askGemini = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
    var conversationHistory,
      sessionData,
      patientId,
      waitingFor,
      detectedStyle,
      style,
      styleUpdate,
      finalize,
      quickAction,
      result,
      phone,
      intent,
      _result,
      _result2,
      _yield$getClinicConte,
      categoryList,
      serviceList,
      doctorList,
      today,
      todaySchedules,
      scheduleContext,
      flowContext,
      systemPrompt,
      recentHistory,
      contents,
      _yield$callGeminiWith,
      functionCall,
      text,
      _result3,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          conversationHistory = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          sessionData = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          patientId = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
          waitingFor = sessionData === null || sessionData === void 0 ? void 0 : sessionData.waitingFor;
          detectedStyle = (sessionData === null || sessionData === void 0 ? void 0 : sessionData.addressStyle) || (0, _addressStyle.detectAddressStyle)(message);
          style = detectedStyle || _addressStyle.DEFAULT_ADDRESS_STYLE;
          styleUpdate = !(sessionData !== null && sessionData !== void 0 && sessionData.addressStyle) && detectedStyle ? {
            addressStyle: detectedStyle
          } : null;
          finalize = function finalize(result) {
            if (!result) return result;
            var merged = styleUpdate ? _objectSpread(_objectSpread({}, result), {}, {
              sessionUpdate: _objectSpread(_objectSpread({}, styleUpdate), result.sessionUpdate)
            }) : result;
            return merged.directReply ? _objectSpread(_objectSpread({}, merged), {}, {
              directReply: (0, _addressStyle.applyAddressStyle)(merged.directReply, style)
            }) : merged;
          };
          quickAction = _quickReply.QUICK_REPLY_ACTIONS[message.trim()];
          if (!quickAction) {
            _context.next = 15;
            break;
          }
          _context.next = 12;
          return (0, _intentHandler.handleStructuredIntent)(quickAction, sessionData, {}, patientId);
        case 12:
          result = _context.sent;
          if (!result) {
            _context.next = 15;
            break;
          }
          return _context.abrupt("return", finalize(result));
        case 15:
          if (!(waitingFor === 'phone_for_lookup' || waitingFor === 'phone_for_cancel')) {
            _context.next = 24;
            break;
          }
          phone = (0, _extractPhone.extractPhone)(message);
          if (!phone) {
            _context.next = 24;
            break;
          }
          intent = waitingFor === 'phone_for_lookup' ? 'check_appointment' : 'cancel_appointment';
          _context.next = 21;
          return (0, _intentHandler.handleStructuredIntent)(intent, sessionData, {
            phone: phone
          }, patientId);
        case 21:
          _result = _context.sent;
          if (!_result) {
            _context.next = 24;
            break;
          }
          return _context.abrupt("return", finalize(_result));
        case 24:
          if (!(message.trim() === LOGIN_RESUME_TRIGGER && waitingFor === 'booking_confirm')) {
            _context.next = 28;
            break;
          }
          _result2 = (0, _bookingFlow.resumeBookingConfirm)(sessionData, patientId);
          if (!_result2) {
            _context.next = 28;
            break;
          }
          return _context.abrupt("return", finalize(_result2));
        case 28:
          _context.prev = 28;
          _context.next = 31;
          return (0, _clinicContext.getClinicContext)();
        case 31:
          _yield$getClinicConte = _context.sent;
          categoryList = _yield$getClinicConte.categoryList;
          serviceList = _yield$getClinicConte.serviceList;
          doctorList = _yield$getClinicConte.doctorList;
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context.next = 38;
          return (0, _clinicContext.getAvailableSchedules)(today);
        case 38:
          todaySchedules = _context.sent;
          scheduleContext = todaySchedules.length > 0 ? todaySchedules.slice(0, 10).map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, "): ").concat(s.date, " l\xFAc ").concat(s.time);
          }).join('\n') : 'Chưa có lịch trống hôm nay.';
          flowContext = buildFlowContext(waitingFor, sessionData);
          systemPrompt = (0, _promptBuilder.buildSystemPrompt)({
            categoryList: categoryList,
            serviceList: serviceList,
            doctorList: doctorList,
            scheduleContext: scheduleContext,
            flowContext: flowContext,
            addressStyle: style
          });
          recentHistory = conversationHistory.slice(-4);
          contents = [{
            role: 'user',
            parts: [{
              text: systemPrompt
            }]
          }, {
            role: 'model',
            parts: [{
              text: 'Đã hiểu. Tôi sẵn sàng hỗ trợ.'
            }]
          }].concat(_toConsumableArray(recentHistory), [{
            role: 'user',
            parts: [{
              text: message
            }]
          }]);
          _context.next = 46;
          return (0, _geminiClient.callGeminiWithFallback)(contents, {
            tools: (0, _geminiTools.getToolsForState)(waitingFor),
            toolConfig: {
              functionCallingConfig: {
                mode: 'ANY'
              }
            }
          });
        case 46:
          _yield$callGeminiWith = _context.sent;
          functionCall = _yield$callGeminiWith.functionCall;
          text = _yield$callGeminiWith.text;
          if (!functionCall) {
            _context.next = 55;
            break;
          }
          _context.next = 52;
          return (0, _intentHandler.handleStructuredIntent)(functionCall.name, sessionData, functionCall.args || {}, patientId);
        case 52:
          _result3 = _context.sent;
          if (!_result3) {
            _context.next = 55;
            break;
          }
          return _context.abrupt("return", finalize(_result3));
        case 55:
          return _context.abrupt("return", finalize({
            directReply: text || 'Dạ {s} chưa rõ ý {u}, {u} có thể nói rõ hơn được không ạ?',
            action: null
          }));
        case 58:
          _context.prev = 58;
          _context.t0 = _context["catch"](28);
          console.error('[chatbot] fallback error:', (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || _context.t0);
          return _context.abrupt("return", finalize({
            directReply: 'Mình chưa thể tải đầy đủ dữ liệu lúc này. {U} có thể hỏi về đặt lịch, giờ làm việc, bảng giá hoặc thử lại sau ít phút nhé.',
            action: null
          }));
        case 62:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[28, 58]]);
  }));
  return function askGemini(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  askGemini: askGemini
};