"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _axios = _interopRequireDefault(require("axios"));
var _index = _interopRequireDefault(require("../models/index"));
var _mail = _interopRequireDefault(require("./mail"));
var _util = _interopRequireDefault(require("../util"));
var _patient = _interopRequireDefault(require("./patient"));
var _employee = _interopRequireDefault(require("./employee"));
var _doctor = _interopRequireDefault(require("./doctor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var saltRounds = 10;

//TẠO ACCESS TOKEN
var createAccessToken = function createAccessToken(user_id) {
  var accessToken = _jsonwebtoken["default"].sign({
    user_id: user_id
  }, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN
  });
  return accessToken;
};

//TẠO REFRESH TOKEN
var createRefreshToken = function createRefreshToken(user_id) {
  var refreshToken = _jsonwebtoken["default"].sign({
    user_id: user_id
  }, process.env.JWT_REFRESH_TOKEN, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN
  });
  return refreshToken;
};

//LẤY NGƯỜI DÙNG THEO ID
var getUserByID = function getUserByID(user_id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var prefix, user;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            prefix = user_id.slice(0, 2);
            _context.t0 = prefix;
            _context.next = _context.t0 === 'bn' ? 5 : _context.t0 === 'qt' ? 9 : _context.t0 === 'lt' ? 9 : _context.t0 === 'pt' ? 9 : _context.t0 === 'bs' ? 13 : 17;
            break;
          case 5:
            _context.next = 7;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: user_id
              }
            });
          case 7:
            user = _context.sent;
            return _context.abrupt("break", 18);
          case 9:
            _context.next = 11;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: user_id
              }
            });
          case 11:
            user = _context.sent;
            return _context.abrupt("break", 18);
          case 13:
            _context.next = 15;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: user_id
              }
            });
          case 15:
            user = _context.sent;
            return _context.abrupt("break", 18);
          case 17:
            return _context.abrupt("break", 18);
          case 18:
            resolve(user);
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t1 = _context["catch"](0);
            reject(_context.t1);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 21]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//** API **//

