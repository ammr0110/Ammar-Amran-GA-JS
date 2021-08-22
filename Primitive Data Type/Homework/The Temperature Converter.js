// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let C = 28;
let F = ((C * 9) / 5 + 32).toFixed(3);
let toC = (((F - 32) * 5) / 9).toFixed(3);

// alt + 0176 for degree symbol
console.log(`${C}°C is equal to ${F}°F`);
console.log(`${F}°F is equal to ${toC}°C`);
