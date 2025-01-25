var library = {
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

//adding a new book to books array
library.books = "SP books";
console.log(library);

//Dynamic Property Names
//Write code to add a new property to an object where the key is stored in a variable.
var newkey = "school";
library = {
    [newkey] : "St. Patrick's"
}
console.log(library);