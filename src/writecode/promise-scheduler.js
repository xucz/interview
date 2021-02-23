function PromiseScheduler(max = Infinity) {
    this.list = [];
    this.max = max;
    this.current = 0;
}
PromiseScheduler.prototype.add = function (task) {
    if (task) {
        this.list.push(task);
        this.scheduler();
    }
}
PromiseScheduler.prototype.scheduler = function () {
    if (this.current < this.max && this.list.length > 0) {
        let task = this.list.shift();
        this.current = this.current + 1;
        task().then(() => {
            this.current = this.current - 1;
            this.scheduler();
        })
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new PromiseScheduler(2);

const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(()=>console.log(order)))
}


addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

