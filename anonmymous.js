var sample1 = function () {
    console.log('binding function to a variable');
}
function add(n1, n2, callback) {
    console.log(callback);
}
var sample=function(){
    console.log('Anonmous function');
    
};
sample1()

add(10, 20,sample)