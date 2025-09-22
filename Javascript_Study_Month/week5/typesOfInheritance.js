// Types of Inheritance in JavaScript
// 1. Single Inheritance
class Parent {
    parentMethod() {
        console.log("This is a method from the Parent class.");
    }
}
class Child extends Parent {
    childMethod() {
        console.log("This is a method from the Child class.");
    }
}
const singleInheritance = new Child();
singleInheritance.parentMethod();

singleInheritance.childMethod();
