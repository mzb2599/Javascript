const myContext = {
  value: "javascript",
};

var myArrow = () => {
  console.log(this);
};

myArrow();
myArrow.call(myContext)