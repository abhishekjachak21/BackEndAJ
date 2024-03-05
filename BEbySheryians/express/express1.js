const express = require('express')
const app = express()


app.use(function(req,res,next){
    console.log("Hi,I am middleware.");
    next();
})

app.get('/', function (req, res) {
  res.send('Hello, My Name is AAbhishek !!')
})

app.get('/profile', function (req, res) {
    res.send('He is so professional !!')
  })

  app.get('/profile/:usr', function (req, res) {
    res.send(`His name is ${req.params.usr}`)
  })

  app.get('/contact', function (req, res) {
    res.send('Mob no 9156010245')
  })

app.listen(3000)