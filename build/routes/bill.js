"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _bill = _interopRequireDefault(require("../controllers/bill"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/all", _middleware["default"].verifyReceptionist, _bill["default"].handleGetAll);
router.get("/:bill_id", _middleware["default"].verifyReceptionist, _bill["default"].handleGetByID);
router.post("/create", _middleware["default"].verifyReceptionist, _bill["default"].handleCreate);
router.post("/confirm", _middleware["default"].verifyReceptionist, _bill["default"].handleConfirm);
router.post("/send", _middleware["default"].verifyReceptionist, _bill["default"].handleSendToEmail);
module.exports = router;