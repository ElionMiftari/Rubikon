import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contactController.js';

const router = Router();

router.post('/', [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required.'),
  body('email').isEmail().withMessage('Valid email required.'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters.'),
], submitContact);

export default router;
