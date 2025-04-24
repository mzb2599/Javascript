// Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
// It is a convenient way to extract values from arrays or objects without having to access them one by one.
// It can be used with arrays, objects, and even nested structures.
let arr= [3,5,8]

let [a,b,c] = arr
console.log(a) // 3
console.log(b) // 5
console.log(c) // 8

let array= [1,2,3, 4,5,6,7,8,9,10]
let [x,y,z,...rest] = array

console.log(x) // 1
console.log(y) // 2
console.log(z) // 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]