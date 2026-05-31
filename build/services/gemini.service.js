"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _moment = _interopRequireDefault(require("moment"));
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('sequelize'),
  Op = _require.Op,
  Sequelize = _require.Sequelize;
require('dotenv').config();
var GEMINI_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';
var _clinicCache = null;
var _cacheTime = null;
var CACHE_TTL = 5 * 60 * 1000;

// ─── 1. LẤY CONTEXT PHÒNG KHÁM ───────────────────────────────────────────────
var getClinicContext = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var now, _yield$Promise$all, _yield$Promise$all2, categories, services, doctors, categoryList, serviceList, doctorMap, _iterator, _step, d, id, doctorList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          now = Date.now();
          if (!(_clinicCache && _cacheTime && now - _cacheTime < CACHE_TTL)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", _clinicCache);
        case 4:
          _context.next = 6;
          return Promise.all([_index["default"].Category.findAll({
            where: {
              status: true
            },
            attributes: ['category_id', 'category_name'],
            raw: true
          }), _index["default"].Service.findAll({
            where: {
              status: true
            },
            attributes: ['service_name', 'price'],
            include: [{
              model: _index["default"].Category,
              attributes: ['category_name']
            }],
            raw: true,
            nest: true
          }), _index["default"].Doctor.findAll({
            where: {
              is_activated: true,
              is_blocked: false
            },
            attributes: ['doctor_id', 'fullname', 'degree'],
            include: [{
              model: _index["default"].Category,
              attributes: ['category_name'],
              through: {
                attributes: []
              }
            }],
            raw: true,
            nest: true
          })]);
        case 6:
          _yield$Promise$all = _context.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
          categories = _yield$Promise$all2[0];
          services = _yield$Promise$all2[1];
          doctors = _yield$Promise$all2[2];
          categoryList = categories.map(function (c) {
            return "- ".concat(c.category_name);
          });
          serviceList = services.map(function (s) {
            var _s$Category;
            return "- ".concat(s.service_name, " (").concat(((_s$Category = s.Category) === null || _s$Category === void 0 ? void 0 : _s$Category.category_name) || 'N/A', "): ").concat(Number(s.price).toLocaleString('vi-VN'), "\u0111");
          }); // raw: true trả flat rows — gộp categories theo doctor_id bằng tay
          doctorMap = {};
          _iterator = _createForOfIteratorHelper(doctors);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              d = _step.value;
              id = d.doctor_id;
              if (!doctorMap[id]) {
                doctorMap[id] = {
                  doctor_id: id,
                  fullname: d.fullname,
                  degree: d.degree,
                  categories: []
                };
              }
              if (d['Categories.category_name']) {
                doctorMap[id].categories.push(d['Categories.category_name']);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          doctorList = Object.values(doctorMap).map(function (d) {
            var specs = d.categories.length > 0 ? d.categories.join(', ') : 'Đa khoa';
            return "- [BS. ".concat(d.fullname, "](/detailDoctor/").concat(d.doctor_id, ") (").concat(d.degree || 'Bác sĩ', ") \u2014 Chuy\xEAn: ").concat(specs);
          });
          _clinicCache = {
            categoryList: categoryList,
            serviceList: serviceList,
            doctorList: doctorList
          };
          _cacheTime = now;
          return _context.abrupt("return", _clinicCache);
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.error('[getClinicContext] error:', _context.t0.message);
          return _context.abrupt("return", {
            categoryList: [],
            serviceList: [],
            doctorList: []
          });
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 22]]);
  }));
  return function getClinicContext() {
    return _ref.apply(this, arguments);
  };
}();

