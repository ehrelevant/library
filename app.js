
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


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (book of myLibrary) {
        addTableRow(book);
    }
}


const book1 = new Book('book1', 'author1', 212, false);
const book2 = new Book('book2', 'author2', 107, false);
const book3 = new Book('book3', 'author3', 54, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const tbody = document.querySelector('#book_table').querySelector('tbody');

function addTableRow(book) {
    const newBookRow = tbody.insertRow();

    const bookProperties = Object.getOwnPropertyNames(book).filter(prop => (typeof(book[prop]) !== 'function'));

    bookProperties.forEach((prop) => {
        const newCell = newBookRow.insertCell();
        newCell.textContent = book[prop];
        newBookRow.appendChild(newCell);
    });

    const deleteRowCell = newBookRow.insertCell();
    deleteRowCell.textContent = 'Delete?'
    newBookRow.appendChild(deleteRowCell);
}

