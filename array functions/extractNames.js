// [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ]

// o/p - ["Alice", "Bob", "Charlie"]

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

console.log(people[0].name, people[1].name, people[2].name);
console.log(people.map(obj => obj.name))