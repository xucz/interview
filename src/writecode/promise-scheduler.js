function PromiseScheduler() {
    this.list = [];
    this.max = 2;
}
PromiseScheduler.prototype.add = function (fn) {
    this.list.push(fn)
}
PromiseScheduler.prototype.request = function () {
    if(this.list.length > 0) {
        let fn = this.list.shift();
        fn().then(() => {
            this.request();
        })
    }
}
PromiseScheduler.prototype.run = function () {
    for (let i = 0; i < this.max; i ++) {
        this.request();
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new PromiseScheduler();

const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(()=>console.log(order)))
}


addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

scheduler.run()
