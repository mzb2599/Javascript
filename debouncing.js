// A simple debouncing example in JavaScript
// Debouncing ensures that a function is not called too frequently.

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };  
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// Example usage:
const logMessage = () => {
    console.log('Function executed!');
};
const debouncedLogMessage = debounce(logMessage, 2000);

// Simulate rapid calls to the debounced function   
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage();
// Only the last call will execute after 2 seconds of inactivity