//XÁC MINH EMAIL TÀI KHOẢN
var verify = function verify(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var result, user, _result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(!data.role || !data.email || !data.token)) {
              _context2.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context2.next = 49;
            break;
          case 5:
            _context2.next = 7;
            return _bcrypt["default"].compare(data.email, data.token);
          case 7:
            result = _context2.sent;
            if (!result) {
              _context2.next = 48;
              break;
            }
            _context2.t0 = data.role;
            _context2.next = _context2.t0 === '1' ? 12 : _context2.t0 === '2' ? 16 : _context2.t0 === '3' ? 16 : _context2.t0 === '5' ? 16 : _context2.t0 === '4' ? 20 : 24;
            break;
          case 12:
            _context2.next = 14;
            return _patient["default"].getByEmail(data.email);
          case 14:
            user = _context2.sent;
            return _context2.abrupt("break", 25);
          case 16:
            _context2.next = 18;
            return _employee["default"].getByEmail(data.email);
          case 18:
            user = _context2.sent;
            return _context2.abrupt("break", 25);
          case 20:
            _context2.next = 22;
            return _doctor["default"].getByEmail(data.email);
          case 22:
            user = _context2.sent;
            return _context2.abrupt("break", 25);
          case 24:
            return _context2.abrupt("break", 25);
          case 25:
            if (user.is_activated) {
              _context2.next = 45;
              break;
            }
            _context2.t1 = data.role;
            _context2.next = _context2.t1 === '1' ? 29 : _context2.t1 === '2' ? 33 : _context2.t1 === '3' ? 33 : _context2.t1 === '5' ? 33 : _context2.t1 === '4' ? 37 : 41;
            break;
          case 29:
            _context2.next = 31;
            return _index["default"].Patient.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 31:
            _result = _context2.sent;
            return _context2.abrupt("break", 42);
          case 33:
            _context2.next = 35;
            return _index["default"].Employee.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 35:
            _result = _context2.sent;
            return _context2.abrupt("break", 42);
          case 37:
            _context2.next = 39;
            return _index["default"].Doctor.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 39:
            _result = _context2.sent;
            return _context2.abrupt("break", 42);
          case 41:
            return _context2.abrupt("break", 42);
          case 42:
            if (_result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful',
                role: data.role
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context2.next = 46;
            break;
          case 45:
            resolve({
              errCode: 2,
              message: 'Already verified'
            });
          case 46:
            _context2.next = 49;
            break;
          case 48:
            resolve(false);
          case 49:
            _context2.next = 54;
            break;
          case 51:
            _context2.prev = 51;
            _context2.t2 = _context2["catch"](0);
            reject(_context2.t2);
          case 54:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 51]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//ĐĂNG KÝ CHO BỆNH NHÂN
var register = function register(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(!data.fullname || !data.dob || data.gender === undefined || !data.phone || !data.email || !data.password)) {
              _context3.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context3.next = 9;
            break;
          case 5:
            _context3.next = 7;
            return _patient["default"].createPatient(data);
          case 7:
            result = _context3.sent;
            resolve(result);
          case 9:
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//ĐĂNG NHẬP CHO BỆNH NHÂN
var loginClient = function loginClient(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var patient, isValidPassword, accessToken, _refreshToken, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (!(!data.email || !data.password)) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context4.next = 33;
            break;
          case 5:
            _context4.next = 7;
            return _patient["default"].getByEmail(data.email);
          case 7:
            patient = _context4.sent;
            if (!patient) {
              _context4.next = 32;
              break;
            }
            if (patient.is_blocked) {
              _context4.next = 29;
              break;
            }
            if (!patient.is_activated) {
              _context4.next = 26;
              break;
            }
            _context4.next = 13;
            return _bcrypt["default"].compare(data.password, patient.password);
          case 13:
            isValidPassword = _context4.sent;
            if (!isValidPassword) {
              _context4.next = 23;
              break;
            }
            accessToken = createAccessToken(patient.patient_id);
            _refreshToken = createRefreshToken(patient.patient_id);
            _context4.next = 19;
            return _index["default"].Patient.update({
              refresh_token: _refreshToken
            }, {
              where: {
                patient_id: patient.patient_id
              }
            });
          case 19:
            result = _context4.sent;
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful',
                data: {
                  patient_id: patient.patient_id,
                  fullname: patient.fullname,
                  access_token: accessToken,
                  refresh_token: _refreshToken
                }
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context4.next = 24;
            break;
          case 23:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid login info'
            });
          case 24:
            _context4.next = 27;
            break;
          case 26:
            resolve({
              errCode: 4,
              message: 'Not activated yet'
            });
          case 27:
            _context4.next = 30;
            break;
          case 29:
            resolve({
              errCode: 8,
              message: 'This account is being blocked'
            });
          case 30:
            _context4.next = 33;
            break;
          case 32:
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Invalid login info'
            });
          case 33:
            _context4.next = 38;
            break;
          case 35:
            _context4.prev = 35;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 38:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 35]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//ĐĂNG NHẬP TRANG QUẢN TRỊ
