var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.get('/*', function(req, res) {
  res.render('/dist/index.html');
});
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);