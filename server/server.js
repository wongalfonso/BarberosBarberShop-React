const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));


app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});
module.exports = app;
