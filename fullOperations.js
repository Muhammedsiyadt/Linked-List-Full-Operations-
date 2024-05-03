
// Creating A Node Class 
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Creating Linked List Class
class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

// I N S E R T I O N 
    // (1) Adding a node to first(Prepend)
    addFirst(value) {
        // creating a instance for Node class [ OBJECT ]
        const newNode = new Node(value)
        if (this.size == 0) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    // (2) Adding a node to last (Append)
    addLast(value) {
        const newNode = new Node(value)
        if (this.size == 0) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }

            current.next = newNode
        }
        this.size++
    }

    // (3) Adding a node in inside
    add(index, value) {
        const node = new Node(value)
        if (index < 0) {
            console.log('Index Less than zero.please provide zero and  more than zero');
            return
        }
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
        this.size++
    }

// D E L E T I O N 
    // (1) Firt Node Deletion
    deleteFirstIndex(index){
        if(index < 0){
            console.log('Invalid index..!');
            return
        }
        if(index > this.size){
            console.log('Invalid index..!');
            return
        }
        if(index === 0 ){
            this.head = this.head.next
        }
        this.size--
    }

    // (2) Delete Last Index Node
    deleteLastIndex(index){
        if (index !== this.size - 1) {
            console.log('Invalid Index...!');
            return;
        }
        if(index === this.size-1){
            let current = this.head
            let prev = null
            while(current.next){
                prev = current
                current = current.next
            }
            prev.next = null
        }
        this.size--
    }

    // (3) Delete Node In input Index
    deleteAnyIndex(index){
        if (index < 0 || index > this.size) {
            console.log('Invalid Index')
            return
        }
        if(index === 0){
            this.head = this.head.next
        }
        if(index === this.size-1){
            let current = this.head 
            let prev = null
            while(current.next){
                prev = current
                current = current.next
            }
            prev.next = null
        }else{
            let current = this.head
            for (let i = 0; i < index - 1 ; i++) {
                current = current.next 
            }
            let prev = current.next
            current.next = null
            current.next = prev.next
        }
        this.size--
    }

    // Find Middle And Delete It
    middle(){
        let current = this.head 
        let prev = null
        let half = Math.floor(this.size / 2)
        for (let i = 0; i < half; i++) {
            prev = current
            current = current.next 
        }
        prev.next = current.next
    }



    printNode() {
        if (this.size == 0) {
            console.log('List is Empty');
        } else {
            let current = this.head
            while (current) {
                console.log(current.data)
                current = current.next
            }
        }
    }
}

// Instance For linkedList Class
const list = new linkedList()

list.addFirst(100)
list.addLast(200)
list.addLast(300)
list.addLast(400)
list.addLast(500)
list.add(3, 1122)
list.deleteFirstIndex(0)
list.deleteLastIndex(2)
list.deleteAnyIndex(2)
 console.log(list.middle());
list.middle()
list.printNode()