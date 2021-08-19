
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
    saveLibrary();
    toggleResetForm();
}


const formContainer = document.querySelector('#form_container');
const formBtn = document.querySelector('#form_button');
formBtn.addEventListener('click', toggleResetForm);

function toggleResetForm() {
    bookForm.reset();
    formContainer.classList.toggle('hidden')
}


function deleteCard(e) {
    const parent = e.target.parentNode;

    const bookIndex = parent.dataset.index;
    removeFromLibrary(bookIndex);

    updateDisplay();
    saveLibrary();
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
    saveLibrary();
}


const closeBtn = document.querySelector('#close_button');
closeBtn.addEventListener('click', toggleResetForm)

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


if (storageAvailable('localStorage')) {
    if (!localStorage.length){
        saveLibrary();
    } else {
        getSavedLibrary();
    }
}

function saveLibrary() {
    localStorage.setItem('savedLibrary', JSON.stringify(myLibrary));
    console.log(localStorage.getItem('savedLibrary'));
}

function getSavedLibrary() {
    const libStr = localStorage.getItem('savedLibrary')
    myLibrary = JSON.parse(libStr);
}

updateDisplay();