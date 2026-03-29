"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _auth = _interopRequireDefault(require("../services/auth"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();

//XÁC MINH EMAIL BỆNH NHÂN
var handleVerify = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var result, errCode, role, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return _auth["default"].verify(req.query);
        case 1:
          result = _context.v;
          errCode = result.errCode, role = result.role;
          if (!(errCode === 0)) {
            _context.n = 2;
            break;
          }
          if (role == 1) {
            res.redirect("".concat(process.env.REACT_CLIENT_URL));
          } else {
            res.redirect("".concat(process.env.REACT_ADMIN_URL));
          }
          ;
          _context.n = 5;
          break;
        case 2:
          if (!(errCode === 2)) {
            _context.n = 3;
            break;
          }
          res.send("page phía react: đã xác minh");
          _context.n = 5;
          break;
        case 3:
          if (!(errCode === 3 || errCode === 5)) {
            _context.n = 4;
            break;
          }
          return _context.a(2, res.status(200).json(result));
        case 4:
          res.send("page 404 phía react");
        case 5:
          ;
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.log(_t);
          return _context.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 7:
          ;
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function handleVerify(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//ĐĂNG KÝ
var handleRegister = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var result, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _auth["default"].register(req.body);
        case 1:
          result = _context2.v;
          return _context2.a(2, res.status(200).json(result));
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.log(_t2);
          return _context2.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function handleRegister(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//ĐĂNG NHẬP CHO BỆNH NHÂN
var handleLoginClient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var result, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _auth["default"].loginClient(req.body);
        case 1:
          result = _context3.v;
          return _context3.a(2, res.status(200).json(result));
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.log(_t3);
          return _context3.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function handleLoginClient(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//ĐĂNG NHẬP TRANG QUẢN TRỊ
var handleLoginAdmin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var result, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return _auth["default"].loginAdmin(req.body);
        case 1:
          result = _context4.v;
          return _context4.a(2, res.status(200).json(result));
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.log(_t4);
          return _context4.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function handleLoginAdmin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//ĐỔI MẬT KHẨU
var handleChangePassword = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var result, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return _auth["default"].changePassword(_objectSpread(_objectSpread({}, req.body), {}, {
            user_id: req.params.user_id
          }));
        case 1:
          result = _context5.v;
          return _context5.a(2, res.status(200).json(result));
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.log(_t5);
          return _context5.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function handleChangePassword(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

//GỬI EMAIL CHO CASE QUÊN MẬT KHẨU
var handleSendResetLink = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var result, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _auth["default"].sendResetLink(req.body);
        case 1:
          result = _context6.v;
          return _context6.a(2, res.status(200).json(result));
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.log(_t6);
          return _context6.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function handleSendResetLink(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

//XÁC MINH LINK ĐẶT LẠI MẬT KHẨU
var handleVerifyResetLink = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var result, errCode, role, _result$data, user_id, token, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _context7.n = 1;
          return _auth["default"].verifyResetLink(req.params);
        case 1:
          result = _context7.v;
          errCode = result.errCode;
          role = result.data.role;
          if (!(errCode === 1 || errCode === 2 || errCode === 7)) {
            _context7.n = 2;
            break;
          }
          if (role == 1) {
            res.redirect("".concat(process.env.REACT_CLIENT_URL));
          } else {
            res.redirect("".concat(process.env.REACT_ADMIN_URL));
          }
          ;
          _context7.n = 4;
          break;
        case 2:
          if (!(errCode === 0)) {
            _context7.n = 3;
            break;
          }
          _result$data = result.data, user_id = _result$data.user_id, token = _result$data.token;
          if (role == 1) {
            res.redirect("".concat(process.env.REACT_CLIENT_URL, "/dat-lai-mat-khau/").concat(user_id, "/").concat(token));
          } else {
            res.redirect("".concat(process.env.REACT_ADMIN_URL, "/dat-lai-mat-khau/").concat(user_id, "/").concat(token));
          }
          ;
          _context7.n = 4;
          break;
        case 3:
          return _context7.a(2, res.status(200).json(result));
        case 4:
          _context7.n = 6;
          break;
        case 5:
          _context7.p = 5;
          _t7 = _context7.v;
          console.log(_t7);
          return _context7.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 6:
          ;
        case 7:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 5]]);
  }));
  return function handleVerifyResetLink(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

//ĐẶT LẠI MẬT KHẨU CHO CASE QUÊN MẬT KHẨU
var handleResetPassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var result, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return _auth["default"].resetPassword(_objectSpread(_objectSpread({}, req.params), req.body));
        case 1:
          result = _context8.v;
          return _context8.a(2, res.status(200).json(result));
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          console.log(_t8);
          return _context8.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function handleResetPassword(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

//KHÓA - MỞ KHÓA TÀI KHOẢN
var handleChangeBlockStatus = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var result, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          _context9.n = 1;
          return _auth["default"].changeBlockStatus(req.body);
        case 1:
          result = _context9.v;
          return _context9.a(2, res.status(200).json(result));
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          console.log(_t9);
          return _context9.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function handleChangeBlockStatus(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

//ĐỔI EMAIL
var handleChangeEmail = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var result, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return _auth["default"].changeEmail(_objectSpread(_objectSpread({}, req.body), {}, {
            user_id: req.params.user_id
          }));
        case 1:
          result = _context0.v;
          return _context0.a(2, res.status(200).json(result));
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          console.log(_t0);
          return _context0.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 2]]);
  }));
  return function handleChangeEmail(_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}();

//KIỂM TRA PASSWORD (XÁC NHẬN LƯU THÔNG TIN)
var handleCheckPassword = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var result, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _context1.n = 1;
          return _auth["default"].checkPassword(req.body);
        case 1:
          result = _context1.v;
          return _context1.a(2, res.status(200).json(result));
        case 2:
          _context1.p = 2;
          _t1 = _context1.v;
          console.log(_t1);
          return _context1.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context1.a(2);
      }
    }, _callee1, null, [[0, 2]]);
  }));
  return function handleCheckPassword(_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}();

//REFRESH TOKEN
var handleRefreshToken = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var result, _t10;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _context10.n = 1;
          return _auth["default"].refreshToken(req.body);
        case 1:
          result = _context10.v;
          return _context10.a(2, res.status(200).json(result));
        case 2:
          _context10.p = 2;
          _t10 = _context10.v;
          console.log(_t10);
          return _context10.a(2, res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 3:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 2]]);
  }));
  return function handleRefreshToken(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  handleVerify: handleVerify,
  handleRegister: handleRegister,
  handleLoginClient: handleLoginClient,
  handleLoginAdmin: handleLoginAdmin,
  handleChangePassword: handleChangePassword,
  handleSendResetLink: handleSendResetLink,
  handleVerifyResetLink: handleVerifyResetLink,
  handleResetPassword: handleResetPassword,
  handleChangeBlockStatus: handleChangeBlockStatus,
  handleChangeEmail: handleChangeEmail,
  handleCheckPassword: handleCheckPassword,
  handleRefreshToken: handleRefreshToken
};