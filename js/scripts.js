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
  var textLength = userInput.length;
  var rows = Math.ceil(Math.sqrt(textLength));
  var columns = Math.floor(Math.sqrt(textLength));
  var answer = [];
  console.log("There are " + rows + " rows and " + columns + " columns");


  console.log(numArray);

}
