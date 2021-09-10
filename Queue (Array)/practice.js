class Queue {
    constructor() {
        this.array = [];
    }

    enqueue(val) {
        return this.array.push(val);
    }

    dequeue() {
        return this.array.shift()
    }

    peek() {
        return this.array[0];
    }

    isEmpty() {
        if(this.array.length === 0) {
            return 'queue is empty';
        } else {
            return 'queue is not empty';
        }
    }
}

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.enqueue(1);

console.log(myQueue.array);
console.log(myQueue.peek());
console.log(myQueue.isEmpty());