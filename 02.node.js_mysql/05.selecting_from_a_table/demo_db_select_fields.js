var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node_user",
  password: "1111",
  database: "node_schema"
});
// 필드 정보 (name, address)
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log("fields[0].name (첫번째 필드의 이름)===", fields[0].name);
    console.log("fields[1].name (두번째 필드의 이름)===", fields[1].name);
  });
});