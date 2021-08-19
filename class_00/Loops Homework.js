// Loops Homework
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even number.`);
  } else {
    console.log(`${i} is odd number.`);
  }
}

// Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.
for (i = 1; i <= 12; i++) {
  for (j = 1; j <= 12; j++) {
    let res = i * j;
    console.log(`${j} * ${i} = ${res}`);
  }
}

// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
let testScore = prompt("Enter your test score");

if (testScore <= 100 && testScore >= 80) {
  console.log("You got an A");
} else if (testScore < 80 && testScore >= 68) {
  console.log("You got a B");
} else if (testScore < 68 && testScore >= 56) {
  console.log("You got a C");
} else if (testScore < 56 && testScore >= 40) {
  console.log("You got a D");
} else if (testScore < 40 && testScore >= 0) {
  console.log("You got a F");
} else {
  console.log("Please input only a number");
}

// Golf
// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole

// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5

// Bonus: Generate a random par for each iteration

// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
for (let numberOfBottle = 99; numberOfBottle >= 0; numberOfBottle--) {
  if (numberOfBottle == 0) {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.`
    );
    console.log(
      `Go to the store and buy some more, 99 bottles of beer on the wall.`
    );
  } else if (numberOfBottle == 1) {
    console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
    console.log(
      `Take one down and pass it around, no more bottles of beer on the wall.`
    );
  } else {
    console.log(
      `${numberOfBottle} bottles of beer on the wall, ${numberOfBottle} bottles of beer.`
    );
    console.log(
      `Take one down and pass it around, ${
        numberOfBottle - 1
      } bottles of beer on the wall.`
    );
  }
}
