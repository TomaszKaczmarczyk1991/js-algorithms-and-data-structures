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
        if(index <= this.length/2){
            console.log("working from index 0");
            var count = 0;
            var current = this.head;

            while(count !== index){
                current = current.next;
                count++;
            }
            return current;
        } else {
            console.log("working from last index");
            var count = this.length -1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
            return current;
        }
    }
}


let list = new DoublyLinkedList();
list.push("100");
list.push("200");
list.push("400");
list.push("800");
list.push("1600");
list.push("3200");


console.log(list.get(4));
// OUTPUT:
// working from last index
// <ref *1> Node {
//   val: '1600',
//   next: Node { val: '3200', next: null, prev: [Circular *1] },
//   prev: <ref *2> Node {
//     val: '800',
//     next: [Circular *1],
//     prev: Node { val: '400', next: [Circular *2], prev: [Node] }
//   }
// }