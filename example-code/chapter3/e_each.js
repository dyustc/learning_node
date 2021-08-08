const async = require('async')
const fs = require('fs')
let arr = ['../data/data1.txt',"../data/data2.txt","../data/data3.txt"]

// TODO: callback 是
let iterator = (item,callback)=>{
    fs.readFile(item,"utf-8",(err,results)=>{
        if(item === "../data/data2.txt"){
            callback(new Error('wrong'))
        }else{
            console.log(results);
            callback(null,results);
        }
    })
}

// TODO: each vs map vs eachSeries vs mapSeries

async.each(arr,iterator,function(err, data){
    if(err){
        console.log(err)
    } else {
        console.log('1' + data);
    }
})