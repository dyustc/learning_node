var fs = require('fs'),
    // TODO: async module 和 async 语法的区别
    async = require('async');

var counter = 0;
async.waterfall([
    // TODO: 传递进去的 callback 函数是什么
    function readData(callback) {
        fs.readFile('../data/data1.txt', 'utf8', function (err, data) {
            callback(err, data);
            console.log(counter);
        });
    },

    function modify(text, callback) {
        var adjData = text.replace(/somecompany\.com/g, 'burningbird.net');
        callback(null, adjData);
        console.log(counter);
    },

    function writeData(text, callback) {
        fs.writeFile('../data/data4.txt', text, function (err) {
            callback(err, text);
            console.log(counter);
        });
    }
], function (err, result) {
    if (err) {
        // console.log('run here');
        console.error(err.message);
    } else {
        // console.log('hello world!');
        counter++;
        // console.log(result);
    }
});
