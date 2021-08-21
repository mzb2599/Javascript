const futureGetTogether =new Promise((resolve, reject) => {
    // if (true) {
    //     resolve("All friends are meeting at Starbucks");
    // }
    //setTimeout(resolve, 5000, "All friends are meeting at Starbucks");
    reject("We are not meeting");
})

//futureGetTogether.then(result => console.log(result));
futureGetTogether.then(function (result) {
    console.log(result);
    return "some other data";
}).then(function (something) {
    console.log("something: ",something);
}).catch(function (e) {
    console.log(e);
 });

console.log("Global code ends here...");