
require('dotenv').config();
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {
  console.log(req.ip)
  const language = req.headers['accept-language'] ? req.headers['accept-language'].split(',')[0] : '';
  res.json({ ipaddress: req.ip, language: language, software: req.headers['user-agent'] ? req.headers['user-agent'] : '' });
});


var listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
