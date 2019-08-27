// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-consumed").on("click", function(event) {
    var id = $(this).data("id");
    var newConsumed = $(this).data("newconsumed");

    var newlyConsumed = {
      consumed: newConsumed
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newlyConsumed
    }).then(
      function() {
        console.log("changed existing to", newConsumed);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      consumed: $("[name=consumed]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("threw away burger ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
