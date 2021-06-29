var fs = require('fs');
/*
try {
    var data = fs.readFileSync('./apples.txt', 'utf8');
    console.log(data);
    var adjData = data.replace(/A[a]pple/g, 'orange');

    fs.writeFileSync('./oranges.txt', adjData);
} catch (err) {
    console.error(err);
    // console.log('hello world')
}
*/
fs.readFile('./apples.txt', function (err, data) {
    if (err) {
        console.error(err.stack);
    } else {
        var adjData = data.replace(/A[a]pple/g, 'orange');
        // Note: 系统函数的callback函数是有固定格式的
        fs.writeFile('./oranges.txt', adjData, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        })
    }
});