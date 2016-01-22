var correctAnswers = 0;

var question1 = prompt("What is the capitol of France?");
if (question1.toUpperCase() === "PARIS") {
    correctAnswers += 1;
    alert("Yup! Got it. Next Question...");
} else {
    alert("Nope. Not that.");
}
var question2 = prompt("What is the biggest ocean?");
if (question2.toUpperCase() === "PACIFIC") {
    correctAnswers += 1;
    alert("Yup! Got it. Next Question...");
} else {
    alert("Nope. Not that.");
}

var question3 = prompt("What state is home to San Francisco?");
if (question3.toUpperCase() === "CALIFORNIA") {
    correctAnswers += 1;
    alert("Yup! Got it. Next Question...");
} else {
    alert("Nope. Not that.");
}

var question4 = prompt('What is the "red planet"?');
if (question4.toUpperCase() === "MARS") {
    correctAnswers += 1;
    alert("Yup! Got it. Next Question...");
} else {
    alert("Nope. Not that.");
}

var question5 = prompt("What mammal has the longest neck?");
if (question5.toUpperCase() === "GIRAFFE") {
    correctAnswers += 1;
    alert("Yup! Got it. Results time...");
} else {
    alert("Nope. Not that.");
}

if (correctAnswers === 5) {
    alert("Great job! You got them all right. Wear your gold medal with honor.");
} else if (correctAnswers === 4 || correctAnswers === 3) {
    alert("Solid performance! That's " + correctAnswers + " correct, which gets you the silver medal.");
} else if (correctAnswers === 2 || correctAnswers === 1) {
    alert("Good try, you got " + correctAnswers + " answers correct. Maybe give it another go. Here's a bronze medal as a consolation prize.");
} else {
    alert("Hmmm...You need to school more");
}