
// DEPENDENCIES

var express = require("express");
// var path = require("path");

// EXPRESS CONFIGURATION

var app = express();


// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.text());
// app.use(express.jason({type: "application/vnd.api+jason"}));
// ROUTER
// The below points our server to a series of "route" files.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
