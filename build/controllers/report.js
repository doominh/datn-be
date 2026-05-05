"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _exceljs = _interopRequireDefault(require("exceljs"));
var _report = _interopRequireDefault(require("../services/report"));
var _moment = _interopRequireWildcard(require("moment"));
var _index = _interopRequireDefault(require("../util/index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//LẤY DOANH THU CỦA NGÀY HIỆN TẠI
var handleGetCurrentRevenue = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _report["default"].getCurrentRevenue();
        case 3:
          result = _context.sent;
          return _context.abrupt("return", res.status(200).json(result));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function handleGetCurrentRevenue(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//LẤY SỐ LỊCH HẸN CỦA NGÀY HIỆN TẠI
var handleGetCurrentAppointment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _report["default"].getCurrentAppointment();
        case 3:
          result = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(result));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function handleGetCurrentAppointment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//LẤY SỐ BỆNH NHÂN MỚI CỦA NGÀY HIỆN TẠI
var handleGetCurrentPatient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _report["default"].getCurrentPatient();
        case 3:
          result = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(result));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function handleGetCurrentPatient(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU DỊCH VỤ ĐƯỢC SỬ DỤNG TRONG 7 NGÀY QUA
var handleGetServicesFor7Days = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _report["default"].getServicesFor7Days();
        case 3:
          result = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(result));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function handleGetServicesFor7Days(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU LỊCH HẸN TRONG 7 NGÀY QUA
var handleGetAppointmentsFor7Days = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _report["default"].getAppointmentsFor7Days();
        case 3:
          result = _context5.sent;
          return _context5.abrupt("return", res.status(200).json(result));
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function handleGetAppointmentsFor7Days(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//LẤY DỮ LIỆU DOANH THU TRONG 7 NGÀY QUA
var handleGetRevenueFor7Days = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _report["default"].getRevenueFor7Days();
        case 3:
          result = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(result));
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 11:
          ;
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function handleGetRevenueFor7Days(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL LỊCH LÀM VIỆC THEO THÁNG
var handleReportSchedule = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$params, month, year, data, workbook, sheet, maxColumns, lengthDayOfMonth, dayColumns, infoColumns, row;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$params = req.params, month = _req$params.month, year = _req$params.year;
          _context7.next = 4;
          return _report["default"].reportSchedule(req.params);
        case 4:
          data = _context7.sent;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("LichLamViec_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Mã nhân viên",
            key: "user_id",
            width: 15
          }, {
            header: "Chức vụ",
            key: "role",
            width: 15
          }, {
            header: "Họ và tên",
            key: "fullname",
            width: 30
          }, {
            header: "Ca khám",
            key: "time",
            width: 15
          }].concat(_toConsumableArray(data.onlyDays.map(function (date) {
            return {
              header: date,
              width: 3
            };
          })));

          //max columns là 31 cột cho 31 ngày
          maxColumns = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI"]; //căn chỉnh số column cho phù hợp với số ngày của tháng cần xem
          lengthDayOfMonth = data.onlyDays.length;
          dayColumns = maxColumns.slice(0, lengthDayOfMonth); //column của thông tin nhân viên
          infoColumns = ["A", "B", "C", "D"]; //tạo giá trị cho các hàng
          row = 2;
          _context7.next = 15;
          return data.userSchedules.map(function (userSchedule) {
            data.sessions.forEach(function (session) {
              sheet.addRow({
                user_id: userSchedule.user.user_id.toUpperCase(),
                role: userSchedule.user.user_id.slice(0, 2) === "qt" ? "Quản trị viên" : userSchedule.user.user_id.slice(0, 2) === "lt" ? "Lễ tân" : userSchedule.user.user_id.slice(0, 2) === "bs" ? "Bác sĩ" : "Phụ tá",
                fullname: userSchedule.user.fullname,
                time: session.time
              });
              dayColumns.forEach(function (column, index) {
                //bao nhiêu column là userSchedule.schedules có bấy nhiêu phần từ
                //vì dayColumns và userSchedule.schedules đều có thông tin các ngày của 1 tháng
                var byDate = userSchedule.schedules[index];
                if (byDate.list.length) {
                  byDate.list.forEach(function (schedule) {
                    if (schedule.Session.session_id === session.session_id) {
                      sheet.getCell("".concat(column).concat(row)).value = "x";
                    }
                    ;
                  });
                }
                ;
              });
              row++;
            });
            dayColumns.forEach(function (column) {
              sheet.getCell("".concat(column).concat(row - 1)).border = {
                bottom: {
                  style: "thin"
                }
              };
            });
          });
        case 15:
          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          [].concat(infoColumns, _toConsumableArray(dayColumns)).map(function (column) {
            sheet.getCell("".concat(column, "1")).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell("".concat(column, "1")).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell("".concat(column, "1")).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //canh giữa tất cả hàng của cột
          ["A", "B", "D"].concat(_toConsumableArray(dayColumns)).map(function (column) {
            sheet.getColumn(column).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
          });

          //border 2 cạnh của cột
          infoColumns.map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=LichLamViec_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context7.next = 28;
          break;
        case 24:
          _context7.prev = 24;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 28:
          ;
        case 29:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 24]]);
  }));
  return function handleReportSchedule(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL DỊCH VỤ ĐƯỢC SỬ DỤNG THEO THÁNG
var handleReportService = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var services, workbook, sheet;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _report["default"].reportService(req.params);
        case 3:
          services = _context8.sent;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("DichVu_".concat((0, _moment["default"])(req.params.month).format("MM-YYYY"))); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Mã dịch vụ",
            key: "service_id",
            width: 20
          }, {
            header: "Tên dịch vụ",
            key: "service_name",
            width: 35
          }, {
            header: "Đơn giá",
            key: "price",
            width: 20
          }, {
            header: "Số lần",
            key: "times",
            width: 10
          }];

          //tạo giá trị cho các hàng
          _context8.next = 9;
          return services.map(function (s) {
            sheet.addRow({
              service_id: s.service_id.toUpperCase(),
              service_name: _index["default"].capitalizeEachWord(s.Service.service_name),
              price: s.Service.price,
              times: s.times
            });
          });
        case 9:
          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          ["A1", "B1", "C1", "D1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 2 cạnh của cột
          ["A", "B", "C", "D"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //format giá tiền
          sheet.getColumn("C").numFmt = "#,##0";
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=DichVu_".concat((0, _moment["default"])(req.params.month).format("MM-YYYY"), ".xlsx"));
          workbook.xlsx.write(res);
          _context8.next = 23;
          break;
        case 19:
          _context8.prev = 19;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 23:
          ;
        case 24:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 19]]);
  }));
  return function handleReportService(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL LỊCH HẸN THEO THÁNG
var handleReportAppointment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$params2, month, year, appointmentByMonth, workbook, sheet;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$params2 = req.params, month = _req$params2.month, year = _req$params2.year;
          _context9.next = 4;
          return _report["default"].reportAppointment(req.params);
        case 4:
          appointmentByMonth = _context9.sent;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("LichHen_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Ngày",
            key: "date",
            width: 15
          }, {
            header: "Tổng",
            key: "total",
            width: 15
          }, {
            header: "Đặt mới",
            key: "new",
            width: 15
          }, {
            header: "Tái khám",
            key: "reExam",
            width: 15
          }, {
            header: "Chờ xác nhận",
            key: "notAccepted",
            width: 15
          }, {
            header: "Đã xác nhận",
            key: "accepted",
            width: 15
          }, {
            header: "Đã hùy",
            key: "canceled",
            width: 15
          }];

          //tạo giá trị cho các hàng
          _context9.next = 10;
          return appointmentByMonth.details.map(function (appointmentByDate) {
            sheet.addRow({
              date: appointmentByDate.date,
              total: appointmentByDate.total,
              "new": appointmentByDate["new"],
              reExam: appointmentByDate.reExam,
              notAccepted: appointmentByDate.notAccepted,
              accepted: appointmentByDate.accepted,
              canceled: appointmentByDate.canceled
            });
          });
        case 10:
          sheet.mergeCells("I1:K1");
          sheet.getCell("K1").value = "T\u1ED4NG S\u1ED0 L\u1ECACH H\u1EB8N ".concat(month, "/").concat(year);
          sheet.getCell("L1").value = appointmentByMonth.totalByMonth;
          sheet.mergeCells("I2:K2");
          sheet.getCell("K2").value = "Lịch hẹn đặt mới";
          sheet.getCell("L2").value = appointmentByMonth.totalNew;
          sheet.mergeCells("I3:K3");
          sheet.getCell("K3").value = "Lịch hẹn tái khám";
          sheet.getCell("L3").value = appointmentByMonth.totalReExam;
          sheet.mergeCells("I4:K4");
          sheet.getCell("K4").value = "Chờ xác nhận";
          sheet.getCell("L4").value = appointmentByMonth.totalNotAccepted;
          sheet.mergeCells("I5:K5");
          sheet.getCell("K5").value = "Đã xác nhận";
          sheet.getCell("L5").value = appointmentByMonth.totalAccepted;
          sheet.mergeCells("I6:K6");
          sheet.getCell("K6").value = "Đã hủy";
          sheet.getCell("L6").value = appointmentByMonth.totalCanceled;

          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          ["A1", "B1", "C1", "D1", "E1", "F1", "G1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });
          ["I1", "L1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 4 cạnh
          ["I1", "L1", "I2", "L2", "I3", "L3", "I4", "L4", "I5", "L5", "I6", "L6"].map(function (cell) {
            sheet.getCell(cell).border = {
              top: {
                style: "thin"
              },
              left: {
                style: "thin"
              },
              bottom: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //border 2 cạnh của cột
          ["A", "B", "C", "D", "E", "F", "G"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=LichHen_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context9.next = 43;
          break;
        case 39:
          _context9.prev = 39;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 43:
          ;
        case 44:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 39]]);
  }));
  return function handleReportAppointment(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

//XUẤT FILE EXCEL DOANH THU THEO THÁNG
var handleReportRevenue = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params3, month, year, revenueByMonth, workbook, sheet;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params3 = req.params, month = _req$params3.month, year = _req$params3.year;
          _context10.next = 4;
          return _report["default"].reportRevenue(req.params);
        case 4:
          revenueByMonth = _context10.sent;
          workbook = new _exceljs["default"].Workbook();
          sheet = workbook.addWorksheet("DoanhThu_".concat(month, "-").concat(year)); //khai báo các cột sẽ có trong worksheet
          sheet.columns = [{
            header: "Ngày",
            key: "date",
            width: 20
          }, {
            header: "Doanh thu",
            key: "total",
            width: 20
          }, {
            header: "Đã thu",
            key: "paid",
            width: 20
          }, {
            header: "Chưa thu",
            key: "unpaid",
            width: 20
          }];

          //tạo giá trị cho các hàng
          _context10.next = 10;
          return revenueByMonth.details.map(function (revenueByDate) {
            sheet.addRow({
              date: revenueByDate.date,
              total: revenueByDate.total,
              paid: revenueByDate.paid,
              unpaid: revenueByDate.unpaid
            });
          });
        case 10:
          sheet.mergeCells("F1:I1");
          sheet.getCell("I1").value = "T\u1ED4NG DOANH THU ".concat(month, "/").concat(year);
          sheet.mergeCells("J1:K1");
          sheet.getCell("K1").value = revenueByMonth.totalByMonth;
          sheet.mergeCells("F2:I2");
          sheet.getCell("I2").value = "Tổng đã thu";
          sheet.mergeCells("J2:K2");
          sheet.getCell("K2").value = revenueByMonth.totalPaid;
          sheet.mergeCells("F3:I3");
          sheet.getCell("I3").value = "Tổng chưa thu";
          sheet.mergeCells("J3:K3");
          sheet.getCell("K3").value = revenueByMonth.totalUnpaid;

          //custom chiều cao cho hàng thứ 1 (hàng của tiêu đề)
          sheet.getRow(1).height = 30;

          //custom màu, kiểu chữ cho hàng tiêu đề
          ["A1", "B1", "C1", "D1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle",
              horizontal: "center"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });
          ["I1", "K1"].map(function (cell) {
            sheet.getCell(cell).alignment = {
              vertical: "middle"
            };
            sheet.getCell(cell).font = {
              bold: true,
              color: {
                argb: "1F4E78"
              }
            };
            sheet.getCell(cell).fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: {
                argb: "B7DEE8"
              }
            };
          });

          //border 4 cạnh
          ["I1", "K1", "I2", "K2", "I3", "K3"].map(function (cell) {
            sheet.getCell(cell).border = {
              top: {
                style: "thin"
              },
              left: {
                style: "thin"
              },
              bottom: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //canh giữa tất cả hàng của cột A
          sheet.getColumn("A").alignment = {
            vertical: "middle",
            horizontal: "center"
          };

          //border 2 cạnh của cột
          ["A", "B", "C", "D"].map(function (column) {
            sheet.getColumn(column).border = {
              left: {
                style: "thin"
              },
              right: {
                style: "thin"
              }
            };
          });

          //format giá tiền
          ["B", "C", "D", "K"].map(function (column) {
            sheet.getColumn(column).numFmt = "#,##0";
          });
          res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
          res.setHeader("Content-Disposition", "attachment;filename=DoanhThu_".concat(month, "-").concat(year, ".xlsx"));
          workbook.xlsx.write(res);
          _context10.next = 38;
          break;
        case 34:
          _context10.prev = 34;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", res.status(200).json({
            errCode: -1,
            message: "Error from the server"
          }));
        case 38:
          ;
        case 39:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 34]]);
  }));
  return function handleReportRevenue(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  handleGetCurrentRevenue: handleGetCurrentRevenue,
  handleGetCurrentAppointment: handleGetCurrentAppointment,
  handleGetCurrentPatient: handleGetCurrentPatient,
  handleGetServicesFor7Days: handleGetServicesFor7Days,
  handleGetAppointmentsFor7Days: handleGetAppointmentsFor7Days,
  handleGetRevenueFor7Days: handleGetRevenueFor7Days,
  handleReportSchedule: handleReportSchedule,
  handleReportService: handleReportService,
  handleReportAppointment: handleReportAppointment,
  handleReportRevenue: handleReportRevenue
};