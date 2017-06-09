const express = require('express');
const app = express();
const xuesheng = require('./xuesheng.js');
const laoshi = require('./laoshi.js');
const news = require('./news.js');


// 监听laoshi路由
app.use('/laoshi',laoshi);
// 监听学生路由
app.use('/xuesheng',xuesheng);

app.use('/news', news)

app.listen(80);