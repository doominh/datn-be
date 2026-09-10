"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordPattern = exports.stripDiacritics = exports.containsWord = exports.WORD_BOUNDARY_BEFORE = exports.WORD_BOUNDARY_AFTER = void 0;
var WORD_BOUNDARY_BEFORE = exports.WORD_BOUNDARY_BEFORE = '(?<![\\p{L}\\p{N}])';
var WORD_BOUNDARY_AFTER = exports.WORD_BOUNDARY_AFTER = '(?![\\p{L}\\p{N}])';
var wordPattern = exports.wordPattern = function wordPattern(word) {
  var extraFlags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new RegExp("".concat(WORD_BOUNDARY_BEFORE).concat(word).concat(WORD_BOUNDARY_AFTER), "iu".concat(extraFlags));
};
var containsWord = exports.containsWord = function containsWord() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var word = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return wordPattern(word).test(text);
};
var stripDiacritics = exports.stripDiacritics = function stripDiacritics() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.toLowerCase().replace(/đ/g, 'd').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
};