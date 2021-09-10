class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    peek() {
        console.log(this.head);
        return this.head;
    }

    enqueue(value) {
        const node = new Node(value);

        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }

        return this;
    }

    dequeue() {
        if(!this.head) {
            return this;
        }

        if(this.head === this.tail) {
            this.tail = null;
        }

        this.head = this.head.next;
        this.length--;
        
        return this;
    }

    isEmpty() {
        if(!this.head) {
            return 'Queue is empty';
        } else {
            return 'Queue is not empty';
        }
    }
}


const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();
myQueue.peek();


console.log(myQueue)