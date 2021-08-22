// The Classic Fizzbuzz Program
// Loop from 0 to 100.

// If the number is evenly divisible by 3, log "Fizz"
// If the number is evenly divisible by 5, log "buzz"
// If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"
for (let fb = 0; fb <= 100; fb++) {
  if (fb % 3 === 0 && fb % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (fb % 3 === 0) {
    console.log("Fizz");
  } else if (fb % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(fb);
  }
}
