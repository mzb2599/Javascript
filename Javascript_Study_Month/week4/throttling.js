// Throttle: ensures a function runs at most once every "limit" ms
function throttle(func, limit) {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
    }
  };
}

// Example: log a message
const logMessage = () => {
  console.log("Function executed at", Date.now());
};

const throttledLogMessage = throttle(logMessage, 500);

// Simulate calling it every 1s
let i = 0;
const interval = setInterval(() => {
  throttledLogMessage();
  console.log("call", i++);
  if (i > 10) clearInterval(interval);
}, 1000);
