// 导入express 
// 得到的是一个方法
const express = require('express');
// express 操作路由等基本都是用app
const app = express();

// 监听一个get请求
// 参数1. 就是需要监听的路由(精确的匹配)
app.get('/haha', function(req, res){
  // 给客户端发送数据, 不需要end
  // 也不需要考虑状态码, 和网页的编码格式
  res.send('我是哈哈页面');
});
// 监听post请求
app.post('/upload', function(req, res){
  res.send('upload');
});


//delete
app.delete('/delete', function(req, res){
   res.send('delete');
});

// 启动监听服务
app.listen(80);