function callLater(anotherfunc) {
    anotherfunc();
}

callLater(function () {
    console.log("Higher order function called");
})
 
function log(msg){
    let x = console.log(msg);
}

let bindedLog = log.bind(null, "Bind method used");
callLater(bindedLog)

bindedLog()