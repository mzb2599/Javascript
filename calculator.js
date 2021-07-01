//Add
const add = (a,b) => a + b;

//Subtract
const Subtract = (a, b) =>   a - b;

const multiply = (a, b) =>   a * b;

const divide = (a, b) =>   a / b;

const modulus = (a, b) => a % b;



var x = 5;
var y = 4;
console.log(x, "+", y, "=", add(x, y));
console.log(x, "-", y, "=", Subtract(x, y));
console.log(x, "*", y, "=", multiply(x, y));
console.log(x, "/", y, "=", divide(x, y));
console.log(x, "%", y, "=", modulus(x, y));

 