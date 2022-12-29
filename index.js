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

  let deleteCard = document.createElement('div');
  deleteCard.classList.add('delete-card');
  deleteCard.id = "deleteCard";
  bookCover.append(deleteCard);

  let bookTitleTag = document.createElement('div');
  bookTitleTag.classList.add('book-title-tag');
  bookCover.append(bookTitleTag);
  bookTitleTag.textContent = 'Book title:';

  let bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  bookCover.append(bookTitle);
  
  let bookAuthorTag = document.createElement('div');
  bookAuthorTag.classList.add('book-author-tag');
  bookCover.append(bookAuthorTag);
  bookAuthorTag.textContent = 'Book author:';

  let bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  bookCover.append(bookAuthor);

  let bookPagesTag = document.createElement('div');
  bookPagesTag.classList.add('book-pages-tag');
  bookCover.append(bookPagesTag);
  bookPagesTag.textContent = 'No of pages:';

  let bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  bookCover.append(bookPages);

  let bookStatusTag = document.createElement('div');
  bookStatusTag.classList.add('book-pages-tag');
  bookCover.append(bookStatusTag);
  bookStatusTag.textContent = 'Have you read the book?:';
  
  let bookStatus = document.createElement('button');
  bookStatus.classList.add('book-status-btn');
  bookStatus.id = 'book-status-btn';
  bookCover.append(bookStatus);

  bookTitle.textContent = title.value;
  bookAuthor.textContent = author.value;
  bookPages.textContent = pages.value;
  bookStatus.textContent = read.value;

  bookStatus.addEventListener("click", () => {
    let title = bookTitle.textContent;
    let book = myLibrary.find(book => book.title === title);
    if (book) {
      book.read = book.read === 'Yes' ? 'No' : 'Yes';
      bookStatus.textContent = book.read;
    }
  });


    deleteCard.addEventListener("click", () => {
    bookShelf.removeChild(bookCover);
    myLibrary.splice(bookCover, 1);
  });

}

