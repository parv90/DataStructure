class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverse() {
        let currentNode = this.head;
        while(currentNode !== null) {
            console.log(`${currentNode.value}`);
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
            newNode.prev = currentNode;
            currentNode.next = newNode;
            after.prev = newNode;
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
            unwantedNode.next.prev = currentNode;
            this.length--;
            return this;
        }
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(1, 33);
// myLinkedList.remove(2);
// myLinkedList.remove(1);


myLinkedList.traverse();
console.log(myLinkedList);