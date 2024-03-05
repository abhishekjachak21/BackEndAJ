//28-12-2023  -> Sheryians bkend 2 expressjs
//revision on 15 feb 2024

const express = require('express')
const app = express()
// const app = express()


app.use(function(req,res,next){     /// .use() will be called always first
    console.log("This is middleware.");
    next();
})

app.get('/', function (req, res) {
  res.send('Hello, My Name is Abhishek !!')
})

app.get('/profile', function (req, res) {
    res.send('He is so professional !!')
  })

///req -> params -> usr
app.get('/profile/:usr', function (req, res) {     //49min 
  res.send(`He is ${req.params.usr}`)
})

app.get('/profile/name/:usr', function (req, res) {      
  res.send(`His name is ${req.params.usr}`)
})

app.get('/contact', function (req, res) {
  res.send('Mobile no -> 9156010245')
})

app.listen(3000)