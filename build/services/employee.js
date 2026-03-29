"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
require("dotenv").config();
var saltRounds = 10;

//LẤY NHÂN VIÊN THEO EMAIL
var getByEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, new Promise(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
              var employee, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return _index["default"].Employee.findOne({
                      where: {
                        email: email
                      }
                    });
                  case 1:
                    employee = _context.v;
                    resolve(employee);
                    _context.n = 3;
                    break;
                  case 2:
                    _context.p = 2;
                    _t = _context.v;
                    reject(_t);
                  case 3:
                    ;
                  case 4:
                    return _context.a(2);
                }
              }, _callee, null, [[0, 2]]);
            }));
            return function (_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
      }
    }, _callee2);
  }));
  return function getByEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

//LẤY NHÂN VIÊN THEO SỐ ĐIỆN THOẠI
var getByPhone = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(phone) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          return _context4.a(2, new Promise(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
              var employee, _t2;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    _context3.p = 0;
                    _context3.n = 1;
                    return _index["default"].Employee.findOne({
                      where: {
                        phone: phone
                      }
                    });
                  case 1:
                    employee = _context3.v;
                    resolve(employee);
                    _context3.n = 3;
                    break;
                  case 2:
                    _context3.p = 2;
                    _t2 = _context3.v;
                    reject(_t2);
                  case 3:
                    ;
                  case 4:
                    return _context3.a(2);
                }
              }, _callee3, null, [[0, 2]]);
            }));
            return function (_x5, _x6) {
              return _ref4.apply(this, arguments);
            };
          }()));
      }
    }, _callee4);
  }));
  return function getByPhone(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

//** API **//

//LẤY TẤT CẢ NHÂN VIÊN
var getAll = function getAll() {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var employees, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return _index["default"].Employee.findAll({
              attributes: {
                exclude: ["password", "refresh_token"]
              },
              where: {
                employee_id: _defineProperty({}, Op.ne, "none")
              },
              order: [["createdAt", "ASC"]]
            });
          case 1:
            employees = _context5.v;
            resolve({
              errCode: 0,
              message: "Get all employees",
              data: employees
            });
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t3 = _context5.v;
            reject(_t3);
          case 3:
            ;
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//LẤY NHÂN VIÊN THEO ID
var getByID = function getByID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var employee_id, employee, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (data.employee_id) {
              _context6.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context6.n = 3;
            break;
          case 1:
            employee_id = data.employee_id.toLowerCase();
            _context6.n = 2;
            return _index["default"].Employee.findOne({
              attributes: {
                exclude: ["password", "refresh_token"]
              },
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context6.v;
            if (employee) {
              resolve({
                errCode: 0,
                message: "Get employee by ID",
                data: employee
              });
            } else {
              resolve({
                errCode: 1,
                message: "Employee doesn't exist"
              });
            }
            ;
          case 3:
            ;
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t4 = _context6.v;
            reject(_t4);
          case 5:
            ;
          case 6:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
    }));
    return function (_x9, _x0) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//LẤY CÁC NHÂN VIÊN CỦA NGÀY DATE VÀ CA KHÁM SESSION_ID
var getAllBySchedule = function getAllBySchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var employeeSchedules, employeeIDList, employees, available, unavailable, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (!(!data.date || !data.session_id)) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.n = 4;
            break;
          case 1:
            _context7.n = 2;
            return _index["default"].EmployeeSchedule.findAll({
              include: [{
                model: _index["default"].Employee,
                attributes: [["employee_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"]
              }, {
                model: _index["default"].Schedule,
                where: {
                  session_id: data.session_id.toLowerCase(),
                  date: data.date
                }
              }],
              raw: true,
              nest: true
            });
          case 2:
            employeeSchedules = _context7.v;
            //lọc chỉ để lấy id
            employeeIDList = employeeSchedules.map(function (item) {
              return item.employee_id;
            }); //lấy tất cả nhân viên
            _context7.n = 3;
            return _index["default"].Employee.findAll({
              attributes: [["employee_id", "user_id"], "fullname", "avatar", "dob", "gender", "phone"],
              where: {
                employee_id: _defineProperty({}, Op.ne, "none")
              },
              order: [["createdAt", "ASC"]]
            });
          case 3:
            employees = _context7.v;
            //lọc để lấy các nhân viên chưa có lịch làm việc
            available = [];
            employees.forEach(function (employee) {
              if (!employeeIDList.includes(employee.user_id)) available.push(employee);
            });

            //cấu trúc lại các nhân viên đã có lịch làm việc
            unavailable = employeeSchedules.map(function (item) {
              return _objectSpread(_objectSpread({}, item.Employee), {}, {
                user_schedule_id: item.employee_schedule_id
              });
            });
            resolve({
              errCode: 0,
              message: "Get all for date and session_id",
              data: [].concat(available, _toConsumableArray(unavailable))
            });
          case 4:
            ;
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t5 = _context7.v;
            reject(_t5);
          case 6:
            ;
          case 7:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 5]]);
    }));
    return function (_x1, _x10) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//THÊM MỚI NHÂN VIÊN
