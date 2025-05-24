import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/login', (req, res) => {
  const { username } = req.body;
  const isAdmin = username === 'admin';
  const token = jwt.sign({ username, isAdmin }, 'testsecret', { expiresIn: '1h' });
  res.json({ token, username, isAdmin });
});

export default router;