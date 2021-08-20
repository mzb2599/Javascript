console.log(typeof Cycle);

function Cycle(color) {
  this.color = color;
}


var redCycle = new Cycle("red");
console.log(redCycle instanceof Cycle);
console.log(typeof redCycle);

const CycleArrow = (color) => {
  this.color = color;
};

console.log(typeof CycleArrow);

// Error -> CycleArrow is not a constructor
//const redCycleArrow = new CycleArrow('red')
