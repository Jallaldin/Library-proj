

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

    // for(let i = 0; i < myLibrary.length; i++){
    //     return myLibrary[i];
    // }
    return myLibrary.map(item => item.title)
}

console.log("Books in Library:", displayBooks())