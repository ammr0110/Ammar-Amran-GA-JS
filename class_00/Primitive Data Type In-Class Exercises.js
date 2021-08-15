// Primitive Data Type In-Class Exercises
// Convert a string into a number (e.g. "4" into 4)?
let str = "4";
let strAsNum = parseInt(str);
console.log(strAsNum);
console.log(typeof(strAsNum));

// Convert a number into a string (e.g. 15 into "15")?
let num = 15;
let numAsStr = num.toString();
console.log(numAsStr);
console.log(typeof(numAsStr));

// Make a string uppercased (e.g. "hello" into "HELLO")?
let c = "hello";
console.log(c.toUpperCase());

// Get the second character out of a string (e.g."hello" returns "e")?
console.log(c.charAt(1));

// Use concatenation to combine two strings (e.g. join "Hello " and "World")?
let str1 = "Hello ";
let str2 = "World";
console.log(str1.concat(str2));

// Get a number and square it (e.g. 4 squared is 16)?
console.log(Math.pow(4, 2));

// Get the square root of a number (e.g. square root of 25 is 5)?
console.log(Math.sqrt(25));
