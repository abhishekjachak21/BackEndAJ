import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({  //dont forget to write 'new' word
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        // type: mongoose.Schema.Types.ObjectId,  it is used while exposting other model-schema
        required:true
    },

},{timestamps:true});

export const User = mongoose.model("User",userSchema);