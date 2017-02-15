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
  $("#calculatorForm").submit(function(event) {
    event.preventDefault();
    var userNumber1 = parseInt($("input#add1").val());
    var userNumber2 = parseInt($("input#add2").val());
    var result = add(userNumber1, userNumber2);
    $("#output").text(result);
  });
  $("#calculatorFormSubtract").submit(function(event) {
    event.preventDefault();
    var userNumber1 = parseInt($("input#subtract1").val());
    var userNumber2 = parseInt($("input#subtract2").val());
    var result = subtract(userNumber1, userNumber2);
    $("#output").text(result);
  });
  $("#calculatorFormMultiply").submit(function(event) {
    event.preventDefault();
    var userNumber1 = parseInt($("input#multiply1").val());
    var userNumber2 = parseInt($("input#multiply2").val());
    var result = multiply(userNumber1, userNumber2);
    $("#output").text(result);
  });
  $("#calculatorFormDivide").submit(function(event) {
    event.preventDefault();
    var userNumber1 = parseInt($("input#divide1").val());
    var userNumber2 = parseInt($("input#divide2").val());
    var result = divide(userNumber1, userNumber2);
    $("#output").text(result);
  });
});
