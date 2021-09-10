class Stack {
    constructor() {
        this.array = []
    }

    push(val) {
        return this.array.push(val);
    }

    pop() {
        return this.array.pop()
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    isEmpty() {
        if(this.array.length === 0) {
            return 'this array is empty';
        } else {
            return 'this array is not empty';
        }
    }

    traverse() {
        for(let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.peek();
console.log(stack.array);
console.log(stack.isEmpty());