let myLibrary = [];

const registerBook = document.getElementById("registerBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
let read = document.getElementById("read-btn");
let form = document.getElementById("bookForm");


function openForm() {
  document.getElementById("bookForm").style.display = "block";
}
function closeForm() {
  document.getElementById("bookForm").style.display = "none";
}

registerBook.addEventListener("click", function() {
 
  myLibrary.push({
    title : title.value,
    author: author.value,
    pages: pages.value,
    read: read.value,
  })
  renderBooks();
  console.log(myLibrary);
})

function renderBooks(){

  let bookShelf = document.querySelector('#bookShelf');

  let bookCover = document.createElement('div');
  bookCover.classList.add('bookCover');
  bookShelf.appendChild(bookCover);

  let bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  bookCover.append(bookTitle);
  
  let bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  bookCover.append(bookAuthor);

  let bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  bookCover.append(bookPages);

  let bookStatus = document.createElement('div');
  bookStatus.classList.add('book-status');
  bookCover.append(bookStatus);

  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookPages.textContent = pages.value;
  bookStatus.textContent = read.value;

}