const fs = require('fs');
let counts = 0;

const lastTime = Date.now();

// setTimeout
setTimeout(() => {
    console.log('timers', Date.now() - lastTime + 'ms');
}, 0);

// TODO: 微任务 vs 宏任务process.nextTick
process.nextTick(() => {
    // 进入event loop
    // timers阶段之前执行
    wait(20);
    asyncOperation(() => {
        console.log('poll');
    });
});


// 定义一个 wait 方法
function wait (mstime) {
    let date = Date.now();
    while (Date.now() - date < mstime) {
        // do nothing
    }
}

// 读取本地文件 操作IO
function asyncOperation (callback) {
    // console.log(__filename);
    fs.readFile(__filename, callback);
    // console.log(__filename);
}
/**
 * timers 21ms
 * poll
 */
