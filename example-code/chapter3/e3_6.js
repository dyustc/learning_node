var fs = require('fs'),
    async = require('async'),
    _dir = '../data/';

var writeStream = fs.createWriteStream(_dir + 'log.txt',
    {'flags' : 'a',
        'encoding' : 'utf8',
        'mode' : 0o666});

async.waterfall([
    function readDir(callback) {
        fs.readdir(_dir, function (err, files) {
            console.log(files);
            callback(err, files);
        });
    },

    function loopFiles(files, callback) {
        // files.forEach(function (name) {
        //     console.log(name);
        //     callback(null, name);
        // });
        // for (var i = 0; i < files.length; ++i) {
        //     callback(null, files[i]);
        // }
        callback(null, files[0]);
        // TODO: multiple callback bug
        // callback(null, files[1]);
        callback(null, files[2]);
    },

    function getStat(name, callback) {
        fs.stat(_dir + name, function(err, stats) {
            callback(err, name, stats);
        });
    },

    function readData(file, stats, callback) {
        if (stats.isFile()) {
            fs.readFile(_dir + file, 'utf8', function(err, data){
                callback(err, file, data);
            });
        }
    },

    function modify(file, data, cb) {
        var text = data.replace(/somecompany\.com/g, 'burningbird.net');
        cb(null, file, text);
    },

    function writeData(file, data, callback) {
        fs.writeFile(_dir + file, data, function(err) {
            callback(err, file);
        });
    },

    function writeLog(file, callback) {
        writeStream.write('changed ' + file + '\n', 'utf-8', function(err) {
            callback(err, file);
        })
    }

], function callback(err, result) {
    if (err) {
        console.error(err);
    } else {
        // console.log(result);
    }
});

