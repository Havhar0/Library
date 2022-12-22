let myLibrary = [];


const addBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read-status");

addBook.addEventListener("click", function() {
  myLibrary.push({
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: false,
  })
  console.log(myLibrary)
})

function openForm() {
    document.getElementById("bookForm").style.display = "block";
  }
function closeForm() {
    document.getElementById("bookForm").style.display = "none";
  }














/* FOR okreslona ilosc elementow w array wykonaj:

Utworz DIV i uzyj wartosci z licznik 1.

POwtorz i uzyj wartosci z licznika 2.

*/




/*


let myLibrary =[]

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

    1ST TO DO:

    function addBook
    pop up input -
        function const newBook = new Book()creates an object and adds it to array

    

1. Create myLibrary array - to store books
2. Create buttons
    assign id to them
    add event AudioListener to them 

3. Create popup form (appear when clicked btn)
4. Popup form creates object and pushes it to array
5. Loop function through array is used which displays content on the website (card format)

*/