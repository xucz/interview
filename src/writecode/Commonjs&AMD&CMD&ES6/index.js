// 参考链接：https://mp.weixin.qq.com/s?__biz=Mzg5ODA5NTM1Mw==&mid=2247483688&idx=1&sn=31a940b9f3cfef43b0ce0392b10efc07&chksm=c06680bef71109a811f12d2c4d6dda9cbaf2525911a84ede46e3358d13445ef41554b2c2053a&scene=21#wechat_redirect

/**
 * AMD
 */
// 定义暴露模块
// define(function () {
//     return 模块
// })

// define(['module1', 'module2'], function (m1, m2) {
//     return 模块
// })

// 引入使用模块
// require(['module1', 'module2'], function (m1, m2) {
//     使用m1/m2
// })

/**
 * CMD
 * CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行
 */
// 定义没有依赖的模块
// define(function (require, exports, module) {
//     exports.xxx = value
//     module.exports = value
// })

// 定义有依赖的模块
// define(function (require, exports, module) {
//     // 引入依赖模块（同步）
//     var module2 = require('./module2');
//     // 引入依赖模块（异步）
//     require.async('./module3', function (m3) {
//
//     })
//     // 暴露模块
//     exports.xxx = value
// })

// 引入使用模块
// define(function (require) {
//     var m1 = require('./module1')
//     var m4 = require('./module4')
//     m1.show()
//     m4.show()
// })
