// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
function calcCircumference(radius) {
  let circumference = (2 * Math.PI * radius).toFixed(3);
  console.log(`The circumference is ${circumference}`);
}
calcCircumference(prompt("Radius for Circumference of Circle"));

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(radius) {
  let area = (Math.PI * Math.pow(radius, 2)).toFixed(3);
  console.log(`The area is ${area}`);
}
calcArea(prompt("Radius for Circumference of Circle"));
