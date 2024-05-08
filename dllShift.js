// This function should remove a node at the beginning of the DoublyLinkedList. It should return the node removed.


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

    shift(){
       if (this.length === 0) return undefined;
       var oldHead = this.head;
       if (this.length === 1) {
           this.head = null;
           this.tail = null;
       } else {
           this.head = oldHead.next;
           this.head.prev = null;
           oldHead.next = null;
       }
    this.length--;
    return oldHead;
    }
}


let myDll = new DoublyLinkedList();

myDll.push({brand: 'Marshall',
    model: 'JCM 800',
    year: '1983',
    });
console.log(myDll);

myDll.shift();
console.log(myDll);