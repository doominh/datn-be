"use strict";

var _express = _interopRequireDefault(require("express"));
var _chat = _interopRequireDefault(require("../controllers/chat.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

// POST /api/chat
// Body: { message: string, history: Array }
router.post('/', _chat["default"].handleChat);
module.exports = router;