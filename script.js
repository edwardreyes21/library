// Representing the books in our library
let books = ["Harry Potter"];

// When "Add Book" button is clicked, then open a window
// that allows user to type in book name, etc.
let add_book_button = document.querySelector("#add-book");
add_book_button.addEventListener("click", (Event) => {
    updateLibrary();
});

// Updates what the library shows
updateLibrary = () => {
    let library = document.querySelector("#library");

    for (let i = 0; i < books.length; i++) {
        let new_container = document.createElement("div");
        new_container.classList.add("book");
        library.appendChild(new_container);
    }
}