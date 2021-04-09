function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]' ||
        Object.prototype.toString.call(obj) === '[object Array]') {
        let copy = Object.prototype.toString.call(obj) === '[object Object]' ? {} : [];
        for (let item in obj) {
            copy[item] = deepCopy(obj[item])
        }
        return copy;
    } else {
        return obj;
    }
}

let result = deepCopy({
    name: 'xu',
    age: 30,
    friend: [
        'a', 'b'
    ]
});
console.log(result)
