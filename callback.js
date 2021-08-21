function delayedHello(cb) {
  //setTimeout not a js func -->coming from window object
  setTimeout(function () {
    console.log("====================================");
    console.log("I am lazy for saying hello");
    console.log("====================================");
      let result = cb("finally called");
      console.log("result form callback",result);
  }, 1000);
}
 
delayedHello(function (hmm) {
    console.log("I am called by delayed hello", hmm);
    
    return "I am done";
 });
console.log('====================================');
console.log("hello world");
console.log('====================================');