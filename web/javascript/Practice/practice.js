const extractauthors = (books) => {
    if (books.some(book => !books.author)) {
        console.log("Invalid book object - 'author' property missing");
    }
    return books.map((book) => book.author);
}

const librarybooks = [
    { title: "Brave new world", author: "Aldous" },
    { title: "The Catcher in the Rye", author: "Henry" },
    { title: "Harry Potter", author: "J.K.Rowling" }
]

console.log(extractauthors(librarybooks));