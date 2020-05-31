

function m2() {
    console.log(this.context);
}
function m1() {
    this.context = "local"
    console.log(this.context);
    console.log(context);
    m2()
}
m1()