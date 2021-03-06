const books = [
  {
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331382003l/24115.jpg",
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false,
  },
  {
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true,
  },
  {
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328335263l/11317185.jpg",
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true,
  },
  {
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595817787l/54696072._SY475_.jpg",
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true,
  },
  {
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438707803l/370789.jpg",
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false,
  },
];

books.forEach(function (book) {
  let bookCover = book.bookCover;
  let title = book.title;
  let author = book.author;
  let alreadyRead = book.alreadyRead;

  let list = document.querySelector("ul");
  let listItems = document.createElement("li");

  listItems.innerHTML = `
    <img src="${bookCover}">
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Author:</strong> ${author}</p>
    `;

  if (alreadyRead) {
    listItems.style.color = "green";
  } else {
    listItems.style.color = "red";
  }

  list.appendChild(listItems);
});
