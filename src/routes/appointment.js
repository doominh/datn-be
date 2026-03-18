import express from "express";
import middleware from "../controllers/middleware";
import appointmentController from "../controllers/appointment";

const router = express.Router();

router.get(
    "/all",
    middleware.verifyReceptionist,
    appointmentController.handleGetAll
);
router.get(
    "/:appointment_id/:user_id",
    // middleware.verifyPatientOrReceptionistOrDoctor,
    appointmentController.handleGetByID
);
router.get(
    "/all/doctor/:doctor_id",
    middleware.verifyDoctor,
    appointmentController.handleGetAllByDoctorID
);
router.get(
    "/all/patient/:patient_id",
    // middleware.verifyPatient,
    appointmentController.handleGetAllByPatientID
);
router.post(
    "/booking",
    // middleware.verifyPatientOrReceptionistOrDoctor,
    appointmentController.handleBookAppointment
);
router.post(
    "/accept",
    middleware.verifyReceptionist,
    appointmentController.handleAcceptAppointment
);
router.post(
    "/employee/cancel",
    middleware.verifyReceptionist,
    appointmentController.handleCanceledByEmployee
);
router.post(
    "/patient/cancel",
    // middleware.verifyPatient,
    appointmentController.handleCanceledByPatient
);
router.post(
    "/save/details",
    middleware.verifyDoctor,
    appointmentController.handleSaveDetails
);
router.post(
    "/done",
    middleware.verifyDoctor,
    appointmentController.handleConfirmDone
);
router.post(
    "/send",
    middleware.verifyReceptionistOrDoctor,
    appointmentController.handleSendToEmail
);

module.exports = router;