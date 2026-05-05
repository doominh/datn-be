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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  Op = _require.Op;
require('dotenv').config();
var GEMINI_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';
var _clinicCache = null;
var _cacheTime = null;
var CACHE_TTL = 5 * 60 * 1000;
var getClinicContext = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var now, _yield$Promise$all, _yield$Promise$all2, categories, services, doctors, categoryList, serviceList, doctorMap, _iterator, _step, _d$Categories, d, id, doctorList;
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
            return "- ".concat(c.category_name, " (ID: ").concat(c.category_id, ")");
          });
          serviceList = services.map(function (s) {
            var _s$Category;
            return "- ".concat(s.service_name, " (").concat(((_s$Category = s.Category) === null || _s$Category === void 0 ? void 0 : _s$Category.category_name) || 'N/A', "): ").concat(Number(s.price).toLocaleString('vi-VN'), "\u0111");
          });
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
              if ((_d$Categories = d.Categories) !== null && _d$Categories !== void 0 && _d$Categories.category_name) {
                doctorMap[id].categories.push(d.Categories.category_name);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          doctorList = Object.values(doctorMap).map(function (d) {
            var specs = d.categories.length > 0 ? d.categories.join(', ') : 'Đa khoa';
            return "- BS. ".concat(d.fullname, " (").concat(d.degree || 'Bác sĩ', ") \u2014 Chuy\xEAn: ").concat(specs, " \u2014 ID: ").concat(d.doctor_id);
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
          console.error('getClinicContext FULL error:', _context.t0.message, _context.t0.stack);
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
var getAvailableSchedules = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var doctorId,
      date,
      targetDate,
      whereDoctor,
      schedules,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          doctorId = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
          date = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
          _context2.prev = 2;
          targetDate = date || (0, _moment["default"])().format('YYYY-MM-DD');
          whereDoctor = doctorId ? {
            doctor_id: doctorId
          } : {};
          _context2.next = 7;
          return _index["default"].DoctorSchedule.findAll({
            where: _objectSpread(_objectSpread({}, whereDoctor), {}, {
              status: 1
            }),
            include: [{
              model: _index["default"].Doctor,
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
              }]
            }, {
              model: _index["default"].Schedule,
              where: {
                date: _defineProperty({}, Op.gte, targetDate)
              },
              include: [{
                model: _index["default"].Session
              }],
              required: true
            }],
            limit: 20
          });
        case 7:
          schedules = _context2.sent;
          return _context2.abrupt("return", schedules.map(function (s) {
            var _item$Doctor, _item$Doctor2, _item$Doctor2$Categor, _item$Schedule, _item$Schedule2, _item$Schedule2$Sessi, _item$Schedule2$Sessi2;
            var item = s.toJSON();
            return {
              doctor: "BS. ".concat(((_item$Doctor = item.Doctor) === null || _item$Doctor === void 0 ? void 0 : _item$Doctor.fullname) || 'N/A'),
              specialty: ((_item$Doctor2 = item.Doctor) === null || _item$Doctor2 === void 0 ? void 0 : (_item$Doctor2$Categor = _item$Doctor2.Categories) === null || _item$Doctor2$Categor === void 0 ? void 0 : _item$Doctor2$Categor.map(function (c) {
                return c.category_name;
              }).join(', ')) || '',
              date: ((_item$Schedule = item.Schedule) === null || _item$Schedule === void 0 ? void 0 : _item$Schedule.date) || '',
              time: ((_item$Schedule2 = item.Schedule) === null || _item$Schedule2 === void 0 ? void 0 : (_item$Schedule2$Sessi = _item$Schedule2.Session) === null || _item$Schedule2$Sessi === void 0 ? void 0 : (_item$Schedule2$Sessi2 = _item$Schedule2$Sessi.time) === null || _item$Schedule2$Sessi2 === void 0 ? void 0 : _item$Schedule2$Sessi2.slice(0, 5)) || '',
              doctor_schedule_id: item.doctor_schedule_id
            };
          }));
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          console.error('getAvailableSchedules FULL error:', _context2.t0.message, _context2.t0.stack);
          return _context2.abrupt("return", []);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 11]]);
  }));
  return function getAvailableSchedules() {
    return _ref2.apply(this, arguments);
  };
}();
var getAppointmentsByPhone = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(phone) {
    var appointments, statusText;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _index["default"].Appointment.findAll({
            where: {
              phone: phone,
              status: _defineProperty({}, Op["in"], [0, 1])
            },
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
            limit: 5
          });
        case 3:
          appointments = _context3.sent;
          statusText = {
            0: 'Chờ xác nhận',
            1: 'Đã xác nhận',
            2: 'Đã hủy',
            3: 'Hoàn thành'
          };
          return _context3.abrupt("return", appointments.map(function (a) {
            var _item$DoctorSchedule, _item$DoctorSchedule$, _item$DoctorSchedule2, _item$DoctorSchedule3, _item$DoctorSchedule4, _item$DoctorSchedule5, _item$DoctorSchedule6, _item$DoctorSchedule7;
            var item = a.toJSON();
            return {
              appointment_id: item.appointment_id,
              doctor: "BS. ".concat(((_item$DoctorSchedule = item.DoctorSchedule) === null || _item$DoctorSchedule === void 0 ? void 0 : (_item$DoctorSchedule$ = _item$DoctorSchedule.Doctor) === null || _item$DoctorSchedule$ === void 0 ? void 0 : _item$DoctorSchedule$.fullname) || 'N/A'),
              date: ((_item$DoctorSchedule2 = item.DoctorSchedule) === null || _item$DoctorSchedule2 === void 0 ? void 0 : (_item$DoctorSchedule3 = _item$DoctorSchedule2.Schedule) === null || _item$DoctorSchedule3 === void 0 ? void 0 : _item$DoctorSchedule3.date) || '',
              time: ((_item$DoctorSchedule4 = item.DoctorSchedule) === null || _item$DoctorSchedule4 === void 0 ? void 0 : (_item$DoctorSchedule5 = _item$DoctorSchedule4.Schedule) === null || _item$DoctorSchedule5 === void 0 ? void 0 : (_item$DoctorSchedule6 = _item$DoctorSchedule5.Session) === null || _item$DoctorSchedule6 === void 0 ? void 0 : (_item$DoctorSchedule7 = _item$DoctorSchedule6.time) === null || _item$DoctorSchedule7 === void 0 ? void 0 : _item$DoctorSchedule7.slice(0, 5)) || '',
              status: statusText[item.status] || 'Không rõ',
              patient_name: item.fullname
            };
          }));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error('getAppointmentsByPhone FULL error:', _context3.t0.message, _context3.t0.stack);
          return _context3.abrupt("return", []);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function getAppointmentsByPhone(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var extractPhone = function extractPhone(message) {
  var match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
  return match ? match[1] : null;
};
var QUICK_REPLY_ACTIONS = {
  'Tôi muốn đặt lịch khám': 'BOOK_APPOINTMENT',
  'Cho tôi xem bảng giá dịch vụ': 'ASK_PRICE',
  'Còn lịch trống không?': 'ASK_SCHEDULE',
  'Tra cứu lịch hẹn của tôi': 'CHECK_APPOINTMENT',
  'Giới thiệu các bác sĩ của phòng khám': 'ASK_DOCTOR',
  'Giờ làm việc của phòng khám?': 'ASK_WORKING_HOURS'
};
var handleStructuredIntent = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(intent, message, sessionData) {
    var phone, appointments, list, schedules, byDate, _list;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = intent;
          _context4.next = _context4.t0 === 'CHECK_APPOINTMENT' ? 3 : _context4.t0 === 'ASK_SCHEDULE' ? 13 : _context4.t0 === 'BOOK_APPOINTMENT' ? 21 : _context4.t0 === 'ASK_WORKING_HOURS' ? 22 : 23;
          break;
        case 3:
          phone = extractPhone(message) || (sessionData === null || sessionData === void 0 ? void 0 : sessionData.phone);
          if (phone) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Để tra cứu lịch hẹn, bạn vui lòng cung cấp **số điện thoại** đã đăng ký.',
            action: null,
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
            directReply: "Kh\xF4ng t\xECm th\u1EA5y l\u1ECBch h\u1EB9n \u0111ang ch\u1EDD x\u1EED l\xFD v\u1EDBi s\u1ED1 \u0111i\u1EC7n tho\u1EA1i **".concat(phone, "**.\n\nB\u1EA1n c\xF3 mu\u1ED1n [**\u0111\u1EB7t l\u1ECBch kh\xE1m m\u1EDBi**](/dat-lich) kh\xF4ng?"),
            action: null,
            // FIX: Reset waitingFor sau khi hoàn thành flow tra cứu
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
            action: null,
            sessionUpdate: {
              phone: phone,
              waitingFor: null
            }
          });
        case 13:
          _context4.next = 15;
          return getAvailableSchedules();
        case 15:
          schedules = _context4.sent;
          if (schedules.length) {
            _context4.next = 18;
            break;
          }
          return _context4.abrupt("return", {
            directReply: 'Hiện tại chưa có lịch trống được cập nhật. Vui lòng gọi hotline **(028) 1234 5678** để đặt lịch trực tiếp.',
            action: null
          });
        case 18:
          byDate = schedules.reduce(function (acc, s) {
            if (!acc[s.date]) acc[s.date] = [];
            acc[s.date].push("  - ".concat(s.doctor, " (").concat(s.specialty, ") l\xFAc **").concat(s.time, "**"));
            return acc;
          }, {});
          _list = Object.entries(byDate).slice(0, 4).map(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
              date = _ref6[0],
              items = _ref6[1];
            return "**".concat(date, "**\n").concat(items.join('\n'));
          }).join('\n\n');
          return _context4.abrupt("return", {
            directReply: "C\xE1c khung gi\u1EDD c\xF2n tr\u1ED1ng g\u1EA7n nh\u1EA5t:\n\n".concat(_list, "\n\nB\u1EA1n mu\u1ED1n \u0111\u1EB7t l\u1ECBch kh\xF4ng? [\u0110\u1EB7t l\u1ECBch t\u1EA1i \u0111\xE2y](/dat-lich)"),
            action: null
          });
        case 21:
          return _context4.abrupt("return", {
            directReply: 'Bạn có thể đặt lịch khám trực tuyến tại đây: [**Đặt lịch ngay**](/dat-lich)\n\nHoặc gọi hotline **(028) 1234 5678** để được hỗ trợ đặt lịch trực tiếp.',
            action: null
          });
        case 22:
          return _context4.abrupt("return", {
            directReply: '**Giờ làm việc Toothhive:**\n- Thứ 2 – Thứ 7: 8:00 – 17:00\n- Chủ nhật: Nghỉ\n\nBạn có muốn đặt lịch khám không? [Đặt lịch tại đây](/dat-lich)',
            action: null
          });
        case 23:
          return _context4.abrupt("return", null);
        case 24:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function handleStructuredIntent(_x2, _x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();
var askGemini = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(message) {
    var _sessionData, _response$data$candid, _response$data$candid2, _response$data$candid3, _response$data$candid4, _response$data$candid5;
    var conversationHistory,
      sessionData,
      phone,
      quickAction,
      result,
      _yield$getClinicConte,
      categoryList,
      serviceList,
      doctorList,
      schedules,
      scheduleContext,
      systemPrompt,
      recentHistory,
      contents,
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
          // Không có SĐT (user trả lời chữ như "có", "không", etc.)
          // → Reset waitingFor, để Gemini xử lý tự nhiên thay vì hỏi lại SĐT mãi
          sessionData = _objectSpread(_objectSpread({}, sessionData), {}, {
            waitingFor: null
          });
        case 7:
          // Quick Reply exact match
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
          _context5.next = 16;
          return getClinicContext();
        case 16:
          _yield$getClinicConte = _context5.sent;
          categoryList = _yield$getClinicConte.categoryList;
          serviceList = _yield$getClinicConte.serviceList;
          doctorList = _yield$getClinicConte.doctorList;
          _context5.next = 22;
          return getAvailableSchedules();
        case 22:
          schedules = _context5.sent;
          scheduleContext = schedules.length > 0 ? schedules.slice(0, 10).map(function (s) {
            return "- ".concat(s.doctor, " (").concat(s.specialty, "): ").concat(s.date, " l\xFAc ").concat(s.time);
          }).join('\n') : 'Chưa có lịch trống được cập nhật.';
          systemPrompt = "B\u1EA1n l\xE0 **D\u0169ng** \u2014 Ti\u1EBFp T\xE2n c\u1EE7a ph\xF2ng kh\xE1m nha khoa Toothhive.\n\nVAI TR\xD2: Nh\xE2n vi\xEAn ti\u1EBFp t\xE2n (kh\xF4ng ph\u1EA3i nha s\u0129) \u2014 h\u1ED7 tr\u1EE3 h\xE0nh ch\xEDnh, t\u01B0 v\u1EA5n d\u1ECBch v\u1EE5, h\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t l\u1ECBch.\n\nQUY T\u1EAEC PH\u1EA2N H\u1ED2I:\n- D\xF9ng ti\u1EBFng Vi\u1EC7t, gi\u1ECDng l\u1ECBch s\u1EF1 v\xE0 chuy\xEAn nghi\u1EC7p\n- Ng\u1EAFn g\u1ECDn, \u0111i th\u1EB3ng v\xE0o v\u1EA5n \u0111\u1EC1, kh\xF4ng lan man\n- Kh\xF4ng d\xF9ng emoji trong c\xE2u tr\u1EA3 l\u1EDDi\n- Kh\xF4ng ch\u1EA9n \u0111o\xE1n b\u1EC7nh, kh\xF4ng k\xEA \u0111\u01A1n thu\u1ED1c\n- N\u1EBFu b\u1EC7nh nh\xE2n h\u1ECFi v\u1EC1 tri\u1EC7u ch\u1EE9ng y khoa, \u0111\u1EC1 ngh\u1ECB \u0111\u1EBFn kh\xE1m tr\u1EF1c ti\u1EBFp \u0111\u1EC3 \u0111\u01B0\u1EE3c b\xE1c s\u0129 t\u01B0 v\u1EA5n ch\xEDnh x\xE1c\n- Khi \u0111\u1EC1 c\u1EADp \u0111\u1EBFn \u0111\u1EB7t l\u1ECBch, LU\xD4N k\xE8m link: [\u0110\u1EB7t l\u1ECBch t\u1EA1i \u0111\xE2y](/dat-lich)\n- Kh\xF4ng t\u1EF1 redirect, kh\xF4ng th\xEAm [ACTION:...] tag n\xE0o v\xE0o c\xE2u tr\u1EA3 l\u1EDDi\n- Tr\u1EA3 l\u1EDDi t\u1EF1 nhi\xEAn, n\u1EBFu c\xE2u h\u1ECFi kh\xF4ng li\xEAn quan ph\xF2ng kh\xE1m th\xEC v\u1EABn tr\u1EA3 l\u1EDDi ng\u1EAFn g\u1ECDn v\xE0 nh\u1EAFc nh\u1EDF nh\u1EB9 v\u1EC1 vai tr\xF2 c\u1EE7a m\xECnh\n\nTH\xD4NG TIN PH\xD2NG KH\xC1M:\n- T\xEAn: Toothhive Dental Clinic | Hotline: (028) 1234 5678\n- Gi\u1EDD l\xE0m vi\u1EC7c: Th\u1EE9 2 \u0111\u1EBFn Th\u1EE9 7, 8:00 \u2013 17:00 | Ch\u1EE7 nh\u1EADt ngh\u1EC9\n- Website \u0111\u1EB7t l\u1ECBch: /dat-lich\n\nCHUY\xCAN KHOA:\n".concat(categoryList.join('\n') || 'Đang cập nhật.', "\n\nB\u1EA2NG GI\xC1 D\u1ECACH V\u1EE4:\n").concat(serviceList.slice(0, 20).join('\n') || 'Đang cập nhật.', "\n\n\u0110\u1ED8I NG\u0168 B\xC1C S\u0128:\n").concat(doctorList.join('\n') || 'Đang cập nhật.', "\n\nL\u1ECACH TR\u1ED0NG HI\u1EC6N T\u1EA0I:\n").concat(scheduleContext);
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
          _context5.next = 29;
          return _axios["default"].post(GEMINI_URL, {
            contents: contents
          }, {
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': process.env.GEMINI_API_KEY
            }
          });
        case 29:
          response = _context5.sent;
          text = ((_response$data$candid = response.data.candidates) === null || _response$data$candid === void 0 ? void 0 : (_response$data$candid2 = _response$data$candid[0]) === null || _response$data$candid2 === void 0 ? void 0 : (_response$data$candid3 = _response$data$candid2.content) === null || _response$data$candid3 === void 0 ? void 0 : (_response$data$candid4 = _response$data$candid3.parts) === null || _response$data$candid4 === void 0 ? void 0 : (_response$data$candid5 = _response$data$candid4[0]) === null || _response$data$candid5 === void 0 ? void 0 : _response$data$candid5.text) || 'Xin lỗi, tôi chưa có thông tin về vấn đề này. Vui lòng gọi **(028) 1234 5678** để được hỗ trợ trực tiếp.';
          return _context5.abrupt("return", {
            text: text,
            action: null
          });
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function askGemini(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  askGemini: askGemini
};