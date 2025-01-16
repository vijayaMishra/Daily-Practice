// [0, "hello", null, true, 42, undefined]
// [false, true, false, true, true, false]

var arr = [0, "hello", null, true, 42, undefined];
let newarr = arr.map(element => Boolean(element));
console.log(newarr)

// for(i =0; i< arr.length; i++) {
//     if(arr[i] == 0 || arr[i] == undefined || arr[i] == null) {
//         arr.map(element => Boolean(element));
//     } else {
//         arr.map(element => Boolean(element));
//     }
// }