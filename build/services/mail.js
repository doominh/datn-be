"use strict";

var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();

//GỬI MAIL XÁC NHẬN NGƯỜI DÙNG
var verify = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(data) {
    var transporter, info;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context.n = 1;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Xác minh tài khoản',
            html: data.isPatient ? "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n email x\xE1c nh\u1EADn thao t\xE1c \u0111\u0103ng k\xFD t\xE0i kho\u1EA3n \u0111\xE3 th\u1EF1c hi\u1EC7n tr\xEAn website.</p>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 k\xEDch ho\u1EA1t t\xE0i kho\u1EA3n.</p>\n        <p>N\u1EBFu b\u1EA1n kh\xF4ng th\u1EF1c hi\u1EC7n \u0111\u0103ng k\xFD t\xE0i kho\u1EA3n v\u1EDBi Toothhive, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <a href=").concat(data.redirectLink, ">X\xE1c minh t\xE0i kho\u1EA3n</a>\n        ") : "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 c\xF3 th\u1EC3 \u0111\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD c\u1EE7a Toothhive.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <a href=").concat(data.redirectLink, ">X\xE1c minh t\xE0i kho\u1EA3n</a>\n        ")
          });
        case 1:
          info = _context.v;
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function verify(_x) {
    return _ref.apply(this, arguments);
  };
}();

//GỬI EMAIL QUÊN MẬT KHẨU
var forgotPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(data) {
    var transporter, info;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context2.n = 1;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Đặt lại mật khẩu',
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n email \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho tr\u01B0\u1EDDng h\u1EE3p qu\xEAn m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n.</p>\n        <p>B\u1EA1n c\u1EA7n x\xE1c nh\u1EADn theo \u0111\u01B0\u1EDDng d\u1EABn \u0111\u01B0\u1EE3c \u0111\xEDnh k\xE8m b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi</p>\n        <p>N\u1EBFu b\u1EA1n kh\xF4ng th\u1EF1c hi\u1EC7n h\xE0nh \u0111\u1ED9ng n\xE0y, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        <p>\u0110\u01B0\u1EDDng d\u1EABn x\xE1c nh\u1EADn s\u1EBD c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng <b>15 PH\xDAT</b></p>\n        <a href=").concat(data.redirectLink, ">\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u</a>\n        ")
          });
        case 1:
          info = _context2.v;
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function forgotPassword(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG TIN ĐẶT LỊCH HẸN
var appointmentInfo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(data) {
    var transporter, info;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context3.n = 1;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông tin lịch hẹn',
            html: "\n        <h2 style=\"text-align: center\">X\xC1C NH\u1EACN \u0110\u1EB6T L\u1ECACH H\u1EB8N TH\xC0NH C\xD4NG</h2>\n        <hr/>\n        <div style=\"width: 100%; font-size: 14px\">\n            <div style=\"float: left; width: 20%\">\n                <p><b>M\xE3 l\u1ECBch h\u1EB9n</b></p>\n                <p><b>T\xEAn b\u1EC7nh nh\xE2n</b></p>\n                <p><b>Ng\xE0y sinh</b></p>\n                <p><b>Gi\u1EDBi t\xEDnh</b></p>\n                <p><b>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</b></p>\n                <p><b>B\xE1c s\u0129 ph\u1EE5 tr\xE1ch</b></p>\n                <p><b>Ng\xE0y h\u1EB9n</b></p>\n                <p><b>Ca kh\xE1m</b></p>\n                <p><b>Tr\u1EA1ng th\xE1i l\u1ECBch h\u1EB9n</b></p>\n                <p><b>\u0110\u1ECBa ch\u1EC9 ph\xF2ng kh\xE1m</b></p>\n            </div>\n            <div style=\"float: right; width: 80%\">\n                <p>".concat(data.appointment_id, "</p>\n                <p>").concat(data.fullname, "</p>\n                <p>").concat(data.dob, "</p>\n                <p>").concat(data.gender ? 'Nam' : 'Nữ', "</p>\n                <p>").concat(data.phone, "</p>\n                <p>").concat(data.doctor_name, "</p>\n                <p>").concat(data.date, "</p>\n                <p>").concat(data.time, "</p>\n                <p style=\"color: #28a745\">").concat(data.status, "</p>\n                <p> 237 Nguy\u1EC5n T\u1EA5t Th\xE0nh, Qu\u1EADn 4, Tp.HCM</p>\n            </div>\n        </div>\n        ")
          });
        case 1:
          info = _context3.v;
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function appointmentInfo(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG TIN HÓA ĐƠN
var billInfo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(data) {
    var transporter, info;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context4.n = 1;
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
        case 1:
          info = _context4.v;
        case 2:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return function billInfo(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

//GỬI EMAIL CHI TIẾT LỊCH HẸN
var detailsInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(data) {
    var transporter, info;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context5.n = 1;
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
        case 1:
          info = _context5.v;
        case 2:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return function detailsInfo(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

//GỬI EMAIL THÔNG BÁO LỊCH HẸN BỊ HỦY
var canceledAppointment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(data) {
    var transporter, info;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context6.n = 1;
          return transporter.sendMail({
            from: "\"Toothhive\" <".concat(process.env.EMAIL_APP, ">"),
            to: data.email,
            subject: 'Thông báo hủy lịch hẹn',
            html: "\n        <h3>Xin ch\xE0o ".concat(data.fullname, "!</h3>\n        <p><b>Toothhive</b> g\u1EEDi \u0111\u1EBFn b\u1EA1n th\xF4ng tin l\u1ECBch h\u1EB9n ").concat(data.appointment_id.toUpperCase(), " \u0111\xE3 b\u1ECB h\u1EE7y.</p>\n        <p>N\u1EBFu b\u1EA1n ngh\u0129 \u0111\xE2y l\xE0 s\u1EF1 nh\u1EA7m l\u1EABn, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.</p>\n        ")
          });
        case 1:
          info = _context6.v;
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return function canceledAppointment(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
var contactUs = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(data) {
    var transporter, info;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.EMAIL_APP,
              pass: process.env.EMAIL_APP_PASSWORD
            }
          });
          _context7.n = 1;
          return transporter.sendMail({
            from: "\"Toothhive Contact\" <".concat(process.env.EMAIL_APP, ">"),
            to: 'toothhive@gmail.com',
            subject: 'Liên hệ từ người dùng',
            html: "\n\t\t\t\t\t<h3>Th\xF4ng tin li\xEAn h\u1EC7</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><b>H\u1ECD v\xE0 t\xEAn:</b> ".concat(data.fullName, "</li>\n\t\t\t\t\t\t\t<li><b>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:</b> ").concat(data.phone, "</li>\n\t\t\t\t\t\t\t<li><b>Email:</b> ").concat(data.email, "</li>\n\t\t\t\t\t\t\t<li><b>L\u1EDDi nh\u1EAFn:</b> ").concat(data.message, "</li>\n\t\t\t\t\t</ul>\n\t\t\t")
          });
        case 1:
          info = _context7.v;
        case 2:
          return _context7.a(2);
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