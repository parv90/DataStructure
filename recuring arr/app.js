const arr = [2,5,1,2,3,5,1,2,4];
const arr2 = [2,1,1,2,3,5,1,2,4];

const recur = (array) => { // O(n^2)
    for(let i = 0; i < array.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(array[i] === array[j]) {
                return array[i];
            }
        }
    }

    return undefined;
};

const newRecur = (array) => { // O(n)
    let map = {};

    for(let i = 0; i < array.length; i++) {
        if(map[array[i]] !== undefined) {
            return array[i];
        } else {
            map[array[i]] = i;
        }
    }

    return undefined;
};

console.log(recur(arr2));