class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

    isEmpty() {
        if(!this.array[0]) {
            return 'Stack is empty';
        } else {
            return 'Stack is not empty';
        }
    }
}


const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
myStack.pop();

console.log(myStack.peek());
console.log(myStack);