var createEmployee = function createEmployee(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var employeeByEmail, employeeByPhone, doctorByEmail, doctorByphone, employee_id, is_admin, hashedPassword, newEmployee, token, _t6, _t7;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (!(!data.role || !data.fullname || !data.dob || data.gender === undefined || !data.phone || !data.email || !data.password)) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.n = 20;
            break;
          case 1:
            _context8.n = 2;
            return getByEmail(data.email);
          case 2:
            employeeByEmail = _context8.v;
            _context8.n = 3;
            return getByPhone(data.phone);
          case 3:
            employeeByPhone = _context8.v;
            _context8.n = 4;
            return _index["default"].Doctor.findOne({
              where: {
                email: data.email
              }
            });
          case 4:
            doctorByEmail = _context8.v;
            _context8.n = 5;
            return _index["default"].Doctor.findOne({
              where: {
                phone: data.phone
              }
            });
          case 5:
            doctorByphone = _context8.v;
            if (!(employeeByEmail || doctorByEmail)) {
              _context8.n = 6;
              break;
            }
            resolve({
              errCode: 2,
              type: "email",
              message: "Email already exists"
            });
            _context8.n = 19;
            break;
          case 6:
            if (!(employeeByPhone || doctorByphone)) {
              _context8.n = 7;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context8.n = 19;
            break;
          case 7:
            is_admin = false;
            _t6 = data.role;
            _context8.n = _t6 === 2 ? 8 : _t6 === 3 ? 9 : _t6 === 5 ? 10 : 11;
            break;
          case 8:
            //quản trị viên
            employee_id = _index2["default"].createID("qt");
            is_admin = true;
            return _context8.a(3, 12);
          case 9:
            //lễ tân
            employee_id = _index2["default"].createID("lt");
            return _context8.a(3, 12);
          case 10:
            //phụ tá
            employee_id = _index2["default"].createID("pt");
            return _context8.a(3, 12);
          case 11:
            return _context8.a(3, 12);
          case 12:
            ;
            _context8.n = 13;
            return _index2["default"].hashPassword(data.password);
          case 13:
            hashedPassword = _context8.v;
            _context8.n = 14;
            return _index["default"].Employee.create({
              employee_id: employee_id,
              is_admin: is_admin,
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              degree: data.degree,
              start_date: data.start_date,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city,
              email: data.email,
              password: hashedPassword,
              is_activated: false,
              is_blocked: false
            });
          case 14:
            newEmployee = _context8.v;
            if (!newEmployee.dataValues.employee_id) {
              _context8.n = 17;
              break;
            }
            _context8.n = 15;
            return _bcrypt["default"].hash(data.email, saltRounds);
          case 15:
            token = _context8.v;
            _context8.n = 16;
            return _mail["default"].verify(_objectSpread(_objectSpread({}, data), {}, {
              isPatient: false,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/verify?role=").concat(data.role, "&email=").concat(data.email, "&token=").concat(token)
            }));
          case 16:
            resolve({
              errCode: 0,
              message: "Created"
            });
            _context8.n = 18;
            break;
          case 17:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 18:
            ;
          case 19:
            ;
          case 20:
            ;
            _context8.n = 22;
            break;
          case 21:
            _context8.p = 21;
            _t7 = _context8.v;
            reject(_t7);
          case 22:
            ;
          case 23:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 21]]);
    }));
    return function (_x11, _x12) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT THÔNG TIN NHÂN VIÊN
