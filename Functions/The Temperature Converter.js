// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(celsius) {
  let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(3);
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(prompt("Convert Celsius to Fahrenheit"));

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C".
function fahrenheitToCelsius(fahrenheit) {
  let celsius = (((fahrenheit - 32) * 5) / 9).toFixed(3);
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}
fahrenheitToCelsius(prompt("Convert Fahrenheit to Celsius"));
