var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "1111",
  database: "node_schema"
});
// 사용자가 입력한 값을 받을 때는 escape를 시켜야 한다 . 왜? sql injection을 방지하기 위해
// 1. mysql.escape()
con.connect(function(err) {
  if (err) throw err;
  var adr = 'Mountain 21';
  console.log(mysql.escape(adr));
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});