import { counter, updateCounter } from "./ES6.mjs";

/**
 * ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系
 * 以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。
 * 比如，CommonJS 模块就是对象，输入时必须查找对象属性。
 */
console.log('更新前', counter)
updateCounter()
console.log('更新后', counter)
