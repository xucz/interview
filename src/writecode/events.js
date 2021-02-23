function myEvents() {
    this.events = {};
}
myEvents.prototype.on = function (name, fn) {
    let events = this.events[name] || [];
    events.push(fn)
    this.events[name] = events;
}
myEvents.prototype.off = function (name, fn) {
    let events = this.events[name] || [];
    if (fn === undefined) {
        delete events[name];
    } else {
        this.events[name] = events[name].filter((f) => {
            return f !== fn;
        })
    }
}
myEvents.prototype.emit = function (name, ...args) {
    this.events[name].forEach((fn) => {
        fn.apply(null, args);
    })
}
myEvents.prototype.once = function (name, fn) {
    this.on(name, function cb () {
        fn();
        this.off(name, cb);
    });
}
