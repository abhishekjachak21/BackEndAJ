var express = require('express');
var router = express.Router();
const userModel = require('./users');

// kk
router.get('/', function(req, res) {
  res.send("Hellow");
});

router.get('/profile', function(req, res) {
  res.render('index', { namee : 'abhishek' });
});

router.get('/err', function(req, res) {
  res.render('error', { namee : 'abhishek' });
}); 

// router.get("/create",async function(req,res){

//   const crtdUsr = await userModel.create({           //await -> ah wait mere liye
//     username: "Abhishek",
//     Name:"Lalu",
//     age:23
//   });
//   // res.send("Yeh, ban gaya");
//   res.send(crtdUsr);
// });

// router.get("/allUsers", async function(req,res){
//   const allUsers = await userModel.find();
//   res.send(allUsers);
// })


module.exports = router;

