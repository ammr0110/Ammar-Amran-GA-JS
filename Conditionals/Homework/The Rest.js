// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!
let userInput = prompt("Rock, Paper, Scissors");
let userChoice = userInput.toLowerCase();
let compChoice = Math.random();

if (compChoice < 0.334) {
  compChoice = "rock";
} else if (compChoice < 0.667) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}

if (userChoice === "rock") {
  if (compChoice === "paper") {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
} else if (userChoice === "paper") {
  if (compChoice === "scissors") {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
} else if (userChoice === "scissors") {
  if (compChoice === "rock") {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
} else {
  console.log("It's a tie!");
}