var loginAdmin = function loginAdmin(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var user, user_id, prefix, isValidPassword, accessToken, _refreshToken2, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(!data.role || !data.email || !data.password)) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context5.next = 66;
            break;
          case 5:
            _context5.t0 = data.role;
            _context5.next = _context5.t0 === 2 ? 8 : _context5.t0 === 3 ? 8 : _context5.t0 === 5 ? 8 : _context5.t0 === 4 ? 13 : 18;
            break;
          case 8:
            _context5.next = 10;
            return _employee["default"].getByEmail(data.email);
          case 10:
            user = _context5.sent;
            if (user) user_id = user.employee_id;
            return _context5.abrupt("break", 19);
          case 13:
            _context5.next = 15;
            return _doctor["default"].getByEmail(data.email);
          case 15:
            user = _context5.sent;
            if (user) user_id = user.doctor_id;
            return _context5.abrupt("break", 19);
          case 18:
            return _context5.abrupt("break", 19);
          case 19:
            if (!user) {
              _context5.next = 65;
              break;
            }
            prefix = user_id.slice(0, 2);
            if (!(data.role === 2 && prefix !== 'qt')) {
              _context5.next = 25;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.next = 63;
            break;
          case 25:
            if (!(data.role === 3 && prefix !== 'lt')) {
              _context5.next = 29;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.next = 63;
            break;
          case 29:
            if (!(data.role === 5 && prefix !== 'pt')) {
              _context5.next = 33;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.next = 63;
            break;
          case 33:
            if (user.is_blocked) {
              _context5.next = 62;
              break;
            }
            if (!user.is_activated) {
              _context5.next = 59;
              break;
            }
            _context5.next = 37;
            return _bcrypt["default"].compare(data.password, user.password);
          case 37:
            isValidPassword = _context5.sent;
            if (!isValidPassword) {
              _context5.next = 56;
              break;
            }
            accessToken = createAccessToken(user_id);
            _refreshToken2 = createRefreshToken(user_id);
            _context5.t1 = prefix;
            _context5.next = _context5.t1 === 'qt' ? 44 : _context5.t1 === 'lt' ? 44 : _context5.t1 === 'pt' ? 44 : _context5.t1 === 'bs' ? 48 : 52;
            break;
          case 44:
            _context5.next = 46;
            return _index["default"].Employee.update({
              refresh_token: _refreshToken2
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 46:
            result = _context5.sent;
            return _context5.abrupt("break", 53);
          case 48:
            _context5.next = 50;
            return _index["default"].Doctor.update({
              refresh_token: _refreshToken2
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 50:
            result = _context5.sent;
            return _context5.abrupt("break", 53);
          case 52:
            return _context5.abrupt("break", 53);
          case 53:
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful',
                data: {
                  user_id: user_id,
                  access_token: accessToken,
                  refresh_token: _refreshToken2
                }
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context5.next = 57;
            break;
          case 56:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid login info'
            });
          case 57:
            _context5.next = 60;
            break;
          case 59:
            resolve({
              errCode: 4,
              message: 'Not activated yet'
            });
          case 60:
            _context5.next = 63;
            break;
          case 62:
            resolve({
              errCode: 8,
              message: 'This account is being blocked'
            });
          case 63:
            _context5.next = 66;
            break;
          case 65:
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Invalid login info'
            });
          case 66:
            _context5.next = 71;
            break;
          case 68:
            _context5.prev = 68;
            _context5.t2 = _context5["catch"](0);
            reject(_context5.t2);
          case 71:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 68]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//ĐỔI MẬT KHẨU
var changePassword = function changePassword(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var user_id, prefix, user, isValidCurrent, isDifferent, hashNew, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (!(!data.user_id || !data.current_password || !data.new_password)) {
              _context6.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context6.next = 48;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context6.next = 9;
            return getUserByID(user_id);
          case 9:
            user = _context6.sent;
            if (!user) {
              _context6.next = 47;
              break;
            }
            _context6.next = 13;
            return _bcrypt["default"].compare(data.current_password, user.password);
          case 13:
            isValidCurrent = _context6.sent;
            if (!isValidCurrent) {
              _context6.next = 44;
              break;
            }
            _context6.next = 17;
            return _bcrypt["default"].compare(data.new_password, user.password);
          case 17:
            isDifferent = _context6.sent;
            if (isDifferent) {
              _context6.next = 41;
              break;
            }
            _context6.next = 21;
            return _bcrypt["default"].hash(data.new_password, saltRounds);
          case 21:
            hashNew = _context6.sent;
            _context6.t0 = prefix;
            _context6.next = _context6.t0 === 'bn' ? 25 : _context6.t0 === 'qt' ? 29 : _context6.t0 === 'lt' ? 29 : _context6.t0 === 'pt' ? 29 : _context6.t0 === 'bs' ? 33 : 37;
            break;
          case 25:
            _context6.next = 27;
            return _index["default"].Patient.update({
              password: hashNew
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 27:
            result = _context6.sent;
            return _context6.abrupt("break", 38);
          case 29:
            _context6.next = 31;
            return _index["default"].Employee.update({
              password: hashNew
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 31:
            result = _context6.sent;
            return _context6.abrupt("break", 38);
          case 33:
            _context6.next = 35;
            return _index["default"].Doctor.update({
              password: hashNew
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 35:
            result = _context6.sent;
            return _context6.abrupt("break", 38);
          case 37:
            return _context6.abrupt("break", 38);
          case 38:
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context6.next = 42;
            break;
          case 41:
            resolve({
              errCode: 2,
              message: 'Invalid new password'
            });
          case 42:
            _context6.next = 45;
            break;
          case 44:
            resolve({
              errCode: 2,
              message: 'Invalid current password'
            });
          case 45:
            _context6.next = 48;
            break;
          case 47:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 48:
            _context6.next = 53;
            break;
          case 50:
            _context6.prev = 50;
            _context6.t1 = _context6["catch"](0);
            reject(_context6.t1);
          case 53:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 50]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//GỬI EMAIL CHO CASE QUÊN MẬT KHẨU
var sendResetLink = function sendResetLink(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var user, user_id, secretKey, token;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!data.role || !data.email)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context7.next = 33;
            break;
          case 5:
            _context7.t0 = data.role;
            _context7.next = _context7.t0 === 1 ? 8 : _context7.t0 === 2 ? 13 : _context7.t0 === 3 ? 13 : _context7.t0 === 5 ? 13 : _context7.t0 === 4 ? 18 : 23;
            break;
          case 8:
            _context7.next = 10;
            return _patient["default"].getByEmail(data.email);
          case 10:
            user = _context7.sent;
            if (user) user_id = user.patient_id;
            return _context7.abrupt("break", 24);
          case 13:
            _context7.next = 15;
            return _employee["default"].getByEmail(data.email);
          case 15:
            user = _context7.sent;
            if (user) user_id = user.employee_id;
            return _context7.abrupt("break", 24);
          case 18:
            _context7.next = 20;
            return _doctor["default"].getByEmail(data.email);
          case 20:
            user = _context7.sent;
            if (user) user_id = user.doctor_id;
            return _context7.abrupt("break", 24);
          case 23:
            return _context7.abrupt("break", 24);
          case 24:
            if (!user) {
              _context7.next = 32;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            token = _jsonwebtoken["default"].sign({
              role: data.role,
              user_id: user_id
            }, secretKey, {
              expiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN
            });
            _context7.next = 29;
            return _mail["default"].forgotPassword({
              email: data.email,
              fullname: user.fullname,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/password/reset/").concat(user_id, "/").concat(token)
            });
          case 29:
            resolve({
              errCode: 0,
              message: 'Successful'
            });
            _context7.next = 33;
            break;
          case 32:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 33:
            _context7.next = 38;
            break;
          case 35:
            _context7.prev = 35;
            _context7.t1 = _context7["catch"](0);
            reject(_context7.t1);
          case 38:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 35]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//XÁC MINH LINK ĐẶT LẠI MẬT KHẨU
var verifyResetLink = function verifyResetLink(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var user_id, user, secretKey, result, prefix, role;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (!(!data.user_id || !data.token)) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context8.next = 37;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            _context8.next = 8;
            return getUserByID(user_id);
          case 8:
            user = _context8.sent;
            if (!user) {
              _context8.next = 36;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            _context8.prev = 11;
            result = _jsonwebtoken["default"].verify(data.token, secretKey); //jwt.verify không có lỗi
            resolve({
              errCode: 0,
              message: 'Successful',
              data: {
                role: result.role,
                user_id: result.user_id,
                token: data.token
              }
            });
            _context8.next = 34;
            break;
          case 16:
            _context8.prev = 16;
            _context8.t0 = _context8["catch"](11);
            prefix = user_id.slice(0, 2);
            _context8.t1 = prefix;
            _context8.next = _context8.t1 === 'bn' ? 22 : _context8.t1 === 'qt' ? 24 : _context8.t1 === 'lt' ? 26 : _context8.t1 === 'bs' ? 28 : _context8.t1 === 'pt' ? 30 : 32;
            break;
          case 22:
            role = 1;
            return _context8.abrupt("break", 33);
          case 24:
            role = 2;
            return _context8.abrupt("break", 33);
          case 26:
            role = 3;
            return _context8.abrupt("break", 33);
          case 28:
            role = 4;
            return _context8.abrupt("break", 33);
          case 30:
            role = 5;
            return _context8.abrupt("break", 33);
          case 32:
            return _context8.abrupt("break", 33);
          case 33:
            if (_context8.t0.message === 'jwt expired') {
              resolve({
                errCode: 7,
                message: 'Token is expired',
                data: {
                  role: role
                }
              });
            } else {
              resolve({
                errCode: 2,
                message: 'Token is not valid',
                data: {
                  role: role
                }
              });
            }
          case 34:
            _context8.next = 37;
            break;
          case 36:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 37:
            _context8.next = 42;
            break;
          case 39:
            _context8.prev = 39;
            _context8.t2 = _context8["catch"](0);
            reject(_context8.t2);
          case 42:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 39], [11, 16]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//ĐẶT LẠI MẬT KHẨU CHO CASE QUÊN MẬT KHẨU
var resetPassword = function resetPassword(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var user_id, user, secretKey, payload, hashedPassword, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!data.user_id || !data.token || !data.password)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context9.next = 41;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            _context9.next = 8;
            return getUserByID(user_id);
          case 8:
            user = _context9.sent;
            if (!user) {
              _context9.next = 40;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            _context9.prev = 11;
            payload = _jsonwebtoken["default"].verify(data.token, secretKey); //jwt.verify không có lỗi
            _context9.next = 15;
            return _util["default"].hashPassword(data.password);
          case 15:
            hashedPassword = _context9.sent;
            _context9.t0 = payload.role;
            _context9.next = _context9.t0 === 1 ? 19 : _context9.t0 === 2 ? 23 : _context9.t0 === 3 ? 23 : _context9.t0 === 5 ? 23 : _context9.t0 === 4 ? 27 : 31;
            break;
          case 19:
            _context9.next = 21;
            return _index["default"].Patient.update({
              password: hashedPassword
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 21:
            result = _context9.sent;
            return _context9.abrupt("break", 32);
          case 23:
            _context9.next = 25;
            return _index["default"].Employee.update({
              password: hashedPassword
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 25:
            result = _context9.sent;
            return _context9.abrupt("break", 32);
          case 27:
            _context9.next = 29;
            return _index["default"].Doctor.update({
              password: hashedPassword
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 29:
            result = _context9.sent;
            return _context9.abrupt("break", 32);
          case 31:
            return _context9.abrupt("break", 32);
          case 32:
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context9.next = 38;
            break;
          case 35:
            _context9.prev = 35;
            _context9.t1 = _context9["catch"](11);
            if (_context9.t1.message === 'jwt expired') {
              resolve({
                errCode: 7,
                message: 'Token is expired'
              });
            } else {
              resolve({
                errCode: 2,
                message: 'Token is not valid'
              });
            }
          case 38:
            _context9.next = 41;
            break;
          case 40:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 41:
            _context9.next = 46;
            break;
          case 43:
            _context9.prev = 43;
            _context9.t2 = _context9["catch"](0);
            reject(_context9.t2);
          case 46:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 43], [11, 35]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//KHÓA - MỞ KHÓA TÀI KHOẢN
var changeBlockStatus = function changeBlockStatus(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var admin_id, admin, isValidPassword, user_id, prefix, user, result;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.admin_id || !data.password || !data.user_id)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context10.next = 46;
            break;
          case 5:
            admin_id = data.admin_id.toLowerCase();
            _context10.next = 8;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: admin_id,
                is_admin: true
              }
            });
          case 8:
            admin = _context10.sent;
            if (!admin) {
              _context10.next = 45;
              break;
            }
            _context10.next = 12;
            return _bcrypt["default"].compare(data.password, admin.password);
          case 12:
            isValidPassword = _context10.sent;
            if (!isValidPassword) {
              _context10.next = 42;
              break;
            }
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context10.next = 18;
            return getUserByID(user_id);
          case 18:
            user = _context10.sent;
            if (!user) {
              _context10.next = 39;
              break;
            }
            _context10.t0 = prefix;
            _context10.next = _context10.t0 === 'bn' ? 23 : _context10.t0 === 'qt' ? 27 : _context10.t0 === 'lt' ? 27 : _context10.t0 === 'pt' ? 27 : _context10.t0 === 'bs' ? 31 : 35;
            break;
          case 23:
            _context10.next = 25;
            return _index["default"].Patient.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 25:
            result = _context10.sent;
            return _context10.abrupt("break", 36);
          case 27:
            _context10.next = 29;
            return _index["default"].Employee.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 29:
            result = _context10.sent;
            return _context10.abrupt("break", 36);
          case 31:
            _context10.next = 33;
            return _index["default"].Doctor.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 33:
            result = _context10.sent;
            return _context10.abrupt("break", 36);
          case 35:
            return _context10.abrupt("break", 36);
          case 36:
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Successful'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context10.next = 40;
            break;
          case 39:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 40:
            _context10.next = 43;
            break;
          case 42:
            resolve({
              errCode: 2,
              message: 'Invalid password'
            });
          case 43:
            _context10.next = 46;
            break;
          case 45:
            resolve({
              errCode: 1,
              message: "Admin doesn't exist"
            });
          case 46:
            _context10.next = 51;
            break;
          case 48:
            _context10.prev = 48;
            _context10.t1 = _context10["catch"](0);
            reject(_context10.t1);
          case 51:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 48]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};

//ĐỔI EMAIL
var changeEmail = function changeEmail(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var user_id, prefix, user, isValidPassword, result, patientByEmail, doctorByEmail, employeeByEmail, token, role;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!(!data.user_id || !data.new_email || !data.password)) {
              _context11.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context11.next = 80;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context11.next = 9;
            return getUserByID(user_id);
          case 9:
            user = _context11.sent;
            if (!user) {
              _context11.next = 79;
              break;
            }
            _context11.next = 13;
            return _bcrypt["default"].compare(data.password, user.password);
          case 13:
            isValidPassword = _context11.sent;
            if (!isValidPassword) {
              _context11.next = 76;
              break;
            }
            if (!(prefix === 'bn')) {
              _context11.next = 28;
              break;
            }
            _context11.next = 18;
            return _index["default"].Patient.findOne({
              where: {
                email: data.new_email
              }
            });
          case 18:
            patientByEmail = _context11.sent;
            if (!(patientByEmail && patientByEmail.patient_id !== user_id)) {
              _context11.next = 23;
              break;
            }
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Email already exists'
            });
            _context11.next = 26;
            break;
          case 23:
            _context11.next = 25;
            return _index["default"].Patient.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 25:
            result = _context11.sent;
          case 26:
            _context11.next = 50;
            break;
          case 28:
            _context11.next = 30;
            return _index["default"].Doctor.findOne({
              where: {
                email: data.new_email
              }
            });
          case 30:
            doctorByEmail = _context11.sent;
            _context11.next = 33;
            return _index["default"].Employee.findOne({
              where: {
                email: data.new_email
              }
            });
          case 33:
            employeeByEmail = _context11.sent;
            if (!(doctorByEmail && doctorByEmail.doctor_id !== user_id || employeeByEmail && employeeByEmail.employee_id !== user_id)) {
              _context11.next = 38;
              break;
            }
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Email already exists'
            });
            _context11.next = 50;
            break;
          case 38:
            _context11.t0 = prefix;
            _context11.next = _context11.t0 === 'qt' ? 41 : _context11.t0 === 'lt' ? 41 : _context11.t0 === 'pt' ? 41 : _context11.t0 === 'bs' ? 45 : 49;
            break;
          case 41:
            _context11.next = 43;
            return _index["default"].Employee.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 43:
            result = _context11.sent;
            return _context11.abrupt("break", 50);
          case 45:
            _context11.next = 47;
            return _index["default"].Doctor.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 47:
            result = _context11.sent;
            return _context11.abrupt("break", 50);
          case 49:
            return _context11.abrupt("break", 50);
          case 50:
            if (!(result[0] === 1)) {
              _context11.next = 73;
              break;
            }
            _context11.next = 53;
            return _bcrypt["default"].hash(data.new_email, saltRounds);
          case 53:
            token = _context11.sent;
            _context11.t1 = prefix;
            _context11.next = _context11.t1 === 'bn' ? 57 : _context11.t1 === 'qt' ? 59 : _context11.t1 === 'lt' ? 61 : _context11.t1 === 'bs' ? 63 : _context11.t1 === 'pt' ? 65 : 67;
            break;
          case 57:
            role = 1;
            return _context11.abrupt("break", 68);
          case 59:
            role = 2;
            return _context11.abrupt("break", 68);
          case 61:
            role = 3;
            return _context11.abrupt("break", 68);
          case 63:
            role = 4;
            return _context11.abrupt("break", 68);
          case 65:
            role = 5;
            return _context11.abrupt("break", 68);
          case 67:
            return _context11.abrupt("break", 68);
          case 68:
            _context11.next = 70;
            return _mail["default"].verify({
              fullname: user.fullname,
              email: data.new_email,
              isPatient: prefix === 'bn' ? true : false,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/verify?role=").concat(role, "&email=").concat(data.new_email, "&token=").concat(token)
            });
          case 70:
            resolve({
              errCode: 0,
              message: 'Updated'
            });
            _context11.next = 74;
            break;
          case 73:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 74:
            _context11.next = 77;
            break;
          case 76:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid password'
            });
          case 77:
            _context11.next = 80;
            break;
          case 79:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 80:
            _context11.next = 85;
            break;
          case 82:
            _context11.prev = 82;
            _context11.t2 = _context11["catch"](0);
            reject(_context11.t2);
          case 85:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 82]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};

//KIỂM TRA PASSWORD (XÁC NHẬN LƯU THÔNG TIN)
var checkPassword = function checkPassword(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var user_id, prefix, user, isValidPassword;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(!data.user_id || !data.password)) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context12.next = 31;
            break;
          case 5:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context12.t0 = prefix;
            _context12.next = _context12.t0 === 'bn' ? 10 : _context12.t0 === 'qt' ? 14 : _context12.t0 === 'lt' ? 14 : _context12.t0 === 'pt' ? 14 : _context12.t0 === 'bs' ? 18 : 22;
            break;
          case 10:
            _context12.next = 12;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: user_id
              }
            });
          case 12:
            user = _context12.sent;
            return _context12.abrupt("break", 23);
          case 14:
            _context12.next = 16;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: user_id
              }
            });
          case 16:
            user = _context12.sent;
            return _context12.abrupt("break", 23);
          case 18:
            _context12.next = 20;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: user_id
              }
            });
          case 20:
            user = _context12.sent;
            return _context12.abrupt("break", 23);
          case 22:
            return _context12.abrupt("break", 23);
          case 23:
            if (!user) {
              _context12.next = 30;
              break;
            }
            _context12.next = 26;
            return _bcrypt["default"].compare(data.password, user.password);
          case 26:
            isValidPassword = _context12.sent;
            if (isValidPassword) {
              resolve({
                errCode: 0,
                message: 'Valid password'
              });
            } else {
              resolve({
                errCode: 2,
                message: 'Invalid password'
              });
            }
            _context12.next = 31;
            break;
          case 30:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 31:
            _context12.next = 36;
            break;
          case 33:
            _context12.prev = 33;
            _context12.t1 = _context12["catch"](0);
            reject(_context12.t1);
          case 36:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 33]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};

