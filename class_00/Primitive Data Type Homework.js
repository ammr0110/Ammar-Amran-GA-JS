// Primitive Data Type Homework
// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// Bonus: Get the current year with JavaScript

let currYear = new Date().getFullYear(),
    birthYear = 1995;

console.log(`They are either ${(currYear - birthYear)} or ${(currYear - birthYear - 1)}.`);

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt

let currAge = 26,
    maxAge = 79,
    estimateAmount = 5,
    total = (maxAge - currAge) * estimateAmount;

console.log(`You will need ${total} to last you until the ripe old age of ${maxAge}.`);

let promptCurrAge = prompt("Your Age"),
    promptMaxAge = prompt("Estimation Year You will Live"),
    promptEstimateAmount = prompt("How many you would eat in total for the rest of your life"),
    promptTotal = (promptMaxAge - promptCurrAge) * promptEstimateAmount;

alert(`You will need ${promptTotal} to last you until the ripe old age of ${promptMaxAge}.`);

// The Geometrizer
// Calculate the properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 15,
    circumference = (2 * Math.PI * radius).toFixed(3),
    area = (Math.PI * Math.pow(radius, 2)).toFixed(3);

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let C = 28,
    F = ((C * 9 / 5) + 32).toFixed(3),
    toC = ((F - 32) * 5 / 9).toFixed(3);

// alt + 0176 for degree symbol
console.log(`${C}°C is equal to ${F}°F`);
console.log(`${F}°F is equal to ${toC}°C`);
