
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#calculatorForm").submit(function(event) {
    var userNumber1 = parseInt($("input#add1").val());
    var userNumber2 = parseInt($("input#add2").val());
    alert(add(userNumber1, userNumber2));
    event.preventDefault();
  });
});
