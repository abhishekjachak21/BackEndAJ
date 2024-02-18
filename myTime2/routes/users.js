const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Mobile");

const userschema = mongoose.Schema({
  username: String,
  name:String,
  age:Number
});

// mongoose.model(naam,schema)
//naam -> collection like redmi, vivo, realme
//schema -> mi11 or vivo3A or realmeC2
module.exports = mongoose.model("user",userschema);
