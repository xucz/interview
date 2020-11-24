Function.prototype.myCall = function (context, ...args) {
    let key = Symbol('myCall');
    context[key] = this;
    context[key](...args);
    delete context[key];
}

let obj = {
    name: 'andy'
}
function test(...args) {
    console.log(args)
}
test.myCall(obj, 1, 2);
