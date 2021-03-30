Array.prototype.MyFilter = function (fn, context) {
    let result = [];
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        let res = fn.call(context, arr[i], i, arr)
        if (res) {
            result.push(arr[i])
        }
    }
    return result;
}

var arr = [1,2,3]
let res = arr.MyFilter(function (item) {
    return item === 1;
})
console.log(res)
