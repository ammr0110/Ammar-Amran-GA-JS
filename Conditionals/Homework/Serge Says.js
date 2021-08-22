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
let userMsg = prompt("How are you?");

if (userMsg.endsWith("?")) {
  console.log("Sure.");
} else if (
  (userMsg == userMsg.toUpperCase() && userMsg != "") ||
  userMsg != " "
) {
  console.log("Woah, chill out!");
} else if (userMsg === "" || userMsg === " ") {
  console.log("Fine. Be that way!");
} else {
  console.log("Whatever.");
}
