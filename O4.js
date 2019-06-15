function emp(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    var print = function () {
        console.log(this.id + " " + this.name + " " + this.age);
    }
};
var result = emp(1, "MOHD", 19);
var zaki = new emp(1, "Zaki", 20);
var arsh = new emp(2, "Arsh", 19);
console.log(zaki);
console.log(arsh);
print.result;