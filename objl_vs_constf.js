var person = {
    id: 1,
    name:"Zaki"
}
//var arsh = new person()
var customer = new Object();
console.log(customer);
//Constructor Function
function Employee(id,name,salary) {
    this.emp_id = id
    this.emp_name = name
    this.emp_sal = salary
    this.dispaly = function () {
        return (this.emp_name)
    }
}
var Aiman = new Employee(1,"Aiman","Nil");
var Zaki = new Employee(2,"Zaki",100);
console.log(Aiman);
console.log(Zaki);
console.log(Zaki.dispaly());


