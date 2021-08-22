// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// Bonus: Get the current year with JavaScript

let currYear = new Date().getFullYear();
let birthYear = 1995;

console.log(
  `They are either ${currYear - birthYear} or ${currYear - birthYear - 1}.`
);
