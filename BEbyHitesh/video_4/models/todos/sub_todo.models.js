import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema({},{timestamps:true})

export const subtodo = mongoose.model("subtodo",subtodoSchema)