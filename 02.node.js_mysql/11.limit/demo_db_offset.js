var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "1111",
  database: "node_schema"
});

// Start from position 3, and return the next 5 records:
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});