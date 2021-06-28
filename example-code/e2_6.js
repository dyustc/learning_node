var events = require('events');
var em = new events.EventEmitter();
var counter = 0;

// TODO: setInterval 内置函数 https://nodejs.org/zh-cn/docs/guides/timers-in-node/
// TODO: eventloop https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/#poll
setInterval(function () {
    em.emit('timed', counter++);
    console.log('index: ' + counter);
}, 3000);

em.on('timed', function (data) {
    console.log('timed ' + data);
});
