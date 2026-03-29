"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();

//XÁC THỰC BỆNH NHÂN
var verifyPatient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              if (user.user_id.slice(0, 2) === "bn") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context.n = 2;
          break;
        case 1:
          return _context.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function verifyPatient(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

//XÁC THỰC QUẢN TRỊ VIÊN
var verifyAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context2.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              if (user.user_id.slice(0, 2) === "qt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context2.n = 2;
          break;
        case 1:
          return _context2.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return function verifyAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

//XÁC THỰC LỄ TÂN
var verifyReceptionist = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context3.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              if (user.user_id.slice(0, 2) === "lt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context3.n = 2;
          break;
        case 1:
          return _context3.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return function verifyReceptionist(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

//XÁC THỰC BÁC SĨ
var verifyDoctor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context4.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              if (user.user_id.slice(0, 2) === "bs") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context4.n = 2;
          break;
        case 1:
          return _context4.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return function verifyDoctor(_x0, _x1, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

//XÁC THỰC NGƯỜI DÙNG (BN, QT, LT, BS, PT)
var verifyUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context5.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "bn" || prefix === "qt" || prefix === "lt" || prefix === "bs" || prefix === "pt") {
                next();
              } else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context5.n = 2;
          break;
        case 1:
          return _context5.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return function verifyUser(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

//XÁC THỰC ADMIN / LỄ TÂN
var verifyAdminOrReceptionist = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context6.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "qt" || prefix === "lt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context6.n = 2;
          break;
        case 1:
          return _context6.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return function verifyAdminOrReceptionist(_x14, _x15, _x16) {
    return _ref6.apply(this, arguments);
  };
}();

//XÁC THỰC LỄ TÂN / BÁC SĨ
var verifyReceptionistOrDoctor = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context7.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "lt" || prefix === "bs") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context7.n = 2;
          break;
        case 1:
          return _context7.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context7.a(2);
      }
    }, _callee7);
  }));
  return function verifyReceptionistOrDoctor(_x17, _x18, _x19) {
    return _ref7.apply(this, arguments);
  };
}();

//XÁC THỰC ADMIN / LỄ TÂN / BÁC SĨ
var verifyAdminOrReceptionistOrDoctor = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context8.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "qt" || prefix === "lt" || prefix === "bs") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context8.n = 2;
          break;
        case 1:
          return _context8.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context8.a(2);
      }
    }, _callee8);
  }));
  return function verifyAdminOrReceptionistOrDoctor(_x20, _x21, _x22) {
    return _ref8.apply(this, arguments);
  };
}();

//XÁC THỰC BỆNH NHÂN / LỄ TÂN / BÁC SĨ
var verifyPatientOrReceptionistOrDoctor = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context9.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "bn" || prefix === "lt" || prefix === "bs") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context9.n = 2;
          break;
        case 1:
          return _context9.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context9.a(2);
      }
    }, _callee9);
  }));
  return function verifyPatientOrReceptionistOrDoctor(_x23, _x24, _x25) {
    return _ref9.apply(this, arguments);
  };
}();

//XÁC THỰC ADMIN / LỄ TÂN / BÁC SĨ / PHỤ TÁ
var verifyAdminOrReceptionistOrDoctorOrAssistant = /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context0.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "qt" || prefix === "lt" || prefix === "bs" || prefix === "pt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context0.n = 2;
          break;
        case 1:
          return _context0.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context0.a(2);
      }
    }, _callee0);
  }));
  return function verifyAdminOrReceptionistOrDoctorOrAssistant(_x26, _x27, _x28) {
    return _ref0.apply(this, arguments);
  };
}();

//XÁC THỰC LỄ TÂN / BÁC SĨ / PHỤ TÁ
var verifyReceptionistOrDoctorOrAssistant = /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context1.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "lt" || prefix === "bs" || prefix === "pt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context1.n = 2;
          break;
        case 1:
          return _context1.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return function verifyReceptionistOrDoctorOrAssistant(_x29, _x30, _x31) {
    return _ref1.apply(this, arguments);
  };
}();

//XÁC THỰC ADMIN / LỄ TÂN / PHỤ TÁ
var verifyAdminOrReceptionistOrAssistant = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context10.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "qt" || prefix === "lt" || prefix === "pt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context10.n = 2;
          break;
        case 1:
          return _context10.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return function verifyAdminOrReceptionistOrAssistant(_x32, _x33, _x34) {
    return _ref10.apply(this, arguments);
  };
}();

//XÁC THỰC BỆNH NHÂN / ADMIN / LỄ TÂN
var verifyPatientOrAdminOrReceptionist = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context11.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "bn" || prefix === "qt" || prefix === "lt") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context11.n = 2;
          break;
        case 1:
          return _context11.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context11.a(2);
      }
    }, _callee11);
  }));
  return function verifyPatientOrAdminOrReceptionist(_x35, _x36, _x37) {
    return _ref11.apply(this, arguments);
  };
}();

//XÁC THỰC BỆNH NHÂN / ADMIN / LỄ TÂN / BÁC SĨ
var verifyPatientOrAdminOrReceptionistOrDoctor = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res, next) {
    var token, accessToken;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          token = req.headers.token;
          if (!token) {
            _context12.n = 1;
            break;
          }
          accessToken = token.split(" ")[1];
          _jsonwebtoken["default"].verify(accessToken, process.env.JWT_ACCESS_TOKEN, function (err, user) {
            if (err) {
              return res.status(403).json("Token is not valid");
            } else {
              var prefix = user.user_id.slice(0, 2);
              if (prefix === "bn" || prefix === "qt" || prefix === "lt" || prefix === "bs") next();else return res.status(403).json("Role is not valid");
            }
            ;
          });
          _context12.n = 2;
          break;
        case 1:
          return _context12.a(2, res.status(401).json("You are not authenticated"));
        case 2:
          return _context12.a(2);
      }
    }, _callee12);
  }));
  return function verifyPatientOrAdminOrReceptionistOrDoctor(_x38, _x39, _x40) {
    return _ref12.apply(this, arguments);
  };
}();
module.exports = {
  verifyPatient: verifyPatient,
  verifyAdmin: verifyAdmin,
  verifyReceptionist: verifyReceptionist,
  verifyDoctor: verifyDoctor,
  verifyUser: verifyUser,
  verifyAdminOrReceptionist: verifyAdminOrReceptionist,
  verifyReceptionistOrDoctor: verifyReceptionistOrDoctor,
  verifyAdminOrReceptionistOrDoctor: verifyAdminOrReceptionistOrDoctor,
  verifyPatientOrReceptionistOrDoctor: verifyPatientOrReceptionistOrDoctor,
  verifyAdminOrReceptionistOrDoctorOrAssistant: verifyAdminOrReceptionistOrDoctorOrAssistant,
  verifyReceptionistOrDoctorOrAssistant: verifyReceptionistOrDoctorOrAssistant,
  verifyAdminOrReceptionistOrAssistant: verifyAdminOrReceptionistOrAssistant,
  verifyPatientOrAdminOrReceptionist: verifyPatientOrAdminOrReceptionist,
  verifyPatientOrAdminOrReceptionistOrDoctor: verifyPatientOrAdminOrReceptionistOrDoctor
};