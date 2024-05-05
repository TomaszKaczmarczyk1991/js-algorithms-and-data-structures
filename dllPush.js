class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.next = null;    
        this.length = 0;  
    }
    push(val){
        var newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
            return this;
    }
}


// New DLL

let list = new DoublyLinkedList();
console.log(list); // { val: undefined, next: null }

list.push(303);
console.log(list);

list.push(808);
console.log(list);

list.push(909);
console.log(list);
