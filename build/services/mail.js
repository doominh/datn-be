"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _resend = require("resend");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();

// -------------------- NODEMAILER SERVICE -----------------
//GỬI MAIL XÁC NHẬN NGƯỜI DÙNG
var verify = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Xác minh tài khoản',
            html: data.isPatient ? "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n email x\xE1c nh\u1EADn thao t\xE1c \u0111\u0103ng k\xFD t\xE0i kho\u1EA3n \u0111\xE3 th\u1EF1c hi\u1EC7n tr\xEAn website.</p>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 k\xEDch ho\u1EA1t t\xE0i kho\u1EA3n.</p>\n        <p>N\u1EBFu b\u1EA1n kh\xF4ng th\u1EF1c hi\u1EC7n \u0111\u0103ng k\xFD t\xE0i kho\u1EA3n v\u1EDBi Toothhive, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <a href=").concat(data.redirectLink, ">X\xE1c minh t\xE0i kho\u1EA3n</a>\n        ") : "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 c\xF3 th\u1EC3 \u0111\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD c\u1EE7a Toothhive.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <a href=").concat(data.redirectLink, ">X\xE1c minh t\xE0i kho\u1EA3n</a>\n        ")
          });
        case 3:
          info = _context.sent;
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function verify(_x) {
    return _ref.apply(this, arguments);
  };
}();

