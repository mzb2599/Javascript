// 7. indexOf
// indexOf() method returns the index of the first occurrence of a specified value in a string, or -1 if not found.
let s7 = "Hello World!";
console.log(`Index of World! in string ${s7} is `+s7.indexOf("World!")); // 6

// 8. lastIndexOf
// The lastIndexOf() method returns the index of the last occurrence of a specified value in a string, or -1 if not found.
let s8 = "Hello World! Hello Universe!";
console.log(`Last index of Hello in string ${s8} is `+s8.lastIndexOf("Hello")); // 13

// 9. localeCompare
// The localeCompare() method compares two strings in the current locale and returns a number indicating whether the reference string comes before, after, or is the same as the given string in sort order.
let s9 = "Hello World!";
let s10 = "Hello Universe!";
console.log(`Locale compare of ${s9} and ${s10} is `+s9.localeCompare(s10)); // -1
