"use strict";

// TODO: util 等node的核心模块
var util = require('util');
// TODO: 构造函数 vs 普通函数
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker (name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt',
        {'flags' : 'a',
         'encoding' : 'utf8',
         'mode' : 0o666});
};

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
    // trim extra white space
    let command = input.trim().substr(0, 3);

    // process command
    if (command === 'wr:') {
        this.emit('write', input.substr(3, input.length));
    } else if (command === 'en:') {
        this.emit('end');
    } else {
        this.emit('echo', input);
    }

    let ic = new InputChecker('Shelley', 'output');
    ic

}

