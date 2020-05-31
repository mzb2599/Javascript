function zoo() {
    const tiger = "Zinda hai"
    const lion = "Akela hi aata hai"
    function wholives() {
        console.log("Tiger ", tiger);
        msg='closures'
        function withinwholives() {
            console.log("Msg: ",msg);
            
        }
    }
    return wholives
}/*
function display() {
    function hello() {
        console.log("Hello Everyone");
    }
    return "hello"
}*/
var kaun = zoo()
kaun()/*
const x = display()
console.log(x);
*/