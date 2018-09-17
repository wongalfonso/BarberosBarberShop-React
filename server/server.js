const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const dateFormat = require("dateformat");

const app = express();

let template = 'Agent, Time, Method, Resource, Version, Status';

function logger(req, res, next) {
  if (req.method == 'GET') {
    let now = new Date();
    let timeStamp = dateFormat(now, 'yyyy mm dd|HH:MM:ss');
    let date = dateFormat(now, 'yyyy_mm_dd');
    let data;
    let head = 'Head ' + req.headers['user-agent'];
    head = head.replace(/,/g, '');    
    let version = 'HTTP/' + req.httpVersion;
    let comma = ',';
    let ip = 'IP ' + req.ip
    let meth = 'Method ' + req.method;
    let stat = 'Status ' + res.statusCode;
    let path = 'Path ' + req.path;    
    data = head + comma + timeStamp + comma + meth + comma + ip + comma + path + comma + version + comma + stat;    
    let file = './logs/log_' + date + '.csv';
    fs.appendFile(file, '\n' + data, (err) => {
      if (err) console.log(err);
    })
  }
  next();
}
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(logger);


app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});



module.exports = app;
