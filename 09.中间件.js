const express = require('express');

const app = express();


let num = 0;
// 箭筒所有的请求
app.use(function(req, res, next){

  num += 1;
  // 修改请求对象
  req.haha = 'haha';
  console.log('123');
  next(); // 将控制权交给下⼀一个中间件，否则请求就会挂起
});

// get 是精确匹配
app.get('/', function(req, res, next){
  console.log(req.haha);
  res.send('首页');
  next();
});


app.listen(80);