var updateEmployee = function updateEmployee(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var employee_id, employee, employeeByEmail, employeeByPhone, doctorByEmail, doctorByPhone, newInfo, result, token, _t8;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.employee_id || !data.role || !data.fullname || !data.dob || data.gender === undefined || !data.phone || !data.email)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.n = 17;
            break;
          case 1:
            employee_id = data.employee_id.toLowerCase();
            _context9.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context9.v;
            if (!employee) {
              _context9.n = 15;
              break;
            }
            _context9.n = 3;
            return getByEmail(data.email);
          case 3:
            employeeByEmail = _context9.v;
            _context9.n = 4;
            return getByPhone(data.phone);
          case 4:
            employeeByPhone = _context9.v;
            _context9.n = 5;
            return _index["default"].Doctor.findOne({
              where: {
                email: data.email
              }
            });
          case 5:
            doctorByEmail = _context9.v;
            _context9.n = 6;
            return _index["default"].Doctor.findOne({
              where: {
                phone: data.phone
              }
            });
          case 6:
            doctorByPhone = _context9.v;
            if (!(employeeByEmail && employeeByEmail.employee_id !== employee_id || doctorByEmail)) {
              _context9.n = 7;
              break;
            }
            resolve({
              errCode: 2,
              type: "email",
              message: "Email already exists"
            });
            _context9.n = 14;
            break;
          case 7:
            if (!(employeeByPhone && employeeByPhone.employee_id !== employee_id || doctorByPhone)) {
              _context9.n = 8;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context9.n = 14;
            break;
          case 8:
            newInfo = {
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              degree: data.degree,
              start_date: data.start_date,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city,
              email: data.email
            }; //trạng thái tài khoản khi không cập nhật email
            if (data.email === employee.email) newInfo = _objectSpread(_objectSpread({}, newInfo), {}, {
              is_activated: employee.is_activated
            });

            //trạng thái tài khoản khi có cập nhật email
            else newInfo = _objectSpread(_objectSpread({}, newInfo), {}, {
              is_activated: false
            });
            _context9.n = 9;
            return _index["default"].Employee.update(newInfo, {
              where: {
                employee_id: employee_id
              }
            });
          case 9:
            result = _context9.v;
            if (!(result[0] === 1)) {
              _context9.n = 12;
              break;
            }
            if (!(data.email !== employee.email)) {
              _context9.n = 11;
              break;
            }
            _context9.n = 10;
            return _bcrypt["default"].hash(data.email, saltRounds);
          case 10:
            token = _context9.v;
            _context9.n = 11;
            return _mail["default"].verify(_objectSpread(_objectSpread({}, data), {}, {
              isPatient: false,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/verify?role=").concat(data.role, "&email=").concat(data.email, "&token=").concat(token)
            }));
          case 11:
            ;
            resolve({
              errCode: 0,
              message: "Updated"
            });
            _context9.n = 13;
            break;
          case 12:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 13:
            ;
          case 14:
            ;
            _context9.n = 16;
            break;
          case 15:
            resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            });
          case 16:
            ;
          case 17:
            ;
            _context9.n = 19;
            break;
          case 18:
            _context9.p = 18;
            _t8 = _context9.v;
            reject(_t8);
          case 19:
            ;
          case 20:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 18]]);
    }));
    return function (_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT PROFILE
var updateProfile = function updateProfile(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var employee_id, employee, employeeByPhone, doctorByPhone, newInfo, result, _t9;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.employee_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context0.n = 10;
            break;
          case 1:
            employee_id = data.employee_id.toLowerCase();
            _context0.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context0.v;
            if (!employee) {
              _context0.n = 8;
              break;
            }
            _context0.n = 3;
            return getByPhone(data.phone);
          case 3:
            employeeByPhone = _context0.v;
            _context0.n = 4;
            return _index["default"].Doctor.findOne({
              where: {
                phone: data.phone
              }
            });
          case 4:
            doctorByPhone = _context0.v;
            if (!(employeeByPhone && employeeByPhone.employee_id !== employee_id || doctorByPhone)) {
              _context0.n = 5;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context0.n = 7;
            break;
          case 5:
            newInfo = {
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              start_date: data.start_date,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city
            };
            _context0.n = 6;
            return _index["default"].Employee.update(newInfo, {
              where: {
                employee_id: employee_id
              }
            });
          case 6:
            result = _context0.v;
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: "Updated"
              });
            } else {
              resolve({
                errCode: 5,
                message: "Failed"
              });
            }
            ;
          case 7:
            ;
            _context0.n = 9;
            break;
          case 8:
            resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            });
          case 9:
            ;
          case 10:
            ;
            _context0.n = 12;
            break;
          case 11:
            _context0.p = 11;
            _t9 = _context0.v;
            reject(_t9);
          case 12:
            ;
          case 13:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 11]]);
    }));
    return function (_x15, _x16) {
      return _ref0.apply(this, arguments);
    };
  }());
};
module.exports = {
  getByEmail: getByEmail,
  getAll: getAll,
  getByID: getByID,
  getAllBySchedule: getAllBySchedule,
  createEmployee: createEmployee,
  updateEmployee: updateEmployee,
  updateProfile: updateProfile
};