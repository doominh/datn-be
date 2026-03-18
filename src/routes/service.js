import express from "express";
import middleware from "../controllers/middleware";
import serviceController from "../controllers/service";

const router = express.Router();

router.get(
    "/all",
    // middleware.verifyAdmin,
    serviceController.handleGetAll
);
router.get(
    "/:service_id",
    // middleware.verifyAdmin,
    serviceController.handleGetByID
);
router.get(
    "/active/category/:category_id",
    middleware.verifyReceptionistOrDoctor,
    serviceController.handleGetActiveByCategoryID
);
router.post(
    "/create",
    middleware.verifyAdmin,
    serviceController.handleCreate
);
router.put(
    "/update/:service_id",
    middleware.verifyAdmin,
    serviceController.handleUpdate
);
router.delete(
    "/delete/:service_id",
    middleware.verifyAdmin,
    serviceController.handleDelete
);

module.exports = router;