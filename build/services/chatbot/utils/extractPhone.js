"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractPhone = void 0;
var extractPhone = exports.extractPhone = function extractPhone(message) {
  var match = message.match(/\b(0[3|5|7|8|9]\d{8})\b/);
  return match ? match[1] : null;
};