// ─── 2. LẤY LỊCH TRỐNG ───────────────────────────────────────────────────────
// Dùng đúng pattern của getDoctorSchedulesByDate trong schedule.service.js:
// Doctor.findAll → include Schedule (where date) → raw: true, nest: true
// → rồi filter JS: item.Schedules.DoctorSchedule.status === 1
var getAvailableSchedules = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var date,
      targetDate,
      doctorsWithSchedule,
      results,
      _iterator2,
      _step2,
      _row$Schedules,
      _row$Schedules$Doctor,
      _row$Schedules2,
      _row$Schedules3,
      _row$Schedules3$Sessi,
      _row$Schedules3$Sessi2,
      _row,
      doctorIds,
      doctorCategories,
      catMap,
      _iterator3,
      _step3,
      row,
      id,
      _iterator4,
      _step4,
      r,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          date = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
          _context2.prev = 1;
          targetDate = date || (0, _moment["default"])().format('YYYY-MM-DD'); // Bước 1: Lấy tất cả doctor có lịch vào ngày targetDate
          // Tách 2 query riêng (Categories và Schedules) để tránh lỗi _findSeparate
          _context2.next = 5;
          return _index["default"].Doctor.findAll({
            where: {
              is_activated: true,
              is_blocked: false
            },
            attributes: ['doctor_id', 'fullname', 'degree'],
            include: [{
              model: _index["default"].Schedule,
              where: {
                date: targetDate
              },
              include: [{
                model: _index["default"].Session
              }],
              required: true
            }],
            raw: true,
            nest: true
          });
        case 5:
          doctorsWithSchedule = _context2.sent;
          if (doctorsWithSchedule.length) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", []);
        case 8:
          // Bước 2: Lọc status === 1, gộp theo doctor_id để tránh duplicate
          results = [];
          _iterator2 = _createForOfIteratorHelper(doctorsWithSchedule);
          _context2.prev = 10;
          _iterator2.s();
        case 12:
          if ((_step2 = _iterator2.n()).done) {
            _context2.next = 19;
            break;
          }
          _row = _step2.value;
          if (!(((_row$Schedules = _row.Schedules) === null || _row$Schedules === void 0 ? void 0 : (_row$Schedules$Doctor = _row$Schedules.DoctorSchedule) === null || _row$Schedules$Doctor === void 0 ? void 0 : _row$Schedules$Doctor.status) !== 1)) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("continue", 17);
        case 16:
          results.push({
            doctor_id: _row.doctor_id,
            doctor: "BS. ".concat(_row.fullname),
            specialty: '',
            // sẽ enrich ở bước 3 nếu cần
            date: ((_row$Schedules2 = _row.Schedules) === null || _row$Schedules2 === void 0 ? void 0 : _row$Schedules2.date) || targetDate,
            time: ((_row$Schedules3 = _row.Schedules) === null || _row$Schedules3 === void 0 ? void 0 : (_row$Schedules3$Sessi = _row$Schedules3.Session) === null || _row$Schedules3$Sessi === void 0 ? void 0 : (_row$Schedules3$Sessi2 = _row$Schedules3$Sessi.time) === null || _row$Schedules3$Sessi2 === void 0 ? void 0 : _row$Schedules3$Sessi2.slice(0, 5)) || ''
          });
        case 17:
          _context2.next = 12;
          break;
        case 19:
          _context2.next = 24;
          break;
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](10);
          _iterator2.e(_context2.t0);
        case 24:
          _context2.prev = 24;
          _iterator2.f();
          return _context2.finish(24);
        case 27:
          if (!(results.length > 0)) {
            _context2.next = 37;
            break;
          }
          doctorIds = _toConsumableArray(new Set(results.map(function (r) {
            return r.doctor_id;
          })));
          _context2.next = 31;
          return _index["default"].Doctor.findAll({
            where: {
              doctor_id: _defineProperty({}, Op["in"], doctorIds)
            },
            attributes: ['doctor_id'],
            include: [{
              model: _index["default"].Category,
              attributes: ['category_name'],
              through: {
                attributes: []
              }
            }],
            raw: true,
            nest: true
          });
        case 31:
          doctorCategories = _context2.sent;
          // Gộp categories
          catMap = {};
          _iterator3 = _createForOfIteratorHelper(doctorCategories);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              row = _step3.value;
              id = row.doctor_id;
              if (!catMap[id]) catMap[id] = [];
              if (row['Categories.category_name']) {
                catMap[id].push(row['Categories.category_name']);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          _iterator4 = _createForOfIteratorHelper(results);
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              r = _step4.value;
              r.specialty = (catMap[r.doctor_id] || []).join(', ') || 'Đa khoa';
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        case 37:
          return _context2.abrupt("return", results);
        case 40:
          _context2.prev = 40;
          _context2.t1 = _context2["catch"](1);
          console.error('[getAvailableSchedules] error:', _context2.t1.message, _context2.t1.stack);
          return _context2.abrupt("return", []);
        case 44:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 40], [10, 21, 24, 27]]);
  }));
  return function getAvailableSchedules() {
    return _ref2.apply(this, arguments);
  };
}();

