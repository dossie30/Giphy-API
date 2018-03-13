$(document).ready(function() {

  // Here we are provided an initial array of topics.
  // Use this array to dynamically create buttons on the screen.
  var topics = ["James Brown","Prince","Michael Jackson","Janet Jackson","Beyonce","Janelle Monae","Ciara","Missy Elliott","Chris Brown","Usher"];


  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
  // =================================================================================

  // 1. Create a for-loop to iterate through the topics array.
  for (var i = 0; i < topics.length; i++) {

    // Inside the loop...

    // 2. Create a variable named "topicBtn" equal to $("<button>");
    var topicBtn = $("<button>");

    // 3. Then give each "topicBtn" the following classes: "topic-button" "topic" "topic-button-color".
    topicBtn.addClass("topic-button topic topic-button-color");

    // 4. Then give each "topicBtn" a data-attribute called "data-letter".
    topicBtn.attr("data-letter", topics[i]);

    // 5. Then give each "topicBtns" a text equal to "letters[i]".
    topicBtn.text(topics[i]);

    // 6. Finally, append each "topicBtn" to the "#buttons" div (provided).
    $("#buttons").append(topicBtn);

  }
});