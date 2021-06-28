var fib = function (n) {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2);
};

var Obj = function() {};

Obj.prototype.doSomething = function (arg1_) {
    console.log(arguments.length)
    var callback_ = arguments[arguments.length - 1];
    callback = (typeof callback_ == 'function' ? callback_ : null);
    arg1 = typeof arg1_ === 'number' ? arg1_ : null;

    if (!arg1)
        return callback(new Error('first arg missing or not a number'));
    // TODO: nextTick的用法， process的内置函数 https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/
    process.nextTick(function () {
        // Note: 如何实现异步回调
        // block on CPU
        var data = fib(arg1);
        callback(null, data);
    });
};

var test = new Obj();
var number = 10;

test.doSomething(null, function (err, value) {
    if (err)
        console.log(err);
    else
        console.log("fibonaci value for %d is %d", number, value);
});

// test.doSomething(number, number);

console.log('called doSomething');
