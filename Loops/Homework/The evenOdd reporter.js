// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (let oddEven = 0; oddEven <= 20; oddEven++) {
  if (oddEven % 2 === 0) {
    console.log(`${oddEven} is even number.`);
  } else {
    console.log(`${oddEven} is odd number.`);
  }
}
