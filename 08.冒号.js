const express = require('express');
const app = express(); 


app.get('/:name', function(req, res){
  res.send(`${req.params.name}`)
});


// 精确匹配一定要放在模糊匹配的上面
// 精确匹配
app.get('/student/1234', function(req, res){
  res.send('管理员页面');
})


// 模糊匹配
app.get('/student/:id', function(req, res){
  // 此时id就是一个变量. 可以用过req.params
  console.log(req.params);
  res.send(`学生id是:${req.params.id}`);
})




app.listen(80);