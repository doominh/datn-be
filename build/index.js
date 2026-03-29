"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _http = _interopRequireDefault(require("http"));
var _socket = require("socket.io");
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _auth = _interopRequireDefault(require("./routes/auth"));
var _patient = _interopRequireDefault(require("./routes/patient"));
var _employee = _interopRequireDefault(require("./routes/employee"));
var _doctor = _interopRequireDefault(require("./routes/doctor"));
var _category = _interopRequireDefault(require("./routes/category"));
var _service = _interopRequireDefault(require("./routes/service"));
var _session = _interopRequireDefault(require("./routes/session"));
var _schedule = _interopRequireDefault(require("./routes/schedule"));
var _appointment = _interopRequireDefault(require("./routes/appointment"));
var _bill = _interopRequireDefault(require("./routes/bill"));
var _report = _interopRequireDefault(require("./routes/report"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();
var app = (0, _express["default"])();

// app.use(
// 	cors({
// 		origin: [process.env.REACT_ADMIN_URL, process.env.REACT_CLIENT_URL],
// 		credentials: true,
// 	}),
// );
app.use((0, _cors["default"])({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', 'token'],
  credentials: true
}));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));

//ROUTES
app.get('/', function (req, res) {
  return res.send('Backend Toothhive');
});
app.use('/api/auth', _auth["default"]);
app.use('/api/patient', _patient["default"]);
app.use('/api/employee', _employee["default"]);
app.use('/api/doctor', _doctor["default"]);
app.use('/api/category', _category["default"]);
app.use('/api/service', _service["default"]);
app.use('/api/session', _session["default"]);
app.use('/api/schedule', _schedule["default"]);
app.use('/api/appointment', _appointment["default"]);
app.use('/api/bill', _bill["default"]);
app.use('/api/report', _report["default"]);
(0, _connectDB["default"])();
var port = process.env.PORT || 8080;
var server = _http["default"].createServer(app);
var io = new _socket.Server(server, {
  cors: {
    origin: '*',
    credentials: true
  }
});
app.set('socketio', io); //để file nào cũng có thể dùng được

io.on('connection', function (socket) {
  console.log("user connected: ".concat(socket.id));
  socket.on('disconnect', function () {
    console.log("user disconnected: ".concat(socket.id));
  });
});
server.listen(port, function () {
  console.log("Backend Toothhive is running at port ".concat(port));
});