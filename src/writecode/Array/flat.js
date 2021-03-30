Array.prototype.MyFlat = function (n = Infinity) {
    let arr = this;
    if (n > 0) {
        return arr.reduce(function (last, current) {
            return last.concat(Array.isArray(current) ? current.MyFlat(n - 1) : current)
        }, [])
    } else {
        return arr;
    }
};

let arr = [[1, [2, [3]]], 4, [5]];
let result = arr.MyFlat(1);
console.log(result)
