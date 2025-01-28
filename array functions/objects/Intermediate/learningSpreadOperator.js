var arr1 = [1, 2, 3];

var arr2 = [ ...arr1 ];
console.log("arr2", arr2);
console.log("arr1", arr1);

// Combining arrays
var arr3 = [4, 5, 6];

const combinedArr = [ ...arr1, ...arr3];
console.log(combinedArr);

// Copying an Object
const obj1 = { name: "Alice", age: 25};
const obj2 = { ...obj1 };
console.log(obj2);