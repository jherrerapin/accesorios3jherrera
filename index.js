const express =require('express');
const routes = require('./routes/index');
const path = require('path');

//var express
const app = express();

//static files

app.use(express.static('public'));

//init pug
app.set('view engine', 'pug');

//call file view
app.set('views', path.join(__dirname, './views'));

app.use('/',routes());

app.listen(3001);