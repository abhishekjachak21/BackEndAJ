const request = require('request')
const URL = 'https://ipinfo.io'

module.exports = function (callback) {
request({
        url: URL,
        json: true
    }, function (error, response, body) {
        if (error) {
            callback('unable to guess');
        } else {
            callback(body);
        }
    })
}