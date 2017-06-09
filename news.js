const express = require('express');
// 创建一个路由
const router = express.Router();

router.get('/:id', function(req, res){
  res.send(`${req.params.id}`);
});

router.get('/haha/:id', function(req, res){
  res.send(`haha${req.params.id}`)
});
module.exports = router;