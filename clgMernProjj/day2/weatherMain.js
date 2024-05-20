 

var weather = require('./weather.js')

var argv  = require('yargs')
.option('loc',{
    alias:'1',
    demand:true,
    type:'string',
    description:'enter city is must'
})
.help('help')
.argv


 weather(argv.loc, function(currentWeather){
    console.log(currentWeather);
 })