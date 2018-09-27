const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const dateFormat = require("dateformat");
const compression = require('compression');

const app = express();

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
function shouldCompress(req,res) {
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req,res);
}
if ("NODE_ENV" !== "production") {
  app.use(morgan('dev'));
}
app.use(express.static('public'));
app.use(express.static('dist'));
app.use(compression({
  level: 9,
  filter: shouldCompress
}));
app.use(logger);

app.get('*.js', (req,res,next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});



module.exports = app;
