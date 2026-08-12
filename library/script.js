const bookTitle = document.querySelector('[name="title"]');
const bookAuthor = document.querySelector('[name="author"]');
const hasRead = document.querySelector('select');
const addBtn = document.querySelector('[type="button"]');
const form = document.querySelector('.table-items');

let myLibrary = JSON.parse(localStorage.getItem('books')) || []

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

function removeItem(id) {
  const itemToDelete = document.getElementById(`${id}`);
  myLibrary.splice(itemToDelete.id, 1);
  handleStorageAndDisplay();
}
