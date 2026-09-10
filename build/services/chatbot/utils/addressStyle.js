"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAddressStyle = exports.applyAddressStyle = exports.DEFAULT_ADDRESS_STYLE = void 0;
var _textMatch = require("./textMatch");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var DEFAULT_ADDRESS_STYLE = exports.DEFAULT_ADDRESS_STYLE = {
  self: 'Mình',
  selfLower: 'mình',
  user: 'Bạn',
  userLower: 'bạn'
};
var PAIRS = [{
  elder: 'anh',
  younger: 'em'
}, {
  elder: 'chị',
  younger: 'em'
}, {
  elder: 'cô',
  younger: 'con'
}, {
  elder: 'chú',
  younger: 'con'
}];
var ELDER_WORDS = _toConsumableArray(new Set(PAIRS.map(function (p) {
  return p.elder;
})));
var YOUNGER_WORDS = _toConsumableArray(new Set(PAIRS.map(function (p) {
  return p.younger;
})));
var youngerOf = function youngerOf(elderWord) {
  var _PAIRS$find;
  return (_PAIRS$find = PAIRS.find(function (p) {
    return p.elder === elderWord;
  })) === null || _PAIRS$find === void 0 ? void 0 : _PAIRS$find.younger;
};
var BOT_DEFAULT_ELDER_FOR_YOUNGER = {
  em: 'chị',
  con: 'cô'
};
var CUSTOMER_DEFAULT_ELDER_FOR_YOUNGER = {
  em: 'anh',
  con: 'cô'
};
var FEMALE_SELF_OVERRIDE = {
  anh: 'chị',
  chú: 'cô'
};
var capitalize = function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
var buildStyle = function buildStyle(userWord, selfWord) {
  return {
    user: capitalize(userWord),
    userLower: userWord,
    self: capitalize(selfWord),
    selfLower: selfWord
  };
};
var enforceFemalePersona = function enforceFemalePersona(style) {
  var override = FEMALE_SELF_OVERRIDE[style.selfLower];
  if (!override) return style;
  return _objectSpread(_objectSpread({}, style), {}, {
    self: capitalize(override),
    selfLower: override
  });
};
var ALL_WORDS = [].concat(_toConsumableArray(ELDER_WORDS), _toConsumableArray(YOUNGER_WORDS));
var SELF_REF_VERBS = 'muốn|cần|xin|hỏi|định|sẽ|đang|có thể|đặt|biết|xem';
var ADDRESS_PREFIXES = 'chào|cảm ơn|cám ơn|hi|hello|alo';
var detectRequestPattern = function detectRequestPattern(text) {
  var _iterator = _createForOfIteratorHelper(ALL_WORDS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var addressee = _step.value;
      var _iterator2 = _createForOfIteratorHelper(ALL_WORDS),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var speaker = _step2.value;
          if (addressee === speaker) continue;
          var pattern = new RegExp("".concat(_textMatch.WORD_BOUNDARY_BEFORE).concat(addressee).concat(_textMatch.WORD_BOUNDARY_AFTER, "\\s+cho\\s+") + "".concat(_textMatch.WORD_BOUNDARY_BEFORE).concat(speaker).concat(_textMatch.WORD_BOUNDARY_AFTER, "\\s+(").concat(SELF_REF_VERBS, ")").concat(_textMatch.WORD_BOUNDARY_AFTER), 'iu');
          if (pattern.test(text)) return buildStyle(speaker, addressee);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
};
var detectSelfReference = function detectSelfReference(text) {
  var _iterator3 = _createForOfIteratorHelper(ALL_WORDS),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var word = _step3.value;
      var pattern = new RegExp("".concat(_textMatch.WORD_BOUNDARY_BEFORE).concat(word).concat(_textMatch.WORD_BOUNDARY_AFTER, "\\s+(").concat(SELF_REF_VERBS, ")").concat(_textMatch.WORD_BOUNDARY_AFTER), 'iu');
      if (!pattern.test(text)) continue;
      if (ELDER_WORDS.includes(word)) return buildStyle(word, youngerOf(word));
      return buildStyle(word, BOT_DEFAULT_ELDER_FOR_YOUNGER[word]);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return null;
};
var detectAddressCue = function detectAddressCue(text) {
  var _iterator4 = _createForOfIteratorHelper(ALL_WORDS),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var word = _step4.value;
      var prefixPattern = new RegExp("".concat(_textMatch.WORD_BOUNDARY_BEFORE, "(").concat(ADDRESS_PREFIXES, ")\\s+").concat(word).concat(_textMatch.WORD_BOUNDARY_AFTER), 'iu');
      var suffixPattern = new RegExp("".concat(_textMatch.WORD_BOUNDARY_BEFORE).concat(word).concat(_textMatch.WORD_BOUNDARY_AFTER, "\\s+\u01A1i").concat(_textMatch.WORD_BOUNDARY_AFTER), 'iu');
      if (!prefixPattern.test(text) && !suffixPattern.test(text)) continue;
      if (ELDER_WORDS.includes(word)) {
        return buildStyle(youngerOf(word), word);
      }
      return buildStyle(CUSTOMER_DEFAULT_ELDER_FOR_YOUNGER[word], word);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return null;
};
var detectBareElderMention = function detectBareElderMention(text) {
  var word = ELDER_WORDS.find(function (w) {
    return new RegExp("".concat(_textMatch.WORD_BOUNDARY_BEFORE).concat(w).concat(_textMatch.WORD_BOUNDARY_AFTER), 'iu').test(text);
  });
  return word ? buildStyle(word, youngerOf(word)) : null;
};
var detectAddressStyle = exports.detectAddressStyle = function detectAddressStyle() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var text = message.trim().toLowerCase();
  if (!text) return null;
  var style = detectRequestPattern(text) || detectSelfReference(text) || detectAddressCue(text) || detectBareElderMention(text);
  return style ? enforceFemalePersona(style) : null;
};
var applyAddressStyle = exports.applyAddressStyle = function applyAddressStyle(text, style) {
  if (!text) return text;
  return text.replace(/\{U\}/g, style.user).replace(/\{u\}/g, style.userLower).replace(/\{S\}/g, style.self).replace(/\{s\}/g, style.selfLower);
};