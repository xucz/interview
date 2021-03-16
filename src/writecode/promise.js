// 参考链接：https://xie.infoq.cn/article/578257b224a24300c6e0b025b
function myPromise(fn) {
    this.status = 'pending';
    this.value = null;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];
    this._resolve = this._resolve.bind(this);
    this._reject = this._reject.bind(this);
    try {
        fn(this._resolve, this._reject)
    } catch (e) {
        this._reject(e)
    }
}
myPromise.prototype._resolve = function (val) {
    if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = val;
        this.onResolvedCallback.map((resolveFn) => {
            setTimeout(() => {
                resolveFn(val)
            })
        })
    }
}
myPromise.prototype._reject = function (reason) {
    if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = reason;
        this.onRejectedCallback.map((rejectFn) => {
            setTimeout(() => {
                rejectFn(reason)
            })
        })
    }
}
// 待改进
myPromise.prototype.then = function (resolveFn, rejectFn) {
    resolveFn = resolveFn instanceof Function ?  resolveFn : () => {};
    rejectFn = rejectFn instanceof Function ?  rejectFn : () => {};
    
    return new myPromise((resolve, reject) => {
        this.onResolvedCallback.push((value) => {
            try {
                const result = resolveFn(value);
                if (result instanceof myPromise) {
                    result.then(resolve, reject)
                } else {
                    resolve(result)
                }
            } catch (e) {
                reject(e)
            }
        })
        this.onRejectedCallback.push((value) => {
            try {
               const result = rejectFn(value)
                if (result instanceof myPromise) {
                    result.then(resolve, reject)
                } else {
                    resolve(result)
                }
            } catch (e) {
                resolve(e)
            }
        })
    })
    
    
}
myPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}
// promises 中可以有非promise对象
myPromise.all = function (promises) {
    return new myPromise((resolve, reject) => {
        let count = 0;
        let arr = [];
        for (let i = 0; i < promises.length; i++) {
            if (promises[i] instanceof myPromise) {
                promises[i].then((res) => {
                    count ++;
                    arr[i] = res;
                    if (count === promises.length - 1) {
                        resolve(arr)
                    }
                })
            } else {
                count ++;
                arr[i] = promises[i];
            }
        }
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
// 测试1
new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then((res) => {
    console.log(res)
})

// 测试2
new myPromise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 400);
}).then((res) => {
    console.log(res);
    return new myPromise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 500);
    });
}).then((res) => {
    console.log(res);
    throw new Error('this is error')
}).catch((err) => {
    console.log('-->', err);
})

Promise.resolve(new Promise((r) => {
    setTimeout(()=>{
        r(123)
    }, 2000)
})).then((r)=>{
    console.log(r)
})
