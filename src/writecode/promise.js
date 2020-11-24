// 参考链接：https://xie.infoq.cn/article/578257b224a24300c6e0b025b
function myPromise(fn) {
    this.status = 'pending';
    this.value = null;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];
    
    let resolve = (val) => {
        if (this.status === 'pending') {
            this.status = 'resolved';
            this.value = val;
            this.onResolvedCallback.map((resolveFn) => {
                resolveFn(val)
            })
        }
    };
    let reject = (reason) => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.value = reason;
            this.onRejectedCallback.map((rejectFn) => {
                rejectFn(reason)
            })
        }
    };
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
myPromise.prototype.then = function (resolveFn, rejectFn) {
    resolveFn = resolveFn instanceof Function ?  resolveFn : () => {};
    rejectFn = rejectFn instanceof Function ?  rejectFn : () => {};
    
    if (this.status = 'pending') {
        this.onResolvedCallback.push(resolveFn);
        this.onRejectedCallback.push(rejectFn);
    }
}

myPromise.all = function (promises) {
    let count = 0;
    return new myPromise((resolve, reject) => {
        let arr = [];
        promises.map((p, index) => {
            p.then((res) => {
                count ++;
                arr[index] = res;
                if (count === promises.length - 1) {
                    resolve(arr)
                }
            })
        })
    })
}
myPromise.prototype.race = function (promises) {
    return new myPromise((resolve, reject) => {
        promises.map((p) => {
            p.then((res) => {
                resolve(res)
            })
        })
    })
}
myPromise.resolve = function (value) {
    return new myPromise((resolve) => {
        resolve(value);
    })
}
myPromise.reject = function (reason) {
    return new myPromise((resolve, reject) => {
        reject(reason);
    })
}

new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then((res) => {
    console.log(res)
})
