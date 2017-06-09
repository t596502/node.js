const express = require('express');
const app = express();
const nunjucks = require('nunjucks');


// express 要使用模板引擎必须要做一个配置
// 1. 模板目录
nunjucks.configure('views',{
  express: app // 让express 支持模板
});

app.get('/', function(req, res){
  // 渲染模板
  res.render('index.njk', {'user':'haha'});
  
});

app.listen(80);