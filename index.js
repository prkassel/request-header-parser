var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.enable('trust proxy');

app.get('/', function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ip: ip});
});

app.listen(port, function() {
  console.log('Now listening on port ' + port);
})
