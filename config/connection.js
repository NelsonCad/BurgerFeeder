// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "y2do04my95yiu43b",
  password: "vojvt3u6fc2j9uvn",
  database: "vj2bjwdd5b1t44z7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
