// You and Your Government
// Write a program that stores a user age and logs a message based on that age.

// Age	    Message
// >= 35	'You can vote AND hold any place in government!'
// >= 25	'You can vote AND run for the Senate!'
// >= 18	'You can vote!'
// ELSE	    'You can't vote yet'
let userAge = "35";

if (userAge >= 35) {
  console.log("You can vote AND hold any place in government!");
} else if (userAge >= 25) {
  console.log("You can vote AND run for the Senate!");
} else if (userAge >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can't vote yet");
}
