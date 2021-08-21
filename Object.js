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
let website = {};
console.log(website.toString());

let user = new Object();
console.log("user:", user);

let web = {
    url: "https://www.flipkart.com/",
    active: true,
    getData: function () {
        console.log("Getting data ...");
      }
};

console.log(web.url);
web.getData();
