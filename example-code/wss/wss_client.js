const WebSocket = require('ws');

var ws = new WebSocket('ws://localhost:3000/test');
// ws.onmessage = function (msg) {
//     console.log(msg);
// };
//
// ws.send('Hello');
// ws.send('Hello');
ws.on('open', function () {
    console.log(`[client] open()`);
    ws.send('HEllo!');
});


ws.on('message', function (message) {
    console.log(`[cli] received: ${message}`);
})