var fs = require('fs'),
    async = require('async');

// TODO: parallel 先把所有的key function调用完，包括里面的回调函数，最后再调用最终的回调函数
// TODO: parallel 这里也可以用数组而不用字典模式， 对应的result结果里的顺序会参照声明的顺序
//       parallel vs series vs waterfall vs auto
async.auto({
    data1 : function (callback) {
        fs.readFile('../data/data1.txt', 'utf8', function (err, data) {
            callback(err, data);
        });
    },
    data2 : function (callback) {
        fs.readFile('../data/data2.txt', 'utf8', function (err, data) {
            // console.log('22');
            callback(err, data);
            // console.log('222');
        });
        // console.log('2');
    },
    data3 : function (callback) {
        fs.readFile('../data/data3.txt', 'utf8', function (err, data) {
            // console.log('data3');
            callback(err, data);
        });
        // console.log('first');
    }
}, function (err, result) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('hello');
        console.log(result);
    }
});
