// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
let testScore = prompt("Enter your test score");

for (testScore = 60; testScore <= 100; testScore++) {
  if (testScore <= 100 && testScore >= 80) {
    console.log(`For ${testScore}, you got an A`);
  } else if (testScore < 80 && testScore >= 68) {
    console.log(`For ${testScore}, you got a B`);
  } else if (testScore < 68 && testScore >= 56) {
    console.log(`For ${testScore}, you got a C`);
  } else if (testScore < 56 && testScore >= 40) {
    console.log(`For ${testScore}, you got a D`);
  } else if (testScore < 40 && testScore >= 0) {
    console.log(`For ${testScore}, you got a F`);
  } else {
    console.log("Please input only a number");
  }
}
