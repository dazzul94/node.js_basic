var http = require('http');
var dt = require('./myfirstmodule'); // 같은 폴더에 있다.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080/');