var fs = require('fs');

var writeStream = fs.createWriteStream('./log.txt',
    {'flags' : 'a',
             'encoding' : 'utf8',
             'mode' : 0666});
// TODO: on的event 也是指定的
writeStream.on('open', function () {
    // get list of files
    fs.readdir('./data/', function (err, files) {
        if (err) {
            console.error(err);
            // console.log(err.message);
        } else {
            files.forEach(function (name) {
                fs.readFile('./data/' + name, 'utf8', function (err, data) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');
                        fs.writeFile('./data/' + name, adjData, function (err) {
                            if (err) {
                                console.error(err.message);
                            } else {
                                // log write
                                writeStream.write('changed ' + name + '\n', 'utf8', function (err) {
                                    if (err) console.log(err.message);
                                });
                            }
                        });
                    }
                });
            });
        }
    });
});

writeStream.on('error', function (err) {
    console.error("ERROR: " + err);
});
