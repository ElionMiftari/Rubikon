import { Router } from 'express';
import { body } from 'express-validator';
import { me, signin, signup } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.post('/signup', [
  body('username').trim().isLength({ min: 2 }).withMessage('Username is required.'),
  body('email').isEmail().withMessage('Valid email required.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars.'),
], signup);

router.post('/signin', [
  body('email').isEmail().withMessage('Valid email required.'),
  body('password').notEmpty().withMessage('Password is required.'),
], signin);

router.get('/me', auth, me);

export default router;
