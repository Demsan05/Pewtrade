import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import adRoutes from './routes/ads.js';
import userRoutes from './routes/users.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/ads', adRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch((err) => console.error(err));