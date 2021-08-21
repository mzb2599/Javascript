class hero{
    constructor(heroname) {
        this.heroname = heroname;
    }
    print() {
        console.log(this.heroname);
    }
}

const Batman = new hero("Batman");
Batman.print()
const Superman = new hero("Superman");
Superman.print();

const ironman = new hero("ironman");
//When setTimeout is called the ref is passed to webApi and after 2 seconds the print method is called
//At this point of time the context is window which doesnt have print function so undefined is printed
setTimeout(ironman.print, 2000)
//only referenced not called


//Now the context is bounded with ironman object and doesnt change 
setTimeout(ironman.print.bind(ironman), 2000);
