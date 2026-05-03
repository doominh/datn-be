import express from 'express';
import chatController from '../controllers/chat.controller';

const router = express.Router();

// POST /api/chat
// Body: { message: string, history: Array }
router.post('/', chatController.handleChat);

module.exports = router;