
var express = require('express')
var bp = require('body-parser')
var _ = require('underscore')
var app = express()
app.use(bp.json())
var uid = 1
var userData = []


var middleware={
    logger:function(req,res,next){
        console.log('Request  '+ new Date().toString() + " " + req.method + " "+ req.originalUrl);
    next()
    }
}
app.get('/loadusers',middleware.logger, (req, res) => {
    res.send(userData)
})
app.get('/loaduser/:id', (req, res) => {

    var uid = parseInt(req.params.id)
    var foundData = _.findWhere(userData, { id: uid })
    if (foundData) {
        res.send(foundData)

    } else {
        res.send('user not found')
    }


})

app.delete('/deleteuser/:id', (req, res) => {

    var uid = parseInt(req.params.id)
    var foundData = _.findWhere(userData, { id: uid })
    if (foundData) {
      userData=_.without(userData,foundData)
      res.send('user deleted')

    } else {
        res.send('user not found')
    }


})
app.post("/adduser", (req, res) => {
    var udata = req.body
    udata.id = uid++
    userData.push(udata)
    res.send('user added')
})
app.use(express.static('public'))


app.listen(5000, () => {
    console.log('server is ready...1');
})