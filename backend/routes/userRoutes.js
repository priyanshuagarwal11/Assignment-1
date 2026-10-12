import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUserRole,
} from '../controllers/userController.js';
import { protect, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.get('/', protect, requireAdmin, getAllUsers);
router.put('/:id/role', protect, requireAdmin, updateUserRole);
router.delete('/:id', protect, requireAdmin, deleteUser);

export default router;
