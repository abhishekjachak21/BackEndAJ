const mongoose = require('mongoose')

const empc = new mongoose.model('empCRUD',{
    uname:String,email:String,city:String,_id:String
});

module.exports = empc;
