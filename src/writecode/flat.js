// 参考链接：https://juejin.cn/post/6844904025993773063
Array.prototype.flat = function (n = Infinity) {
    // n: 拍平几层
    let arr = this;
    if (n > 0) {
        return arr.reduce((pre, next) => {
            return pre.concat(Array.isArray(next) ? next.flat(n - 1) : next)
        }, [])
    } else {
        return arr.slice();
    }
};

Array.prototype.myFlat2 = function (n = Infinity) {
    if (Array.isArray(this)) {
        let arr = [];
        if (n <= 0) {
            return this;
        }
        this.forEach((item) => {
            if (Array.isArray(item)) {
                arr.push(...item.myFlat2(n - 1))
            } else {
                arr.push(item)
            }
        })
    } else {
        throw new Error('类型错误')
    }
}



let a = [1,2,[3,4,,,[5, 6]]]
console.log(a.flat(3))
// reduce 不会调用4 - 5 之间的空部分
