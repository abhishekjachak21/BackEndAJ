import express from 'express';
import connectDB from './DB/index.js';
import dotenv from 'dotenv';

dotenv.config({ path: './env' });

console.log("MongoDB URL:", process.env.MONGODB_URL); // Add this line to log the MongoDB URL

connectDB()
  