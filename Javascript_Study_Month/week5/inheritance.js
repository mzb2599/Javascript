// Inheritance in JavaScript
// Using classes to demonstrate inheritance
// A base class (parent class)

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
// A derived class (child class) that inherits from the base class
class Dog extends
    Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks.`);
    }
    fetch() {
        console.log(`${this.name} is fetching!`);
    }
    breedInfo() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

const myDog = new Dog("Rex", "German Shepherd");
myDog.speak();
myDog.fetch();
myDog.breedInfo();