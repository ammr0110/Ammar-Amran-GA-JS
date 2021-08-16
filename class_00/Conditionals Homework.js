// Conditionals Homework

// The World Translator
// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// If the language is "English", log "Hello World"
// If the language is "French", log "Bonjour le monde"
// If the language is "Malay", log "Hai dunia" (I think?)
// Add as many others as you wish!
let lang = "Malay";

if (lang === "English") {
    console.log("Hello World");
} else if (lang === "French") {
    console.log("Bonjour le monde");
} else if (lang === "Malay") {
    console.log("Hai dunia");
} else {
    console.log("Perhaps your language is not available at a moment")
}


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


// Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."
let currTemp = prompt("What's the current temperature?"),
    AC = true,
    desiredTemp = prompt("How many Celsius you want it to be?");

if (AC === true && currTemp > desiredTemp) {
    console.log("Turn on the A/C Please");
} else if (AC === false && currTemp > desiredTemp) {
    console.log("Fix the A/C now! It's hot!");
} else if (AC === false && currTemp < desiredTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...");
} else {
    console.log("We can relax now");
}


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


// Serge Says
// Store a user's message.

// If the user asks a question (e.g. the message ends in ?)
// Log "Sure."
// If the user yells (e.g. the message is in all capitals)
// Log "Woah, chill out!"
// If the user doesn't say anything (e.g. the message is empty OR only spaces)
// Log "Fine. Be that way!"
// Otherwise:
// Log "Whatever."
let userMsg = "How are you?";

if (userMsg == "?") {
    console.log("Sure.");
} else {
    console.log("Whatever.");
}


// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described here)



// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!
