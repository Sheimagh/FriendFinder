// ===============================================================================
// LOAD DATA
// ===============================================================================
var friendsData = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
    console.log(req.body)

    //After this line I need to use Array and looping through to compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.

      friendsData.push(req.body);
      res.json(friendsData[0]);
  });
}


