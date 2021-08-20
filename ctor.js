function ctor() {
    return {
        type: "div",
        fn: () => {
            console.log(this.type);
        }
    }
}

let c1 = new ctor();
console.log(c1);
