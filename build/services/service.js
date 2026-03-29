"use strict";

var _index = _interopRequireDefault(require("../models/index"));
var _index2 = _interopRequireDefault(require("../util/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//LẤY DỊCH VỤ THEO TÊN
var getByName = function getByName(name) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(resolve, reject) {
      var service_name, service, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            service_name = name.toLowerCase();
            _context.n = 1;
            return _index["default"].Service.findOne({
              where: {
                service_name: service_name
              }
            });
          case 1:
            service = _context.v;
            resolve(service);
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
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ DỊCH VỤ
var getAll = function getAll() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
      var services, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return _index["default"].Service.findAll({
              attributes: {
                exclude: ["category_id"]
              },
              order: [["createdAt", "ASC"]],
              include: [{
                model: _index["default"].Category,
                attributes: ["category_id", "category_name"]
              }],
              raw: true,
              nest: true
            });
          case 1:
            services = _context2.v;
            resolve({
              errCode: 0,
              message: "Get all services",
              data: services
            });
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            reject(_t2);
          case 3:
            ;
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

//LẤY DỊCH VỤ BẰNG ID
var getByID = function getByID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resolve, reject) {
      var service_id, service, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            if (data.service_id) {
              _context3.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context3.n = 3;
            break;
          case 1:
            service_id = data.service_id.toLowerCase();
            _context3.n = 2;
            return _index["default"].Service.findOne({
              where: {
                service_id: service_id
              }
            });
          case 2:
            service = _context3.v;
            if (service) {
              resolve({
                errCode: 0,
                message: "Get service by ID",
                data: service
              });
            } else {
              resolve({
                errCode: 1,
                message: "Service doesn't exist"
              });
            }
            ;
          case 3:
            ;
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            reject(_t3);
          case 5:
            ;
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 4]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

//LẤY TẤT CẢ DỊCH VỤ ĐANG HOẠT ĐỘNG THEO ID DANH MỤC
var getActiveByCategoryID = function getActiveByCategoryID(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
      var category_id, category, services, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            if (data.category_id) {
              _context4.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context4.n = 6;
            break;
          case 1:
            category_id = data.category_id.toLowerCase();
            _context4.n = 2;
            return _index["default"].Category.findOne({
              where: {
                category_id: category_id
              }
            });
          case 2:
            category = _context4.v;
            if (!category) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return _index["default"].Service.findAll({
              where: {
                category_id: category_id,
                status: 1
              }
            });
          case 3:
            services = _context4.v;
            resolve({
              errCode: 0,
              message: "Get active services by category id",
              data: services
            });
            _context4.n = 5;
            break;
          case 4:
            resolve({
              errCode: 1,
              message: "Category doesn't exist"
            });
          case 5:
            ;
          case 6:
            ;
            _context4.n = 8;
            break;
          case 7:
            _context4.p = 7;
            _t4 = _context4.v;
            reject(_t4);
          case 8:
            ;
          case 9:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

//THÊM MỚI DỊCH VỤ
var createService = function createService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(resolve, reject) {
      var category_id, category, service, service_id, service_name, newService, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            if (!(!data.category_id || !data.service_name || data.price === undefined || data.status === undefined)) {
              _context5.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context5.n = 9;
            break;
          case 1:
            category_id = data.category_id.toLowerCase();
            _context5.n = 2;
            return _index["default"].Category.findOne({
              where: {
                category_id: category_id
              }
            });
          case 2:
            category = _context5.v;
            if (!category) {
              _context5.n = 7;
              break;
            }
            _context5.n = 3;
            return getByName(data.service_name.toLowerCase());
          case 3:
            service = _context5.v;
            if (!service) {
              _context5.n = 4;
              break;
            }
            resolve({
              errCode: 2,
              message: "Service name already exists"
            });
            _context5.n = 6;
            break;
          case 4:
            service_id = _index2["default"].createID("dv");
            service_name = data.service_name.toLowerCase();
            _context5.n = 5;
            return _index["default"].Service.create({
              service_id: service_id,
              category_id: category_id,
              service_name: service_name,
              price: data.price,
              status: data.status
            });
          case 5:
            newService = _context5.v;
            if (newService.dataValues.service_id) {
              resolve({
                errCode: 0,
                message: "Created"
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
            _context5.n = 8;
            break;
          case 7:
            resolve({
              errCode: 1,
              message: "Category doesn't exist"
            });
          case 8:
            ;
          case 9:
            ;
            _context5.n = 11;
            break;
          case 10:
            _context5.p = 10;
            _t5 = _context5.v;
            reject(_t5);
          case 11:
            ;
          case 12:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 10]]);
    }));
    return function (_x9, _x0) {
      return _ref5.apply(this, arguments);
    };
  }());
};

//CẬP NHẬT DỊCH VỤ
var updateService = function updateService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(resolve, reject) {
      var category_id, service_id, service, category, serviceInDB, service_name, result, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (!(!data.service_id || !data.category_id || !data.service_name || data.price === undefined || data.status === undefined)) {
              _context6.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context6.n = 12;
            break;
          case 1:
            category_id = data.category_id.toLowerCase();
            service_id = data.service_id.toLowerCase();
            _context6.n = 2;
            return _index["default"].Service.findOne({
              where: {
                service_id: service_id
              }
            });
          case 2:
            service = _context6.v;
            if (!service) {
              _context6.n = 10;
              break;
            }
            _context6.n = 3;
            return _index["default"].Category.findOne({
              where: {
                category_id: category_id
              }
            });
          case 3:
            category = _context6.v;
            if (!category) {
              _context6.n = 8;
              break;
            }
            _context6.n = 4;
            return getByName(data.service_name);
          case 4:
            serviceInDB = _context6.v;
            if (!(serviceInDB && serviceInDB.service_id !== service_id)) {
              _context6.n = 5;
              break;
            }
            resolve({
              errCode: 2,
              message: "Service name already exists"
            });
            _context6.n = 7;
            break;
          case 5:
            service_name = data.service_name.toLowerCase();
            _context6.n = 6;
            return _index["default"].Service.update({
              category_id: category_id,
              service_name: service_name,
              price: data.price,
              status: data.status
            }, {
              where: {
                service_id: service_id
              }
            });
          case 6:
            result = _context6.v;
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
            _context6.n = 9;
            break;
          case 8:
            resolve({
              errCode: 1,
              message: "Category doesn't exist"
            });
          case 9:
            ;
            _context6.n = 11;
            break;
          case 10:
            resolve({
              errCode: 1,
              message: "Service doesn't exist"
            });
          case 11:
            ;
          case 12:
            ;
            _context6.n = 14;
            break;
          case 13:
            _context6.p = 13;
            _t6 = _context6.v;
            reject(_t6);
          case 14:
            ;
          case 15:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function (_x1, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};

//XÓA DỊCH VỤ
var deleteService = function deleteService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(resolve, reject) {
      var service_id, isBeingUsed, result, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (data.service_id) {
              _context7.n = 1;
              break;
            }
            resolve({
              errCode: 3,
              message: "Missing params"
            });
            _context7.n = 8;
            break;
          case 1:
            service_id = data.service_id.toLowerCase();
            _context7.n = 2;
            return _index["default"].Detail.findOne({
              where: {
                service_id: service_id
              }
            });
          case 2:
            isBeingUsed = _context7.v;
            if (isBeingUsed) {
              _context7.n = 4;
              break;
            }
            _context7.n = 3;
            return _index["default"].BillService.findOne({
              where: {
                service_id: service_id
              }
            });
          case 3:
            isBeingUsed = _context7.v;
          case 4:
            if (!isBeingUsed) {
              _context7.n = 5;
              break;
            }
            resolve({
              errCode: 6,
              message: "Is being used"
            });
            _context7.n = 7;
            break;
          case 5:
            _context7.n = 6;
            return _index["default"].Service.destroy({
              where: {
                service_id: service_id
              }
            });
          case 6:
            result = _context7.v;
            if (result === 1) {
              resolve({
                errCode: 0,
                message: "Deleted"
              });
            } else {
              resolve({
                errCode: 1,
                message: "Service doesn't exist"
              });
            }
            ;
          case 7:
            ;
          case 8:
            ;
            _context7.n = 10;
            break;
          case 9:
            _context7.p = 9;
            _t7 = _context7.v;
            reject(_t7);
          case 10:
            ;
          case 11:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 9]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAll: getAll,
  getByID: getByID,
  getActiveByCategoryID: getActiveByCategoryID,
  createService: createService,
  updateService: updateService,
  deleteService: deleteService
};