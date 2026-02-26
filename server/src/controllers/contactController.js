import { validationResult } from 'express-validator';
import ContactMessage from '../models/ContactMessage.js';

export async function submitContact(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });

  const message = await ContactMessage.create(req.body);
  return res.status(201).json({ message: 'Contact message received.', id: message._id });
}
