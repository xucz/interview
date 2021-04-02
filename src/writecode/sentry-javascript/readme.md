### 前端监控
> 项目参考：https://gitee.com/zhuzhaofeng/un-nmps
#### 数据捕获
1. 即时运行错误：代码错误
- window.onerror: 在runtime时发生错误时，JavaScript引擎就会抛出一个Error对象，并且触发window.onerror函数
- window.onunhandledrejection: 在使用Promise的时候，如果发生错误而我们没有去catch的话，window.onerror是不能监控到这个错误的，但JavaScript引擎会触发unhandledrejection事件

2. 资源加载错误
- object.onerror: dom对象的onerror事件
- performance.getEntries(): 获取静态资源信息
- window.addEventListener('error', (e) => {}): 静态资源加载失败，会发布error消息

3. Ajax/Fetch错误
- 使用中间件，代理原生的XHR对象，以及原型方法和Fetch方法

4. 性能数据
- 通过Performance API获取页面性能

5. 用户行为
- 记录用户，进入页面，点击、滚动事件，离开页面等操作

6. 自定义数据
- 根据自身情况，调用相应接口，上报数据

7. 内存使用
- performance.memory.usedJSHeapSize 已用大小
- performance.memory.totalJSHeapSize 总共大小

#### 上报数据
1. 延时，去重，压缩，上报
