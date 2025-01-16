//Extract ages from an array of objects
// I/p [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
// O/P [ 25, 30]

var persons = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
var ages = persons.map(person => {
    return person.age;
})
console.log(ages);
