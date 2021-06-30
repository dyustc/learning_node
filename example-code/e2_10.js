'use strict';

var fs = require('fs');

var writeStream = fs.createWriteStream('./log.txt',
    {'flags' : 'a',
             'encoding' : 'utf8',
             'mode' : 0o666});

// TODO: on的event 也是指定的
writeStream.on('open', function () {
    // get list of files
    fs.readdir('./data/', function (err, files) {
        if (err) {
            console.error(err);
            // console.log(err.message);
        } else {
            var counter = 0;
            files.forEach(function (name) {
                fs.stat('./data/' + name, function (err, stats) {
                    if (err) return err;
                    if (!stats.isFile()) {
                        counter++;
                        return;
                    }
                    fs.readFile('./data/' + name, 'utf8', function (err, data) {
                        if (err) {
                            // console.error(err.message);
                            console.error(err);
                        } else {
                            var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');
                            fs.writeFile('./data/' + name, adjData, function (err) {
                                if (err) {
                                    console.error(err.message);
                                } else {
                                    // log write
                                    counter++;
                                    writeStream.write('changed ' + name + '\n', 'utf8', function (err) {
                                        if (err) console.log(err.message);
                                    });
                                    if (counter === files.length) {
                                        writeStream.write('all files touched\n', 'utf8', function (err) {
                                            if (err) console.log(err.message);
                                        });
                                    }
                                }
                            });
                        }
                    });
                });
            });
            console.log('All done');
        }
    });
});

writeStream.on('error', function (err) {
    console.error("ERROR: " + err);
});
