// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
let userName = prompt("Your name"),
  userAge = prompt("Your age");

function canDrive(userName, userAge) {
  let remainYear = 16 - userAge;
  if (userAge == 15) {
    console.log(
      `Sorry ${userName}, you still have a years before you can drive`
    );
  } else if (userAge < 16) {
    console.log(
      `Sorry ${userName}, you still have ${remainYear} years before you can drive`
    );
  } else {
    console.log("Drive into the sunset!");
  }
}
canDrive(userName, userAge);
