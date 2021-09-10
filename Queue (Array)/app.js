class Queue {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[0];
    }

    enqueue(value) {
        this.array.push(value);

        return this;
    }

    dequeue() {
        this.array.shift();

        return this;
    }

    isEmpty() {
        if(this.array.length === 0) {
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
console.log(myQueue.peek());


console.log(myQueue.isEmpty())