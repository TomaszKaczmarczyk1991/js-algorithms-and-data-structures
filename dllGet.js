class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;  
        this.length = 0;    
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count = 0;
        var current = this.head;

        while(count != index){
            current = current.next;
            count++;
        }
        return current;
    }
}


let list = new DoublyLinkedList();
list.push("last");
list.push("actually last");


console.log(list.get(1));
// {
//     val: 'last',
//     next: Node { val: 'actually last', next: null, prev: [Circular *1] },
//     prev: null
//   }