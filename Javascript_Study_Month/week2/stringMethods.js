// Javascript String Methods
// 1. charAt
// CharAt() method returns the character at a specified index (position) in a string.
let s1 = "Hello World!";
console.log(`Character of strings ${s1} at position 3 is `+s1.charAt(3)); // l

// 2. charCodeAt
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
let s2 = "Hello World!";
console.log(`Character code of strings ${s2} at position 4 is `+s2.charCodeAt(4)); // 111

// 3. concat
// The concat() method concatenates the string arguments to the calling string and returns a new string
let s3 = "Hello";
console.log(`Concatenated string is `+s3.concat(" World!")); // Hello World!

// 4. endsWith
// The endsWith() method determines whether a string ends with the characters of a specified string
// returning true or false as appropriate
let s4 = "Hello World!";
console.log(`String ${s4} ends with World! `+s4.endsWith("World!")); // true

// 5. fromCharCode
// The fromCharCode() method converts Unicode values to characters.
// The method accepts one or more Unicode values and returns a string.
let s5 = String.fromCharCode(72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33);
console.log(`String from char code is `+s5); // Hello World!

// 6. includes
// The includes() method determines whether a string contains the characters of a specified string.
// Returns true or false in the process
let s6 = "Hello World!";
console.log(`String ${s6} includes World! `+s6.includes("World!")); // true
