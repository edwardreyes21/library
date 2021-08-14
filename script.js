// TO DO:
// 1. Allow local/cloud storage

// Book object constructor
function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// Default books for debugging
let harry_potter = new Book("J.K Rowling", "Harry Potter", 500);
let lord_of_the_rings = new Book("J.R.R Tolkien", "Lord of the Rings", 1000);
let the_hobbit = new Book("J.R.R Tolkien", "The Hobbit", 1000);

// Representing the books in our library
// harry_potter, lord_of_the_rings, the_hobbit
let books = [];

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

    // Create a new book object using the form values inputted by user
    let new_book = new Book(form_title_content.value, form_author_content.value, form_pages_content.value);

    // Add the new book to the books array
    books.push(new_book);

    // Update the library to show the new book
    updateLibrary();
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

// Will find a book in the books array by its name, then remove it
removeBook = (book_name) => {
    let index = books.findIndex(book => book.title == book_name);

    books.splice(index, 1);
}

// Creates library using all existing books inside the array
createLibrary = () => {
    let library = document.querySelector("#library");

    // If no local storage for the books array exists, save existing array to local storage
    if (!localStorage.getItem("books")) {
        localStorage.setItem("books", JSON.stringify(books));
    } 
    // Else if local storage containing books has been found, use saved data instead
    else {
        let books_data = JSON.parse(localStorage.getItem("books"));
        books = books_data;
    }

    // For each book in the book array, create a div representing that book
    for (let i = 0; i < books.length; i++) {
        let new_container = document.createElement("div");
        new_container.classList.add("book");

        // For each new container, create sub-divs that represent details of the book
        // Book title
        let book_title = document.createElement("h1");
        book_title.textContent = books[i].title;
        book_title.style.color = "black";
       

        // Book author
        let book_author = document.createElement("h1");
        book_author.textContent = books[i].author;
        book_author.style.color = "black";
        

        // Book pages
        let book_pages = document.createElement("h1");
        book_pages.textContent = books[i].pages;
        book_pages.style.color = "black";

        // Remove button
        let remove_button = document.createElement("button");
        remove_button.textContent = "Remove book";
        remove_button.style.color = "black";
        remove_button.addEventListener("click", () => {
            console.log("Deleting " + books[i].title);
            removeBook(books[i].title)
            updateLibrary();
        });

        // Add all of the content to the container div
        new_container.appendChild(book_title);
        new_container.appendChild(book_author);
        new_container.appendChild(book_pages);
        new_container.appendChild(remove_button);
        
        library.appendChild(new_container);
    }
}

// Updates library whenever the user adds/removes a new book
updateLibrary = () => {
    let library = document.querySelector("#library");

    // Clears all of the books from the screen
    while (library.firstChild) {
        library.removeChild(library.lastChild);
    }

    // Updates local storage after adding/removing a book
    localStorage.setItem("books", JSON.stringify(books));

    // Recreates the library using the updated books array
    createLibrary();
}

// Every time a page loads, we create the library, which may
// already hold existing books
createLibrary();