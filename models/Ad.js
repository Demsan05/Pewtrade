import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  category: String,
  description: String,
  images: [String],
  userId: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Ad', adSchema);