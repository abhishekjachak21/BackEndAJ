





//converting json, json is type data format, passed from server to client
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
const jsonStr = JSON.stringify(jsonObject)
console.log(jsonStr);



///=================================================================================
// var os = require('os')
//  var fs = require('fs')
//  var _ = require('lodash')

//  var user = os.userInfo()
//  console.log(user.username);
 
// console.log("Abhi");

// // fs.appendFile('gret.txt', 'Hi '+user.username+'hek'  +' !\n', ()=>{console.log('file is created')})

// let love = [1,2,"semi", true, "fck"]

// console.log(_.isArray(love));
// console.log(_.isBoolean(love[[3]]));
///=================================================================================



