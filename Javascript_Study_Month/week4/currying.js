//Currying is a technique in functional programming where a function with multiple arguments is 
// transformed into a sequence of functions, each taking a single argument. 
// This allows for partial application of functions, enabling the creation of more specialized 
// functions from general ones.

// Example of currying in JavaScript:

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...args2) {
                return curried(...args, ...args2);
        }
        }
    };
}

// Example function to be curried
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6