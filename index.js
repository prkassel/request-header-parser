var express = require('express');
var app = express();
app.enable('trust proxy');

app.get('/', function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ip: ip});
});

app.listen(3000, function() {
  console.log('Now listening on port 3000');
})
