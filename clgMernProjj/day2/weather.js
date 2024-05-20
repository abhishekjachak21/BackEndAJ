var request = require('request')

let key = '5b23dde3543058bf1c8b99efcbd1e0cf'

module.exports = function (location, callback) {  //callback word use ni kara toh bhi??
 
    var loc = location;

let api = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}&units=metric`

request({
    url:api,
    json:true
},function(error, response, body){
    if(error){
        callback("something went wrong");
    }
    else{
        callback(`Its temp = ${body.main.temp} in ${body.name}`);
        callback(`Its temp max = ${body.main.temp_max} in ${body.name}`);
        callback(`Its pressure = ${body.main.pressure} in ${body.name}`);
        callback(`Its humidity = ${body.main.humidity} in ${body.name}`);
        callback(`Its sea level = ${body.main.sea_level} in ${body.name}`);
        callback(`Its ground level = ${body.main.grnd_level} in ${body.name}`);
    }
})

}