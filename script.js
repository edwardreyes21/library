// Book object
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// Default books for debugging
let harry_potter = new Book("J.K Rowling", "Harry Potter", 500);

// Representing the books in our library
let books = [harry_potter];

// When "Add Book" button is clicked, then open a window
// that allows user to type in book name, etc.
let add_book_button = document.querySelector("#add-book");
add_book_button.addEventListener("click", (Event) => {
    
});

// Creates library using all existing books inside the array
createLibrary = () => {
    let library = document.querySelector("#library");

    for (let i = 0; i < books.length; i++) {
        let new_container = document.createElement("div");
        new_container.classList.add("book");
        library.appendChild(new_container);
    }
}

// Updates library whenever the user adds a new book
updateLibrary = () => {

}

// Every time a page loads, we create the library, which may
// already hold existing books
createLibrary();