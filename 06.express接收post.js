const express = require('express');
const app = express();
// bodyParser 没有能力处理文件, 只能处理简单的数据
const bodyParser = require('body-parser');

// 配置body-parser
// 处理  x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// 处理 application/json
app.use(bodyParser.json())


// 接受post请求的参数
app.post('/', function(req, res){

//req.body就能直接获得post请求的参数
  console.log(req.body);
  res.send();
})

app.listen(80);