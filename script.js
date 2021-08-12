// TO DO:
// 1. Have "book" div show title, author, page count
// 2. Remove book when clicking on it
// 3. Allow local/cloud storage

// Book object constructor
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// Default books for debugging
let harry_potter = new Book("J.K Rowling", "Harry Potter", 500);

// Representing the books in our library
let books = [harry_potter];


let add_book_button = document.querySelector("#add-book"); // Add book button
let form_container = document.querySelector("#form-container"); // Form container div
let container_visible = false; // Whether or not form is currently visible

let form_submit = document.querySelector("#form-submit"); // Form submit button
let form_title_content = document.querySelector("#form-title"); // Form title input
let form_author_content = document.querySelector("#form-author"); // Form author input
let form_pages_content = document.querySelector("#form-pages"); // Form pages input

// When "Submit" button is clicked inside the form
form_submit.addEventListener("click", () => {
    form_container.style.visibility = "hidden";
    container_visible = false;

    let new_book = new Book(form_title_content.value, form_author_content.value, form_pages_content.value);

    books.push(new_book);

    updateLibrary(new_book);
});

// When "Add Book" button is clicked, then open a window
// that allows user to type in book name, etc.
add_book_button.addEventListener("click", (Event) => {
    // Opens the container if it's not visible, otherwise closes it if already visible
    if (!container_visible) {
        form_container.style.visibility = "visible";
        container_visible = true;
    }
    else {
        form_container.style.visibility = "hidden";
        container_visible = false;
    }
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
updateLibrary = (new_book) => {
    let library = document.querySelector("#library");

    let new_container = document.createElement("div");
    new_container.classList.add("book");
    library.appendChild(new_container);
}

// Every time a page loads, we create the library, which may
// already hold existing books
createLibrary();