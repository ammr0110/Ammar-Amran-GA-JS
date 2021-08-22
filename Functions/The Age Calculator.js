// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:

// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();

  console.log(
    `You are either ${currentYear - birthYear} or ${
      currentYear - birthYear - 1
    }.`
  );
}
calculateAge(1995);
calculateAge(2000);
calculateAge(2005);
