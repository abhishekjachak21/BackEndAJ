const mongoose = require('mongoose');
const URL =  "mongodb+srv://Abhishek:Abhishek789@cluster21.9vqerdf.mongodb.net/gfgdb";

mongoose.connect(URL);

const users =  mongoose.model('demousers',{name:String,email:String})
const myUser = new users({name:"15JuneVishal",email:"vishal@gmail.com"})
myUser.save().then(()=>console.log('user added'))
