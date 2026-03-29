"use strict";

var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _axios = _interopRequireDefault(require("axios"));
var _index = _interopRequireDefault(require("../models/index"));
var _mail = _interopRequireDefault(require("./mail"));
var _util = _interopRequireDefault(require("../util"));
var _patient = _interopRequireDefault(require("./patient"));
var _employee = _interopRequireDefault(require("./employee"));
var _doctor = _interopRequireDefault(require("./doctor"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var prefix, user, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            prefix = user_id.slice(0, 2);
            _t = prefix;
            _context.n = _t === 'bn' ? 1 : _t === 'qt' ? 3 : _t === 'lt' ? 3 : _t === 'pt' ? 3 : _t === 'bs' ? 5 : 7;
            break;
          case 1:
            _context.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: user_id
              }
            });
          case 2:
            user = _context.v;
            return _context.a(3, 8);
          case 3:
            _context.n = 4;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: user_id
              }
            });
          case 4:
            user = _context.v;
            return _context.a(3, 8);
          case 5:
            _context.n = 6;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: user_id
              }
            });
          case 6:
            user = _context.v;
            return _context.a(3, 8);
          case 7:
            return _context.a(3, 8);
          case 8:
            resolve(user);
            _context.n = 10;
            break;
          case 9:
            _context.p = 9;
            _t2 = _context.v;
            reject(_t2);
          case 10:
            return _context.a(2);
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//** API **//

//XÁC MINH EMAIL TÀI KHOẢN
var verify = function verify(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var result, user, _result, _t3, _t4, _t5;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (!(!data.role || !data.email || !data.token)) {
              _context2.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context2.n = 22;
            break;
          case 1:
            _context2.n = 2;
            return _bcrypt["default"].compare(data.email, data.token);
          case 2:
            result = _context2.v;
            if (!result) {
              _context2.n = 21;
              break;
            }
            _t3 = data.role;
            _context2.n = _t3 === '1' ? 3 : _t3 === '2' ? 5 : _t3 === '3' ? 5 : _t3 === '5' ? 5 : _t3 === '4' ? 7 : 9;
            break;
          case 3:
            _context2.n = 4;
            return _patient["default"].getByEmail(data.email);
          case 4:
            user = _context2.v;
            return _context2.a(3, 10);
          case 5:
            _context2.n = 6;
            return _employee["default"].getByEmail(data.email);
          case 6:
            user = _context2.v;
            return _context2.a(3, 10);
          case 7:
            _context2.n = 8;
            return _doctor["default"].getByEmail(data.email);
          case 8:
            user = _context2.v;
            return _context2.a(3, 10);
          case 9:
            return _context2.a(3, 10);
          case 10:
            if (user.is_activated) {
              _context2.n = 19;
              break;
            }
            _t4 = data.role;
            _context2.n = _t4 === '1' ? 11 : _t4 === '2' ? 13 : _t4 === '3' ? 13 : _t4 === '5' ? 13 : _t4 === '4' ? 15 : 17;
            break;
          case 11:
            _context2.n = 12;
            return _index["default"].Patient.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 12:
            _result = _context2.v;
            return _context2.a(3, 18);
          case 13:
            _context2.n = 14;
            return _index["default"].Employee.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 14:
            _result = _context2.v;
            return _context2.a(3, 18);
          case 15:
            _context2.n = 16;
            return _index["default"].Doctor.update({
              is_activated: true
            }, {
              where: {
                email: data.email
              }
            });
          case 16:
            _result = _context2.v;
            return _context2.a(3, 18);
          case 17:
            return _context2.a(3, 18);
          case 18:
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
            _context2.n = 20;
            break;
          case 19:
            resolve({
              errCode: 2,
              message: 'Already verified'
            });
          case 20:
            _context2.n = 22;
            break;
          case 21:
            resolve(false);
          case 22:
            _context2.n = 24;
            break;
          case 23:
            _context2.p = 23;
            _t5 = _context2.v;
            reject(_t5);
          case 24:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 23]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//ĐĂNG KÝ CHO BỆNH NHÂN
var register = function register(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var result, _t6;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            if (!(!data.fullname || !data.dob || data.gender === undefined || !data.phone || !data.email || !data.password)) {
              _context3.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context3.n = 3;
            break;
          case 1:
            _context3.n = 2;
            return _patient["default"].createPatient(data);
          case 2:
            result = _context3.v;
            resolve(result);
          case 3:
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t6 = _context3.v;
            reject(_t6);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 4]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//ĐĂNG NHẬP CHO BỆNH NHÂN
var loginClient = function loginClient(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var patient, isValidPassword, accessToken, _refreshToken, result, _t7;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            if (!(!data.email || !data.password)) {
              _context4.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context4.n = 12;
            break;
          case 1:
            _context4.n = 2;
            return _patient["default"].getByEmail(data.email);
          case 2:
            patient = _context4.v;
            if (!patient) {
              _context4.n = 11;
              break;
            }
            if (patient.is_blocked) {
              _context4.n = 9;
              break;
            }
            if (!patient.is_activated) {
              _context4.n = 7;
              break;
            }
            _context4.n = 3;
            return _bcrypt["default"].compare(data.password, patient.password);
          case 3:
            isValidPassword = _context4.v;
            if (!isValidPassword) {
              _context4.n = 5;
              break;
            }
            accessToken = createAccessToken(patient.patient_id);
            _refreshToken = createRefreshToken(patient.patient_id);
            _context4.n = 4;
            return _index["default"].Patient.update({
              refresh_token: _refreshToken
            }, {
              where: {
                patient_id: patient.patient_id
              }
            });
          case 4:
            result = _context4.v;
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
            _context4.n = 6;
            break;
          case 5:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid login info'
            });
          case 6:
            _context4.n = 8;
            break;
          case 7:
            resolve({
              errCode: 4,
              message: 'Not activated yet'
            });
          case 8:
            _context4.n = 10;
            break;
          case 9:
            resolve({
              errCode: 8,
              message: 'This account is being blocked'
            });
          case 10:
            _context4.n = 12;
            break;
          case 11:
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Invalid login info'
            });
          case 12:
            _context4.n = 14;
            break;
          case 13:
            _context4.p = 13;
            _t7 = _context4.v;
            reject(_t7);
          case 14:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//ĐĂNG NHẬP TRANG QUẢN TRỊ
