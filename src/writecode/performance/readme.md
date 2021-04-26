### 重要性能指标
> 参考链接：https://zhuanlan.zhihu.com/p/82981365
- 首字节
- 白屏
- 首屏
- domready
- pageloaded

#### performance API 重要节点
- navigationStart：表示从上一个文档卸载结束时的unix时间戳，如果没有上一个文档，这个值将和fetchStart相等
- fetchStart：浏览器准备好使用 HTTP 请求抓取文档的时间，这发生在检查本地缓存之前
- responseStart：HTTP 请求读取真实文档开始的时间（完成建立链接），包括从本地读取缓存
- domInteractive：完成解析DOM树的时间，此时 document.readyState 变为interactive，并讲抛出 readystatechange 相关事件。
- domComplete：DOM树解析完成，且资源也准备就绪的时间，document.readyState 变为 complete，并将抛出 readystatechange 相关事件
- domContentLoadedEventEnd
- loadEventEnd

#### 确定统计起始时间
- fetchStart

#### 首字节
> 文档返回第一个字节的时间，是页面性能比较重要的指标，代表访问网络后端的整体响应耗时。
- responseStart - navigationStart

#### 白屏时间
- domInteractive - fetchStart

#### 首屏时间
> 第一屏所有资源完整展示的时间，比较难统计衡量
- domComplete - fetchStart

#### 数据上报
##### 使用img标签发送get请求
##### navigator.sendBeacon

### document.readyState
> 描述了 document 的加载状态，当该属性值发生变化时，会在 document 对象上触发 readystatechange 事件
- loading：document 正在加载
- interactive：可交互，文档已被解析，'正在加载'状态结束，但是如图像，样式表和框架之类的资源仍在加载。
- complete：文档和所有子资源完成加载。表示load状态的事件即将被触发



