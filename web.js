var gzippo = require('gzippo');
var express = require('express');
var app = express();

server.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);