/*var add = (n1, n2) =>
{return (n1 + n2);}
console.log(add(5, 7))

this.context = "global"
console.log(this.context);

function m1() {
    this.context="local"
    console.log(this.context);
    console.log(context);
    
}

function m2() {
     console.log(this.context);
}
m1()
m2()
*/
function met2() {
    console.log(this.context);
}
function met1() {
    this.context = "local"
    console.log(this.context);
    met2=()=>{
        console.log(this.context);
    }
    //console.log(context);
    met2()
}
//console.log("Next: ");
met1()
