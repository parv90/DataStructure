class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.last.length;

      for(let i = 0; i < length; i++) {
        this.last.push(this.last.pop());
      }
      this.last.push(value);

      return this;
    }
  
    dequeue() {
        const length = this.last.length;

        for (let i = 0; i < length; i++) {
          this.first.push(this.last.pop());
        }
        this.first.pop();
        
        return this;
    }

    peek() {
        if(this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1]
    }
  }
  
  const myQueue = new CrazyQueue();
  myQueue.peek();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();

  console.log(myQueue)