
var express = require("express");

var path = require("path");

var app = express();

var PORT = 3000;

// middleware used to parse information ..
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(PORT, function () {
    console.log("listenting to port: " + PORT);
});