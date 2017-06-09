const express = require('express');
const app = express();

// 设置静态文件路由(地址)
// 把www里面所有的资源设置成外部可以直接访问
app.use(express.static('www'));
// 设置一个虚拟的路由
app.use('/public', express.static('www'));
// 可以设置多个静态路由
app.use('/www', express.static('www'));

app.listen(80);