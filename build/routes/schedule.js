"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _schedule = _interopRequireDefault(require("../controllers/schedule"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/all/week/:week/:year",
// middleware.verifyAdmin,
_schedule["default"].handleGetAllByWeek);
router.get("/all/doctor/:doctor_id/:date", _schedule["default"].handleGetDoctorSchedulesByDate);
router.get("/all/user/:user_id/:date", _middleware["default"].verifyAdminOrReceptionistOrDoctorOrAssistant, _schedule["default"].handleGetUserSchedulesByDate);
router.get("/:user_id/:week/:year", _middleware["default"].verifyReceptionistOrDoctorOrAssistant, _schedule["default"].handleGetUserSchedulesByWeek);
router.get("/all/:category_id/:date/:session_id", _middleware["default"].verifyReceptionist, _schedule["default"].handleGetAllByCategoryDateSession);
router.post("/create", _middleware["default"].verifyAdmin, _schedule["default"].handleCreate);
router.post("/accept/one", _middleware["default"].verifyAdmin, _schedule["default"].handleAcceptOne);
router.post("/accept/all", _middleware["default"].verifyAdmin, _schedule["default"].handleAcceptAll);
router.post("/accept/week", _middleware["default"].verifyAdmin, _schedule["default"].handleAcceptForAWeek);
router["delete"]("/delete/:user_id/:user_schedule_id", _middleware["default"].verifyAdmin, _schedule["default"].handleDeleteUserSchedule);
module.exports = router;