// sum(1,2,2,5)(7)()
function sum(...args) {
    return (...args2) => {
        let s = args.concat(args2).reduce((a, b) => {
            return a + b;
        });
        if (args2.length === 0) {
            return s;
        } else {
            return sum(s)
        }
    }
}
console.log(sum(1,2,2,5)(7)());

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return function (...args2) {
            return curried.apply(this, args.concat(args2));
        }
    }
}
// 测试
function func (a, b, c) {
    return a + b + c
}
const curried = curry(func)
console.log(curried(1, 2, 3))
console.log(curried(1)(2,3))
console.log(curried(1)(2)(3))
