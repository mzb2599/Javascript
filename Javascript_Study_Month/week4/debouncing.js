//Debouncing is a programming practice used to ensure that a function is not called too frequently.

// A simple debouncing example in JavaScript
// Debouncing ensures that a function is not called too frequently.

function debounce(func, wait) {
    // Timeout variable to hold the timer ID
    let timeout;
    // Return a new function that wraps the original function
    return function(...args) {
        const later = () => {
            // Clear the timeout and call the original function
            clearTimeout(timeout);
            // Call the original function with the provided arguments
            func(...args);
        };
        // Clear any existing timeout to reset the wait period
        clearTimeout(timeout);
        // Set a new timeout to call the function after the specified wait time
        timeout = setTimeout(later, wait);
    };

}
// Example usage:
const logMessage = () => {
    console.log('Function executed!');
};
const debouncedLogMessage = debounce(logMessage, 2000);
console.log("Calling debounced function multiple times in quick succession...");
// Simulate rapid calls to the debounced function
for (let i = 0; i < 50; i++) {
    debouncedLogMessage();
}
// Only the last call will execute after 2 seconds of inactivity


