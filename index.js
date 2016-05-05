var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.enable('trust proxy');

app.get('/', function(req, res) {
  var obj = {
    ip: req.ip,
    language: req.get('accept-language').split(',')[0],
    operatingSystem: req.get('user-agent').split(')')[0].split('(')[1]
  }
  res.json(obj);
});

app.listen(port, function() {
  console.log('Now listening on port ' + port);
})
