var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "node_user",
    password: "1111"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });