const user = { name: "Alice", age: 25 };
console.log(user.city);
//undefined

const dog = { breed: "Golden Retriever" };
dog.breed = "Labrador";
console.log(dog.breed);
//labrador

const car = {};
car.model = "Tesla";
delete car.model;
console.log(car.model);
//undefined