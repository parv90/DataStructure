class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        console.log(this.top);
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if(this.top === null) {
            this.top = node;
            this.bottom = node;
            this.length++;

            console.log(this.top);
            return this.top
        } else {
            this.bottom = this.top;
            this.top = node;
            node.next = this.bottom;
            this.length++;

            console.log(this.top);
            return this.top;
        }
    }

    pop() {
        if(this.top === null) {
            return undefined;
        } 

        if(this.top === this.bottom) {
            this.bottom = null;
        }
        
        this.top = this.top.next;
        this.length--;

        return this;
    }

    isEmpty() {
        if(this.top === null) {
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
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);