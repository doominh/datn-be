import express from "express";
import middleware from "../controllers/middleware";
import patientController from "../controllers/patient";

const router = express.Router();

router.get(
    "/all",
    middleware.verifyAdminOrReceptionist,
    patientController.handleGetAll
);
router.get(
    "/:patient_id",
    // middleware.verifyPatientOrAdminOrReceptionistOrDoctor,
    patientController.handleGetByID
);
router.get(
    "/record/:patient_id",
    // middleware.verifyAdminOrReceptionistOrDoctor,
    patientController.handleGetMedicalRecord
);
router.get(
    "/all/doctor/:doctor_id",
    // middleware.verifyDoctor,
    patientController.handleGetAllByDoctorID
);
router.post(
    "/create",
    middleware.verifyAdminOrReceptionist,
    patientController.handleCreate
);
router.put(
    "/update/:patient_id",
    middleware.verifyAdminOrReceptionist,
    patientController.handleUpdate
);
router.put(
    "/profile/update/:patient_id",
    // middleware.verifyPatient,
    patientController.handleUpdateProfile
);

module.exports = router;