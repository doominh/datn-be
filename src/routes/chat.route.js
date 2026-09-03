import express from 'express';
import chatController from '../controllers/chat.controller';
import middleware from '../controllers/middleware';

const router = express.Router();

// POST /api/chat
// Body: { message: string, history: Array }
router.post('/', middleware.verifyPatientOptional, chatController.handleChat);

module.exports = router;