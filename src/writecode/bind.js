Function.prototype.myBind = function (context) {
    return (...args) => {
        this.apply(context, args);
    }
}

let obj = {
    name: 'andy'
}
function test(...args) {
    console.log(args)
}

test.myBind(obj)(1, 2, 3);
