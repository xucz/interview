// 为xhr添加hook能力
// 未完善，后期更新
class XHRHooks {
    constructor(beforeHooks = {}, afterHooks = {}) {
        this.XHR = window.XMLHttpRequest;
        this.beforeHooks = beforeHooks;
        this.afterHooks = afterHooks;
        this.init();
    }
    init() {
        const _this = this;
        window.XMLHttpRequest = function () {
            // _xhr 是浏览器原来 XMLHttpRequest 的实例
            // this 重写 XMLHttpRequest 后的实例
            this._xhr = new _this.XHR();
            _this.overwrite(this);
        }
    }
    // proxyXHR 重写 XMLHttpRequest 后的实例
    overwrite(proxyXHR) {
        for (let key in proxyXHR._xhr) {
            if (typeof proxyXHR._xhr[key] === 'function') {
                this.overwriteMethod(key, proxyXHR)
                continue
            }
            this.overwriteAttributes(key, proxyXHR)
        }
    }
    overwriteMethod(key, proxyXHR) {
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;
        proxyXHR[key] = (...args) => {
            if (beforeHooks[key]) {
                const res = beforeHooks[key].apply(proxyXHR, args)
                if (res === false) {
                    return;
                }
            }
            const res = proxyXHR._xhr[key].apply(proxyXHR._xhr, args)
            if (afterHooks[key]) {
                afterHooks[key].apply(proxyXHR, args)
            }
            return res;
        }
    }
    overwriteAttributes(key, proxyXHR) {
        Object.defineProperty(proxyXHR, key, this.setPropertyDescriptor(key, proxyXHR))
    }
    setPropertyDescriptor(key, proxyXHR) {
        let obj = Object.create(null)
        let beforeHooks = this.beforeHooks;
        let afterHooks = this.afterHooks;
        
        obj.set = function (val) {
            if (!key.startsWith('on')) {
                proxyXHR['_' + key] = val;
                return;
            }
            
            proxyXHR._xhr[key] = function (...args) {
                if (beforeHooks[key]) {
                    const res = beforeHooks[key].apply(proxyXHR, args);
                    if (res === false) {
                        return;
                    }
                }
                val.apply(proxyXHR, args);
                if (afterHooks[key]) {
                    afterHooks[key].apply(proxyXHR, args)
                }
            }
        }
        obj.get = function () {
            return proxyXHR['_' + key] || proxyXHR._xhr[key]
        }
        return obj;
    }
}


// 一下是测试代码 --- begin ---

new XHRHooks({
    open: function () {
        console.log('XHRHooks open')
    },
    onload: function () {
        console.log('XHRHooks onload')
    },
    onreadystatechange: function () {
        console.log('XHRHooks onreadystatechange')
    },
    onerror: function () {
        console.log('XHRHooks onerror')
    }
})

// function ajax(url, callback) {
//     let xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("POST", url, true);
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState === 4) {
//             if (xmlHttp.status === 200) {
//                 callback(xmlHttp.responseText);
//             } else {
//                 console.log("服务器返回错误 status = " + xmlHttp.status);
//             }
//         }
//     }
//     xmlHttp.send("name=andy&age=20");
//     // 取消异步请求
//     // xmlHttp.abort();
// }
// ajax('http://www.baidu.com', (res) => {
//     console.log(res)
// })


