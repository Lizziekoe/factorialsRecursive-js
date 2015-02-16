$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var inputtedAddress = $("#address").val();
    var contact = {firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress};

    $("#name-list").append("<li><span class = 'contact'>" + contact.firstName + " " + contact.lastName + "</span></li>");


    $(".contact").last().click(function() {


      $("#show-contact").show();
      $("#show-contact h3").text(contact.firstName + " " + contact.lastName);
      $('.first-name').text(contact.firstName);
      $('.last-name').text(contact.lastName);
      $('.address').text(contact.address);
    });


    event.preventDefault();

  });
});
