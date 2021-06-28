"use strict";

// TODO: util 等node的核心模块
var util = require('util');
// Note: 构造函数 vs 普通函数
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker (name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt',
        {'flags' : 'a'})
}