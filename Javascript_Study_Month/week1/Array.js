let arr= [6, 7, 8, 9, 10];

//Array Methods
//1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
arr.push(11); // arr= [6, 7, 8, 9, 10, 11]
console.log("After push:", arr); // After push: [6, 7, 8, 9, 10, 11]

//2. pop() - Removes the last element from an array and returns that element.
arr.pop(); // arr= [6, 7, 8, 9, 10]
console.log("After pop:", arr); // After pop: [6, 7, 8, 9, 10]

//3. shift() - Removes the first element from an array and returns that element.
arr.shift(); // arr= [7, 8, 9, 10]
console.log("After shift:", arr); // After shift: [7, 8, 9, 10]

//4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(6); // arr= [6, 7, 8, 9, 10]
console.log("After unshift:", arr); // After unshift: [6, 7, 8, 9, 10]

//5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(2, 1, 12); // arr= [6, 7, 12, 9, 10]
console.log("After splice:", arr); // After splice: [6, 7, 12, 9, 10]

//6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
let newArr= arr.slice(1, 3); // newArr= [7, 12]
console.log("After slice:", newArr); // After slice: [7, 12]