var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
// open할때 console.log
rs.on('open', function () {
  console.log('The file is open');
});