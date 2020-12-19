function compose (middleware) {
    return dispatch(0);
    function dispatch(i) {
        let fn = middleware[i];
        if (!fn) return Promise.resolve();
        return Promise.resolve(fn(function next() {
            return dispatch(i + 1);
        }))
    }
}



let arr = [];
arr.push(async function (next) {
    console.log('1 begin');
    await next();
    console.log('1 end');
});
arr.push(async function (next) {
    console.log('2 begin');
    await next();
    console.log('2 end');
});
arr.push(async function (next) {
    console.log('3 begin');
    await next();
    console.log('3 end');
});
compose(arr);
