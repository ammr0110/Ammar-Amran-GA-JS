// Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."
let currTemp = prompt("What's the current temperature?"),
  AC = true,
  desiredTemp = prompt("How many Celsius you want it to be?");

if (AC === true && currTemp > desiredTemp) {
  console.log("Turn on the A/C Please");
} else if (AC === false && currTemp > desiredTemp) {
  console.log("Fix the A/C now! It's hot!");
} else if (AC === false && currTemp < desiredTemp) {
  console.log("Fix the A/C whenever you have the chance... It's cool...");
} else {
  console.log("We can relax now");
}