// ─── 3. TRA CỨU LỊCH HẸN THEO SĐT ───────────────────────────────────────────
var getAppointmentsByPhone = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(phone) {
    var normalizedPhone, appointments, statusText;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          normalizedPhone = phone.trim(); // raw: true + nest: true — tránh lỗi result.get is not a function
          // TRIM để xử lý CHAR(10) trailing spaces trong MySQL
          _context3.next = 4;
          return _index["default"].Appointment.findAll({
            where: _defineProperty({}, Op.and, [Sequelize.where(Sequelize.fn('TRIM', Sequelize.col('Appointment.phone')), normalizedPhone), {
              status: _defineProperty({}, Op["in"], [0, 1])
            }]),
            include: [{
              model: _index["default"].DoctorSchedule,
              include: [{
                model: _index["default"].Doctor,
                attributes: ['fullname']
              }, {
                model: _index["default"].Schedule,
                include: [{
                  model: _index["default"].Session
                }]
              }]
            }],
            order: [['createdAt', 'DESC']],
            limit: 5,
            raw: true,
            nest: true
          });
        case 4:
          appointments = _context3.sent;
          statusText = {
            0: 'Chờ xác nhận',
            1: 'Đã xác nhận',
            2: 'Đã hủy',
            3: 'Hoàn thành'
          };
          return _context3.abrupt("return", appointments.map(function (a) {
            var _a$DoctorSchedule, _a$DoctorSchedule$Doc, _a$DoctorSchedule2, _a$DoctorSchedule2$Sc, _a$DoctorSchedule3, _a$DoctorSchedule3$Sc, _a$DoctorSchedule3$Sc2, _a$DoctorSchedule3$Sc3, _statusText$a$status;
            return {
              appointment_id: a.appointment_id,
              doctor: "BS. ".concat(((_a$DoctorSchedule = a.DoctorSchedule) === null || _a$DoctorSchedule === void 0 ? void 0 : (_a$DoctorSchedule$Doc = _a$DoctorSchedule.Doctor) === null || _a$DoctorSchedule$Doc === void 0 ? void 0 : _a$DoctorSchedule$Doc.fullname) || 'N/A'),
              date: ((_a$DoctorSchedule2 = a.DoctorSchedule) === null || _a$DoctorSchedule2 === void 0 ? void 0 : (_a$DoctorSchedule2$Sc = _a$DoctorSchedule2.Schedule) === null || _a$DoctorSchedule2$Sc === void 0 ? void 0 : _a$DoctorSchedule2$Sc.date) || '',
              time: ((_a$DoctorSchedule3 = a.DoctorSchedule) === null || _a$DoctorSchedule3 === void 0 ? void 0 : (_a$DoctorSchedule3$Sc = _a$DoctorSchedule3.Schedule) === null || _a$DoctorSchedule3$Sc === void 0 ? void 0 : (_a$DoctorSchedule3$Sc2 = _a$DoctorSchedule3$Sc.Session) === null || _a$DoctorSchedule3$Sc2 === void 0 ? void 0 : (_a$DoctorSchedule3$Sc3 = _a$DoctorSchedule3$Sc2.time) === null || _a$DoctorSchedule3$Sc3 === void 0 ? void 0 : _a$DoctorSchedule3$Sc3.slice(0, 5)) || '',
              status: (_statusText$a$status = statusText[a.status]) !== null && _statusText$a$status !== void 0 ? _statusText$a$status : 'Không rõ',
              patient_name: a.fullname
            };
          }));
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error('[getAppointmentsByPhone] error:', _context3.t0.message, _context3.t0.stack);
          return _context3.abrupt("return", []);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getAppointmentsByPhone(_x) {
    return _ref3.apply(this, arguments);
  };
}();

