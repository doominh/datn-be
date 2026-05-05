"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _report = _interopRequireDefault(require("../controllers/report"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/current/revenue", _middleware["default"].verifyAdmin, _report["default"].handleGetCurrentRevenue);
router.get("/current/appointment", _middleware["default"].verifyAdmin, _report["default"].handleGetCurrentAppointment);
router.get("/current/patient", _middleware["default"].verifyAdmin, _report["default"].handleGetCurrentPatient);
router.get("/7days/service", _middleware["default"].verifyAdmin, _report["default"].handleGetServicesFor7Days);
router.get("/7days/appointment", _middleware["default"].verifyAdmin, _report["default"].handleGetAppointmentsFor7Days);
router.get("/7days/revenue", _middleware["default"].verifyAdmin, _report["default"].handleGetRevenueFor7Days);
router.get("/schedule/:month/:year", _middleware["default"].verifyAdmin, _report["default"].handleReportSchedule);
router.get("/service/:month", _middleware["default"].verifyAdmin, _report["default"].handleReportService);
router.get("/appointment/:month/:year", _middleware["default"].verifyAdmin, _report["default"].handleReportAppointment);
router.get("/revenue/:month/:year", _middleware["default"].verifyAdmin, _report["default"].handleReportRevenue);
module.exports = router;