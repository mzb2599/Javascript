
//10. match
// match() method retrieves the matches when matching a string against a regular expression. It returns an array of matches or null if no match is found.
// The match() method is case-sensitive and does not perform a global search unless the g flag is used in the regular expression.
let s1 = "Hello World! Hello Universe!";
console.log(`Match of Hello in string ${s1} is `+s1.match(/Hello/g)); // Hello, Hello

// 11. repeat
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// The original string will not be modified.
let s2 = "Hello";
console.log(`Repeat of Hello 3 times is `+s2.repeat(3)); // HelloHelloHello

// 12. replace
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
let s3 = "Hello World! Hello Universe!";
console.log(`Replace Hello with Hi in string ${s3} is `+s3.replace(/Hello/g, "Hi")); // Hi World! Hi Universe!

// 13. search
// The search() method executes a search for a match between a regular expression and 
// this String object.
// Returns the index of the first match, or -1 if no match is found.   
let s4 = "World! Hello Universe!";
console.log(`Search for Hello in string ${s4} is `+s4.search(/Hello/g)); // 0

// 14. slice
// The slice() method extracts a section of a string and returns it as a new string, without
//  modifying the original string.
// The slice() method can take two arguments: the start index and the end index (not included).
// If the end index is not provided, it will slice to the end of the string.
let s5 = "Hello World!";
console.log(`Slice of string ${s5} from 0 to 5 is `+s5.slice(0, 5)); // Hello

// 15. split
// The split() method splits a string into an array of substrings, and returns the new array.
// The split() method takes a separator as an argument, which can be a string or a regular expression.
let s6 = "The split() method splits a string into an array of substrings!";
console.log(`Split of string ${s6} by space is `+s6.split(" ")); // [ 'The', 'split()', 'method', 'splits', 'a', 'string', 'into', 'an', 'array', 'of', 'substrings!' ]
