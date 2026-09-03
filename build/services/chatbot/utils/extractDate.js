"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractDate = void 0;
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var extractDate = exports.extractDate = function extractDate(message) {
  var today = (0, _moment["default"])();
  var msg = message.toLowerCase();
  if (msg.includes('hôm nay')) return today.format('YYYY-MM-DD');
  if (msg.includes('ngày mai') || msg.includes('hôm sau')) return today.clone().add(1, 'days').format('YYYY-MM-DD');
  if (msg.includes('ngày kia') || msg.includes('ngày mốt')) return today.clone().add(2, 'days').format('YYYY-MM-DD');
  var thuMap = {
    'hai': 1,
    '2': 1,
    'ba': 2,
    '3': 2,
    'tư': 3,
    '4': 3,
    'năm': 4,
    '5': 4,
    'sáu': 5,
    '6': 5,
    'bảy': 6,
    '7': 6
  };
  var thuMatch = msg.match(/thứ\s*(hai|ba|tư|năm|sáu|bảy|[2-7])/);
  if (thuMatch) {
    var offset = thuMap[thuMatch[1]];
    if (offset !== undefined) {
      var isNextWeek = msg.includes('tuần sau') || msg.includes('tuần tới');
      var targetDay = offset;
      var target = today.clone().isoWeekday(targetDay);
      if (isNextWeek || target.isBefore(today, 'day')) target.add(1, 'weeks');
      return target.format('YYYY-MM-DD');
    }
  }
  var dateMatch = msg.match(/ngày\s*(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) || msg.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{4}))?/) || msg.match(/ngày\s*(\d{1,2})\s*tháng\s*(\d{1,2})(?:\s*năm\s*(\d{4}))?/);
  if (dateMatch) {
    var day = dateMatch[1].padStart(2, '0');
    var month = dateMatch[2].padStart(2, '0');
    var year = dateMatch[3] || today.year();
    var parsed = (0, _moment["default"])("".concat(year, "-").concat(month, "-").concat(day), 'YYYY-MM-DD', true);
    if (parsed.isValid()) return parsed.format('YYYY-MM-DD');
  }
  return null;
};