//REFRESH TOKEN
var refreshToken = function refreshToken(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var _refreshToken3;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            try {
              if (!data.refreshToken) {
                resolve({
                  errCode: 3,
                  message: 'Missing params'
                });
              } else {
                _refreshToken3 = data.refreshToken;
                _jsonwebtoken["default"].verify(_refreshToken3, process.env.JWT_REFRESH_TOKEN, /*#__PURE__*/function () {
                  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(err, user) {
                    var prefix, refreshTokenInDB, newAccessToken, newRefreshToken, result;
                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!err) {
                            _context13.next = 4;
                            break;
                          }
                          resolve({
                            errCode: 2,
                            message: 'Invalid refresh token'
                          });
                          _context13.next = 44;
                          break;
                        case 4:
                          prefix = user.user_id.slice(0, 2);
                          _context13.t0 = prefix;
                          _context13.next = _context13.t0 === 'bn' ? 8 : _context13.t0 === 'qt' ? 12 : _context13.t0 === 'lt' ? 12 : _context13.t0 === 'pt' ? 12 : _context13.t0 === 'bs' ? 16 : 20;
                          break;
                        case 8:
                          _context13.next = 10;
                          return _index["default"].Patient.findOne({
                            where: {
                              patient_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 10:
                          refreshTokenInDB = _context13.sent;
                          return _context13.abrupt("break", 21);
                        case 12:
                          _context13.next = 14;
                          return _index["default"].Employee.findOne({
                            where: {
                              employee_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 14:
                          refreshTokenInDB = _context13.sent;
                          return _context13.abrupt("break", 21);
                        case 16:
                          _context13.next = 18;
                          return _index["default"].Doctor.findOne({
                            where: {
                              doctor_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 18:
                          refreshTokenInDB = _context13.sent;
                          return _context13.abrupt("break", 21);
                        case 20:
                          return _context13.abrupt("break", 21);
                        case 21:
                          if (!(refreshTokenInDB.refresh_token == _refreshToken3)) {
                            _context13.next = 43;
                            break;
                          }
                          newAccessToken = createAccessToken(user.user_id);
                          newRefreshToken = createRefreshToken(user.user_id);
                          _context13.t1 = prefix;
                          _context13.next = _context13.t1 === 'bn' ? 27 : _context13.t1 === 'qt' ? 31 : _context13.t1 === 'lt' ? 31 : _context13.t1 === 'pt' ? 31 : _context13.t1 === 'bs' ? 35 : 39;
                          break;
                        case 27:
                          _context13.next = 29;
                          return _index["default"].Patient.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              patient_id: user.user_id
                            }
                          });
                        case 29:
                          result = _context13.sent;
                          return _context13.abrupt("break", 40);
                        case 31:
                          _context13.next = 33;
                          return _index["default"].Employee.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              employee_id: user.user_id
                            }
                          });
                        case 33:
                          result = _context13.sent;
                          return _context13.abrupt("break", 40);
                        case 35:
                          _context13.next = 37;
                          return _index["default"].Doctor.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              doctor_id: user.user_id
                            }
                          });
                        case 37:
                          result = _context13.sent;
                          return _context13.abrupt("break", 40);
                        case 39:
                          return _context13.abrupt("break", 40);
                        case 40:
                          if (result[0] === 1) {
                            resolve({
                              errCode: 0,
                              message: 'Successful',
                              data: {
                                access_token: newAccessToken,
                                refresh_token: newRefreshToken
                              }
                            });
                          } else {
                            resolve({
                              errCode: 5,
                              message: 'Failed'
                            });
                          }
                          _context13.next = 44;
                          break;
                        case 43:
                          resolve({
                            errCode: 2,
                            message: 'Invalid refresh token'
                          });
                        case 44:
                        case "end":
                          return _context13.stop();
                      }
                    }, _callee13);
                  }));
                  return function (_x27, _x28) {
                    return _ref14.apply(this, arguments);
                  };
                }());
              }
            } catch (e) {
              reject(e);
            }
          case 1:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
module.exports = {
  getUserByID: getUserByID,
  verify: verify,
  register: register,
  loginClient: loginClient,
  loginAdmin: loginAdmin,
  changePassword: changePassword,
  sendResetLink: sendResetLink,
  verifyResetLink: verifyResetLink,
  resetPassword: resetPassword,
  changeBlockStatus: changeBlockStatus,
  changeEmail: changeEmail,
  checkPassword: checkPassword,
  refreshToken: refreshToken
};