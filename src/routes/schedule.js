import express from "express";
import middleware from "../controllers/middleware";
import scheduleController from "../controllers/schedule";

const router = express.Router();

router.get(
    "/all/week/:week/:year",
    // middleware.verifyAdmin,
    scheduleController.handleGetAllByWeek
);
router.get(
    "/all/doctor/:doctor_id/:date",
    scheduleController.handleGetDoctorSchedulesByDate
);
router.get(
    "/all/user/:user_id/:date",
    middleware.verifyAdminOrReceptionistOrDoctorOrAssistant,
    scheduleController.handleGetUserSchedulesByDate
);
router.get(
    "/:user_id/:week/:year",
    middleware.verifyReceptionistOrDoctorOrAssistant,
    scheduleController.handleGetUserSchedulesByWeek
);
router.get(
    "/all/:category_id/:date/:session_id",
    middleware.verifyReceptionist,
    scheduleController.handleGetAllByCategoryDateSession
);
router.post(
    "/create",
    middleware.verifyAdmin,
    scheduleController.handleCreate
);
router.post(
    "/accept/one",
    middleware.verifyAdmin,
    scheduleController.handleAcceptOne
);
router.post(
    "/accept/all",
    middleware.verifyAdmin,
    scheduleController.handleAcceptAll
);
router.post(
    "/accept/week",
    middleware.verifyAdmin,
    scheduleController.handleAcceptForAWeek
);
router.delete(
    "/delete/:user_id/:user_schedule_id",
    middleware.verifyAdmin,
    scheduleController.handleDeleteUserSchedule
);

module.exports = router;