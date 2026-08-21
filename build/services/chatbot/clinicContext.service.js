"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClinicContext = exports.getAvailableSchedules = void 0;
var _index = _interopRequireDefault(require("../../models/index"));
var _moment = _interopRequireDefault(require("moment"));
var _schedule = _interopRequireDefault(require("../../services/schedule"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var _clinicCache = null;
var _cacheTime = null;
var CACHE_TTL = 5 * 60 * 1000;
var getClinicContext = exports.getClinicContext = /*#__PURE__*/function () {
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
            var specs = d.categories.join(', ');
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
var getAvailableSchedules = exports.getAvailableSchedules = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var date,
      targetDate,
      activeDoctors,
      doctorMap,
      _iterator2,
      _step2,
      d,
      id,
      results,
      _i,
      _Object$values,
      _res$data,
      doc,
      res,
      _iterator3,
      _step3,
      _s$Session,
      _s$Session$time,
      s,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          date = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
          targetDate = date || (0, _moment["default"])().format('YYYY-MM-DD');
          _context2.prev = 2;
          _context2.next = 5;
          return _index["default"].Doctor.findAll({
            where: {
              is_activated: true,
              is_blocked: false
            },
            attributes: ['doctor_id', 'fullname'],
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
        case 5:
          activeDoctors = _context2.sent;
          if (activeDoctors.length) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", []);
        case 8:
          // Gộp categories theo doctor_id (raw:true trả flat rows nên phải gộp tay)
          doctorMap = {};
          _iterator2 = _createForOfIteratorHelper(activeDoctors);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              d = _step2.value;
              id = d.doctor_id;
              if (!doctorMap[id]) {
                doctorMap[id] = {
                  doctor_id: id,
                  fullname: d.fullname,
                  categories: []
                };
              }
              if (d['Categories.category_name']) {
                doctorMap[id].categories.push(d['Categories.category_name']);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          results = [];
          _i = 0, _Object$values = Object.values(doctorMap);
        case 13:
          if (!(_i < _Object$values.length)) {
            _context2.next = 22;
            break;
          }
          doc = _Object$values[_i];
          _context2.next = 17;
          return _schedule["default"].getDoctorSchedulesByDate({
            doctor_id: doc.doctor_id,
            date: targetDate
          });
        case 17:
          res = _context2.sent;
          if (res.errCode === 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.length) {
            _iterator3 = _createForOfIteratorHelper(res.data);
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                s = _step3.value;
                results.push({
                  doctor_id: doc.doctor_id,
                  doctor: "BS. ".concat(doc.fullname),
                  specialty: doc.categories.join(', '),
                  date: s.date,
                  time: ((_s$Session = s.Session) === null || _s$Session === void 0 ? void 0 : (_s$Session$time = _s$Session.time) === null || _s$Session$time === void 0 ? void 0 : _s$Session$time.slice(0, 5)) || ''
                });
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        case 19:
          _i++;
          _context2.next = 13;
          break;
        case 22:
          return _context2.abrupt("return", results);
        case 25:
          _context2.prev = 25;
          _context2.t0 = _context2["catch"](2);
          console.error('[getAvailableSchedules] error:', _context2.t0.message, _context2.t0.stack);
          return _context2.abrupt("return", []);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 25]]);
  }));
  return function getAvailableSchedules() {
    return _ref2.apply(this, arguments);
  };
}();