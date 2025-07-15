// Js error types
// 1. SyntaxError
try {
    const a = 5;
    a=10; // This will throw a SyntaxError because 'a' is a constant and cannot be reassigned
} catch (error) {
    console.log("SyntaxError: " + error.message);
    
}

// 2. ReferenceError
try {
    console.log(b); // This will throw a ReferenceError because 'b' is not defined
}
catch (error) {
    console.log("ReferenceError: " + error.message);
}
// 3. TypeError
try {
    const obj = null;
    console.log(obj.property); // This will throw a TypeError because 'obj' is null and does not have properties
}
catch (error) {
    console.log("TypeError: " + error.message);
}

// 4. RangeError
try {
    const arr = new Array(-1); // This will throw a RangeError because the array size cannot be negative
}
catch (error) {
    console.log("RangeError: " + error.message);
}

// 5. URIError
// This error occurs when there is an error in encodeURIComponent or decodeURIComponent
// For example, if you try to decode a malformed URI component, it will throw a URIError
// DecodeURIComponent is used to decode a URI component that was previously encoded with encodeURIComponent
try {
    decodeURIComponent('%'); // This will throw a URIError because the URI is malformed
}
catch (error) {
    console.log("URIError: " + error.message);
}