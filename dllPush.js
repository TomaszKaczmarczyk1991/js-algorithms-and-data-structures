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
// {
// head: Node { val: 303, next: null, prev: null },
// next: null,
// length: 1,
// tail: Node { val: 303, next: null, prev: null }

list.push(808);
console.log(list);
// {
//     head: <ref *1> Node {
//       val: 303,
//       next: Node { val: 808, next: null, prev: [Circular *1] },
//       prev: null
//     },
//     next: null,
//     length: 2,
//     tail: <ref *2> Node {
//       val: 808,
//       next: null,
//       prev: <ref *1> Node {
//         val: 303,
//         next: [Circular *2],
//         prev: null
//       }
//     }
//   }

list.push(909);
console.log(list);
// {
//     head: <ref *1> Node {
//       val: 303,
//       next: Node { val: 808, next: [Node], prev: [Circular *1] },
//       prev: null
//     },
//     next: null,
//     length: 3,
//     tail: <ref *2> Node {
//       val: 909,
//       next: null,
//       prev: Node { val: 808, next: [Circular *2], prev: [Node] }
//     }
//   }
