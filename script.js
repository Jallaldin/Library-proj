

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


console.log("myLibrary:", myLibrary);

function displayBooks() {
    const cards = document.querySelector("#cards");
    cards.innerHTML = "";

    for(let i = 0; i <= myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.textContent = `${myLibrary[i].title}, ${myLibrary[i].author} , ${myLibrary[i].num_pages} pages, ${myLibrary[i].status}`
        cards.appendChild(bookCard);
    }

    bookCard.setAttribute("style","padding: 20px; background-color: light-green, margin: 10px");
    console.log(i)
    // return myLibrary.map(item => item.title)
}

console.log("\nLIBRARY BOOKS:", displayBooks())

// button to add new book

document.getElementById("addBook").addEventListener('click', () => {
    document.getElementById("modal-form").style.display = "block";
});