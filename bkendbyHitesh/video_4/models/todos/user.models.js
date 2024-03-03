import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    email: String,
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const user = mongoose.model('user', userSchema);
