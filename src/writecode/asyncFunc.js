// 异步串行、异步并行
function asyncAdd(a, b, cb) {
    setTimeout(() => {
        cb(null, a + b)
    }, 100)
}

// 将 asyncAdd promisify
function promiseAdd(a, b) {
    return new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
// promiseAdd(1, 2).then((res) => {
//     console.log(res)
// })

// 串行处理
async function serialSum(...args) {
    return args.reduce((task, now) => {
        return task.then(res => {
            return promiseAdd(res, now)
        })
    }, Promise.resolve(0))
}

async function parallelSum(...args) {
    if (args.length === 1) {
        return args[0]
    }
    let tasks = [];
    for (let i = 0; i < args.length; i = i + 2) {
        tasks.push(promiseAdd(args[i], args[i + 1] || 0))
    }
    let results = await Promise.all(tasks);
    return parallelSum(...results);
}

// 测试
(async () => {
    console.log('Running...');
    const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res1)
    const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res2)
    console.log('Done');
})()