//GỬI EMAIL QUÊN MẬT KHẨU
var forgotPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context2.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Đặt lại mật khẩu',
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n email \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho tr\u01B0\u1EDDng h\u1EE3p qu\xEAn m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n.</p>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi</p>\n        <p>N\u1EBFu b\u1EA1n kh\xF4ng th\u1EF1c hi\u1EC7n h\xE0nh \u0111\u1ED9ng n\xE0y, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <p>\u0110\u01B0\u1EDDng d\u1EABn x\xE1c nh\u1EADn s\u1EBD c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng <b>15 PH\xDAT</b></p>\n        <a href=").concat(data.redirectLink, ">\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u</a>\n        ")
          });
        case 3:
          info = _context2.sent;
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function forgotPassword(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG TIN ĐẶT LỊCH HẸN
var appointmentInfo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context3.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông tin lịch hẹn',
            html: "\n        <h2 style=\"text-align: center\">X\xC1C NH\u1EACN \u0110\u1EB6T L\u1ECACH H\u1EB8N TH\xC0NH C\xD4NG</h2>\n        <hr/>\n        <div style=\"width: 100%; font-size: 14px\">\n            <div style=\"float: left; width: 20%\">\n                <p><b>M\xE3 l\u1ECBch h\u1EB9n</b></p>\n                <p><b>T\xEAn b\u1EC7nh nh\xE2n</b></p>\n                <p><b>Ng\xE0y sinh</b></p>\n                <p><b>Gi\u1EDBi t\xEDnh</b></p>\n                <p><b>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</b></p>\n                <p><b>B\xE1c s\u0129 ph\u1EE5 tr\xE1ch</b></p>\n                <p><b>Ng\xE0y h\u1EB9n</b></p>\n                <p><b>Ca kh\xE1m</b></p>\n                <p><b>Tr\u1EA1ng th\xE1i l\u1ECBch h\u1EB9n</b></p>\n                <p><b>\u0110\u1ECBa ch\u1EC9 ph\xF2ng kh\xE1m</b></p>\n            </div>\n            <div style=\"float: right; width: 80%\">\n                <p>".concat(data.appointment_id, "</p>\n                <p>").concat(data.fullname, "</p>\n                <p>").concat(data.dob, "</p>\n                <p>").concat(data.gender ? 'Nam' : 'Nữ', "</p>\n                <p>").concat(data.phone, "</p>\n                <p>").concat(data.doctor_name, "</p>\n                <p>").concat(data.date, "</p>\n                <p>").concat(data.time, "</p>\n                <p style=\"color: #28a745\">").concat(data.status, "</p>\n                <p> 237 Nguy\u1EC5n T\u1EA5t Th\xE0nh, Qu\u1EADn 4, Tp.HCM</p>\n            </div>\n        </div>\n        ")
          });
        case 3:
          info = _context3.sent;
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function appointmentInfo(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG TIN HÓA ĐƠN
var billInfo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context4.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông tin hóa đơn',
            attachments: [{
              filename: data.filename,
              path: data.file,
              contentType: 'application/pdf'
            }],
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n th\xF4ng tin h\xF3a \u0111\u01A1n d\u1ECBch v\u1EE5 t\u1EA1i ph\xF2ng kh\xE1m.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        ")
          });
        case 3:
          info = _context4.sent;
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function billInfo(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

//GỬI EMAIL CHI TIẾT LỊCH HẸN
var detailsInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context5.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông tin chi tiết lịch hẹn',
            attachments: [{
              filename: data.filename,
              path: data.file,
              contentType: 'application/pdf'
            }],
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n th\xF4ng tin chi ti\u1EBFt l\u1ECBch h\u1EB9n.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        ")
          });
        case 3:
          info = _context5.sent;
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function detailsInfo(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG BÁO LỊCH HẸN BỊ HỦY
var canceledAppointment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context6.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông báo hủy lịch hẹn',
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n th\xF4ng tin l\u1ECBch h\u1EB9n ").concat(data.appointment_id.toUpperCase(), " \u0111\xE3 b\u1ECB h\u1EE7y.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        ")
          });
        case 3:
          info = _context6.sent;
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function canceledAppointment(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var contactUs = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
    var transporter, info;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context7.next = 3;
          return transporter.sendMail({
            from: "\"Toothhive Contact\" <".concat(process.env.EMAIL_APP, ">"),
            to: 'toothhive@gmail.com',
            subject: 'Liên hệ từ người dùng',
            html: "\n\t\t\t\t\t<h3>Th\xF4ng tin li\xEAn h\u1EC7</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><b>H\u1ECD v\xE0 t\xEAn:</b> ".concat(data.fullName, "</li>\n\t\t\t\t\t\t\t<li><b>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:</b> ").concat(data.phone, "</li>\n\t\t\t\t\t\t\t<li><b>Email:</b> ").concat(data.email, "</li>\n\t\t\t\t\t\t\t<li><b>L\u1EDDi nh\u1EAFn:</b> ").concat(data.message, "</li>\n\t\t\t\t\t</ul>\n\t\t\t")
          });
        case 3:
          info = _context7.sent;
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function contactUs(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  verify: verify,
  forgotPassword: forgotPassword,
  appointmentInfo: appointmentInfo,
  billInfo: billInfo,
  detailsInfo: detailsInfo,
  canceledAppointment: canceledAppointment,
  contactUs: contactUs
};

// -------------------- RESEND MAIL SERVICE -----------------
// const resend = new Resend(process.env.RESEND_API_KEY);
// const FROM = 'Toothhive <onboarding@resend.dev>';

// //GỬI MAIL XÁC NHẬN NGƯỜI DÙNG
// const verify = async (data) => {
// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Xác minh tài khoản',
// 		html: data.isPatient
// 			? `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn email xác nhận thao tác đăng ký tài khoản đã thực hiện trên website.</p>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để kích hoạt tài khoản.</p>
//         <p>Nếu bạn không thực hiện đăng ký tài khoản với Toothhive, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <a href=${data.redirectLink}>Xác minh tài khoản</a>
//         `
// 			: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để có thể đăng nhập vào hệ thống quản lý của Toothhive.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <a href=${data.redirectLink}>Xác minh tài khoản</a>
//         `,
// 	});
// };

// //GỬI EMAIL QUÊN MẬT KHẨU
// const forgotPassword = async (data) => {
// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Đặt lại mật khẩu',
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn email đặt lại mật khẩu cho trường hợp quên mật khẩu của bạn.</p>
//         <p>Bạn cần xác nhận theo đường dẫn được đính kèm bên dưới để đặt lại mật khẩu mới</p>
//         <p>Nếu bạn không thực hiện hành động này, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         <p>Đường dẫn xác nhận sẽ có hiệu lực trong vòng <b>15 PHÚT</b></p>
//         <a href=${data.redirectLink}>Đặt lại mật khẩu</a>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG TIN ĐẶT LỊCH HẸN
// const appointmentInfo = async (data) => {
// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Thông tin lịch hẹn',
// 		html: `
//         <h2 style="text-align: center">XÁC NHẬN ĐẶT LỊCH HẸN THÀNH CÔNG</h2>
//         <hr/>
//         <div style="width: 100%; font-size: 14px">
//             <div style="float: left; width: 20%">
//                 <p><b>Mã lịch hẹn</b></p>
//                 <p><b>Tên bệnh nhân</b></p>
//                 <p><b>Ngày sinh</b></p>
//                 <p><b>Giới tính</b></p>
//                 <p><b>Số điện thoại</b></p>
//                 <p><b>Bác sĩ phụ trách</b></p>
//                 <p><b>Ngày hẹn</b></p>
//                 <p><b>Ca khám</b></p>
//                 <p><b>Trạng thái lịch hẹn</b></p>
//                 <p><b>Địa chỉ phòng khám</b></p>
//             </div>
//             <div style="float: right; width: 80%">
//                 <p>${data.appointment_id}</p>
//                 <p>${data.fullname}</p>
//                 <p>${data.dob}</p>
//                 <p>${data.gender ? 'Nam' : 'Nữ'}</p>
//                 <p>${data.phone}</p>
//                 <p>${data.doctor_name}</p>
//                 <p>${data.date}</p>
//                 <p>${data.time}</p>
//                 <p style="color: #28a745">${data.status}</p>
//                 <p> 237 Nguyễn Tất Thành, Quận 4, Tp.HCM</p>
//             </div>
//         </div>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG TIN HÓA ĐƠN
// const billInfo = async (data) => {
// 	const base64Data = data.file.includes(',') ? data.file.split(',')[1] : data.file;
// 	const fileBuffer = Buffer.from(base64Data, 'base64');

// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Thông tin hóa đơn',
// 		attachments: [
// 			{
// 				filename: data.filename,
// 				content: fileBuffer,
// 			},
// 		],
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin hóa đơn dịch vụ tại phòng khám.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };

