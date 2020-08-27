class Node{
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
//List holds a series of nodes
class List{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //Create a node to be added
    pushback(value) {
        let newNode = new Node(value);
    //If this is the first node
        if (null == this.head ) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;//Add beyond last node
            this.tail = newNode;//newNode becomes last node
        }
    }
    
    printforward() {
        for (let current = this.head; current; current=current.next){
            console.log(current.value);
        }
    }

    printBackward() {
        for (let current = this.tail; current; current = current.prev) {
            console.log(current.value);
        }
    }
    removeNode(value) {
        for (let current = this.head; current; current = current.next) {
            if (value == current.value) {
                //Got the value
                //Value at start
                if (current == this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                    return true;
                }
                //Value at the end
                if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    return true;
                }
                //Only one node
                if (this.head == this.tail) {
                    this.head = null;
                    this.tail = null;
                    return true;
                }
                //Value somewhere in between
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        return false;//Could not find the value
    }
}

let list = new List();
list.pushback(5);
list.pushback(1);
list.pushback(7); 
list.removeNode(1);
list.printforward()