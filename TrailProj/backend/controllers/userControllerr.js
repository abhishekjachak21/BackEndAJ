import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import validator from "validator";
import userModel from "../models/userModel";


const registerUser = async(req, res)=>{

   const {name, email, password}=req.body;
   try {
     
     const exists = await userModel.findOne({email});

     if(exists) res.status(400).json({message:"user already exist bhai"}); 

     if(validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(password)) 
        res.status(400).json({message: "plz enter all fields!!"})

     else if(!validator.isEmail(email))
        res.status(400).json({message:"plz enter valid email..."})

     else if(!validator.isStrongPassword(password))
        res.status(400).json({message:"plz enter strong password..."})


     const salting = await bcrypt.genSalt(20);
     const hashedPass = await bcrypt.hash(password, salting);

     const newUser = new userModel({name, email, password:hashedPass});
     const user = await newUser.save();
     console.log('User created successfully');

   } catch (error) {
    
   }
}
