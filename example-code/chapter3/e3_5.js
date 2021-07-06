var fs = require('fs'),
    // TODO: async module 和 async 语法的区别 https://segmentfault.com/a/1190000013860299
    async = require('async');

// TODO: 把最后一个函数的输出传递给了callback函数
var counter = 0;
// NOTE: 依次执行，把最后一个函数的输出传递给了最终的callback, 其余按照eventloop执行其余的回调
async.waterfall([
    // TODO: 传递进去的 callback 函数是什么
    function readData(callback) {
        fs.readFile('../data/data1.txt', 'utf8', function (err, data) {
            callback(err, data);
            // console.log('first callback');
            // console.log(counter);
            console.log('1' + data)
        });
    },

    function modify(text, callback) {
        // var adjData = text.replace(/somecompany\.com/g, 'burningbird.net');
        // var adjData = 'e';
        callback(null, text);
        // callback(null, adjData);
        // console.log('second callback');
        // console.log(counter);
        console.log('2' + text);
    },

    function modify_(text, callback) {
        // TODO: 不明白这个为什么第一个被叫
        text = text + ' jane';
        callback(null, text);
        // console.log('third callback');
        // console.log(counter);
        console.log('3' + text);
    },

    function writeData(text, callback) {
        text = text + ' daiyi';
        fs.writeFile('../data/data4.txt', text, function (err) {
            callback(err, text + 'h');
            // console.log('fourth callback');
            // console.log(counter);
            console.log('4' + text);
        });
    },

    function modify__(text, callback) {
        text = text + ' jack';
        callback(null, text);
        // console.log('fifth callback');
        // console.log(counter);
        console.log('5' + text);
    }
], function (err, result) {
    if (err) {
        // console.log('run here');
        console.error(err.message);
    } else {
        console.log('hello world!');
        console.log(result);
        counter++;
        // console.log(result);
    }
});
