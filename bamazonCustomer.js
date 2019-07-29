var mysql = require("mysql");

var inquirer = require("inquirer");

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

      inquirer
      .prompt([
        {
          name: "ID",
          type: "input",
          message: "What item would you like (Enter the ID number)?"
        },
        {
          name: "ID",
          type: "input",
          message: "How many would you like?"
        },
        {
          name: "ID",
          type: "input",
          message: "Is this quantity correct?"
        }
      ]);
  });
}