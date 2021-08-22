// Golf
// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// Score	    Nickname
// 1	        "Hole in one"
// <= par - 2	"Eagle"
// par - 1	    "Birdie
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Not sure"
let strokes = prompt("How many strokes"),
  par = prompt("How many par");

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
