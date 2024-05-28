var express = require('express')
var bp= require('body-parser')
var app= express()
var _= require('underscore')
app.use(bp.json())
var uid=1
var userData=[
    // {id:1,username:'admin',email:'admin@mail.com'},
    // {id:2,username:'manager',email:'manager@mail.com'},
    // {id:3,username:'QA',email:'QA@mail.com'}
]

var pid=1
var projectData=[];

app.get('/loadUser',(req,res)=>{
    res.send(userData)
})
app.post("/addUser",(req,res)=>{
    var udata= req.body
    udata.id=uid++
    userData.push(udata)
    res.send('user added')
})
app.get('/loadUser/:id',(req, res)=>{
      
    var uid=parseInt(req.params.id)
    var foundData = _.findWhere(userData,{id:uid})

    if(foundData) res.send(foundData)
    else res.send('user nnot found')
})
app.delete('/deleteUser/:id',(req, res)=>{
      
    var uid=parseInt(req.params.id)
    var foundData = _.findWhere(userData,{id:uid})

    if(foundData) {userData=_.without(userData,foundData);   res.send('user deleted',foundData)}
    else res.send('user not found')
})

app.get('/loadProj',(req,res)=>{
    res.send(projectData)
})
app.post("/addProj",(req,res)=>{
    var pdata= req.body
    pdata.id=pid++
    projectData.push(pdata)
    res.send('project added')
})
app.get('/loadProj/:id',(req, res)=>{
      
    var pid=parseInt(req.params.id)
    var foundData = _.findWhere(projectData,{id:pid})

    if(foundData) res.send(foundData)
    else res.send('user nnot found')
})
// app.delete('/deleteUser/:id',(req, res)=>{
      
//     var uid=parseInt(req.params.id)
//     var foundData = _.findWhere(userData,{id:uid})

//     if(foundData) {userData=_.without(userData,foundData);   res.send('user deleted',foundData)}
//     else res.send('user not found')
// })


app.use(express.static('public'))


port = 5001;

app.listen(port,()=>{
    console.log('server is ready',`,is live on port ${port}`);
})


// var express = require('express')
// var bp= require('body-parser')
// var app = express()
// app.use(bp.json);
// var userData = [
//     {id:'1',username:'admin', email:'admin@gmail.com'},
//     {id:'2',username:'sham', email:'sham@gmail.com'},
//     {id:'3',username:'manager', email:'manager@gmail.com'},
// ]
// app.get('/loadUser',(req,res)=>{
//     res.send(userData)
// })
// app.post('/addUser',(req,res)=>{
//    var addData = req.body;
//    addData.id = id++;
//    userData.push(addData);
//    res.send('User added')
// })


// app.use(express.static('public'));

// port = 5001;

// app.listen(port,()=>{
//     console.log('server is ready',`,is live on port ${port}`);
// })