let x= 5;
let y= 10;

let z= 15;

let sum= x+y+z; // 5+10+15 = 30
let avg= sum/3; // 30/3 = 10
console.log("Sum:", sum); // Sum: 30
console.log("Average:", avg); // Average: 10

let diff= x-y; // 5-10 = -5
console.log("Difference:", diff); // Difference: -5

let prod= x*y; // 5*10 = 50
console.log("Product:", prod); // Product: 50

let div= x/y; // 5/10 = 0.5
console.log("Division:", div); // Division: 0.5

let mod= x%y; // 5%10 = 5
console.log("Modulus:", mod); // Modulus: 5

let exp= x**y; // 5^10 = 9765625
console.log("Exponent:", exp); // Exponent: 9765625

let inc= ++x; // x=6
console.log("Increment:", inc); // Increment: 6

let dec= --y; // y=9
console.log("Decrement:", dec); // Decrement: 9

// Logical Operators
let a= true;
let b= false;
let c= true;

let d= a && b; // false
console.log("Logical AND:", d); // Logical AND: false

let e= a || b; // true
console.log("Logical OR:", e); // Logical OR: true

let f= !a; // false
console.log("Logical NOT:", f); // Logical NOT: false

let g= a && b || c; // true\
console.log("Logical AND OR:", g); // Logical AND OR: true

let h= a || b && c; // true
console.log("Logical OR AND:", h); // Logical OR AND: true

let i= a && (b || c); // true
console.log("Logical AND OR:", i); // Logical AND OR: true

//Bitwise Operators
let j= 5; // 0101
let k= 3; // 0011

let l= j & k; // 0001
console.log("Bitwise AND:", l); // Bitwise AND: 1

let m= j | k; // 0111
console.log("Bitwise OR:", m); // Bitwise OR: 7

let n= j ^ k; // 0110
console.log("Bitwise XOR:", n); // Bitwise XOR: 6

let o= ~j; // 1010
console.log("Bitwise NOT:", o); // Bitwise NOT: -6

let p= j << 1; // 1010
console.log("Left Shift:", p); // Left Shift: 10

let q= j >> 1; // 0010
console.log("Right Shift:", q); // Right Shift: 2

let r= j >>> 1; // 0010
console.log("Unsigned Right Shift:", r); // Unsigned Right Shift: 2

// Ternary Operator
let s= (x > y) ? "x is greater" : "y is greater";
console.log("Ternary Operator:", s); // Ternary Operator: y is greater

