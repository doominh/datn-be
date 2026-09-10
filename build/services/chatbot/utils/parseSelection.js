"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSelection = void 0;
var _textMatch = require("./textMatch");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ORDINAL_WORDS = {
  'một': 1,
  'nhất': 1,
  'đầu tiên': 1,
  'đầu': 1,
  'hai': 2,
  'nhì': 2,
  'ba': 3,
  'bốn': 4,
  'tư': 4,
  'năm': 5,
  'sáu': 6
};
var parseSelection = exports.parseSelection = function parseSelection() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var listLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var msg = message.trim().toLowerCase();
  var digitMatch = msg.match(/\d+/);
  if (digitMatch) return parseInt(digitMatch[0], 10);
  if (/cuối/.test(msg)) return listLength || null;
  var found = Object.entries(ORDINAL_WORDS).find(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      word = _ref2[0];
    return (0, _textMatch.containsWord)(msg, word);
  });
  return found ? found[1] : null;
};