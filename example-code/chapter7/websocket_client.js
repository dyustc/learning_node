var crypto = require('crypto');
var http = require('http');
// var url = require('url');

// options = 'hello';
// console.log(options);
// this 4 种用法, 和箭头函数的区别
// prototype 给已经存在的对象添加属性或方法
var WebSocket = function (url) {
    console.log(this.options);
    this.options = parseUrl(url);
    this.connect();
}

WebSocket.prototype.onopen = function () {

}

WebSocket.prototype.setSocket = function (socket) {
    this.socket = socket;
}

WebSocket.prototype.connect = function () {
    var that = this;
    var key = new Buffer(this.options.protocalVerison + '_' + Date.now()).toString('base64');
    var shasum = crypto.createHash('sha1');
    var expected = shasum.update(key + 'XX').digest('base64');

    var options = {
        port: this.options.port,
        host: this.options.hostname,
        headers: {
            'Connection' : 'Upgrade',
            'Upgrade' : 'websocket',
            'Sec-WebSocket-Version' : this.options.protocalVersion,
            'Sec-WebSocket-key' : key
        }
    };

    var req = http.request(options);
    req.end();

    req.on('upgrade', function(res, socket, upgradeHead) {
        that.setSocket(socket);
        that.onopen();
    });
};
