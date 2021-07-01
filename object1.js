var person = {
  id: 1,
  name: "Brendon",
  print: function () {
    console.log("Person :", "id:", this.id, "name:", this.name);
    console.log(this);
  },
  toString: function () {
    console.log("Inside toString ");
  },
};

var p = person;
console.log(p.toString);
console.log(p.id);
