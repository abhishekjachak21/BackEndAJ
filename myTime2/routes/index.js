var express = require('express');
var router = express.Router();
const userModel = require('./users');

// kk
router.get('/', function(req, res) {
  res.send("Hellow");
});


router.get('/profile', function(req, res) {
  req.session.ses1 = 'iamses1';
  req.session.fucked = true ;
  res.render('index', { namee : "abhishek" });
});


router.get('/chkban',function(req,res){
 if(req.session.fucked === true) ;
  res.send("you are fucked up")
})

/*
router.get('/err', function(req, res) {
  res.render('error', { namee : 'abhishek' });
}); 

router.get("/create",async function(req,res){

  const crtdUsr = await userModel.create({           //await -> ah wait mere liye
    username: "Abhishek",
    Name:"jachak",
    age:26
  });
  // res.send("Yeh, ban gaya");
  res.send(crtdUsr);
});

router.get("/read", async function(req,res){
  // const remUsers = await userModel.findOne({username:'gagan'});
  // res.send(remUsers);
  const allUsers = await userModel.find();
  res.send(allUsers);
})


router.get("/delete", async function(req,res){
  let deltdUsr = await userModel.findOneAndDelete({username:'Abhishek'});
  res.send(deltdUsr);
});
*/

module.exports = router;

