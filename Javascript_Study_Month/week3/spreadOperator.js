// Spread Operator

const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];
const allNumbers = [...numbers, ...moreNumbers]; // Spread operator to combine arrays
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let object1 = { ...allNumbers }; // Spread operator to create a shallow copy of an object
console.log(object1); // { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10 }

const sum = (...args) => { // Spread operator to accept variable number of arguments
    return args.reduce((acc, curr) => acc + curr, 0); // Sum all arguments
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Spread operator with function arguments
const sum2 = (x, y, z) => { // Spread operator to accept variable number of arguments
    return x + y + z; // Sum all arguments
}

console.log(sum2(...numbers)); // 6 (1 + 2 + 3)

const object2 = ()=> { // Spread operator to create a shallow copy of an object
    return { a: 1, b: 2, c: 3 };
}

console.log({ ...object2(), a:5 }); // { a: 5, b: 2, c: 3 }

// Spread operator with arrays wont work as object2 overrides the value of a
console.log({ a:5, ...object2() }); // { a: 1, b: 2, c: 3 }

