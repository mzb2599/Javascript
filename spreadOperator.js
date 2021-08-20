const add = (...args) => {
    console.log(args);
    var sum = 0;
    // for (let index = 0; index < args.length; index++) {
    //     sum = sum + args[index];
    // }
    args.forEach(e => {
        sum = sum + e;
    })
    return sum;
}

console.log(add(1, 2, 3, 4, 5));
