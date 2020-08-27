class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
//List keeps track of first and last node
class List{
    constructor(){
    this.head = null;
    this.tail = null;
}
//Add a newnode beyond current tail
    pushback(value){
    let newNode=new Node(value)
    if( this.tail == null){ //first node
        this.head = newNode;   
    }
    else {
        this.tail.next = newNode;//Link the nodes
    }
    this.tail = newNode;
}
}