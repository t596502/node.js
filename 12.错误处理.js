const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res, next){

  // 读文件
  fs.readFile('./books1.js', function(err, data){
    // 没有错误
    if(!err){
      res.send(data.toString());
    }else{
      // 这个地方不能处理错误
      // const error = new Error('文件没找到!')
      next(err);
    }
  })
});

app.get('/hehe', function(req, res){
  res.send('dashen');
});


// 中间件来处理404
app.use(function(req, res, next){
  // 设置状态码
  res.status(404).send('404了呦');
});


// 处理错误的中间件
// 错误处理必须要4个参数,否则不行
app.use(function(err, req, res, next){
  console.log(err);
  res.send(err.message);
})


app.listen(80);