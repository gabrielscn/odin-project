const myLibrary = [];

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

function addBookToLibrary() {

}

function displayBooks() {

}

const newBookBtn = document.getElementById('new-book-btn');
const newBookDialog = document.getElementById('new-book-dialog');
const newBookForm = document.getElementById('new-book-form');
const cancelBtn = document.getElementById('cancel-btn');
const bookContainer = document.getElementById('book-container');

newBookBtn.addEventListener('click', () => {
  newBookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
  newBookDialog.close();
});

newBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
