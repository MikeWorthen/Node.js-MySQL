DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  Item_ID INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price DECIMAL(10, 2) NULL,
  Stock_Quantity INT NULL,
  PRIMARY KEY (Item_ID)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Logitech G213 Keyboard", "Technology", 42.99, 150);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Steelseries Arctis 7 Headphones", "Technology", 127.37, 100);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("LG Monitor 24", "Technology", 176.99, 225);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Razer Deathadder Mouse", "Technology", 39.99, 100);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Star Wars: The Complete Saga", "Movies", 74.40, 540);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Lord of the Rings: Trilogy", "Movies", 79.99, 365);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Indian Jones: Complete Collection", "Movies", 35.40, 145);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Eloquent JavaScript: 3rd Edition", "Books", 28.50, 75);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Python for Everybody", "Books", 9.99, 55);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Head First Java: 2nd Edition", "Books", 33.99, 60);