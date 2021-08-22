// The Grade Assigner
// Store a testScore in a variable. Give the user a score (either "A", "B", "C", "D", or "F") based on those test results.
let testScore = prompt("Enter your test score");

if (testScore <= 100 && testScore >= 80) {
  console.log("A");
} else if (testScore < 80 && testScore >= 68) {
  console.log("B");
} else if (testScore < 68 && testScore >= 56) {
  console.log("C");
} else if (testScore < 56 && testScore >= 40) {
  console.log("D");
} else if (testScore < 40 && testScore >= 0) {
  console.log("F");
} else {
  console.log("Please input only a number");
}
