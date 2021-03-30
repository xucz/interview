let arr = [1,2,3];
arr.map(function (item, index, arr) {
    console.log(item, index, arr, this)
}, {name:'xu'});

arr.map((item, index, arr) => {
    // 使用箭头函数，会使传入的this绑定失效
    console.log(item, index, arr, this)
}, {name:'xu'});

Array.prototype.MyMap = function (fn, context) {
    let arr = this;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn.call(context, arr[i], i, arr));
    }
    return result;
}

arr.MyMap(function (item, index, arr) {
    // 使用箭头函数，会使传入的this绑定失效
    console.log(item, index, arr, this)
}, {name:'xu'})
