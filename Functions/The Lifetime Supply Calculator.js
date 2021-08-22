// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// Takes 2 arguments: age, and amountPerDay.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amountPerDay, and round the result to a round number.
function calculateSupply(age, amountPerDay) {
  const maxAge = 79;
  let total = ((maxAge - age) * amountPerDay).toFixed(2);

  console.log(
    `You will need ${total} to last you until the ripe old age of ${maxAge}.`
  );
}
calculateSupply(25, 14);
calculateSupply(22, 8);
calculateSupply(21, 10);
