// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt

let currAge = 26;
let maxAge = 79;
let estimateAmount = 5;
let total = (maxAge - currAge) * estimateAmount;

console.log(
  `You will need ${total} to last you until the ripe old age of ${maxAge}.`
);

let promptCurrAge = prompt("Your Age");
let promptMaxAge = prompt("Estimation Year You will Live");
let promptEstimateAmount = prompt(
    "How many you would eat in total for the rest of your life"
  ),
  promptTotal = (promptMaxAge - promptCurrAge) * promptEstimateAmount;

alert(
  `You will need ${promptTotal} to last you until the ripe old age of ${promptMaxAge}.`
);
