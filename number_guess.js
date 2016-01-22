var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 10 ) + 1;
var playerGuess = prompt("I'm thinking of a number between 1 and 10. What is it?");
if (parseInt(playerGuess) === randomNumber) {
  alert("You got it! Good job.");
} else {
    alert ("Nope! It was " + randomNumber);
}