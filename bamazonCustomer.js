var mysql = require("mysql");

let connection = mysql.createConnection( {
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazonDB",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems()
});

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].Item_ID + "  | " + res[i].Product_Name + " | $" + res[i].Price);
      }
      console.log("---------------------------------------------------------");
    });
  }