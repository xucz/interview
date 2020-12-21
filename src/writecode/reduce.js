Array.prototype.myReduce = function (fn, init) {
    let first = init === undefined ? this[0] : init;
    let start = init === undefined ? 1 : 0;
    for (let i = start; i < this.length; i ++) {
        first = fn(first, this[i])
    }
    return first
};

let result = [1, 2, 3, 4].myReduce((a, b) => {
    return a + b;
}, 1)
console.log(result)
