class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
//List holds a series of nodes
class List {
    constructor() {
        this.head = new Node(0);//Dummy head node
        this.tail = new Node(0);//Dummy tail node

        //Sentimental head and tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    //Create a node to be added
    pushback(value) {
        let newNode = new Node(value);

        //Add before Dummy tail
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;//Just before tail
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
        
        //If this is the first node
    //     if (null == this.head) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }
    //     else {
    //         newNode.prev = this.tail;
    //         this.tail.next = newNode;//Add beyond last node
    //         this.tail = newNode;//newNode becomes last node
    //     }
        // 
    }

    printforward() {
        for (let current = this.head.next; current!=this.tail; current = current.next) {
            console.log(current.value);
        }
    }

    printBackward() {
        for (let current = this.tail.prev; current!=this.head; current = current.prev) {
            console.log(current.value);

        }
    }
    // removeNode(value) {
    //     for (let current = this.head; current; current = current.next) {
    //         if (value == current.value) {
    //             //Got the value
    //             //Value at start
    //             if (current == this.head) {
    //                 this.head = this.head.next;
    //                 this.head.prev = null;
    //                 return true;
    //             }
    //             //Value at the end
    //             if (current == this.tail) {
    //                 this.tail = this.tail.prev;
    //                 this.tail.next = null;
    //                 return true;
    //             }
    //             //Only one node
    //             if (this.head == this.tail) {
    //                 this.head = null;
    //                 this.tail = null;
    //                 return true;
    //             }
    //             //Value somewhere in between
    //             current.prev.next = current.next;
    //             current.next.prev = current.prev;
    //         }
    //     }
    //     return false;//Could not find the value
    // }
    removeNode(value) {
        for (let current = this.head; current; current = current.next){
            if (value==current.value) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
    }
    //Value of node and node before which it is to be inserted
    Addnode_before(value, node) {
        let newNode=new Node(value)
        for (let current = this.head; current; current = current.next) {
            if (node == current.value) {
                current.prev.next = newNode;
                newNode.prev=current.prev
                current.prev = newNode;
                newNode.next = current;
                newNode.value=value
            }
        }
    }
}

let list = new List();
list.pushback(5);
list.pushback(1);
list.pushback(7);
list.removeNode(7);
//list.printforward();
list.Addnode_before(8, 1);
list.printforward();