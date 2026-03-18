import express from "express";
import middleware from "../controllers/middleware";
import reportController from "../controllers/report";

const router = express.Router();

router.get(
    "/current/revenue",
    middleware.verifyAdmin,
    reportController.handleGetCurrentRevenue
);
router.get(
    "/current/appointment",
    middleware.verifyAdmin,
    reportController.handleGetCurrentAppointment
);
router.get(
    "/current/patient",
    middleware.verifyAdmin,
    reportController.handleGetCurrentPatient
);
router.get(
    "/7days/service",
    middleware.verifyAdmin,
    reportController.handleGetServicesFor7Days
);
router.get(
    "/7days/appointment",
    middleware.verifyAdmin,
    reportController.handleGetAppointmentsFor7Days
);
router.get(
    "/7days/revenue",
    middleware.verifyAdmin,
    reportController.handleGetRevenueFor7Days
);
router.get(
    "/schedule/:month/:year",
    middleware.verifyAdmin,
    reportController.handleReportSchedule
);
router.get(
    "/service/:month",
    middleware.verifyAdmin,
    reportController.handleReportService
);
router.get(
    "/appointment/:month/:year",
    middleware.verifyAdmin,
    reportController.handleReportAppointment
);
router.get(
    "/revenue/:month/:year",
    middleware.verifyAdmin,
    reportController.handleReportRevenue
);

module.exports = router;