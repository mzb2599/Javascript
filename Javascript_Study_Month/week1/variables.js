// varaibles: var, let & const

// let and const are block scoped
function add(x,y) {
    let result = x + y; // let is block scoped
    return result; // result is accessible here
}
console.log(add(5, 10)); // 15

//console.log(result); 
// ReferenceError: result is not defined

// const is also block scoped
const PI = 3.14; // PI is a constant
console.log(PI); // 3.14
// PI = 3.14159; // TypeError: Assignment to constant variable

let i =110;

const scope = () => {
    let i = 100; // i is block scoped
    console.log("i inside scope:", i); // 100    
}
scope(); // 100

console.log("i outside scope:", i); // 110



