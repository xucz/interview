// 发布订阅模式 eventBus
function EventsEmiter() {
    this.events = {};
}
EventsEmiter.prototype.on = function (name, fn) {
    if (!this.events[name]) {
        this.events[name] = [];
    }
    this.events[name].push(fn);
    
    // 可以进行链式调用
    return this;
}
EventsEmiter.prototype.off = function (name, fn) {
    if (this.events[name]) {
        if (fn) {
            this.events[name] = this.events[name].filter((f) => {
                return f !== fn;
            })
        } else {
            delete this.events[name];
        }
    }
    return this;
}
EventsEmiter.prototype.emit = function (name, ...args) {
    if (!this.events[name]) {
        console.log('没有找到对应的事件');
        return this;
    }
    this.events[name].forEach((fn) => {
        fn.apply(null, args);
    })
    return this;
}
EventsEmiter.prototype.once = function (name, fn) {
    const func = (...args) => {
        this.off(name, fn);
    }
    this.on(name, func);
    return this;
}

// 测试
const eventBus = new EventsEmiter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
eventBus.on('task', task1).on('task', task2)

setTimeout(() => {
    eventBus.emit('task')
}, 1000)
