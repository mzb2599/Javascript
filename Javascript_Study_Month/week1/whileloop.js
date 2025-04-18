//while loop to find factorial of a number

let number = 5; // Number to find the factorial of

let factorial = 1; // Variable to store the factorial result

let i = 1; // Initialize a counter variable

// Loop until i is less than or equal to the number
while (i <= number) { 
    factorial *= i; // Multiply the current factorial by i
    i++; // Increment i by 1
}
console.log("Factorial of", number, "is:", factorial); // Output the factorial result