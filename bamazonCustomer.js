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
        var total; 
        var itemsRemaining;
        var itemsOrdered = parseInt(userInput.Quantity);
        var userID = userInput.ID

        for (var i = 0; i < res.length; i++) {     
          console.log("DB Info: ", res[i].Stock_Quantity)    
            itemCount = +res[i].Stock_Quantity;
            itemsRemaining = itemCount - itemsOrdered;
            
            // total = parseInt(+(res[i].Price) * itemsOrdered);
        }
        console.log(itemCount)
        console.log(userID)
        console.log(itemsRemaining)
        // get the information of the chosen item
        // if(userInput.confirm) {
        // userID = userInput.ID
        // userQuantity = userInput.Quantity
        
        // console.log("\nYou've chosen Id number " + userID);
        // console.log("Chosen quantity is " + userQuantity);  
        // }else{
        //   console.log("Transaction did not go through")
        // }

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
      });   
  });
}