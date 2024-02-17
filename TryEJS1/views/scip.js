const express = require('express')
const app = express()
//backend ka server code 

app.use(function(req,res,next){
    console.log("Hi,I am middleware.");
    next();
})


app.set('views', '/home/abhishek/Desktop/HelloCoder/BKend(nodejs)/views');

app.set("view engine" ,"ejs");


app.get('/', function (req, res) {
  // res.send('Hello, My Name is Abhishek !!')
  res.render("contact");
})

app.get('/profile', function (req, res) {
    // res.send('He is so professional !!')
    res.render("profile",{ABHISHEK:"Junior Software Developer hai ye ladka"});
  })

  app.get('/contact', function (req, res) {
    // res.send('He is so professional !!')
    res.render("contact");
  })  

app.listen(2503)