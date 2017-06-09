// 挂在一个路由用来处理book
const express= require('express');
const bookRouter = express.Router();


//数据
const shujuku = {"rating":{"max":10,"numRaters":0,"average":"0.0","min":0},"subtitle":"","author":["Not Available (NA)"],"pubdate":"","tags":[],"origin_title":"","image":"https://img3.doubanio.com/mpic/s20850726.jpg","binding":"","translator":[],"catalog":"","pages":"205","images":{"small":"https://img3.doubanio.com/spic/s20850726.jpg","large":"https://img3.doubanio.com/lpic/s20850726.jpg","medium":"https://img3.doubanio.com/mpic/s20850726.jpg"},"alt":"https://book.douban.com/subject/4642165/","id":"4642165","publisher":"","isbn10":"1554580439","isbn13":"9781554580439","title":"The Agent in the Margin","url":"https://api.douban.com/v2/book/4642165","alt_title":"","author_intro":"","summary":"","price":"657.00 元"}

bookRouter.get('/:id', function(req, res){
  if(req.params.id == '4642165'){
    res.json(shujuku);
  }else{
    res.json({'msg': '没找到!!!'});
  }
  
});

module.exports = bookRouter;