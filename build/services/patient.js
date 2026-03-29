"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
var _excluded = ["Patient"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
require("dotenv").config();
var saltRounds = 10;

//LẤY BỆNH NHÂN THEO EMAIL
var getByEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, new Promise(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
              var patient, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return _index["default"].Patient.findOne({
                      where: {
                        email: email
                      }
                    });
                  case 1:
                    patient = _context.v;
                    resolve(patient);
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

//LẤY BỆNH NHÂN THEO SỐ ĐIỆN THOẠI
var getByPhone = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(phone) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          return _context4.a(2, new Promise(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
              var patient, _t2;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    _context3.p = 0;
                    _context3.n = 1;
                    return _index["default"].Patient.findOne({
                      where: {
                        phone: phone
                      }
                    });
                  case 1:
                    patient = _context3.v;
                    resolve(patient);
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

//LẤY TẤT CẢ BỆNH NHÂN
var getAll = function getAll() {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var patients, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return _index["default"].Patient.findAll({
              attributes: {
                exclude: ["password", "refresh_token"]
              },
              order: [["createdAt", "ASC"]]
            });
          case 1:
            patients = _context5.v;
            resolve({
              errCode: 0,
              message: "Get all patients",
              data: patients
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

//LẤY BỆNH NHÂN THEO ID
var getByID = function getByID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var patient_id, patient, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (data.patient_id) {
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
            patient_id = data.patient_id.toLowerCase();
            _context6.n = 2;
            return _index["default"].Patient.findOne({
              attributes: {
                exclude: ["password", "refresh_token"]
              },
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context6.v;
            if (patient) {
              resolve({
                errCode: 0,
                message: "Get patient by ID",
                data: patient
              });
            } else {
              resolve({
                errCode: 1,
                message: "Patient doesn't exist"
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

//LẤY HỒ SƠ BỆNH ÁN
var getMedicalRecord = function getMedicalRecord(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var patient_id, patient, rawData, records, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (data.patient_id) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.n = 6;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context7.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context7.v;
            if (!patient) {
              _context7.n = 4;
              break;
            }
            _context7.n = 3;
            return _index["default"].Appointment.findAll({
              where: {
                patient_id: patient_id
              },
              include: [{
                model: _index["default"].DoctorSchedule,
                include: [{
                  model: _index["default"].Doctor,
                  attributes: ["doctor_id", "fullname"]
                }, {
                  model: _index["default"].Schedule,
                  attributes: ["date"],
                  include: [{
                    model: _index["default"].Session,
                    attributes: ["session_id", "time"]
                  }]
                }]
              }, {
                model: _index["default"].Service
              }],
              order: [[_index["default"].DoctorSchedule, _index["default"].Schedule, "date", "ASC"]],
              raw: true,
              nest: true
            });
          case 3:
            rawData = _context7.v;
            records = rawData.filter(function (item) {
              return item.Services.service_id !== null;
            });
            resolve({
              errCode: 0,
              message: "Get medical record",
              data: records
            });
            _context7.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 5:
            ;
          case 6:
            ;
            _context7.n = 8;
            break;
          case 7:
            _context7.p = 7;
            _t5 = _context7.v;
            reject(_t5);
          case 8:
            ;
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return function (_x1, _x10) {
      return _ref7.apply(this, arguments);
    };
  }());
};

//LẤY DANH SÁCH BỆNH NHÂN ĐƯỢC ĐIỀU TRỊ THEO BÁC SĨ
var getAllByDoctorID = function getAllByDoctorID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(resolve, reject) {
      var doctor_id, doctor, rawData, IDList, patients, _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            if (data.doctor_id) {
              _context8.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context8.n = 7;
            break;
          case 1:
            doctor_id = data.doctor_id.toLowerCase();
            _context8.n = 2;
            return _index["default"].Doctor.findOne({
              where: {
                doctor_id: doctor_id
              }
            });
          case 2:
            doctor = _context8.v;
            if (!doctor) {
              _context8.n = 5;
              break;
            }
            _context8.n = 3;
            return _index["default"].Appointment.findAll({
              include: [{
                model: _index["default"].Patient
              }, {
                model: _index["default"].DoctorSchedule,
                where: {
                  doctor_id: doctor_id
                }
              }],
              raw: true,
              nest: true
            });
          case 3:
            rawData = _context8.v;
            IDList = [];
            rawData.forEach(function (item) {
              var Patient = item.Patient,
                rest = _objectWithoutProperties(item, _excluded);
              if (!IDList.includes(Patient.patient_id)) IDList.push(Patient.patient_id);
            });
            _context8.n = 4;
            return _index["default"].Patient.findAll({
              where: {
                patient_id: IDList
              },
              attributes: {
                exclude: ["password", "refresh_token"]
              },
              order: [["createdAt", "ASC"]]
            });
          case 4:
            patients = _context8.v;
            resolve({
              errCode: 0,
              message: "Get all patients by doctor ID",
              data: patients
            });
            _context8.n = 6;
            break;
          case 5:
            resolve({
              errCode: 1,
              message: "Doctor doesn't exist"
            });
          case 6:
            ;
          case 7:
            ;
            _context8.n = 9;
            break;
          case 8:
            _context8.p = 8;
            _t6 = _context8.v;
            reject(_t6);
          case 9:
            ;
          case 10:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 8]]);
    }));
    return function (_x11, _x12) {
      return _ref8.apply(this, arguments);
    };
  }());
};

//THÊM MỚI BỆNH NHÂN
var createPatient = function createPatient(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(resolve, reject) {
      var patientByEmail, patientByPhone, patient_id, hashedPassword, newPatient, token, _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (!(!data.fullname || !data.dob || data.gender === undefined || !data.phone || !data.email || !data.password)) {
              _context9.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context9.n = 13;
            break;
          case 1:
            _context9.n = 2;
            return getByEmail(data.email);
          case 2:
            patientByEmail = _context9.v;
            _context9.n = 3;
            return getByPhone(data.phone);
          case 3:
            patientByPhone = _context9.v;
            if (!patientByEmail) {
              _context9.n = 4;
              break;
            }
            resolve({
              errCode: 2,
              type: "email",
              message: "Email already exists"
            });
            _context9.n = 12;
            break;
          case 4:
            if (!patientByPhone) {
              _context9.n = 5;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context9.n = 12;
            break;
          case 5:
            patient_id = _index2["default"].createID("bn");
            _context9.n = 6;
            return _index2["default"].hashPassword(data.password);
          case 6:
            hashedPassword = _context9.v;
            _context9.n = 7;
            return _index["default"].Patient.create({
              patient_id: patient_id,
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city,
              email: data.email,
              password: hashedPassword,
              is_activated: false,
              is_blocked: false
            });
          case 7:
            newPatient = _context9.v;
            if (!newPatient.dataValues.patient_id) {
              _context9.n = 10;
              break;
            }
            _context9.n = 8;
            return _bcrypt["default"].hash(data.email, saltRounds);
          case 8:
            token = _context9.v;
            _context9.n = 9;
            return _mail["default"].verify(_objectSpread(_objectSpread({}, data), {}, {
              isPatient: true,
              redirectLink: "".concat(process.env.BACKEND_URL, "/api/auth/verify?role=1&email=").concat(data.email, "&token=").concat(token)
            }));
          case 9:
            resolve({
              errCode: 0,
              message: "Created"
            });
            _context9.n = 11;
            break;
          case 10:
            resolve({
              errCode: 5,
              message: "Failed"
            });
          case 11:
            ;
          case 12:
            ;
          case 13:
            ;
            _context9.n = 15;
            break;
          case 14:
            _context9.p = 14;
            _t7 = _context9.v;
            reject(_t7);
          case 15:
            ;
          case 16:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 14]]);
    }));
    return function (_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT THÔNG TIN BỆNH NHÂN
var updatePatient = function updatePatient(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(resolve, reject) {
      var patient_id, patient, patientByPhone, newInfo, result, _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            _context0.p = 0;
            if (!(!data.patient_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone)) {
              _context0.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context0.n = 9;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context0.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context0.v;
            if (!patient) {
              _context0.n = 7;
              break;
            }
            _context0.n = 3;
            return getByPhone(data.phone);
          case 3:
            patientByPhone = _context0.v;
            if (!(patientByPhone && patientByPhone.patient_id !== patient_id)) {
              _context0.n = 4;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context0.n = 6;
            break;
          case 4:
            newInfo = {
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city
            };
            _context0.n = 5;
            return _index["default"].Patient.update(newInfo, {
              where: {
                patient_id: patient_id
              }
            });
          case 5:
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
          case 6:
            ;
            _context0.n = 8;
            break;
          case 7:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 8:
            ;
          case 9:
            ;
            _context0.n = 11;
            break;
          case 10:
            _context0.p = 10;
            _t8 = _context0.v;
            reject(_t8);
          case 11:
            ;
          case 12:
            return _context0.a(2);
        }
      }, _callee0, null, [[0, 10]]);
    }));
    return function (_x15, _x16) {
      return _ref0.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT PROFILE
var updateProfile = function updateProfile(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(resolve, reject) {
      var patient_id, patient, patientByPhone, newInfo, result, _t9;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            if (!(!data.patient_id || !data.fullname || !data.dob || data.gender === undefined || !data.phone)) {
              _context1.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context1.n = 9;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context1.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context1.v;
            if (!patient) {
              _context1.n = 7;
              break;
            }
            _context1.n = 3;
            return getByPhone(data.phone);
          case 3:
            patientByPhone = _context1.v;
            if (!(patientByPhone && patientByPhone.patient_id !== patient_id)) {
              _context1.n = 4;
              break;
            }
            resolve({
              errCode: 2,
              type: "phone",
              message: "Phone already exists"
            });
            _context1.n = 6;
            break;
          case 4:
            newInfo = {
              fullname: data.fullname,
              avatar: data.avatar,
              dob: data.dob,
              gender: data.gender,
              phone: data.phone,
              street: data.street,
              ward: data.ward,
              district: data.district,
              city: data.city
            };
            _context1.n = 5;
            return _index["default"].Patient.update(newInfo, {
              where: {
                patient_id: patient_id
              }
            });
          case 5:
            result = _context1.v;
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
          case 6:
            ;
            _context1.n = 8;
            break;
          case 7:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 8:
            ;
          case 9:
            ;
            _context1.n = 11;
            break;
          case 10:
            _context1.p = 10;
            _t9 = _context1.v;
            reject(_t9);
          case 11:
            ;
          case 12:
            return _context1.a(2);
        }
      }, _callee1, null, [[0, 10]]);
    }));
    return function (_x17, _x18) {
      return _ref1.apply(this, arguments);
    };
  }());
};
module.exports = {
  getByEmail: getByEmail,
  getAll: getAll,
  getByID: getByID,
  getMedicalRecord: getMedicalRecord,
  getAllByDoctorID: getAllByDoctorID,
  createPatient: createPatient,
  updatePatient: updatePatient,
  updateProfile: updateProfile
};