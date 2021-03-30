var arr = [1,2,3];
let r = arr.some(function (item, index, arr) {
    console.log(item, index, arr, this)
    return item == 1;
}, {name: 'xu'})

Array.prototype.MySome = function (fn, context) {
    let result = false;
    let arr = this;
    for(let i = 0; i < arr.length; i++) {
        let res = fn.call(context, arr[i], i, arr);
        if (res) {
            result = res;
            break;
        }
    }
}
let r2 = arr.MySome(function (item, index, arr) {
    console.log(item, index, arr, this)
    return item == 1;
}, {name: 'xu'})
