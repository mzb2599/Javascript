var amitabh = new Object();
console.log(amitabh);
amitabh.name = "Amitabh";
amitabh.familyname = "Bacchan";
console.log(amitabh.__proto__);
var abhishek = Object.create(amitabh);
abhishek.name = "Bunty";
console.log(abhishek.name);
console.log(abhishek.familyname);
console.log(abhishek.__proto__);
abhishek.__proto__.familyname = "Patel";
console.log(amitabh.familyname);
var aradhna = Object.create(abhishek);
aradhna.name = "Aradhna";
console.log(aradhna.name);
console.log(aradhna.__proto__.__proto__.familyname);