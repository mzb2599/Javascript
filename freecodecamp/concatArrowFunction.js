//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
