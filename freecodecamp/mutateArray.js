//An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  var l = s.length;
  var t = s[l - 1];
  for (var i = 0; i < l; i++) {
    s[l - i - 1] = s[l - i - 2];
  }
  s[0] = t;
  // Only change code above this line
}
editInPlace();
console.log(s);
