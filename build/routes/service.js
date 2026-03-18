"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _service = _interopRequireDefault(require("../controllers/service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/all",
// middleware.verifyAdmin,
_service["default"].handleGetAll);
router.get("/:service_id",
// middleware.verifyAdmin,
_service["default"].handleGetByID);
router.get("/active/category/:category_id", _middleware["default"].verifyReceptionistOrDoctor, _service["default"].handleGetActiveByCategoryID);
router.post("/create", _middleware["default"].verifyAdmin, _service["default"].handleCreate);
router.put("/update/:service_id", _middleware["default"].verifyAdmin, _service["default"].handleUpdate);
router["delete"]("/delete/:service_id", _middleware["default"].verifyAdmin, _service["default"].handleDelete);
module.exports = router;