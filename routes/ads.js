import express from 'express';
import Ad from '../models/Ad.js';
import upload from '../middleware/upload.js';
const router = express.Router();

router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const imagePaths = req.files.map(file => '/uploads/' + file.filename);
    const ad = new Ad({ ...req.body, images: imagePaths });
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).json({ error: 'Error saving ad.' });
  }
});

router.get('/', async (req, res) => {
  const ads = await Ad.find().sort({ createdAt: -1 });
  res.json(ads);
});

export default router;