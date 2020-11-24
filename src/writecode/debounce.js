// 防抖
function debounce(fn ,wait) {
    let timer = null;
    return (...args) => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    }
}
