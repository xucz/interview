let common = require('./Common.js')

/**
 * CommonJS模块的加载机制是，输入的是被输出的值的拷贝。
 * 也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
 */
console.log('更新前', common.counter, common.obj.c)
common.updateCounter()
console.log('更新后', common.counter, common.obj.c)
