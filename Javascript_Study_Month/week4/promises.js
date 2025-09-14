//Promises in Javascript

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to write cleaner, more manageable code when dealing with asynchronous tasks.
// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.   
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change this to false to simulate a failure
        if (success) {
            resolve("Operation was successful!");   
        } else {
            reject("Operation failed.");
            }
    }, 2000); // 2 seconds delay
});

// Consuming a Promise
myPromise
    .then((message) => {
        console.log("Success:", message); // This will run if the promise is fulfilled
    })
    .catch((error) => {
        console.error("Error:", error); // This will run if the promise is rejected
    })
    .finally(() => {
        console.log("Promise has been settled (either fulfilled or rejected).");
    });