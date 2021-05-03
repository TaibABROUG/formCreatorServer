const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1/formCreator', {
  useCreateIndex: true, 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());


// Routes
app.use('/api/setForms', require('./Routes/setForms'));
app.use('/api/getForms', require('./Routes/getForms'));
app.use('/api/setContent', require('./Routes/setContent'));
app.use('/api/getFormById', require('./Routes/getFormById'));
app.use('/api/deleteFormById', require('./Routes/deleteFormById'));

module.exports = app;