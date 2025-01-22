var dog = {
    name: "Adiyal",
    age: 10,
    isCute: false
};
console.log(dog.name);
console.log(dog.colour);

//add new proprty colour
dog.colour = "White";
console.log(dog);

//change value of property
dog.age = 5;
console.log(dog);

//deleting property from object
delete dog.name;
console.log(dog);

//searching
console.log("isCute" in dog);