// ─── 4. TIỆN ÍCH ─────────────────────────────────────────────────────────────
var extractPhone = function extractPhone(message) {
  var match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
  return match ? match[1] : null;
};
var extractDate = function extractDate(message) {
  var today = (0, _moment["default"])();
  var msg = message.toLowerCase();
  if (msg.includes('hôm nay')) return today.format('YYYY-MM-DD');
  if (msg.includes('ngày mai') || msg.includes('hôm sau')) return today.clone().add(1, 'days').format('YYYY-MM-DD');
  if (msg.includes('ngày kia') || msg.includes('ngày mốt')) return today.clone().add(2, 'days').format('YYYY-MM-DD');
  var thuMap = {
    'hai': 1,
    '2': 1,
    'ba': 2,
    '3': 2,
    'tư': 3,
    '4': 3,
    'năm': 4,
    '5': 4,
    'sáu': 5,
    '6': 5,
    'bảy': 6,
    '7': 6
  };
  var thuMatch = msg.match(/thứ\s*(hai|ba|tư|năm|sáu|bảy|[2-7])/);
  if (thuMatch) {
    var offset = thuMap[thuMatch[1]];
    if (offset !== undefined) {
      var isNextWeek = msg.includes('tuần sau') || msg.includes('tuần tới');
      var targetDay = offset + 1;
      var target = today.clone().isoWeekday(targetDay);
      if (isNextWeek || target.isBefore(today, 'day')) target.add(1, 'weeks');
      return target.format('YYYY-MM-DD');
    }
  }
  var dateMatch = msg.match(/ngày\s*(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) || msg.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) || msg.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})(?:\s*năm\s*(\d{4}))?/);
  if (dateMatch) {
    var day = dateMatch[1].padStart(2, '0');
    var month = dateMatch[2].padStart(2, '0');
    var year = dateMatch[3] || today.year();
    var parsed = (0, _moment["default"])("".concat(year, "-").concat(month, "-").concat(day), 'YYYY-MM-DD', true);
    if (parsed.isValid()) return parsed.format('YYYY-MM-DD');
  }
  return null;
};

// ─── 5. QUICK REPLY MAP ───────────────────────────────────────────────────────
var QUICK_REPLY_ACTIONS = {
  'Tôi muốn đặt lịch khám': 'BOOK_APPOINTMENT',
  'Cho tôi xem bảng giá dịch vụ': 'ASK_PRICE',
  'Còn lịch trống không?': 'ASK_SCHEDULE',
  'Tra cứu lịch hẹn của tôi': 'CHECK_APPOINTMENT',
  'Giới thiệu các bác sĩ của phòng khám': 'ASK_DOCTOR',
  'Giờ làm việc của phòng khám?': 'ASK_WORKING_HOURS'
};

