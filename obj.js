//Type 1-Object literal
var Person = {
    id: 1,
    name: 'Zaki',
    graduated: false,
}
console.log(Person)
console.log(Person.id,Person.name);
Person.age = 20;
delete (Person.id)
console.log(Person);
//type 2 using new keyword
var Employee = new Object()
console.log(Employee);
Employee.id = 1
Employee.name = 'Aiman'
Employee.salary = null
console.log(Employee);
delete Employee.id
console.log(Employee);
