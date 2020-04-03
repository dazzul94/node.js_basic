var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "1111",
  database: "node_schema"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});