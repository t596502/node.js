const express = require('express');

const app = express();

//这些是数据库中的数据

const shujuku = {   
    "id":10000037,
    "title":"我只在乎你",
    "alt":"https:\/\/music.douban.com\/music\/10000037",
    "author":[{"name":"邓丽君"}],
    "alt_title":"留聲經典復刻版",
    "tags":[
        {"count":20,"name":"经典"},
        {"count":20,"name":"邓丽君"}
    ],
    "summary": "邓丽君在1987年推出的唱片专集《我只在乎你》中，有三首歌的词作者是“桃丽莎”。其实，桃丽莎即是邓丽君自己（英文名TERESA的中译）。根据我手中的资料，邓丽君作的词并不多，虽然她确曾向媒体表示“最大的心愿是出一张一脚踢的唱片”——即由自己包办下全部的词曲和制作，但是因意外去世而没能实现。但是，在此专集中竟有三首之多，不能不令人关注。大体上说，这三首歌具有两种风格，一为写实，一为浪漫。《非龙非彲》以现代汉语与古汉语混合，歌词的意境悲凉，心态哀痛，而且隐含着非比寻常的寓意，笔者愿在此写出来就教于方家。",
    "image":"https://img3.doubanio.com\/spic\/s11185741.jpg",
    "mobile_link":"https:\/\/m.douban.com\/music\/subject\/10000037\/",
    "attrs":{
            "publisher":["环球"],
            "singer":["邓丽君"],
            "discs":["1"],
            "pubdate":["1987-01-02"],
            "title":["我只在乎  你"],
            "media":["CD"],
            "tracks":["01. 酒醉的探戈\n02. 像故事般温柔\n03. 命运之川\n04. 爱人\n05. 午夜微风\n06. 夏日圣诞\n07. 非龙非彲\n08. 不着痕迹\n09. 心路过黄昏\n10. 我只在乎你"],
            "version":["专辑"]
    },
    "rating":{"max":10,"average":"0.0","numRaters":20,"min":0}
}


app.get('/v2/music/546546', function(req, res){
  res.json(shujuku);

});

app.listen(80);