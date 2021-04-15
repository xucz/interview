// 截流
// 应用场景 resize scroll
// 首次立即执行，然后一定时间内，不再执行
function throttle(fn, wait) {
    let flag = false;
    return function(...args) {
        if (!flag) {
            flag = true;
            fn.apply(this, args);
            setTimeout(() => {
                flag = false;
            }, wait);
        }
    }
}

// 首次立即执行，然后一定时间内，不再执行
function throttle2(fn, wait) {
    let  pre = 0;
    return function(...args) {
        let now = new Date().getTime();
        if (now - pre >= wait) {
            fn.apply(this, args);
            pre = now;
        }
    }
}

// 首次延时执行
function throttle3(fn, wait) {
    let timer = null;
    return function () {
        if (!timer) {
            setTimeout(() => {
                fn.apply(this, arguments);
                timer = null;
            }, wait)
        }
    }
}
