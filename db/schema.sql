DROP DATABASE IF EXISTS goodBurgerDB;

-- Create the database moviePlannerDB and specified it for use.
CREATE DATABASE goodBurgerDB;

USE goodBurgerDB;

-- Create the table watchlist.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
