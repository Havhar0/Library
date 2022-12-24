let myLibrary = [];

const registerBook = document.getElementById("registerBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
let read = document.getElementById("read-btn");
let form = document.getElementById("bookForm")

function Object(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

registerBook.addEventListener("click", function() {
 
  myLibrary.push({
    title : title.value,
    author: author.value,
    pages: pages.value,
    read: read.value,
  })
  console.log(myLibrary);
})

function openForm() {
  document.getElementById("bookForm").style.display = "block";
}
function closeForm() {
  document.getElementById("bookForm").style.display = "none";
}

