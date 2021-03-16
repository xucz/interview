Function.prototype.myBind = function (context, ...args1) {
    return (...args2) => {
        this.apply(context, args1.concat(args2));
    }
}

let obj = {
    name: 'andy'
}
function test(...args) {
    console.log(args)
}

test.myBind(obj)(0, 1, 2, 3);
