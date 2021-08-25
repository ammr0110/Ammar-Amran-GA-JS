// Working with Users
// Starting with this data...
const users = [
  {
    email: "groucho@ga.co",
    password: "chicken",
    isAdmin: true,
  },
  {
    email: "harpo@ga.co",
    password: "elephant",
    isAdmin: false,
  },
  {
    email: "gummo@ga.co",
    password: "pinkFairyArmadillo",
    isAdmin: true,
  },
  {
    email: "zeppo@ga.co",
    password: "dumboOctopus",
    isAdmin: false,
  },
];

// Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".
// Bonus: Working with Users
// Don't receive an ID! Find the user based on the email
function userLogin(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === email &&
      users[i].password === password &&
      users[i].isAdmin === true
    ) {
      return console.log("You are logged in as Admin");
    } else if (
      users[i].email === email &&
      users[i].password === password &&
      users[i].isAdmin === false
    ) {
      return console.log("You are logged in as User");
    }
  }
  return console.log("Sorry, something went wrong");
}

userLogin("gummo@ga.co", "pinkFairyArmadillo");
userLogin("zeppo@ga.co", "dumboOctopus");
userLogin("new@ga.co", "newuser");

// Make a function that creates an account. e.g. createAccount("chico@gmail.com", "redLippedBatfish", false);
// This should just add another object into the array
function createAccount(email, password, isAdmin) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return console.log(
        `${users[i].email} is already exist. Please choose another email`
      );
    }
  }
  users.push({ email: email, password: password, isAdmin: isAdmin });
  return console.log("You have successfully signed up");
}

createAccount("chico@gmail.com", "redLippedBatfish", false);

// Make a function that deletes an account. e.g. deleteAccount("zeppo@ga.co");
// This should just remove an object from the array
// Bonus: Make this only work if the correct password was provided as a parameter too
function deleteAccount(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      users.splice(i, 1);
      return console.log("Account has been removed");
    }
  }
  return console.log("Account does not exist");
}

deleteAccount("zeppo@ga.co", "dumboOctopus");

// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
function updateAccount(
  email,
  password,
  { password: newPassword, isAdmin: newAdmin }
) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      users[i].password = newPassword;
      users[i].isAdmin = newAdmin;
      return console.log("Account has been updated");
    }
  }
  return console.log("Account does not exist");
}

updateAccount("harpo@ga.co", "elephant", {
  password: "gharial",
  isAdmin: true,
});

// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature
