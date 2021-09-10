class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverse() {
        let currentNode = this.head;
        while(currentNode !== null) {
            console.log(`${currentNode.value} --> \t`);
            currentNode = currentNode.next;
        }
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            this.length++;
            return this;
        } else if(index >= this.length) {
            this.append(value);
            this.length++;
            return this;
        } else {
            let currentNode = this.traverseToIndex(index - 1);

            const after = currentNode.next;
            const newNode = new Node(value);
            newNode.next = after;
            currentNode.next = newNode;
            this.length++;
            return this;
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
    
    remove(index) {
        if(index > this.length - 1) {
           console.log('err')
        } else {
            const currentNode = this.traverseToIndex(index - 1);
            const unwantedNode = currentNode.next;
            currentNode.next = unwantedNode.next;
            this.length--;
            return this;
        }
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(2, 33);
myLinkedList.remove(2);
console.log(myLinkedList)

myLinkedList.reverse();


myLinkedList.traverse();