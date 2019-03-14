
// DEPENDENCIES
var path = require("path");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.- 14.3-11-QuotesApp
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}