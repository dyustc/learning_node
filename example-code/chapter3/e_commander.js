var program = require('commander');

program
    .version ('0.0.1')
    .option ('-s, --source [website]', 'Source website')
    .option ('-f, --file [filename]', 'File Name')
    .parse(process.argv);

console.log(program.source);
console.log(program.file);
console.log(program.version);
console.log(process.argv);