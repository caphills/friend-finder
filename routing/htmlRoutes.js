// require dependencies
var express = require("express");
var path = require("path");

// Exports function
module.exports = function(app) {
    // Specify routes for app
    app.get("/home", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}