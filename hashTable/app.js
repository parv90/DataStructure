class HashTable {
    constructor(size) {
        this.data = new Array(size);
        [['grapes', '10000']]
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }

        return undefined;
    }

    keys() {
        const keysArr = [];

        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    keysArr.push(this.data[i][j][0]);
                }
            }
        }

        return keysArr;
    }

    valuesOf() {
        const valueArr = [];

        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    valueArr.push(this.data[i][j][1]);
                }
            }
        }

        return valueArr;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 10);
myHashTable.set('bananas', 105);
myHashTable.set('kiwi', 500);
myHashTable.get('apples')

console.log(myHashTable.data);

console.log(myHashTable.valuesOf());