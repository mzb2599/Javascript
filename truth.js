function truth(value) {
    console.log(value);
    //Internally js passes an object called arguments
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    
 }
// truth(a, 1, 3)
// truth(1)
// truth()
truth('a', 'b', 'c')
