var iife1 = (function () {
    
    let secret = "some secret";

    console.log("One time setup code goes here");

    return secret;
})();

var url = "https://www.algorisys.com/";

console.log(url);

let setup = "something";
console.log(setup);

console.log(iife1);
