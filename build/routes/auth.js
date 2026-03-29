"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _auth = _interopRequireDefault(require("../controllers/auth"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/verify", _auth["default"].handleVerify);
router.post("/register", _auth["default"].handleRegister);
router.post("/login/client", _auth["default"].handleLoginClient);
router.post("/login/admin", _auth["default"].handleLoginAdmin);
router.put("/password/change/:user_id", _middleware["default"].verifyUser, _auth["default"].handleChangePassword);
router.post("/password/send-reset-link", _auth["default"].handleSendResetLink);
router.get("/password/reset/:user_id/:token", _auth["default"].handleVerifyResetLink);
router.post("/password/reset/:user_id/:token", _auth["default"].handleResetPassword);
router.post("/password/check", _middleware["default"].verifyUser, _auth["default"].handleCheckPassword);
router.post("/block", _middleware["default"].verifyAdmin, _auth["default"].handleChangeBlockStatus);
router.post("/unblock", _middleware["default"].verifyAdmin, _auth["default"].handleChangeBlockStatus);
router.put("/email/change/:user_id", _middleware["default"].verifyUser, _auth["default"].handleChangeEmail);
router.post("/token/refresh", _auth["default"].handleRefreshToken);
module.exports = router;