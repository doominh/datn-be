"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
var _mail = _interopRequireDefault(require("./mail"));
var _excluded = ["Services"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//LẤY TẤT CẢ HÓA ĐƠN
var getAll = function getAll() {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var bills;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].Bill.findAll({
              order: [['createdAt', 'DESC']],
              include: [{
                model: _index["default"].Patient,
                attributes: ['patient_id', 'fullname', 'phone']
              }],
              raw: true,
              nest: true
            });
          case 3:
            bills = _context.sent;
            resolve({
              errCode: 0,
              message: 'Get all bills',
              data: bills
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//LẤY THEO ID
var getByID = function getByID(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var bill_id, rawData, _rawData$, Services, rest, details;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (data.bill_id) {
              _context2.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context2.next = 10;
            break;
          case 5:
            bill_id = data.bill_id.toLowerCase();
            _context2.next = 8;
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
          case 8:
            rawData = _context2.sent;
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
          case 10:
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẬP HÓA ĐƠN
var createBill = function createBill(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var appointment_id, employee_id, patient_id, employee, patient, total, bill_id, newBill, list, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(data.appointment_id === undefined || !data.patient_id || !data.employee_id || !data.list)) {
              _context3.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context3.next = 44;
            break;
          case 5:
            appointment_id = data.appointment_id ? data.appointment_id.toLowerCase() : null;
            employee_id = data.employee_id.toLowerCase();
            patient_id = data.patient_id.toLowerCase();
            _context3.next = 10;
            return _index["default"].Employee.findOne({
              where: {
                employee_id: employee_id
              }
            });
          case 10:
            employee = _context3.sent;
            if (!employee) {
              _context3.next = 43;
              break;
            }
            _context3.next = 14;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 14:
            patient = _context3.sent;
            if (!patient) {
              _context3.next = 40;
              break;
            }
            total = 0; //data.list là mảng chứa {service_id, price và quantity}
            data.list.forEach(function (item) {
              return total += item.quantity * item.price;
            });
            bill_id = _index2["default"].createID('hd');
            _context3.next = 21;
            return _index["default"].Bill.create({
              bill_id: bill_id,
              patient_id: patient_id,
              employee_id: employee_id,
              method_id: 1,
              total: total,
              status: 0
            });
          case 21:
            newBill = _context3.sent;
            if (!newBill.dataValues.bill_id) {
              _context3.next = 37;
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
            _context3.next = 26;
            return _index["default"].BillService.bulkCreate(list);
          case 26:
            result = _context3.sent;
            if (!(result.length === list.length)) {
              _context3.next = 34;
              break;
            }
            if (!appointment_id) {
              _context3.next = 31;
              break;
            }
            _context3.next = 31;
            return _index["default"].Appointment.update({
              status: 3
            },
            //đã hoàn thành lịch hẹn
            {
              where: {
                appointment_id: appointment_id
              }
            });
          case 31:
            resolve({
              errCode: 0,
              message: 'Created',
              data: {
                bill_id: bill_id
              }
            });
            _context3.next = 35;
            break;
          case 34:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 35:
            _context3.next = 38;
            break;
          case 37:
            resolve({
              errCode: 5,
              message: 'Failed'
            });
          case 38:
            _context3.next = 41;
            break;
          case 40:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 41:
            _context3.next = 44;
            break;
          case 43:
            resolve({
              errCode: 1,
              message: "Employee doesn't exist"
            });
          case 44:
            _context3.next = 49;
            break;
          case 46:
            _context3.prev = 46;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 49:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 46]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//XÁC NHẬN ĐÃ THANH TOÁN
var confirmBill = function confirmBill(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var bill_id, bill, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (!(!data.bill_id || data.method_id === undefined)) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context4.next = 21;
            break;
          case 5:
            bill_id = data.bill_id.toLowerCase();
            _context4.next = 8;
            return _index["default"].Bill.findOne({
              where: {
                bill_id: bill_id
              }
            });
          case 8:
            bill = _context4.sent;
            if (!bill) {
              _context4.next = 20;
              break;
            }
            if (bill.status) {
              _context4.next = 17;
              break;
            }
            _context4.next = 13;
            return _index["default"].Bill.update({
              status: 1,
              method_id: data.method_id
            }, {
              where: {
                bill_id: bill_id
              }
            });
          case 13:
            result = _context4.sent;
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
            _context4.next = 18;
            break;
          case 17:
            resolve({
              errCode: 2,
              message: 'Incorrect status'
            });
          case 18:
            _context4.next = 21;
            break;
          case 20:
            resolve({
              errCode: 1,
              message: "Bill doesn't exist"
            });
          case 21:
            _context4.next = 26;
            break;
          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 26:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 23]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//GỬI HÓA ĐƠN TỚI EMAIL
var sendToEmail = function sendToEmail(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var patient_id, patient;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(!data.patient_id || !data.filename || !data.file)) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 3,
              message: 'Missing params'
            });
            _context5.next = 16;
            break;
          case 5:
            patient_id = data.patient_id.toLowerCase();
            _context5.next = 8;
            return _index["default"].Patient.findOne({
              where: {
                patient_id: patient_id
              }
            });
          case 8:
            patient = _context5.sent;
            if (!patient) {
              _context5.next = 15;
              break;
            }
            _context5.next = 12;
            return _mail["default"].billInfo({
              email: patient.email,
              fullname: patient.fullname,
              filename: data.filename,
              file: data.file
            });
          case 12:
            resolve({
              errCode: 0,
              message: 'Sent to email'
            });
            _context5.next = 16;
            break;
          case 15:
            resolve({
              errCode: 1,
              message: "Patient doesn't exist"
            });
          case 16:
            _context5.next = 21;
            break;
          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 21:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 18]]);
    }));
    return function (_x9, _x10) {
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