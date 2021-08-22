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
