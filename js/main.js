$(document).ready(function() {

  var add = function(number1, number2){
    return number1 + number2;
  };
  var subtract = function(number1, number2){
    return number1 - number2;
  };
  var multiply = function(number1, number2){
    return number1 * number2;
  };
  var division = function(number1, number2){
    return number1 + number2;
  };


//This the addition function for the add buttton //
    $(".add").click(function(event){
      event.preventDefault();
      var n1 = parseInt($("input#1st-number").val());
      var n2 = parseInt($("input#2nd-number").val());
      var result = add(n1, n2);

      $("input#answer").val(result);

    });

  //This is the subtraction function for the minus button //

    $(".sub").click(function(event){
      event.preventDefault();
      var n1 = parseInt($("input#1st-number").val());
      var n2 = parseInt($("input#2nd-number").val());
      var result = subtract(n1, n2);

      $("input#answer").val(result);

    });
  //This is the multiplication//
    $(".mult").click(function(event){
      event.preventDefault();
      var n1 = parseInt($("input#1st-number").val());
      var n2 = parseInt($("input#2nd-number").val());
      var result = multiply(n1, n2);

      $("input#answer").val(result);

    });
    //This is the division function //
    $(".divide").click(function(event){
      event.preventDefault();
      var n1 = parseInt($("input#1st-number").val());
      var n2 = parseInt($("input#2nd-number").val());
      var result = division(n1, n2);

      $("input#answer").val(result);

    });

});
