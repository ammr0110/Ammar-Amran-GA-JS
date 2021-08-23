// Arrays
// Working with Arrays
// Starting with an empty array called rainbowColors:

// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Bonus: Do this using one method
let rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");
rainbowColors.push("green", "blue", "indigo", "violet");

// Log out the length of the array
console.log(rainbowColors.length);

// Log out the second item
console.log(rainbowColors[1]);

// Log out the last item (make this flexible/dynamic!)
console.log(rainbowColors[rainbowColors.length - 1]);

// Log out the index of the string "blue"
console.log(rainbowColors.indexOf("blue"));

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
let twoColors = rainbowColors.slice(1, 3);
console.log(twoColors);

// Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
// Bonus: Work with arrays of arrays
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2, 2);
console.log(nums);

nums.splice(3, 1);
console.log(nums);

// Starting with this array const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
const arrOfArrs = [
  ["inner array first item", "inner array second item"],
  ["first", "second", "third"],
];

// Access "inner array first item" and print it out
arrOfArrs[0][0];

// Print "third" by using a dynamic index
// Bonus: Loop through the second inner array! Print out the first item, the second item, then the third item
for (let i = 0; i < arrOfArrs.length; i++) {
  for (let j = 0; j < arrOfArrs[i].length; j++) {
    console.log(arrOfArrs[i][j]);
  }
}

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever you want).

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice", "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
let topFive = ["black", "blue", "white", "green", "red"];

for (let i = 0; i < topFive.length; i++) {
  if ([i + 1] == 1) {
    console.log(`My ${[i + 1]}st choice is ${topFive[i]}`);
  } else if ([i + 1] == 2) {
    console.log(`My ${[i + 1]}nd choice is ${topFive[i]}`);
  } else if ([i + 1] == 3) {
    console.log(`My ${[i + 1]}rd choice is ${topFive[i]}`);
  } else {
    console.log(`My ${[i + 1]}th choice is ${topFive[i]}`);
  }
}
