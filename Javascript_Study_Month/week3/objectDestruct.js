// Destructure an object

const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Engineer",
    hobbies: ["reading", "traveling", "sports"]
};

// Destructuring the object
const { name, age, city, country, occupation, hobbies } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
console.log(country); // USA
console.log(occupation); // Engineer
console.log(hobbies); // ["reading", "traveling", "sports"]

// Destructuring with default values
const { name: firstName, age: years, city: location, country: nation = "Unknown" } = person;
console.log(firstName); // John
console.log(years); // 30
console.log(location); // New York
console.log(nation); // USA (default value is not used since country is defined in the object)