// //GỬI EMAIL CHI TIẾT LỊCH HẸN
// const detailsInfo = async (data) => {
// 	const base64Data = data.file.includes(',') ? data.file.split(',')[1] : data.file;
// 	const fileBuffer = Buffer.from(base64Data, 'base64');

// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Thông tin chi tiết lịch hẹn',
// 		attachments: [
// 			{
// 				filename: data.filename,
// 				content: fileBuffer,
// 			},
// 		],
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin chi tiết lịch hẹn.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };

// //GỬI EMAIL THÔNG BÁO LỊCH HẸN BỊ HỦY
// const canceledAppointment = async (data) => {
// 	await resend.emails.send({
// 		from: FROM,
// 		to: data.email,
// 		subject: 'Thông báo hủy lịch hẹn',
// 		html: `
//         <h3>Xin chào ${data.fullname}!</h3>
//         <p><b>Toothhive</b> gửi đến bạn thông tin lịch hẹn ${data.appointment_id.toUpperCase()} đã bị hủy.</p>
//         <p>Nếu bạn nghĩ đây là sự nhầm lẫn, vui lòng liên hệ với chúng tôi để được hỗ trợ.</p>
//         `,
// 	});
// };

// //GỬI EMAIL LIÊN HỆ
// const contactUs = async (data) => {
// 	await resend.emails.send({
// 		from: FROM,
// 		to: 'toothhive@gmail.com',
// 		subject: 'Liên hệ từ người dùng',
// 		html: `
// 				<h3>Thông tin liên hệ</h3>
// 				<ul>
// 						<li><b>Họ và tên:</b> ${data.fullName}</li>
// 						<li><b>Số điện thoại:</b> ${data.phone}</li>
// 						<li><b>Email:</b> ${data.email}</li>
// 						<li><b>Lời nhắn:</b> ${data.message}</li>
// 				</ul>
// 			`,
// 	});
// };

// module.exports = {
// 	verify,
// 	forgotPassword,
// 	appointmentInfo,
// 	billInfo,
// 	detailsInfo,
// 	canceledAppointment,
// 	contactUs,
// };