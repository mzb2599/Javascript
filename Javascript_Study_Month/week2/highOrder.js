const arr = [45, 23, 21];

// Array Map Method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 2;
});

console.log(a);

console.log("Filter Method:");

// Filter Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let b = arr.filter((value, index, array) => {
  return value > 30;
});
console.log(b);

// Reduce Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
console.log("Reduce Method:");

let c = [1, 2, 3, 4, 5]
let sum =(x,y)=> x+y;
let reduceSum=c.reduce(sum);
console.log(reduceSum);
