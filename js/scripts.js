// user interfsce logic
$(document).ready(function(){
  $("form#cryptoForm").submit(function(event){
     event.preventDefault();
     var sentence = $("#userInput").val();
     cryptText(sentence);

  });

});


// back-end logic
var cryptText = function(userInput) {
  var sqWordLength = Math.ceil(Math.sqrt(userInput.length));
  console.log(sqWordLength);


}
