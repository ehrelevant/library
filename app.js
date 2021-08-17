
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
        createBookCard(book);
    }
}

const cardContainer = document.querySelector('#card_container');

function createBookCard(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('input');
    const deleteBtn = document.createElement('button');


    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;

    readBtn.type = 'checkbox';
    readBtn.checked = book.read;

    deleteBtn.textContent = 'Delete';


    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);

    cardContainer.appendChild(newCard);
}




const book1 = new Book('book1', 'author1', 212, false);
const book2 = new Book('book2', 'author2', 107, false);
const book3 = new Book('book3', 'author3', 54, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
