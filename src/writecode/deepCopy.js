function deepCopy(obj) {
    let copy = obj instanceof Array ? [] : {};
    for(let item in obj) {
        if (Object.prototype.toString.call(obj[item]) === '[object Object]' ||
            Object.prototype.toString.call(obj[item]) === '[object Array]') {
            copy[item] = deepCopy(obj[item])
        } else {
            copy[item] = obj[item];
        }
    }
    return copy;
}

let result = deepCopy({
    name: 'xu',
    age: 30,
    friend: [
        'a', 'b'
    ]
});
console.log(result)
