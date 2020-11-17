if(process.env.NODE_ENV!=='production'){
  require('dotenv').config();
};

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true,useUnifiedTopology: true }).then(() => console.log('Connected to MongoDB...')).catch(err => console.log('Could not connect to MongoDB...'));

const indexRouter = require('./routes/index');

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))

app.use('/',indexRouter);

app.listen(process.env.PORT || 3000);