var loginAdmin = function loginAdmin(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var user, user_id, prefix, isValidPassword, accessToken, _refreshToken2, result, _t8, _t9, _t0;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            if (!(!data.role || !data.email || !data.password)) {
              _context5.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context5.n = 25;
            break;
          case 1:
            _t8 = data.role;
            _context5.n = _t8 === 2 ? 2 : _t8 === 3 ? 2 : _t8 === 5 ? 2 : _t8 === 4 ? 4 : 6;
            break;
          case 2:
            _context5.n = 3;
            return _employee["default"].getByEmail(data.email);
          case 3:
            user = _context5.v;
            if (user) user_id = user.employee_id;
            return _context5.a(3, 7);
          case 4:
            _context5.n = 5;
            return _doctor["default"].getByEmail(data.email);
          case 5:
            user = _context5.v;
            if (user) user_id = user.doctor_id;
            return _context5.a(3, 7);
          case 6:
            return _context5.a(3, 7);
          case 7:
            if (!user) {
              _context5.n = 24;
              break;
            }
            prefix = user_id.slice(0, 2);
            if (!(data.role === 2 && prefix !== 'qt')) {
              _context5.n = 8;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.n = 23;
            break;
          case 8:
            if (!(data.role === 3 && prefix !== 'lt')) {
              _context5.n = 9;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.n = 23;
            break;
          case 9:
            if (!(data.role === 5 && prefix !== 'pt')) {
              _context5.n = 10;
              break;
            }
            resolve({
              errCode: 2,
              type: 'role',
              message: 'Invalid login info'
            });
            _context5.n = 23;
            break;
          case 10:
            if (user.is_blocked) {
              _context5.n = 22;
              break;
            }
            if (!user.is_activated) {
              _context5.n = 20;
              break;
            }
            _context5.n = 11;
            return _bcrypt["default"].compare(data.password, user.password);
          case 11:
            isValidPassword = _context5.v;
            if (!isValidPassword) {
              _context5.n = 18;
              break;
            }
            accessToken = createAccessToken(user_id);
            _refreshToken2 = createRefreshToken(user_id);
            _t9 = prefix;
            _context5.n = _t9 === 'qt' ? 12 : _t9 === 'lt' ? 12 : _t9 === 'pt' ? 12 : _t9 === 'bs' ? 14 : 16;
            break;
          case 12:
            _context5.n = 13;
            return _index["default"].Employee.update({
              refresh_token: _refreshToken2
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 13:
            result = _context5.v;
            return _context5.a(3, 17);
          case 14:
            _context5.n = 15;
            return _index["default"].Doctor.update({
              refresh_token: _refreshToken2
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 15:
            result = _context5.v;
            return _context5.a(3, 17);
          case 16:
            return _context5.a(3, 17);
          case 17:
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
            _context5.n = 19;
            break;
          case 18:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid login info'
            });
          case 19:
            _context5.n = 21;
            break;
          case 20:
            resolve({
              errCode: 4,
              message: 'Not activated yet'
            });
          case 21:
            _context5.n = 23;
            break;
          case 22:
            resolve({
              errCode: 8,
              message: 'This account is being blocked'
            });
          case 23:
            _context5.n = 25;
            break;
          case 24:
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Invalid login info'
            });
          case 25:
            _context5.n = 27;
            break;
          case 26:
            _context5.p = 26;
            _t0 = _context5.v;
            reject(_t0);
          case 27:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 26]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//ĐỔI MẬT KHẨU
var changePassword = function changePassword(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var user_id, prefix, user, isValidCurrent, isDifferent, hashNew, result, _t1, _t10;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (!(!data.user_id || !data.current_password || !data.new_password)) {
              _context6.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context6.n = 19;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context6.n = 2;
            return getUserByID(user_id);
          case 2:
            user = _context6.v;
            if (!user) {
              _context6.n = 18;
              break;
            }
            _context6.n = 3;
            return _bcrypt["default"].compare(data.current_password, user.password);
          case 3:
            isValidCurrent = _context6.v;
            if (!isValidCurrent) {
              _context6.n = 16;
              break;
            }
            _context6.n = 4;
            return _bcrypt["default"].compare(data.new_password, user.password);
          case 4:
            isDifferent = _context6.v;
            if (isDifferent) {
              _context6.n = 14;
              break;
            }
            _context6.n = 5;
            return _bcrypt["default"].hash(data.new_password, saltRounds);
          case 5:
            hashNew = _context6.v;
            _t1 = prefix;
            _context6.n = _t1 === 'bn' ? 6 : _t1 === 'qt' ? 8 : _t1 === 'lt' ? 8 : _t1 === 'pt' ? 8 : _t1 === 'bs' ? 10 : 12;
            break;
          case 6:
            _context6.n = 7;
            return _index["default"].Patient.update({
              password: hashNew
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 7:
            result = _context6.v;
            return _context6.a(3, 13);
          case 8:
            _context6.n = 9;
            return _index["default"].Employee.update({
              password: hashNew
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 9:
            result = _context6.v;
            return _context6.a(3, 13);
          case 10:
            _context6.n = 11;
            return _index["default"].Doctor.update({
              password: hashNew
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 11:
            result = _context6.v;
            return _context6.a(3, 13);
          case 12:
            return _context6.a(3, 13);
          case 13:
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
            _context6.n = 15;
            break;
          case 14:
            resolve({
              errCode: 2,
              message: 'Invalid new password'
            });
          case 15:
            _context6.n = 17;
            break;
          case 16:
            resolve({
              errCode: 2,
              message: 'Invalid current password'
            });
          case 17:
            _context6.n = 19;
            break;
          case 18:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 19:
            _context6.n = 21;
            break;
          case 20:
            _context6.p = 20;
            _t10 = _context6.v;
            reject(_t10);
          case 21:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 20]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//GỬI EMAIL CHO CASE QUÊN MẬT KHẨU
var sendResetLink = function sendResetLink(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var user, user_id, secretKey, token, _t11, _t12;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (!(!data.role || !data.email)) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context7.n = 12;
            break;
          case 1:
            _t11 = data.role;
            _context7.n = _t11 === 1 ? 2 : _t11 === 2 ? 4 : _t11 === 3 ? 4 : _t11 === 5 ? 4 : _t11 === 4 ? 6 : 8;
            break;
          case 2:
            _context7.n = 3;
            return _patient["default"].getByEmail(data.email);
          case 3:
            user = _context7.v;
            if (user) user_id = user.patient_id;
            return _context7.a(3, 9);
          case 4:
            _context7.n = 5;
            return _employee["default"].getByEmail(data.email);
          case 5:
            user = _context7.v;
            if (user) user_id = user.employee_id;
            return _context7.a(3, 9);
          case 6:
            _context7.n = 7;
            return _doctor["default"].getByEmail(data.email);
          case 7:
            user = _context7.v;
            if (user) user_id = user.doctor_id;
            return _context7.a(3, 9);
          case 8:
            return _context7.a(3, 9);
          case 9:
            if (!user) {
              _context7.n = 11;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            token = _jsonwebtoken["default"].sign({
              role: data.role,
              user_id: user_id
            }, secretKey, {
              expiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN
            });
            _context7.n = 10;
            return _mail["default"].forgotPassword({
              email: data.email,
              fullname: user.fullname,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/password/reset/").concat(user_id, "/").concat(token)
            });
          case 10:
            resolve({
              errCode: 0,
              message: 'Successful'
            });
            _context7.n = 12;
            break;
          case 11:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 12:
            _context7.n = 14;
            break;
          case 13:
            _context7.p = 13;
            _t12 = _context7.v;
            reject(_t12);
          case 14:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 13]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//XÁC MINH LINK ĐẶT LẠI MẬT KHẨU
var verifyResetLink = function verifyResetLink(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var user_id, user, secretKey, result, prefix, role, _t13, _t14, _t15;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (!(!data.user_id || !data.token)) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context8.n = 14;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            _context8.n = 2;
            return getUserByID(user_id);
          case 2:
            user = _context8.v;
            if (!user) {
              _context8.n = 13;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            _context8.p = 3;
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
            _context8.n = 12;
            break;
          case 4:
            _context8.p = 4;
            _t13 = _context8.v;
            prefix = user_id.slice(0, 2);
            _t14 = prefix;
            _context8.n = _t14 === 'bn' ? 5 : _t14 === 'qt' ? 6 : _t14 === 'lt' ? 7 : _t14 === 'bs' ? 8 : _t14 === 'pt' ? 9 : 10;
            break;
          case 5:
            role = 1;
            return _context8.a(3, 11);
          case 6:
            role = 2;
            return _context8.a(3, 11);
          case 7:
            role = 3;
            return _context8.a(3, 11);
          case 8:
            role = 4;
            return _context8.a(3, 11);
          case 9:
            role = 5;
            return _context8.a(3, 11);
          case 10:
            return _context8.a(3, 11);
          case 11:
            if (_t13.message === 'jwt expired') {
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
          case 12:
            _context8.n = 14;
            break;
          case 13:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 14:
            _context8.n = 16;
            break;
          case 15:
            _context8.p = 15;
            _t15 = _context8.v;
            reject(_t15);
          case 16:
            return _context8.a(2);
        }
      }, _callee8, null, [[3, 4], [0, 15]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//ĐẶT LẠI MẬT KHẨU CHO CASE QUÊN MẬT KHẨU
var resetPassword = function resetPassword(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var user_id, user, secretKey, payload, hashedPassword, result, _t16, _t17, _t18;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.user_id || !data.token || !data.password)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context9.n = 16;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            _context9.n = 2;
            return getUserByID(user_id);
          case 2:
            user = _context9.v;
            if (!user) {
              _context9.n = 15;
              break;
            }
            secretKey = process.env.JWT_RESET_PASSWORD + user.password;
            _context9.p = 3;
            payload = _jsonwebtoken["default"].verify(data.token, secretKey); //jwt.verify không có lỗi
            _context9.n = 4;
            return _util["default"].hashPassword(data.password);
          case 4:
            hashedPassword = _context9.v;
            _t16 = payload.role;
            _context9.n = _t16 === 1 ? 5 : _t16 === 2 ? 7 : _t16 === 3 ? 7 : _t16 === 5 ? 7 : _t16 === 4 ? 9 : 11;
            break;
          case 5:
            _context9.n = 6;
            return _index["default"].Patient.update({
              password: hashedPassword
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 6:
            result = _context9.v;
            return _context9.a(3, 12);
          case 7:
            _context9.n = 8;
            return _index["default"].Employee.update({
              password: hashedPassword
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 8:
            result = _context9.v;
            return _context9.a(3, 12);
          case 9:
            _context9.n = 10;
            return _index["default"].Doctor.update({
              password: hashedPassword
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 10:
            result = _context9.v;
            return _context9.a(3, 12);
          case 11:
            return _context9.a(3, 12);
          case 12:
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
            _context9.n = 14;
            break;
          case 13:
            _context9.p = 13;
            _t17 = _context9.v;
            if (_t17.message === 'jwt expired') {
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
          case 14:
            _context9.n = 16;
            break;
          case 15:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 16:
            _context9.n = 18;
            break;
          case 17:
            _context9.p = 17;
            _t18 = _context9.v;
            reject(_t18);
          case 18:
            return _context9.a(2);
        }
      }, _callee9, null, [[3, 13], [0, 17]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//KHÓA - MỞ KHÓA TÀI KHOẢN
var changeBlockStatus = function changeBlockStatus(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var admin_id, admin, isValidPassword, user_id, prefix, user, result, _t19, _t20;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.admin_id || !data.password || !data.user_id)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context0.n = 18;
            break;
          case 1:
            admin_id = data.admin_id.toLowerCase();
            _context0.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: admin_id,
                is_admin: true
              }
            });
          case 2:
            admin = _context0.v;
            if (!admin) {
              _context0.n = 17;
              break;
            }
            _context0.n = 3;
            return _bcrypt["default"].compare(data.password, admin.password);
          case 3:
            isValidPassword = _context0.v;
            if (!isValidPassword) {
              _context0.n = 15;
              break;
            }
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context0.n = 4;
            return getUserByID(user_id);
          case 4:
            user = _context0.v;
            if (!user) {
              _context0.n = 13;
              break;
            }
            _t19 = prefix;
            _context0.n = _t19 === 'bn' ? 5 : _t19 === 'qt' ? 7 : _t19 === 'lt' ? 7 : _t19 === 'pt' ? 7 : _t19 === 'bs' ? 9 : 11;
            break;
          case 5:
            _context0.n = 6;
            return _index["default"].Patient.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 6:
            result = _context0.v;
            return _context0.a(3, 12);
          case 7:
            _context0.n = 8;
            return _index["default"].Employee.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 8:
            result = _context0.v;
            return _context0.a(3, 12);
          case 9:
            _context0.n = 10;
            return _index["default"].Doctor.update({
              is_blocked: !user.is_blocked
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 10:
            result = _context0.v;
            return _context0.a(3, 12);
          case 11:
            return _context0.a(3, 12);
          case 12:
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
            _context0.n = 14;
            break;
          case 13:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 14:
            _context0.n = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              message: 'Invalid password'
            });
          case 16:
            _context0.n = 18;
            break;
          case 17:
            resolve({
              errCode: 1,
              message: "Admin doesn't exist"
            });
          case 18:
            _context0.n = 20;
            break;
          case 19:
            _context0.p = 19;
            _t20 = _context0.v;
            reject(_t20);
          case 20:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 19]]);
    }));
    return function (_x17, _x18) {
      return _ref0.apply(this, arguments);
    };
  }());
};

//ĐỔI EMAIL
var changeEmail = function changeEmail(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(resolve, reject) {
      var user_id, prefix, user, isValidPassword, result, patientByEmail, doctorByEmail, employeeByEmail, token, role, _t21, _t22, _t23;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            if (!(!data.user_id || !data.new_email || !data.password)) {
              _context1.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context1.n = 32;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _context1.n = 2;
            return getUserByID(user_id);
          case 2:
            user = _context1.v;
            if (!user) {
              _context1.n = 31;
              break;
            }
            _context1.n = 3;
            return _bcrypt["default"].compare(data.password, user.password);
          case 3:
            isValidPassword = _context1.v;
            if (!isValidPassword) {
              _context1.n = 29;
              break;
            }
            if (!(prefix === 'bn')) {
              _context1.n = 8;
              break;
            }
            _context1.n = 4;
            return _index["default"].Patient.findOne({
              where: {
                email: data.new_email
              }
            });
          case 4:
            patientByEmail = _context1.v;
            if (!(patientByEmail && patientByEmail.patient_id !== user_id)) {
              _context1.n = 5;
              break;
            }
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Email already exists'
            });
            _context1.n = 7;
            break;
          case 5:
            _context1.n = 6;
            return _index["default"].Patient.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                patient_id: user_id
              }
            });
          case 6:
            result = _context1.v;
          case 7:
            _context1.n = 17;
            break;
          case 8:
            _context1.n = 9;
            return _index["default"].Doctor.findOne({
              where: {
                email: data.new_email
              }
            });
          case 9:
            doctorByEmail = _context1.v;
            _context1.n = 10;
            return _index["default"].Employee.findOne({
              where: {
                email: data.new_email
              }
            });
          case 10:
            employeeByEmail = _context1.v;
            if (!(doctorByEmail && doctorByEmail.doctor_id !== user_id || employeeByEmail && employeeByEmail.employee_id !== user_id)) {
              _context1.n = 11;
              break;
            }
            resolve({
              errCode: 2,
              type: 'email',
              message: 'Email already exists'
            });
            _context1.n = 17;
            break;
          case 11:
            _t21 = prefix;
            _context1.n = _t21 === 'qt' ? 12 : _t21 === 'lt' ? 12 : _t21 === 'pt' ? 12 : _t21 === 'bs' ? 14 : 16;
            break;
          case 12:
            _context1.n = 13;
            return _index["default"].Employee.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                employee_id: user_id
              }
            });
          case 13:
            result = _context1.v;
            return _context1.a(3, 17);
          case 14:
            _context1.n = 15;
            return _index["default"].Doctor.update({
              email: data.new_email,
              is_activated: false
            }, {
              where: {
                doctor_id: user_id
              }
            });
          case 15:
            result = _context1.v;
            return _context1.a(3, 17);
          case 16:
            return _context1.a(3, 17);
          case 17:
            if (!(result[0] === 1)) {
              _context1.n = 27;
              break;
            }
            _context1.n = 18;
            return _bcrypt["default"].hash(data.new_email, saltRounds);
          case 18:
            token = _context1.v;
            _t22 = prefix;
            _context1.n = _t22 === 'bn' ? 19 : _t22 === 'qt' ? 20 : _t22 === 'lt' ? 21 : _t22 === 'bs' ? 22 : _t22 === 'pt' ? 23 : 24;
            break;
          case 19:
            role = 1;
            return _context1.a(3, 25);
          case 20:
            role = 2;
            return _context1.a(3, 25);
          case 21:
            role = 3;
            return _context1.a(3, 25);
          case 22:
            role = 4;
            return _context1.a(3, 25);
          case 23:
            role = 5;
            return _context1.a(3, 25);
          case 24:
            return _context1.a(3, 25);
          case 25:
            _context1.n = 26;
            return _mail["default"].verify({
              fullname: user.fullname,
              email: data.new_email,
              isPatient: prefix === 'bn' ? true : false,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/verify?role=").concat(role, "&email=").concat(data.new_email, "&token=").concat(token)
            });
          case 26:
            resolve({
              errCode: 0,
              message: 'Updated'
            });
            _context1.n = 28;
            break;
          case 27:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 28:
            _context1.n = 30;
            break;
          case 29:
            resolve({
              errCode: 2,
              type: 'password',
              message: 'Invalid password'
            });
          case 30:
            _context1.n = 32;
            break;
          case 31:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 32:
            _context1.n = 34;
            break;
          case 33:
            _context1.p = 33;
            _t23 = _context1.v;
            reject(_t23);
          case 34:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 33]]);
    }));
    return function (_x19, _x20) {
      return _ref1.apply(this, arguments);
    };
  }());
};

