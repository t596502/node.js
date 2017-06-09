const express = require('express');
const app = express();


// 同一个路由挂在不用的请求方式,不会造成冲突
//get
// app.get('/', function(req,res){
//   res.send('get');
// });

// post
// app.post('/', function(req,res){
//   res.send('post');
// });


// 用一个方法处理所有的请求
// 精确的匹配
// app.all('/a', function(req, res){
//   res.send('hahaha');
// });

// use 相当是我当前监听路径下的所有子路由都会被监听
// app.use('/a', function(req, res){
//   res.send('use');
// });


app.use('/', function(req, res){
  res.send('use');
});

app.listen(80)