var express = require('express')
var app = express();

app.get('/', (req,res)=>{
  res.send("Hi bhai, learning nodejs happily")
})

app.get('/passion',(req,res)=>{              //  '/passion' is endpoint for server/waiter                                                                                                                                                                                                                                                                                                                                                   
    res.send("yes, my passion is cooking")
})

app.listen(3000)