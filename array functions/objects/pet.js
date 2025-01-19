var pet = {
    name: "Kaveri",
    type: "Cow",
    age: 2
};
console.log("Old pet obj", pet);
console.log(pet.name);
console.log(pet["name"]);

pet.colour = "White";
pet.age = 3;
console.log("new age", pet.age);
console.log("Updated pet", pet);

//delete property from object
delete pet.age;
console.log(pet);

//searching property
console.log("colour" in pet);

//iteration
var fruitBasket = {"apple":5, "banana":3, "grape":10};
for (fruit in fruitBasket) {
    //console.log(Object.keys(fruit));
    console.log(`${fruit}:${fruitBasket[fruit]}`);
} 