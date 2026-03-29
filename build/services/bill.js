"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
var _excluded = ["Services"];
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
//LẤY TẤT CẢ HÓA ĐƠN
var getAll = function getAll() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var bills, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _index["default"].Bill.findAll({
              order: [['createdAt', 'DESC']],
              include: [{
                model: _index["default"].Patient,
                attributes: ['patient_id', 'fullname', 'phone']
              }],
              raw: true,
              nest: true
            });
          case 1:
            bills = _context.v;
            resolve({
              errCode: 0,
              message: 'Get all bills',
              data: bills
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            reject(_t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//LẤY THEO ID
var getByID = function getByID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var bill_id, rawData, _rawData$, Services, rest, details, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            if (data.bill_id) {
              _context2.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context2.n = 3;
            break;
          case 1:
            bill_id = data.bill_id.toLowerCase();
            _context2.n = 2;
            return _index["default"].Bill.findAll({
              where: {
                bill_id: bill_id
              },
              include: [{
                model: _index["default"].Method,
                attributes: ['method_id', 'method_name']
              }, {
                model: _index["default"].Employee,
                attributes: ['employee_id', 'fullname']
              }, {
                model: _index["default"].Service,
                include: [{
                  model: _index["default"].Category
                }]
              }],
              raw: true,
              nest: true
            });
          case 2:
            rawData = _context2.v;
            if (rawData) {
              _rawData$ = rawData[0], Services = _rawData$.Services, rest = _objectWithoutProperties(_rawData$, _excluded);
              details = rawData.map(function (item) {
                return item.Services;
              });
              resolve({
                errCode: 0,
                message: 'Get bill by ID',
                data: _objectSpread(_objectSpread({}, rest), {}, {
                  details: details
                })
              });
            } else {
              resolve({
                errCode: 1,
                message: "Bill doesn't exist"
              });
            }
          case 3:
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            reject(_t2);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẬP HÓA ĐƠN
var createBill = function createBill(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var appointment_id, employee_id, patient_id, employee, patient, total, bill_id, newBill, list, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            if (!(data.appointment_id === undefined || !data.patient_id || !data.employee_id || !data.list)) {
              _context3.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context3.n = 14;
            break;
          case 1:
            appointment_id = data.appointment_id ? data.appointment_id.toLowerCase() : null;
            employee_id = data.employee_id.toLowerCase();
            patient_id = data.patient_id.toLowerCase();
            _context3.n = 2;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 2:
            employee = _context3.v;
            if (!employee) {
              _context3.n = 13;
              break;
            }
            _context3.n = 3;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 3:
            patient = _context3.v;
            if (!patient) {
              _context3.n = 11;
              break;
            }
            total = 0; //data.list là mảng chứa {service_id, price và quantity}
            data.list.forEach(function (item) {
              return total += item.quantity * item.price;
            });
            bill_id = _index2["default"].createID('hd');
            _context3.n = 4;
            return _index["default"].Bill.create({
              bill_id: bill_id,
              patient_id: patient_id,
              employee_id: employee_id,
              method_id: 1,
              total: total,
              status: 0
            });
          case 4:
            newBill = _context3.v;
            if (!newBill.dataValues.bill_id) {
              _context3.n = 9;
              break;
            }
            //data.list là mảng chứa {service_id, price và quantity}
            list = data.list.map(function (item) {
              return {
                bill_id: bill_id,
                service_id: item.service_id,
                quantity: item.quantity,
                subtotal: item.quantity * item.price
              };
            });
            _context3.n = 5;
            return _index["default"].BillService.bulkCreate(list);
          case 5:
            result = _context3.v;
            if (!(result.length === list.length)) {
              _context3.n = 7;
              break;
            }
            if (!appointment_id) {
              _context3.n = 6;
              break;
            }
            _context3.n = 6;
            return _index["default"].Appointment.update({
              status: 3
            },
            //đã hoàn thành lịch hẹn
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 6:
            resolve({
              errCode: 0,
              message: 'Created',
              data: {
                bill_id: bill_id
              }
            });
            _context3.n = 8;
            break;
          case 7:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 8:
            _context3.n = 10;
            break;
          case 9:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 10:
            _context3.n = 12;
            break;
          case 11:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 12:
            _context3.n = 14;
            break;
          case 13:
            resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            });
          case 14:
            _context3.n = 16;
            break;
          case 15:
            _context3.p = 15;
            _t3 = _context3.v;
            reject(_t3);
          case 16:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 15]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//XÁC NHẬN ĐÃ THANH TOÁN
var confirmBill = function confirmBill(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var bill_id, bill, result, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            if (!(!data.bill_id || data.method_id === undefined)) {
              _context4.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context4.n = 7;
            break;
          case 1:
            bill_id = data.bill_id.toLowerCase();
            _context4.n = 2;
            return _index["default"].Bill.findOne({
              where: {
                bill_id: bill_id
              }
            });
          case 2:
            bill = _context4.v;
            if (!bill) {
              _context4.n = 6;
              break;
            }
            if (bill.status) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return _index["default"].Bill.update({
              status: 1,
              method_id: data.method_id
            }, {
              where: {
                bill_id: bill_id
              }
            });
          case 3:
            result = _context4.v;
            if (result[0] === 1) {
              resolve({
                errCode: 0,
                message: 'Confirmed'
              });
            } else {
              resolve({
                errCode: 5,
                message: 'Failed'
              });
            }
            _context4.n = 5;
            break;
          case 4:
            resolve({
              errCode: 2,
              message: 'Incorrect status'
            });
          case 5:
            _context4.n = 7;
            break;
          case 6:
            resolve({
              errCode: 1,
              message: "Bill doesn't exist"
            });
          case 7:
            _context4.n = 9;
            break;
          case 8:
            _context4.p = 8;
            _t4 = _context4.v;
            reject(_t4);
          case 9:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//GỬI HÓA ĐƠN TỚI EMAIL
var sendToEmail = function sendToEmail(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var patient_id, patient, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            if (!(!data.patient_id || !data.filename || !data.file)) {
              _context5.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context5.n = 5;
            break;
          case 1:
            patient_id = data.patient_id.toLowerCase();
            _context5.n = 2;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 2:
            patient = _context5.v;
            if (!patient) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return _mail["default"].billInfo({
              email: patient.email,
              fullname: patient.fullname,
              filename: data.filename,
              file: data.file
            });
          case 3:
            resolve({
              errCode: 0,
              message: 'Sent to email'
            });
            _context5.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 5:
            _context5.n = 7;
            break;
          case 6:
            _context5.p = 6;
            _t5 = _context5.v;
            reject(_t5);
          case 7:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 6]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAll: getAll,
  getByID: getByID,
  createBill: createBill,
  confirmBill: confirmBill,
  sendToEmail: sendToEmail
};