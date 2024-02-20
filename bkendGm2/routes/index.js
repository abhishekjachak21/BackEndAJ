var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});


router.get('/mice',function(req,res){
   res.send("Mice Kice");
})

router.get('/failes',function(req,res){
  //  res.send(naam, data);
  req.flash("age",25);
  res.send("Ban gya")
})

router.get("chk",function(req,res){
  console.log(req.flash("age"));
  res.send("chk bkend terminal")
})

// router.get('/err', function(req, res) {
//   res.render('error');
// });




module.exports = router;
