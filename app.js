
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (book of myLibrary) {
        addTableRow(book);
    }
}

const bookForm = document.forms[0];

const book1 = new Book('book1', 'author1', 212, false);
const book2 = new Book('book2', 'author2', 107, false);
const book3 = new Book('book3', 'author3', 54, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
