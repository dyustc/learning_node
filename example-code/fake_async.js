const fs = require('fs')

// TODO: 非阻塞 vs 异步? 这是非阻塞，还是叫异步了？ 回头去问戴兵好了 https://segmentfault.com/a/1190000013860299
fs.readFile("./data/data1.txt", "utf-8", function(err,content1){
    if (err) {
        console.log(err)
    } else {
        content1 = "./data/data2.txt"
        fs.readFile(content1, "utf-8", function(err,content2){
            if (err) {
                console.log(err);
            } else {
                content2 = './data/data3.txt'
                fs.readFile(content2, "utf-8", function(err,content3){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(content3)
                    }
                });
            }
        });
    }
});

console.log('主线程')

// TODO: 进程， 线程， 协程， 协程在一个线程执行
try {
    console.log(content3)
} catch(e) {
    console.log("还没有获取到content3！");
}