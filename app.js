
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        const startStr = `${title} by ${author}, ${pages} pages, `;
        const condStr = (read) ? 'Already read' : 'Not read yet';
        return startStr + condStr;
    };
}

const book1 = new Book('book1', 'author1', 212, false);
const book2 = new Book('book2', 'author2', 107, false);
const book3 = new Book('book3', 'author3', 54, true);


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function displayLibrary() {
    for (book of myLibrary) {
        console.table(book);
    }
}