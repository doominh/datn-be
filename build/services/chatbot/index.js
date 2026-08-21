"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _fs = _interopRequireDefault(require("fs"));
var _extractPhone = require("./utils/extractPhone");
var _extractDate = require("./utils/extractDate");
var _clinicContext = require("./clinicContext.service");
var _quickReply = require("./intent/quickReply.map");
var _faqPatterns = require("./intent/faqPatterns");
var _intentHandler = require("./intent/intentHandler");
var _promptBuilder = require("./gemini/promptBuilder");
var _geminiClient = require("./gemini/geminiClient");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var askGemini = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
    var _sessionData;
    var conversationHistory,
      sessionData,
      phone,
      quickAction,
      result,
      looseCheckPhone,
      _result,
      isAskingSchedule,
      targetDate,
      _result2,
      _iterator,
      _step,
      _step$value,
      intent,
      regex,
      exclude,
      _result3,
      _yield$getClinicConte,
      categoryList,
      serviceList,
      doctorList,
      today,
      todaySchedules,
      scheduleContext,
      systemPrompt,
      recentHistory,
      contents,
      text,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          conversationHistory = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
          sessionData = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          if (!(((_sessionData = sessionData) === null || _sessionData === void 0 ? void 0 : _sessionData.waitingFor) === 'phone_for_lookup')) {
            _context.next = 7;
            break;
          }
          phone = (0, _extractPhone.extractPhone)(message);
          if (!phone) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", (0, _intentHandler.handleStructuredIntent)('CHECK_APPOINTMENT', message, _objectSpread(_objectSpread({}, sessionData), {}, {
            phone: phone
          })));
        case 6:
          sessionData = _objectSpread(_objectSpread({}, sessionData), {}, {
            waitingFor: null
          });
        case 7:
          // 7b. Quick Reply exact match
          quickAction = _quickReply.QUICK_REPLY_ACTIONS[message.trim()];
          if (!quickAction) {
            _context.next = 14;
            break;
          }
          _context.next = 11;
          return (0, _intentHandler.handleStructuredIntent)(quickAction, message, sessionData);
        case 11:
          result = _context.sent;
          if (!result) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", result);
        case 14:
          // 7b-2. SĐT xuất hiện tự nhiên trong câu kèm ý tra cứu
          looseCheckPhone = (0, _extractPhone.extractPhone)(message);
          if (!(looseCheckPhone && /tra cứu|kiểm tra|lịch hẹn|lịch khám|cuộc hẹn|đặt.*chưa|đã đặt/i.test(message))) {
            _context.next = 21;
            break;
          }
          _context.next = 18;
          return (0, _intentHandler.handleStructuredIntent)('CHECK_APPOINTMENT', message, _objectSpread(_objectSpread({}, sessionData), {}, {
            phone: looseCheckPhone
          }));
        case 18:
          _result = _context.sent;
          if (!_result) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", _result);
        case 21:
          // 7c. Câu hỏi tìm lịch theo ngày cụ thể
          isAskingSchedule = /lịch|rảnh|trống|khám|bác sĩ nào|bác sĩ có thể|đặt lịch/i.test(message) && /ngày mai|ngày kia|hôm nay|thứ\s*([2-7]|hai|ba|tư|năm|sáu|bảy)|ngày\s*\d|\/\d|\d\s*tháng/i.test(message);
          if (!isAskingSchedule) {
            _context.next = 30;
            break;
          }
          targetDate = (0, _extractDate.extractDate)(message);
          if (!targetDate) {
            _context.next = 30;
            break;
          }
          _context.next = 27;
          return (0, _intentHandler.handleStructuredIntent)('ASK_SCHEDULE_BY_DATE', message, _objectSpread(_objectSpread({}, sessionData), {}, {
            _meta: {
              targetDate: targetDate
            }
          }));
        case 27:
          _result2 = _context.sent;
          if (!_result2) {
            _context.next = 30;
            break;
          }
          return _context.abrupt("return", _result2);
        case 30:
          if (!_faqPatterns.GREETING_REGEX.test(message.trim())) {
            _context.next = 32;
            break;
          }
          return _context.abrupt("return", {
            directReply: _faqPatterns.GREETING_REPLY
          });
        case 32:
          if (!_faqPatterns.THANKS_REGEX.test(message.trim())) {
            _context.next = 34;
            break;
          }
          return _context.abrupt("return", {
            directReply: _faqPatterns.THANKS_REPLY
          });
        case 34:
          // 7c-3. FAQ intent bằng regex
          _iterator = _createForOfIteratorHelper(_faqPatterns.FAQ_INTENT_PATTERNS);
          _context.prev = 35;
          _iterator.s();
        case 37:
          if ((_step = _iterator.n()).done) {
            _context.next = 47;
            break;
          }
          _step$value = _step.value, intent = _step$value.intent, regex = _step$value.regex, exclude = _step$value.exclude;
          if (!(regex.test(message) && !(exclude && exclude.test(message)))) {
            _context.next = 45;
            break;
          }
          _context.next = 42;
          return (0, _intentHandler.handleStructuredIntent)(intent, message, sessionData);
        case 42:
          _result3 = _context.sent;
          if (!_result3) {
            _context.next = 45;
            break;
          }
          return _context.abrupt("return", _result3);
        case 45:
          _context.next = 37;
          break;
        case 47:
          _context.next = 52;
          break;
        case 49:
          _context.prev = 49;
          _context.t0 = _context["catch"](35);
          _iterator.e(_context.t0);
        case 52:
          _context.prev = 52;
          _iterator.f();
          return _context.finish(52);
        case 55:
          // 7d. Gọi Gemini với full context
          try {
            _fs["default"].appendFileSync('./gemini-fallback.log', "".concat(new Date().toISOString(), " | ").concat(message, "\n"));
          } catch (e) {/* bỏ qua lỗi ghi file */}
          _context.next = 58;
          return (0, _clinicContext.getClinicContext)();
        case 58:
          _yield$getClinicConte = _context.sent;
          categoryList = _yield$getClinicConte.categoryList;
          serviceList = _yield$getClinicConte.serviceList;
          doctorList = _yield$getClinicConte.doctorList;
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context.next = 65;
          return (0, _clinicContext.getAvailableSchedules)(today);
        case 65:
          todaySchedules = _context.sent;
          scheduleContext = todaySchedules.length > 0 ? todaySchedules.slice(0, 10).map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, "): ").concat(s.date, " l\xFAc ").concat(s.time);
          }).join('\n') : 'Chưa có lịch trống hôm nay.';
          systemPrompt = (0, _promptBuilder.buildSystemPrompt)({
            categoryList: categoryList,
            serviceList: serviceList,
            doctorList: doctorList,
            scheduleContext: scheduleContext
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
          _context.next = 72;
          return (0, _geminiClient.callGeminiWithFallback)(contents);
        case 72:
          text = _context.sent;
          return _context.abrupt("return", {
            text: text,
            action: null
          });
        case 74:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[35, 49, 52, 55]]);
  }));
  return function askGemini(_x) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  askGemini: askGemini
};