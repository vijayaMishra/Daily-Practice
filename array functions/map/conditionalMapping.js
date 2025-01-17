const products = [
    { id: 101, name: "Laptop", price: 800 },
    { id: 102, name: "Phone", price: 600 },
    { id: 103, name: "Tablet", price: 400 },
];
//Write a map function to create a new array where the price is discounted by 10% if it's greater than 500.

// [  { id: 101, name: "Laptop", price: 800 },
//     { id: 102, name: "Phone", price: 600 },
//     { id: 103, name: "Tablet", price: 400 }, ]
console.log(products);
var discountedPrice = products.map(obj => {
    if(obj.price > 500) { 
        obj.price = obj.price*0.9;
    }
    return obj;
} );

console.log(discountedPrice);