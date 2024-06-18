const express=require('express')
// import empc from './models/model'
const empc = require('./models/model')
const bp = require("body-parser")
const mongoose= require('mongoose')

var app = express()
app.use(bp.json())

const URL =  "mongodb+srv://Abhishek:Abhishek789@cluster21.9vqerdf.mongodb.net/gfgdb";

app.post('/addUser',(req,res) => {
   const user= new empc({...req.body})
   user.save().then(()=> console.log('user added'))
   res.send('user added')
})

app.get('/loadData',async(req,res)=>{
   const users = await empc.find();
   res.send(users)
})

app.get('/loadData/:id',async(req,res)=>{
    const uid = parseInt(req.params.id)
   const users = await empc.findById(uid);
   res.send(users)

})

const startServer = async()=>{
    await mongoose.connect(URL);
    app.listen(3000,()=>{
        console.log('server is ready bhai');
    })
}

startServer()