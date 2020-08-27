function zoo() {
    //Locals to zoo and not whoisalive
    var tiger = "tiger";
    var lion = "lion";
    //Nested function
    function whoisalive() {
        //Local to inner function
        var chooha = "rat";
        //Referencing tiger from outer scope,Js will capture nad put it in closure
        console.log(tiger,"zinda hai");
    }
    return whoisalive;
}
let animals = zoo();
animals();