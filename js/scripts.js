$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var inputtedAddress = $("#address").val();
    var contact = {firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress};

    $("#name-list").append("<li>" + contact.firstName + " " + contact.lastName + "</li>");


    event.preventDefault();

  });
});