//KIỂM TRA PASSWORD (XÁC NHẬN LƯU THÔNG TIN)
var checkPassword = function checkPassword(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(resolve, reject) {
      var user_id, prefix, user, isValidPassword, _t24, _t25;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            _context10.p = 0;
            if (!(!data.user_id || !data.password)) {
              _context10.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context10.n = 12;
            break;
          case 1:
            user_id = data.user_id.toLowerCase();
            prefix = user_id.slice(0, 2);
            _t24 = prefix;
            _context10.n = _t24 === 'bn' ? 2 : _t24 === 'qt' ? 4 : _t24 === 'lt' ? 4 : _t24 === 'pt' ? 4 : _t24 === 'bs' ? 6 : 8;
            break;
          case 2:
            _context10.n = 3;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: user_id
              }
            });
          case 3:
            user = _context10.v;
            return _context10.a(3, 9);
          case 4:
            _context10.n = 5;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: user_id
              }
            });
          case 5:
            user = _context10.v;
            return _context10.a(3, 9);
          case 6:
            _context10.n = 7;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: user_id
              }
            });
          case 7:
            user = _context10.v;
            return _context10.a(3, 9);
          case 8:
            return _context10.a(3, 9);
          case 9:
            if (!user) {
              _context10.n = 11;
              break;
            }
            _context10.n = 10;
            return _bcrypt["default"].compare(data.password, user.password);
          case 10:
            isValidPassword = _context10.v;
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
            _context10.n = 12;
            break;
          case 11:
            resolve({
              errCode: 1,
              message: "User doesn't exist"
            });
          case 12:
            _context10.n = 14;
            break;
          case 13:
            _context10.p = 13;
            _t25 = _context10.v;
            reject(_t25);
          case 14:
            return _context10.a(2);
        }
      }, _callee10, null, [[0, 13]]);
    }));
    return function (_x21, _x22) {
      return _ref10.apply(this, arguments);
    };
  }());
};

