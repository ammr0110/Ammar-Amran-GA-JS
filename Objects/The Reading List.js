// The Reading List
// Keep track of which books you have read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you have read it yet).
// Iterate through that array of books
// For each book, log the book title and book author like so: "'Sapiens', by Yuval Noah Harari".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you have read it, log a string like 'You have already read "Sapiens", by Yuval Noah Harari'
// If not, log a string like 'You still need to read "A Life on Our Planet", by David Attenborough.'"
const books = [
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    alreadyRead: true,
  },
  {
    title: "A Life on Our Planet",
    author: "David Attenborough",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let book = books[i];

  if (book.alreadyRead) {
    console.log(`You have already read "${book.title}", by ${book.author}.`);
  } else {
    console.log(`You still need to read "${book.title}", by ${book.author}.`);
  }
}
