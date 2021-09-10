const reverse = (str) => {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'error in str'
    }

    let arr = [];
    let length = str.length - 1;

    for(let i = length; i >= 0; i--) {
        arr.push(str[i]);
    }

    return arr.join('');
}

const reverse2 = str => {
    return str.split('').reverse().join('');
}

const string = reverse('123');

console.log(string);
console.log(reverse2('hello My name is parv'));