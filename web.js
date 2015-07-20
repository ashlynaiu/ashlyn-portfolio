var gzippo = require('gzippo');
var express = require('express');
var app = express();
var port_number = server.listen(process.env.PORT || 5000);

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(port_number);