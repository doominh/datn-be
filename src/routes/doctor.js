import express from 'express';
import middleware from '../controllers/middleware';
import doctorController from '../controllers/doctor';

const router = express.Router();

router.get('/all', middleware.verifyAdmin, doctorController.handleGetAll);
router.get('/active', doctorController.handleGetActive);
router.get('/:doctor_id', doctorController.handleGetByID);
router.get(
	'/all/category/:category_id',
	doctorController.handleGetAllByCategoryID,
);
router.get(
	'/all/:date/:session_id',
	middleware.verifyAdmin,
	doctorController.handleGetAllBySchedule,
);
router.post('/create', middleware.verifyAdmin, doctorController.handleCreate);
router.put(
	'/update/:doctor_id',
	middleware.verifyAdmin,
	doctorController.handleUpdate,
);
router.put(
	'/profile/update/:doctor_id',
	middleware.verifyDoctor,
	doctorController.handleUpdateProfile,
);

module.exports = router;
