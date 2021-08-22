// The Geometrizer
// Calculate the properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

let radius = 15;
let circumference = (2 * Math.PI * radius).toFixed(3);
let area = (Math.PI * Math.pow(radius, 2)).toFixed(3);

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);
