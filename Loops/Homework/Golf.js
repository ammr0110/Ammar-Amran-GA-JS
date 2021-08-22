// Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// Bonus: Generate a random par for each iteration
let strokes = prompt("How many strokes");
let par = prompt("How many par");

if (strokes == 1) {
  console.log("Hole in one");
} else if (strokes <= par - 2) {
  console.log("Eagle");
} else if (strokes == par - 1) {
  console.log("Birdie");
} else if (strokes == par) {
  console.log("Par");
} else if (strokes == par + 1) {
  console.log("Bogey");
} else if (strokes == par + 2) {
  console.log("Double Bogey");
} else if (strokes >= par + 3) {
  console.log("Not sure");
}
