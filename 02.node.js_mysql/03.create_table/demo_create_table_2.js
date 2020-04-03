var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "1111",
  database: "node_schema"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
