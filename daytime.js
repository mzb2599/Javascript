var today = new Date();
var day = today.getDay();
var time = today.getTime();
var daylist = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
console.log("Today is :" + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
console.log("Current Time :" + hour + ":" + minute + ":" + seconds);
