//Block scope and function scope
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

/*Output
D:\Code\js\Javascript\freecodecamp>node scope.js
Block scope i is:  block scope
Function scope i is:  function scope
*/
