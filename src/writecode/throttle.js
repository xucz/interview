// 截流
function throttle(fn, wait) {
    let flag = false;
    return (...args) => {
        if (!flag) {
            flag = true;
            fn.apply(this, args);
            setTimeout(() => {
                flag = false;
            }, wait);
        }
    }
}

function throttle2(fn, wait) {
    let  pre = new Date();
    return function(...args) {
        let context = this;
        let now = new  Date();
        if (now - pre >= wait) {
            fn.apply(context, args);
            pre = now;
        }
    }
}
