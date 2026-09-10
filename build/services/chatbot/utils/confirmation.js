"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseYesNo = exports.CANCEL_CONFIRM_OPTIONS = exports.BOOKING_CONFIRM_OPTIONS = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var normalize = function normalize() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return message.trim().toLowerCase();
};
var containsAny = function containsAny(text, phrases) {
  return phrases.some(function (phrase) {
    return text.includes(phrase);
  });
};
var BASE_NEGATE = ['không phải', 'không đúng', 'không muốn', 'không cần', 'không được', 'không', 'hông', 'hong', 'đừng', 'thôi khỏi', 'thôi', 'khỏi', 'bỏ đi', 'đổi ý', 'giữ nguyên', 'khoan đã', 'chưa vội', 'chưa muốn'];
var BASE_AFFIRM = ['đúng vậy', 'đúng rồi', 'đúng', 'chuẩn rồi', 'chuẩn', 'phải rồi', 'phải', 'vâng ạ', 'vâng', 'dạ đúng', 'dạ phải', 'dạ được', 'dạ vâng', 'dạ', 'ừ', 'ừm', 'ừa', 'uk', 'ukm', 'ok', 'oke', 'okie', 'đồng ý', 'có nhé', 'yes', 'xác nhận', 'chốt', 'tiến hành', 'được rồi', 'được'];
var parseYesNo = exports.parseYesNo = function parseYesNo(message) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$extraAffirm = _ref.extraAffirm,
    extraAffirm = _ref$extraAffirm === void 0 ? [] : _ref$extraAffirm,
    _ref$extraNegate = _ref.extraNegate,
    extraNegate = _ref$extraNegate === void 0 ? [] : _ref$extraNegate;
  var text = normalize(message);
  if (!text) return null;
  if (containsAny(text, [].concat(_toConsumableArray(extraNegate), BASE_NEGATE))) return 'no';
  if (containsAny(text, [].concat(_toConsumableArray(extraAffirm), BASE_AFFIRM))) return 'yes';
  return null;
};
var BOOKING_CONFIRM_OPTIONS = exports.BOOKING_CONFIRM_OPTIONS = {
  extraNegate: ['hủy', 'huỷ'],
  extraAffirm: ['đặt giúp', 'đặt luôn', 'đặt đi', 'chốt lịch', 'chốt đơn']
};
var CANCEL_CONFIRM_OPTIONS = exports.CANCEL_CONFIRM_OPTIONS = {
  extraAffirm: ['hủy', 'huỷ', 'hủy giúp', 'hủy luôn'],
  extraNegate: ['giữ nguyên lịch', 'giữ lịch']
};