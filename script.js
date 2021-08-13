// TO DO:
// 1. Remove book when clicking on it
// 2. Allow local/cloud storage

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

    // For each book in the book array, create a div representing that book
    for (let i = 0; i < books.length; i++) {
        let new_container = document.createElement("div");
        new_container.classList.add("book");

        // For each new container, create sub-divs that represent details of the book
        // Book title
        let book_title = document.createElement("h1");
        book_title.textContent = books[i].title;
        book_title.style.color = "black";
        new_container.appendChild(book_title);

        // Book author
        let book_author = document.createElement("h1");
        book_author.textContent = books[i].author;
        book_author.style.color = "black";
        new_container.appendChild(book_author);

        // Book pages
        let book_pages = document.createElement("h1");
        book_pages.textContent = books[i].pages;
        book_pages.style.color = "black";
        new_container.appendChild(book_pages);

        // Remove button
        let remove_button = document.createElement("button");
        remove_button.textContent = "Remove book";
        remove_button.style.color = "black";
        new_container.appendChild(remove_button);

        library.appendChild(new_container);
    }
}

// Updates library whenever the user adds a new book
updateLibrary = (new_book) => {
    let library = document.querySelector("#library");

    let new_container = document.createElement("div");
    new_container.classList.add("book");

    // For each new container, create sub-divs that represent details of the book
    // Book title
    let book_title = document.createElement("h1");
    book_title.textContent = new_book.title;
    book_title.style.color = "black";
    new_container.appendChild(book_title);

    // Book author
    let book_author = document.createElement("h1");
    book_author.textContent = new_book.author;
    book_author.style.color = "black";
    new_container.appendChild(book_author);

    // Book pages
    let book_pages = document.createElement("h1");
    book_pages.textContent = new_book.pages;
    book_pages.style.color = "black";
    new_container.appendChild(book_pages);

    // Remove button
    let remove_button = document.createElement("button");
    remove_button.textContent = "Remove book";
    remove_button.style.color = "black";
    new_container.appendChild(remove_button);

    library.appendChild(new_container);
}

// Every time a page loads, we create the library, which may
// already hold existing books
createLibrary();