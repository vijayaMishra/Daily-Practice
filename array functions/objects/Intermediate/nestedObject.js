const library = {
    name: "City Library",
    location: {
        street: "Main St",
        city: "Metropolis"
    },
    books: ["1984", "To Kill a Mockingbird", "The Great Gatsby"]
};
//Access the city inside the location property.
console.log(library.location.city);

//Add a new book to the books array.
library.books = "Atomic Habits";
console.log(library);