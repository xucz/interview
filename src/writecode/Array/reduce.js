Array.prototype.MyReduce = function (fn, initialValue) {
    let first;
    let arr = this;
    let i = 0;
    if (initialValue !== undefined) {
        first = initialValue;
    } else {
        first = arr[0];
        i = 1;
    }
    for(; i < arr.length; i ++) {
        first = fn.call(this, first, arr[i]);
    }
    return first;
}

let result = [1, 2, 3, 4].MyReduce((a, b) => {
    return a + b;
}, 1)
console.log(result)
