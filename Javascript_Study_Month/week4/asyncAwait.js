//Async await
//Async await is a syntactic sugar over promises, making asynchronous code look 
// and behave more like synchronous code. It is built on top of promises 
// and allows you to write cleaner and more readable code when dealing with asynchronous operations.

// An async function is a function that is declared with the async keyword,
// and it always returns a Promise. The await keyword can only be used inside async functions.
// When you use await, it pauses the execution of the async function until the Promise is resolved or rejected.
// Creating an async function
async function fetchData() {
    try {
        // Simulating an asynchronous operation using a Promise
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true; // Change this to false to simulate a failure
                if (success) {
                    resolve("Data fetched successfully!");
                } else {
                    reject("Failed to fetch data.");
                }
            }, 2000); // 2 seconds delay
        });
        console.log("Success:", data); // This will run if the promise is fulfilled
    } catch (error) {
        console.error("Error:", error); // This will run if the promise is rejected
    } finally {
        console.log("Fetch operation has been settled (either fulfilled or rejected).");
    }
}
// Calling the async function
fetchData();
// Output after 2 seconds:
// Success: Data fetched successfully!