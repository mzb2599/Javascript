function sayHello() {
    console.log("Hello");
}

function greet(msg) {
  console.log(`Hello ${msg}`);
}
//1st way
console.log("1st way: ");

sayHello()

//2nd way
console.log("2nd way: ");

console.log(sayHello.toString());

greet.call(null, "Zaki")

console.log("3rd way: ");

//3rd way
greet.apply(null,["Mohd Zaki"]);

console.log("4th way: ");
//4th way
let bounded = greet.bind(null);
bounded("Mohd Zaki")