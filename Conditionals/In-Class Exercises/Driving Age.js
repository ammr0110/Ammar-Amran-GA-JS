// Driving Age
// Store the user's name and age.

// If the age is less than 16, log "Sorry, you can't drive yet!"
// If the age is greater than or equal to 16, log "Drive into the sunset!"
// Bonus: Get the name and age using prompt!

// Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")

let myName = prompt("Your name"),
  myAge = prompt("Your age"),
  remainYear = 16 - myAge;

if (myAge == 15) {
  console.log(`Sorry ${myName}, you still have a years before you can drive`);
} else if (myAge < 16) {
  console.log(
    `Sorry ${myName}, you still have ${remainYear} years before you can drive`
  );
} else {
  console.log("Drive into the sunset!");
}
