function getRandomNumber( upper ) {
    var randomNumber = Math.floor( Math.random() *    upper ) + 1;
    return randomNumber;
}

//First number
var lowInput = prompt("Give me a number between 1 and 10");
if (10 >= lowInput && lowInput >= 1) {
  var lowNumber = parseInt(lowInput);
}
//Second number
var highInput = prompt("Give me a number between 11-100");
if (100 >= highInput && highInput >= 11) {
  var highNumber = parseInt(highInput);
}

alert( getRandomNumber (highInput) );
/*Determines if the numbers are valid and a correct result can be provided
*/
if ( (100 >= highInput && highInput >= 11) === false || (10 >= lowInput && lowInput >= 1) === false) {
    alert("Sorry you'll have to try again. One of your numbers wasn't valid.");
} else {
  var numberGen = Math.floor( Math.random() * (highNumber   - lowNumber + 1) ) + lowNumber;
  alert("Between " + lowNumber + " and " + highNumber + " your number is: " + numberGen);
}