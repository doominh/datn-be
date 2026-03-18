import express from "express";
import middleware from "../controllers/middleware";
import billController from "../controllers/bill";

const router = express.Router();

router.get(
    "/all",
    middleware.verifyReceptionist,
    billController.handleGetAll
);
router.get(
    "/:bill_id",
    middleware.verifyReceptionist,
    billController.handleGetByID
);
router.post(
    "/create",
    middleware.verifyReceptionist,
    billController.handleCreate
);
router.post(
    "/confirm",
    middleware.verifyReceptionist,
    billController.handleConfirm
);
router.post(
    "/send",
    middleware.verifyReceptionist,
    billController.handleSendToEmail
);

module.exports = router;