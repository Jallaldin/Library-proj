

const myLibrary = [];

//Book Object Constructor
function Book(title, author, num_pages, status){
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.status = status;
    this.info = function(){
        return `${title} by ${author}, ${num_pages} pages, ${status}`
    }
}

// test
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "unread");

console.log("Hobbit Info: ", theHobbit.info());

function addBookToLibrary(title, author, num_pages, status){
    return myLibrary.push(new Book(title,author,num_pages, status));

}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "unread");
addBookToLibrary("Harry Potter", "J.K Rowling", 300, "unread");
addBookToLibrary("Moby Dick", "Herman Melville", 230, "unread");
addBookToLibrary("Random Book","Jallal", 252, "unread")
addBookToLibrary("Random Book1","Jallal", 252, "unread")

console.log("myLibrary:", myLibrary);;

function displayBooks() {
    const cards = document.querySelector("#cards");
    cards.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.textContent = `${myLibrary[i].title}, ${myLibrary[i].author} , ${myLibrary[i].num_pages} pages, ${myLibrary[i].status}`
        // data attribute relating to book index in library
        bookCard.setAttribute('data-index', i);
        cards.appendChild(bookCard);
    }

    // bookCard.setAttribute("style","padding: 20px; background-color: light-green, margin: 10px");
    // return myLibrary.map(item => item.title)
}

console.log("LIBRARY BOOKS:", displayBooks())

// button to add new book

document.getElementById('addNewBook').addEventListener('click', () => {
    console.log("New Book button clicked");
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = "block"; // Ensure modal exists before accessing it
    } else {
        console.error("Modal not found!");
    }
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

//adds book to library once submit button active
const submitButton = document.getElementById('submitBook');

submitButton.addEventListener('click', () => {
    console.log("Submit button clicked");
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const num_pages = Number(document.getElementById('pages').value);
    const status = document.getElementById('readstatus').checked ? "read" : "unread";

    addBookToLibrary(title, author, num_pages, status);
    displayBooks();
    console.log("New Book added to library");
});

// use Event:preventDefault() to prevent the form from submitting and refreshing the page
const form = document.getElementById('form-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted, preventing default")
})

// delete button for each book in myLibrary
const cards = document.querySelector("#cards");
const bookCard = document.createElement("div");
const deleteCard = document.createElement("button");

deleteCard.textContent = "X";

bookCard.appendChild(deleteCard);
cards.appendChild(bookCard);

deleteCard.addEventListener('click', () => {
    console.log("Delete button clicked");
    bookCard.remove();
    
