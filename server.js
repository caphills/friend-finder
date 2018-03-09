// require dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// creating a server that will have all method of "express"
var app = express();
console.log("testing the app");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router
require(path.join(__dirname, "./routing/apiRoutes"))(app);
require(path.join(__dirname, "./routing/htmlRoutes"))(app);

//Starts the server
app.listen(PORT, function () {
   console.log("App listening on PORT:" + PORT);
})