var person = {
    id: 1,
    name: "Brendon",
    print: function () {
        console.log("Person :", "id:", this.id, "name:", this.name);
        console.log(this);
    }
}

employ={}

console.log(person);
person.print()

console.log(employ);