// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (using the rules described here)
let noun = prompt("Please input a noun");

if (
  noun.endsWith("s") ||
  noun.endsWith("x") ||
  noun.endsWith("z") ||
  noun.endsWith("ch") ||
  noun.endsWith("sh")
) {
  console.log(`${noun}es`);
} else if (
  noun.endsWith("ay") ||
  noun.endsWith("ey") ||
  noun.endsWith("iy") ||
  noun.endsWith("oy") ||
  noun.endsWith("uy")
) {
  console.log(`${noun}s`);
} else if (noun.endsWith("y")) {
  console.log(noun.replace(/y$/, "ies"));
} else if (noun.endsWith("o")) {
  console.log(`${noun}es`);
} else if (noun.endsWith("f") || noun.endsWith("fe")) {
  if (noun.endsWith("f")) {
    console.log(noun.replace(/f$/, "ves"));
  } else {
    console.log(noun.replace(/fe$/, "ves"));
  }
} else if (noun.endsWith("ouse")) {
  console.log(noun.replace(/ouse$/, "ice"));
} else {
  console.log(`${noun}s`);
}
