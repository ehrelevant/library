
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

const cardContainer = document.querySelector('#card_container');

function updateDisplay() {
    cardContainer.textContent = ''
    for (book of myLibrary) {
        createBookCard(book, myLibrary.indexOf(book));
    }
}

function createBookCard(book, ind) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.dataset.index = ind;

    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');


    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    pages.textContent = `${book.pages} pages`;

    readBtn.textContent = (book.read) ? 'Read' : 'Unread';
    readBtn.addEventListener('click', toggleRead);

    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteCard);


    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(readBtn);
    newCard.appendChild(deleteBtn);

    cardContainer.appendChild(newCard);
}






const bookForm = document.forms[0];
bookForm.addEventListener('submit', addBook)

function addBook() {
    const title = bookForm['title'].value;
    const author = bookForm['author'].value;
    const pages = bookForm['pages'].value;
    const read = bookForm['read'].value;
    addBookToLibrary(new Book(title, author, pages, read));
    updateDisplay();
}


const formContainer = document.querySelector('#form_container');
const formBtn = document.querySelector('#form_button');
formBtn.addEventListener('click', displayForm);

function displayForm() {
    formContainer.classList.toggle('hidden')
}


function deleteCard(e) {
    const parent = e.target.parentNode;

    const bookIndex = parent.dataset.index;
    removeFromLibrary(bookIndex);

    parent.remove();
}

function removeFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1);
}


function toggleRead(e) {
    const parent = e.target.parentNode;

    const bookIndex = parent.dataset.index;
    const book = myLibrary[bookIndex];
    book.read = !book.read;

    updateDisplay();
}


const book1 = new Book('book1', 'author1', 212, false);
const book2 = new Book('book2', 'author2', 107, false);
const book3 = new Book('book3', 'author3', 54, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

updateDisplay();