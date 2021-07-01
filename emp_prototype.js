function Employee(id, name) {
    this.id = id;
    this.name = name;

    this.print=function ( ) {
        console.log("this.print", this.id, this.name);
    }

    Employee.count = 0;

    Employee.prototype.printDetails = function (id, name) {
        console.log("Employee details:" , id,name);
    }
    Employee.prototype.baseSalary = 50000;
}
  
const eich = new Employee(1, "Eich");
eich.baseSalary = 100000;
eich.printDetails(1, "Eich")
console.log("salary",eich.baseSalary);
const marc = new Employee(2, "marc");
marc.print()
console.log("salary",marc.baseSalary);