//REFRESH TOKEN
var refreshToken = function refreshToken(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(resolve, reject) {
      var _refreshToken3;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
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
                  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(err, user) {
                    var prefix, refreshTokenInDB, newAccessToken, newRefreshToken, result, _t26, _t27;
                    return _regenerator().w(function (_context11) {
                      while (1) switch (_context11.n) {
                        case 0:
                          if (!err) {
                            _context11.n = 1;
                            break;
                          }
                          resolve({
                            errCode: 2,
                            message: 'Invalid refresh token'
                          });
                          _context11.n = 19;
                          break;
                        case 1:
                          prefix = user.user_id.slice(0, 2);
                          _t26 = prefix;
                          _context11.n = _t26 === 'bn' ? 2 : _t26 === 'qt' ? 4 : _t26 === 'lt' ? 4 : _t26 === 'pt' ? 4 : _t26 === 'bs' ? 6 : 8;
                          break;
                        case 2:
                          _context11.n = 3;
                          return _index["default"].Patient.findOne({
                            where: {
                              patient_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 3:
                          refreshTokenInDB = _context11.v;
                          return _context11.a(3, 9);
                        case 4:
                          _context11.n = 5;
                          return _index["default"].Employee.findOne({
                            where: {
                              employee_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 5:
                          refreshTokenInDB = _context11.v;
                          return _context11.a(3, 9);
                        case 6:
                          _context11.n = 7;
                          return _index["default"].Doctor.findOne({
                            where: {
                              doctor_id: user.user_id
                            },
                            attributes: ['refresh_token']
                          });
                        case 7:
                          refreshTokenInDB = _context11.v;
                          return _context11.a(3, 9);
                        case 8:
                          return _context11.a(3, 9);
                        case 9:
                          if (!(refreshTokenInDB.refresh_token == _refreshToken3)) {
                            _context11.n = 18;
                            break;
                          }
                          newAccessToken = createAccessToken(user.user_id);
                          newRefreshToken = createRefreshToken(user.user_id);
                          _t27 = prefix;
                          _context11.n = _t27 === 'bn' ? 10 : _t27 === 'qt' ? 12 : _t27 === 'lt' ? 12 : _t27 === 'pt' ? 12 : _t27 === 'bs' ? 14 : 16;
                          break;
                        case 10:
                          _context11.n = 11;
                          return _index["default"].Patient.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              patient_id: user.user_id
                            }
                          });
                        case 11:
                          result = _context11.v;
                          return _context11.a(3, 17);
                        case 12:
                          _context11.n = 13;
                          return _index["default"].Employee.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              employee_id: user.user_id
                            }
                          });
                        case 13:
                          result = _context11.v;
                          return _context11.a(3, 17);
                        case 14:
                          _context11.n = 15;
                          return _index["default"].Doctor.update({
                            refresh_token: newRefreshToken
                          }, {
                            where: {
                              doctor_id: user.user_id
                            }
                          });
                        case 15:
                          result = _context11.v;
                          return _context11.a(3, 17);
                        case 16:
                          return _context11.a(3, 17);
                        case 17:
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
                          _context11.n = 19;
                          break;
                        case 18:
                          resolve({
                            errCode: 2,
                            message: 'Invalid refresh token'
                          });
                        case 19:
                          return _context11.a(2);
                      }
                    }, _callee11);
                  }));
                  return function (_x25, _x26) {
                    return _ref12.apply(this, arguments);
                  };
                }());
              }
            } catch (e) {
              reject(e);
            }
          case 1:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function (_x23, _x24) {
      return _ref11.apply(this, arguments);
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