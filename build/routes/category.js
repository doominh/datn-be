"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _category = _interopRequireDefault(require("../controllers/category"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/all',
// middleware.verifyAdmin,
_category["default"].handleGetAll);
router.get('/active', _category["default"].handleGetActive);
router.get('/:category_id', _category["default"].handleGetByID);
router.get('/all/doctor/:doctor_id', _category["default"].handleGetAllByDoctorID);
router.post('/create', _middleware["default"].verifyAdmin, _category["default"].handleCreate);
router.put('/update/:category_id', _middleware["default"].verifyAdmin, _category["default"].handleUpdate);
router["delete"]('/delete/:category_id', _middleware["default"].verifyAdmin, _category["default"].handleDelete);
module.exports = router;