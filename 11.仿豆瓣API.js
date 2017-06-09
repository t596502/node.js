const express = require('express');
const app = express();
const book = require('./books.js');

app.use('/v2/book', book);

app.listen(80);