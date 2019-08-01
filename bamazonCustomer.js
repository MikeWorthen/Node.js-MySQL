var mysql = require("mysql");

var inquirer = require("inquirer");

var userID;
var userQuantity;

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
        console.log(res[i].Item_ID + "  | " + res[i].Product_Name + " | $" + res[i].Price + " | " + res[i].Stock_Quantity); 
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
          name: "Quantity",
          type: "input",
          message: "How many would you like?"
        },
        {
          name: "confirm",
          type: "confirm",
          message: "Is this quantity correct?",
          default: true,
        }
      ])

      .then(function(userInput) {
        var itemCount;
        var itemsRemaining;
        var itemsOrdered = parseInt(userInput.Quantity);
        var userID = userInput.ID

        connection.query("SELECT Stock_Quantity FROM products WHERE Item_ID = ?",[userID], function(err, res){
    
          itemCount = res[0].Stock_Quantity,
          itemsRemaining = itemCount - itemsOrdered;
          console.log(itemCount)
          console.log(userID)
          console.log(itemsRemaining)
       
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              Stock_Quantity: itemsRemaining
            },
            {
              Item_ID: userID
            }
          ],
        )
      })
      });   
  });
}