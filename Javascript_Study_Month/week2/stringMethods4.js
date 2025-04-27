// 16. startsWith
// // The startsWith() method determines whether a string begins with the characters of a specified string.
// // Returns true or false in the process
let s7 = "startsWith() method determines whether a string begins with the characters of a specified string";
console.log(`String ${s7} starts with Hello `+s7.startsWith("Hello")); // true

// 17. substr
// // The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
// // The substr() method is a legacy function and may not be supported in the future.
let s8 = "substr() method returns the characters in a string beginning";
console.log(`Substr of string ${s8} from 0 to 15 is `+s8.substr(5, 15)); // substr

// 18. substring
// // The substring() method returns the part of the string between the two specified indexes, or to the end of the string.
// // The substring() method does not change the original string.
let s9 = "substring() method returns the part of the string between the two specified indexes";
console.log(`Substring of string ${s9} from 0 to 15 is `+s9.substring(5, 15)); // substring() method

// 21. toLowerCase
// // The toLowerCase() method returns the calling string value converted to lower case.
// // The toLowerCase() method does not change the original string.
let s10 = "TOLOWERCASE() method returns the calling string value converted to lower case";
console.log(`ToLowerCase of string ${s10} is `+s10.toLowerCase()); // tolowercase() method returns the calling string value converted to lower case

// 22. toString
// // The toString() method returns a string representing the specified object.
// // The toString() method is a built-in method of the String object and is used to convert other data types to strings.
let s11 = 123
console.log(`ToString of number ${s11} is `+s11.toString()); // 123

// 23. toUpperCase
// // The toUpperCase() method returns the calling string value converted to uppercase.
// // The toUpperCase() method does not change the original string.
let s12 = "TOUPPERCASE() method returns the calling string value converted to uppercase";
console.log(`ToUpperCase of string ${s12} is `+s12.toUpperCase()); // touppercase() method returns the calling string value converted to uppercase