// 发布订阅模式
function myEvents() {
    this.events = {};
}
myEvents.prototype.on = function (name, fn) {
    if (this.events[name]) {
        this.events[name].push(fn);
    } else {
        this.events[name] = [fn];
    }
}
myEvents.prototype.off = function (name, fn) {
    if (this.events[name]) {
        if (fn === undefined) {
            delete this.events[name];
        } else {
            this.events[name] = this.events[name].filter((f) => {
                return f !== fn;
            })
        }
    }
}
myEvents.prototype.emit = function (name, ...args) {
    if (this.events[name]) {
        this.events[name].forEach((fn) => {
            fn.apply(null, args);
        })
    }
}
myEvents.prototype.once = function (name, fn) {
    this.on(name, function cb () {
        fn();
        this.off(name, cb);
    });
}

// 测试
const eventBus = new myEvents()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }
eventBus.on('task', task1)
eventBus.on('task', task2)

setTimeout(() => {
    eventBus.emit('task')
}, 1000)
