"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _appointment = _interopRequireDefault(require("../controllers/appointment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/all", _middleware["default"].verifyReceptionist, _appointment["default"].handleGetAll);
router.get("/:appointment_id/:user_id",
// middleware.verifyPatientOrReceptionistOrDoctor,
_appointment["default"].handleGetByID);
router.get("/all/doctor/:doctor_id", _middleware["default"].verifyDoctor, _appointment["default"].handleGetAllByDoctorID);
router.get("/all/patient/:patient_id",
// middleware.verifyPatient,
_appointment["default"].handleGetAllByPatientID);
router.post("/booking",
// middleware.verifyPatientOrReceptionistOrDoctor,
_appointment["default"].handleBookAppointment);
router.post("/accept", _middleware["default"].verifyReceptionist, _appointment["default"].handleAcceptAppointment);
router.post("/employee/cancel", _middleware["default"].verifyReceptionist, _appointment["default"].handleCanceledByEmployee);
router.post("/patient/cancel",
// middleware.verifyPatient,
_appointment["default"].handleCanceledByPatient);
router.post("/save/details", _middleware["default"].verifyDoctor, _appointment["default"].handleSaveDetails);
router.post("/done", _middleware["default"].verifyDoctor, _appointment["default"].handleConfirmDone);
router.post("/send", _middleware["default"].verifyReceptionistOrDoctor, _appointment["default"].handleSendToEmail);
module.exports = router;