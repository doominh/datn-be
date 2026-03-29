"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _employee = _interopRequireDefault(require("../controllers/employee"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/all", _middleware["default"].verifyAdmin, _employee["default"].handleGetAll);
router.get("/:employee_id", _middleware["default"].verifyAdminOrReceptionistOrAssistant, _employee["default"].handleGetByID);
router.get("/all/:date/:session_id", _middleware["default"].verifyAdmin, _employee["default"].handleGetAllBySchedule);
router.post("/create", _middleware["default"].verifyAdmin, _employee["default"].handleCreate);
router.put("/update/:employee_id", _middleware["default"].verifyAdmin, _employee["default"].handleUpdate);
router.put("/profile/update/:employee_id", _middleware["default"].verifyAdminOrReceptionistOrAssistant, _employee["default"].handleUpdateProfile);
module.exports = router;