// ─── 6. XỬ LÝ INTENT ─────────────────────────────────────────────────────────
var handleStructuredIntent = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(intent, message, sessionData) {
    var phone, appointments, list, today, schedules, _list, _ref5, targetDate, _schedules, formattedDate, dayOfWeek, _list2, _yield$getClinicConte, doctorList, _yield$getClinicConte2, serviceList;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = intent;
          _context4.next = _context4.t0 === 'CHECK_APPOINTMENT' ? 3 : _context4.t0 === 'ASK_SCHEDULE' ? 13 : _context4.t0 === 'ASK_SCHEDULE_BY_DATE' ? 21 : _context4.t0 === 'ASK_DOCTOR' ? 33 : _context4.t0 === 'BOOK_APPOINTMENT' ? 40 : _context4.t0 === 'ASK_PRICE' ? 41 : _context4.t0 === 'ASK_WORKING_HOURS' ? 48 : 49;
          break;
        case 3:
          phone = extractPhone(message) || (sessionData === null || sessionData === void 0 ? void 0 : sessionData.phone);
          if (phone) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Để tra cứu lịch hẹn, bạn vui lòng cung cấp **số điện thoại** đã đặt lịch.',
            sessionUpdate: {
              waitingFor: 'phone_for_lookup'
            }
          });
        case 6:
          _context4.next = 8;
          return getAppointmentsByPhone(phone);
        case 8:
          appointments = _context4.sent;
          if (appointments.length) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", {
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
          return _context4.abrupt("return", {
            directReply: "T\xECm th\u1EA5y **".concat(appointments.length, " l\u1ECBch h\u1EB9n** v\u1EDBi s\u1ED1 **").concat(phone, "**:\n\n").concat(list, "\n\nB\u1EA1n c\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm kh\xF4ng?"),
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 13:
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context4.next = 16;
          return getAvailableSchedules(today);
        case 16:
          schedules = _context4.sent;
          if (schedules.length) {
            _context4.next = 19;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Hiện tại chưa có lịch trống hôm nay. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.'
          });
        case 19:
          _list = schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") (").concat(s.specialty, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context4.abrupt("return", {
            directReply: "**L\u1ECBch tr\u1ED1ng h\xF4m nay (".concat((0, _moment["default"])().format('DD/MM/YYYY'), "):**\n\n").concat(_list, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 21:
          _ref5 = sessionData._meta || {}, targetDate = _ref5.targetDate;
          if (targetDate) {
            _context4.next = 24;
            break;
          }
          return _context4.abrupt("return", null);
        case 24:
          _context4.next = 26;
          return getAvailableSchedules(targetDate);
        case 26:
          _schedules = _context4.sent;
          formattedDate = (0, _moment["default"])(targetDate).format('DD/MM/YYYY');
          dayOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][(0, _moment["default"])(targetDate).day()];
          if (_schedules.length) {
            _context4.next = 31;
            break;
          }
          return _context4.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") hi\u1EC7n kh\xF4ng c\xF3 l\u1ECBch tr\u1ED1ng.\n\nB\u1EA1n c\xF3 mu\u1ED1n ki\u1EC3m tra ng\xE0y kh\xE1c kh\xF4ng? Ho\u1EB7c g\u1ECDi hotline **(028) 1234 5678**.")
          });
        case 31:
          _list2 = _schedules.map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") (").concat(s.specialty, ") l\xFAc **").concat(s.time, "**");
          }).join('\n');
          return _context4.abrupt("return", {
            directReply: "Ng\xE0y **".concat(formattedDate, "** (").concat(dayOfWeek, ") c\xF3 c\xE1c b\xE1c s\u0129 sau:\n\n").concat(_list2, "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 33:
          _context4.next = 35;
          return getClinicContext();
        case 35:
          _yield$getClinicConte = _context4.sent;
          doctorList = _yield$getClinicConte.doctorList;
          if (doctorList.length) {
            _context4.next = 39;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Hiện tại chưa có thông tin bác sĩ. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 39:
          return _context4.abrupt("return", {
            directReply: "**\u0110\u1ED9i ng\u0169 b\xE1c s\u0129 Toothhive:**\n\n".concat(doctorList.join('\n'), "\n\nNh\u1EA5n v\xE0o t\xEAn b\xE1c s\u0129 \u0111\u1EC3 xem chi ti\u1EBFt v\xE0 \u0111\u1EB7t l\u1ECBch.")
          });
        case 40:
          return _context4.abrupt("return", {
            directReply: 'Bạn có thể đặt lịch khám trực tuyến: [**Đặt lịch ngay**](/dat-lich)\n\nHoặc gọi hotline **(028) 1234 5678** để được hỗ trợ trực tiếp.'
          });
        case 41:
          _context4.next = 43;
          return getClinicContext();
        case 43:
          _yield$getClinicConte2 = _context4.sent;
          serviceList = _yield$getClinicConte2.serviceList;
          if (serviceList.length) {
            _context4.next = 47;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Bảng giá hiện đang cập nhật. Vui lòng gọi **(028) 1234 5678**.'
          });
        case 47:
          return _context4.abrupt("return", {
            directReply: "**B\u1EA3ng gi\xE1 d\u1ECBch v\u1EE5 Toothhive:**\n\n".concat(serviceList.slice(0, 25).join('\n'), "\n\n_Gi\xE1 c\xF3 th\u1EC3 thay \u0111\u1ED5i. Vui l\xF2ng g\u1ECDi **(028) 1234 5678** \u0111\u1EC3 x\xE1c nh\u1EADn._")
          });
        case 48:
          return _context4.abrupt("return", {
            directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\nBạn có muốn đặt lịch không? [Đặt lịch tại đây](/dat-lich)'
          });
        case 49:
          return _context4.abrupt("return", null);
        case 50:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function handleStructuredIntent(_x2, _x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// ─── 7. HÀM CHÍNH askGemini ───────────────────────────────────────────────────
var askGemini = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(message) {
    var _sessionData;
    var conversationHistory,
      sessionData,
      phone,
      quickAction,
      result,
      isAskingSchedule,
      targetDate,
      _result,
      _yield$getClinicConte3,
      categoryList,
      serviceList,
      doctorList,
      today,
      todaySchedules,
      scheduleContext,
      nowVN,
      todayStr,
      dayOfWeekStr,
      timeStr,
      systemPrompt,
      recentHistory,
      contents,
      _response$data$candid,
      _response$data$candid2,
      _response$data$candid3,
      _response$data$candid4,
      _response$data$candid5,
      response,
      text,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          conversationHistory = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : [];
          sessionData = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
          if (!(((_sessionData = sessionData) === null || _sessionData === void 0 ? void 0 : _sessionData.waitingFor) === 'phone_for_lookup')) {
            _context5.next = 7;
            break;
          }
          phone = extractPhone(message);
          if (!phone) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", handleStructuredIntent('CHECK_APPOINTMENT', message, _objectSpread(_objectSpread({}, sessionData), {}, {
            phone: phone
          })));
        case 6:
          sessionData = _objectSpread(_objectSpread({}, sessionData), {}, {
            waitingFor: null
          });
        case 7:
          // 7b. Quick Reply exact match
          quickAction = QUICK_REPLY_ACTIONS[message.trim()];
          if (!quickAction) {
            _context5.next = 14;
            break;
          }
          _context5.next = 11;
          return handleStructuredIntent(quickAction, message, sessionData);
        case 11:
          result = _context5.sent;
          if (!result) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", result);
        case 14:
          // 7c. Câu hỏi tìm lịch theo ngày cụ thể
          isAskingSchedule = /lịch|rảnh|trống|khám|bác sĩ nào|bác sĩ có thể|đặt lịch/i.test(message) && /ngày mai|ngày kia|hôm nay|thứ\s*([2-7]|hai|ba|tư|năm|sáu|bảy)|ngày\s*\d|\/\d|\d\s*tháng/i.test(message);
          if (!isAskingSchedule) {
            _context5.next = 23;
            break;
          }
          targetDate = extractDate(message);
          if (!targetDate) {
            _context5.next = 23;
            break;
          }
          _context5.next = 20;
          return handleStructuredIntent('ASK_SCHEDULE_BY_DATE', message, _objectSpread(_objectSpread({}, sessionData), {}, {
            _meta: {
              targetDate: targetDate
            }
          }));
        case 20:
          _result = _context5.sent;
          if (!_result) {
            _context5.next = 23;
            break;
          }
          return _context5.abrupt("return", _result);
        case 23:
          _context5.next = 25;
          return getClinicContext();
        case 25:
          _yield$getClinicConte3 = _context5.sent;
          categoryList = _yield$getClinicConte3.categoryList;
          serviceList = _yield$getClinicConte3.serviceList;
          doctorList = _yield$getClinicConte3.doctorList;
          today = (0, _moment["default"])().format('YYYY-MM-DD');
          _context5.next = 32;
          return getAvailableSchedules(today);
        case 32:
          todaySchedules = _context5.sent;
          scheduleContext = todaySchedules.length > 0 ? todaySchedules.slice(0, 10).map(function (s) {
            return "- [".concat(s.doctor, "](/detailDoctor/").concat(s.doctor_id, ") (").concat(s.specialty, "): ").concat(s.date, " l\xFAc ").concat(s.time);
          }).join('\n') : 'Chưa có lịch trống hôm nay.';
          nowVN = (0, _moment["default"])().utcOffset('+07:00');
          todayStr = nowVN.format('DD/MM/YYYY');
          dayOfWeekStr = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][nowVN.day()];
          timeStr = nowVN.format('HH:mm');
          systemPrompt = "B\u1EA1n l\xE0 **Linh** \u2014 Ti\u1EBFp T\xE2n c\u1EE7a ph\xF2ng kh\xE1m nha khoa Toothhive.\n\nVAI TR\xD2: Nh\xE2n vi\xEAn ti\u1EBFp t\xE2n (kh\xF4ng ph\u1EA3i nha s\u0129) \u2014 h\u1ED7 tr\u1EE3 h\xE0nh ch\xEDnh, t\u01B0 v\u1EA5n d\u1ECBch v\u1EE5, h\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t l\u1ECBch.\n\nTH\u1EDCI GIAN HI\u1EC6N T\u1EA0I (m\xFAi gi\u1EDD Vi\u1EC7t Nam GMT+7):\n- H\xF4m nay: ".concat(dayOfWeekStr, ", ng\xE0y ").concat(todayStr, "\n- Gi\u1EDD hi\u1EC7n t\u1EA1i: ").concat(timeStr, "\n- D\xF9ng th\xF4ng tin n\xE0y khi tr\u1EA3 l\u1EDDi c\xE2u h\u1ECFi v\u1EC1 ng\xE0y th\xE1ng.\n\nQUY T\u1EAEC:\n- Ti\u1EBFng Vi\u1EC7t, l\u1ECBch s\u1EF1, ng\u1EAFn g\u1ECDn, kh\xF4ng d\xF9ng emoji\n- Kh\xF4ng ch\u1EA9n \u0111o\xE1n b\u1EC7nh, kh\xF4ng k\xEA \u0111\u01A1n\n- Khi \u0111\u1EC1 c\u1EADp \u0111\u1EB7t l\u1ECBch, k\xE8m link: [\u0110\u1EB7t l\u1ECBch t\u1EA1i \u0111\xE2y](/dat-lich)\n- Khi li\u1EC7t k\xEA b\xE1c s\u0129, d\xF9ng link: [BS. T\xEAn](/detailDoctor/ID)\n\nTH\xD4NG TIN PH\xD2NG KH\xC1M:\n- T\xEAn: Toothhive Dental Clinic | Hotline: (028) 1234 5678\n- Gi\u1EDD l\xE0m vi\u1EC7c: Th\u1EE9 2 \u2013 Th\u1EE9 7, 8:00 \u2013 17:00 | Ch\u1EE7 nh\u1EADt ngh\u1EC9\n\nCHUY\xCAN KHOA:\n").concat(categoryList.join('\n') || 'Đang cập nhật.', "\n\nB\u1EA2NG GI\xC1:\n").concat(serviceList.slice(0, 20).join('\n') || 'Đang cập nhật.', "\n\n\u0110\u1ED8I NG\u0168 B\xC1C S\u0128:\n").concat(doctorList.join('\n') || 'Đang cập nhật.', "\n\nL\u1ECACH TR\u1ED0NG H\xD4M NAY (").concat(todayStr, "):\n").concat(scheduleContext);
          recentHistory = conversationHistory.slice(-6);
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
          _context5.prev = 41;
          _context5.next = 44;
          return _axios["default"].post(GEMINI_URL, {
            contents: contents
          }, {
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': process.env.GEMINI_API_KEY
            },
            timeout: 30000
          });
        case 44:
          response = _context5.sent;
          text = ((_response$data$candid = response.data.candidates) === null || _response$data$candid === void 0 ? void 0 : (_response$data$candid2 = _response$data$candid[0]) === null || _response$data$candid2 === void 0 ? void 0 : (_response$data$candid3 = _response$data$candid2.content) === null || _response$data$candid3 === void 0 ? void 0 : (_response$data$candid4 = _response$data$candid3.parts) === null || _response$data$candid4 === void 0 ? void 0 : (_response$data$candid5 = _response$data$candid4[0]) === null || _response$data$candid5 === void 0 ? void 0 : _response$data$candid5.text) || 'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678**.';
          return _context5.abrupt("return", {
            text: text,
            action: null
          });
        case 49:
          _context5.prev = 49;
          _context5.t0 = _context5["catch"](41);
          throw _context5.t0;
        case 52:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[41, 49]]);
  }));
  return function askGemini(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  askGemini: askGemini
};