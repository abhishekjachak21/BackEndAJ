var http = require('http'); ///this is http module ig, like express

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello wWorld!');
}).listen(8080);

var bb = 344;

module.exports = bb;