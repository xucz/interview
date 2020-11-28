function myEvents() {
    this.events = {};
}
myEvents.prototype.on = function (name, fn) {
    let events = this.events[name];
    if (events instanceof Array) {
        events.push(fn);
    } else {
        this.events[name] = [fn];
    }
}
myEvents.prototype.off = function (name, fn) {
    let events = this.events[name];
    if (events instanceof Array) {
        if (fn === undefined) {
            this.events[name] = [];
        } else {
            this.events[name] = this.events[name].filter((f) => {
                return f !== fn;
            })
        }
    }
}
myEvents.prototype.emit = function (name, ...args) {
    this.events[name].forEach((fn) => {
        fn.apply(this, args);
    })
}
myEvents.prototype.once = function (name, fn) {
    this.on(name, function cb () {
        fn();
        this.off(name, cb);
    });
}
