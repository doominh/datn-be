import express from "express";
import middleware from "../controllers/middleware";
import employeeController from "../controllers/employee";

const router = express.Router();

router.get(
    "/all",
    middleware.verifyAdmin,
    employeeController.handleGetAll
);
router.get(
    "/:employee_id",
    middleware.verifyAdminOrReceptionistOrAssistant,
    employeeController.handleGetByID
);
router.get(
    "/all/:date/:session_id",
    middleware.verifyAdmin,
    employeeController.handleGetAllBySchedule
);
router.post(
    "/create",
    middleware.verifyAdmin,
    employeeController.handleCreate
);
router.put(
    "/update/:employee_id",
    middleware.verifyAdmin,
    employeeController.handleUpdate
);
router.put(
    "/profile/update/:employee_id",
    middleware.verifyAdminOrReceptionistOrAssistant,
    employeeController.handleUpdateProfile
);

module.exports = router;