const express = require('express');
const app = express();


// 接受get请求的参数
app.get('/', function(req, res){

//req.query就能直接获得get请求的参数
  console.log(req.query);
  res.send();
})

app.listen(80);