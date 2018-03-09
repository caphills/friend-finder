var friends = require("../data/friend.js");

// Exports the function
module.exports = function(app) {
    // Used to display all friends
    app.get("/api/friend", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friend", function(req, res) {
        res.json(friends);
     // Posting  
     var userInput = req.body;
     var userName = userInput.name;
     var userPhoto = userInput.photo;
     var userScores = userInput.scores;

     console.log("user input: " + req.body);
 
      // For holding the best match's data
       var matchName= "";
        var matchPhoto= "";
        var matchDifference = 1000;

      // for calculate the difference between users' scores
      var totalDifference = 0;

      // Looping through all the friend possibilities
      for (var i = 0; i < friends.length; i++) {
     
        console.log("Friend's name: " + friends[i].name);

        totalDifference = 0;

     // Looping through all of the scores
     for (var j = 0; j < friends[i].scores[j]; j++) {

         // figuring thes score difference 
         totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

         // If the differences is < the differences of the current "best match"
         if (totalDifference <= matchDifference) {

             // Resetting the bestMatch variable
             matchName = friends[i].name;
             matchPhoto = friends[i].photo;
             matchDifference = totalDifference;

          }
     }
 }
          // push the user's input to the db
          friends.push(userInput);
          //send appropriate response
          matchName = friends[i].name;
          res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
}
