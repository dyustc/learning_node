process.stdin.setEncoding('utf8');

// readable 这个单词也是特殊字符，换成别的是不行的
process.stdin.on('readable', function () {
    var input = process.stdin.read();

    if (input !== null) {
        process.stdout.write(input);

        var command = input.trim();
        if (command === 'exit') {
            process.exit(0);
        }
    }
});
