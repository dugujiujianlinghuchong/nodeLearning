'use strict';

var fs = require('fs');

// 读取文件内容
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 读取图片信息
fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

// 同步读取
try {
    var data = fs.readFileSync('saple.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log("出错了！");
}

// 写入文件
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
// 同步写入
var data = 'Hello, Node.js';
fs.writeFileSync('output2.txt', data);

// 获取文件详情
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
// 同步获取文件详情
try {
    var data = fs.statSync('smple.txt');
    console.log(data);
} catch (err) {
    console.log("文件不存在！");
}

