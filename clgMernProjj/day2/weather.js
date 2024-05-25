var request = require('request')

let key = '5b23dde3543058bf1c8b99efcbd1e0cf'

module.exports = function (location, callback) {  //callback word use ni kara toh bhi??
 
    var loc = location;

let api = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}&units=metric`

request({
    url:api,
    json:true
},function(error,response,body){
    if(error){
       callback('something went wrong');
    }else{
        callback(`Its ${body.main.temp}  ${body.name}`);
    }
})
}