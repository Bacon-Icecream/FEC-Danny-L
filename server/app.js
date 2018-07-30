const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();


const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const imageRoutes = require('../route/image');

mongoose.connect('mongodb+srv://dannylu8:'+ encodeURIComponent(process.env.MONGO_ATLAS_PW) +'@cluster0-oe6iz.mongodb.net/test?retryWrites=true', 
{
  useNewUrlParser: true
}
);

app.use('/', express.static(path.join(__dirname, '../public/dist')))
console.log(path.join(__dirname, '../public/dist'));

app.use(morgan('dev'));              
app.use('/', bodyParser.urlencoded({extended:false}));
app.use('/', bodyParser.json());

app.use('/image', imageRoutes);


module.exports = app;