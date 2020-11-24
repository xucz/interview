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
