// Conditionals In-Class Exercises
// What number's bigger?

// Write an if statement that compares two numbers (call them numOne and numTwo).
let numOne = 25,
    numTwo = 26;

// If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
if (numOne > numTwo) {
  console.log(`${numOne} is bigger than ${numTwo}`);
}

// If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
else if (numOne < numTwo) {
  console.log(`${numOne} is smaller than ${numTwo}`);
}

// If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".
else {
  console.log(`${numOne} is equal to ${numTwo}`);
}

// Driving Age
// Store the user's name and age.

// If the age is less than 16, log "Sorry, you can't drive yet!"
// If the age is greater than or equal to 16, log "Drive into the sunset!"
// Bonus: Get the name and age using prompt!

// Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")

let myName = prompt("Your name"),
    myAge = prompt("Your age"),
    remainYear = 16 - myAge;

if (myAge == 15) {
  console.log(`Sorry ${myName}, you still have a years before you can drive`);
} else if (myAge < 16) {
  console.log(
    `Sorry ${myName}, you still have ${remainYear} years before you can drive`
  );
} else {
  console.log("Drive into the sunset!");
}
