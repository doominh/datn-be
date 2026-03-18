import express from 'express';
import middleware from '../controllers/middleware';
import categoryController from '../controllers/category';

const router = express.Router();

router.get(
	'/all',
	// middleware.verifyAdmin,
	categoryController.handleGetAll,
);
router.get('/active', categoryController.handleGetActive);
router.get('/:category_id', categoryController.handleGetByID);
router.get('/all/doctor/:doctor_id', categoryController.handleGetAllByDoctorID);
router.post('/create', middleware.verifyAdmin, categoryController.handleCreate);
router.put(
	'/update/:category_id',
	middleware.verifyAdmin,
	categoryController.handleUpdate,
);
router.delete(
	'/delete/:category_id',
	middleware.verifyAdmin,
	categoryController.handleDelete,
);

module.exports = router;
