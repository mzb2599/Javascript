var v = 1;
x = 5;
var w = 1;
function fna(){
    var v = 5;
    v = 2; 
}
function fnb(){
    console.log("in fnb: ", v);
    console.log("in fnb: ", v);

}
console.log("Outside ",v);
fna();
fnb();