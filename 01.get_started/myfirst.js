
// To include a module, use the require() function with the name of the module
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end('Hello World! 안녕');
}).listen(8080);
console.log('Server running at http://localhost:8080/');