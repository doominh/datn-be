"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _doctor = _interopRequireDefault(require("../controllers/doctor"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get('/all', _middleware["default"].verifyAdmin, _doctor["default"].handleGetAll);
router.get('/active', _doctor["default"].handleGetActive);
router.get('/:doctor_id', _doctor["default"].handleGetByID);
router.get('/all/category/:category_id', _doctor["default"].handleGetAllByCategoryID);
router.get('/all/:date/:session_id', _middleware["default"].verifyAdmin, _doctor["default"].handleGetAllBySchedule);
router.post('/create', _middleware["default"].verifyAdmin, _doctor["default"].handleCreate);
router.put('/update/:doctor_id', _middleware["default"].verifyAdmin, _doctor["default"].handleUpdate);
router.put('/profile/update/:doctor_id', _middleware["default"].verifyDoctor, _doctor["default"].handleUpdateProfile);
module.exports = router;