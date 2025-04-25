//Closure is a function along with its lexical environment

function Hello(){
    
    let message="Hello"

    function World(){
        console.log(message);    
    }
    return World
}

let fc = Hello();
fc();