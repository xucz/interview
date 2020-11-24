function mySetInterval(fn, time) {
    let timer = {};
    function interval() {
        timer.t = setTimeout(() => {
            fn();
            interval(fn, time);
        }, time)
    }
    interval();
    return timer;
}
function clearMyInterval(timer) {
    timer && clearTimeout(timer.t);
}


// 代码验证
let t = mySetInterval(() => {
    console.log('mySetInterval')
}, 1000);
// clearTimeout(t)
setTimeout(() => {
    clearMyInterval(t);
}, 3000)


function setTime(cb, delay) {
    cb();
    setTimeout(() => {
        setTime();
    })
}
