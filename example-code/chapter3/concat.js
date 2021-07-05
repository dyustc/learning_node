exports.concatArray = function(str, array) {
    return array.map(function (element) {
        return str + ' ' + element;
    });
}
// TODO: 发布一个模块，用e2_7.js
// var concatArray = require('concat');
s = 'hello';
a = ['Joe', 'Jane'];
console.log(exports.concatArray(s, a))

