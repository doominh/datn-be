"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _session = _interopRequireDefault(require("../controllers/session"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/all", _middleware["default"].verifyAdmin, _session["default"].handleGetAll);
router.get("/active", _middleware["default"].verifyAdminOrReceptionist, _session["default"].handleGetActive);
router.get("/:session_id", _middleware["default"].verifyAdmin, _session["default"].handleGetByID);
router.post("/create", _middleware["default"].verifyAdmin, _session["default"].handleCreate);
router.put("/update/:session_id", _middleware["default"].verifyAdmin, _session["default"].handleUpdate);
router["delete"]("/delete/:session_id", _middleware["default"].verifyAdmin, _session["default"].handleDelete);
module.exports = router;