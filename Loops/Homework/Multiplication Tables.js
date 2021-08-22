// Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.
for (let a = 1; a <= 12; a++) {
  for (let b = 1; b <= 12; b++) {
    let total = a * b;
    console.log(`${b} * ${a} = ${total}`);
  }
}
