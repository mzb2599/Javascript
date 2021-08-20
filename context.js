function myFunct( ) {
    console.log('====================================');
    console.log(this);
    console.log('====================================');
}

//myFunct();

const myObject = {
  //method: function method() {
  //    console.log(this);
  //}
  method() {
    console.log(this);
  },
};

const myContext = {
    value:"javascript"
}
//myObject.method()

myFunct.call(myContext)
myFunct.apply(myContext);

function MyFunct() {
    console.log(this);
}
new MyFunct();