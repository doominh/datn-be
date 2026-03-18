import express from "express";
import middleware from "../controllers/middleware";
import authController from "../controllers/auth";

const router = express.Router();

router.get(
    "/verify",
    authController.handleVerify
);
router.post(
    "/register",
    authController.handleRegister
);
router.post(
    "/login/client",
    authController.handleLoginClient
);
router.post(
    "/login/admin",
    authController.handleLoginAdmin
);
router.put(
    "/password/change/:user_id",
    middleware.verifyUser,
    authController.handleChangePassword
);
router.post(
    "/password/send-reset-link",
    authController.handleSendResetLink
);
router.get(
    "/password/reset/:user_id/:token",
    authController.handleVerifyResetLink
);
router.post(
    "/password/reset/:user_id/:token",
    authController.handleResetPassword
);
router.post(
    "/password/check",
    middleware.verifyUser,
    authController.handleCheckPassword
);
router.post(
    "/block",
    middleware.verifyAdmin,
    authController.handleChangeBlockStatus
);
router.post(
    "/unblock",
    middleware.verifyAdmin,
    authController.handleChangeBlockStatus
);
router.put(
    "/email/change/:user_id",
    middleware.verifyUser,
    authController.handleChangeEmail
);
router.post(
    "/token/refresh",
    authController.handleRefreshToken
);

module.exports = router;