"use strict";

var _express = _interopRequireDefault(require("express"));
var _middleware = _interopRequireDefault(require("../controllers/middleware"));
var _patient = _interopRequireDefault(require("../controllers/patient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/all", _middleware["default"].verifyAdminOrReceptionist, _patient["default"].handleGetAll);
router.get("/:patient_id",
// middleware.verifyPatientOrAdminOrReceptionistOrDoctor,
_patient["default"].handleGetByID);
router.get("/record/:patient_id",
// middleware.verifyAdminOrReceptionistOrDoctor,
_patient["default"].handleGetMedicalRecord);
router.get("/all/doctor/:doctor_id",
// middleware.verifyDoctor,
_patient["default"].handleGetAllByDoctorID);
router.post("/create", _middleware["default"].verifyAdminOrReceptionist, _patient["default"].handleCreate);
router.put("/update/:patient_id", _middleware["default"].verifyAdminOrReceptionist, _patient["default"].handleUpdate);
router.put("/profile/update/:patient_id",
// middleware.verifyPatient,
_patient["default"].handleUpdateProfile);
module.exports = router;