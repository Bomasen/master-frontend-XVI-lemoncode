interface Book {
  title: string;
  isRead: boolean;
}

const books = [
  { title: "Platero y yo", isRead: true },
  { title: "Aura", isRead: false },
  { title: "El túnel", isRead: true },
  { title: "Pedro Páramo", isRead: false },
  { title: "Niebla", isRead: true },
  { title: "Marianela", isRead: false },
  { title: "Bodas de sangre", isRead: true },
  { title: "El alquimista", isRead: false },
  { title: "Crónica de una muerte anunciada", isRead: true },
  { title: "La tregua", isRead: false },
];

const isReadBook = (books: Book[], titleToSearch: string): boolean => {
  const searchedBook: Book = books.find((book) => book.title === titleToSearch);

  return searchedBook ? searchedBook.isRead : false;
};

console.log("This is Read Book exercise:");
console.log(isReadBook(books, "La tregua"));
