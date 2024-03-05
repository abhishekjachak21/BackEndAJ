import mongoose from 'mongoose'

const prodSchema = new mongoose.Schema({},{});

export const Product = mongoose.model("Product", prodSchema);

