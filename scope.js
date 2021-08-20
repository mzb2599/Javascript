//reading a variable before its defined -> hoisting


console.log(g);
var g = "i am global";

function One() {
    let v1 = "One";
    console.log(g);
    console.log(v1);
}
 
One();