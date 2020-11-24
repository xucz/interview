Function.prototype.myApply = function (context, args = []) {
    let key = Symbol('myApply');
    context[key] = this;
    context[key](...args);
    delete context[key];
}

let obj = {
    name: 'andy'
}
function test(arg1, arg2, arg3) {
    console.log(this.name);
    console.log(arg1, arg2, arg3);
}
test.myApply(obj);
