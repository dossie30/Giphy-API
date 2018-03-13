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

    // 5. Then give each "topicBtn" a text equal to "topics[i]".
    topicBtn.text(topics[i]);

    // 6. Finally, append each "topicBtn" to the "#buttons" div (provided).
    $("#buttons").append(topicBtn);

  }

      // Event listener for all button elements
      $(".topic-button").on("click", function() {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr("data-letter");
  
        // Constructing a URL to search Giphy for the name of the person 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          person + "&api_key=EwM1TBMpObzZQFEg6bxNzclImgsXEaAs&limit=10";
  
        // Performing our AJAX GET request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After the data comes back from the API
          .then(function(response) {
            console.log(response);
            // Storing an array of results in the results variable
            var results = response.data;
  
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {
  
              // Only taking action if the photo has an appropriate rating
              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div with the class "item"
                var gifDiv = $("<div class='item'>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var personImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[i].images.fixed_height_still.url);
  
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").append(gifDiv);
              }
            }
          });
      });

});