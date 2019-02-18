//dependencies
var express = require("express");
var path = require("path");

var app = express();

//port
var PORT = 3000;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//I know I have to link all the routing js files here as well as the friends js file where my data is stored

app.listen(PORT, function () {
    console.log("listenting to port: " + PORT);
});