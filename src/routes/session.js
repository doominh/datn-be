import express from "express";
import middleware from "../controllers/middleware";
import sessionController from "../controllers/session";

const router = express.Router();

router.get(
    "/all",
    middleware.verifyAdmin,
    sessionController.handleGetAll
);
router.get(
    "/active",
    middleware.verifyAdminOrReceptionist,
    sessionController.handleGetActive
);
router.get(
    "/:session_id",
    middleware.verifyAdmin,
    sessionController.handleGetByID
);
router.post(
    "/create",
    middleware.verifyAdmin,
    sessionController.handleCreate
);
router.put(
    "/update/:session_id",
    middleware.verifyAdmin,
    sessionController.handleUpdate
);
router.delete(
    "/delete/:session_id",
    middleware.verifyAdmin,
    sessionController.handleDelete
);

module.exports = router;