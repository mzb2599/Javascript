let car = {
    horn: "Beeeep",
    weight:"100kg",
    soundHorn: function (freq) {
        return `${this.weight} sound ${this.horn}  at frequency ${freq}`;
    }
    
}
let truck = {
  horn: "Hoooonnk",
};

console.log(car.soundHorn(5));

//Using soundhorn method of car for truck object
console.log("CALL:");

console.log(car.soundHorn.call(truck, 15));

console.log("APPLY:");

console.log(car.soundHorn.call(truck, [15]));

let truckHorn=car.soundHorn.bind(truck)
console.log("Delayed by 3 seconds:--");
setTimeout(function (){
    console.log(car.soundHorn.call(truck, 15));
    console.log(truckHorn(20));
},3000)