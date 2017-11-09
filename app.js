var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.raw({ type: 'application/*+xml' }));

app.get('/', function (req, res) {
  res.send('express online!!!');
});

// 
//  curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://locahost:3001/json
//  {"status":"success"}
app.post('/json', function (req, res) {
  //var body = req.body;
  //console.log(body);
  res.send( {"status":"success"});
});

app.get('/profile/:user', function (req, res) {
  res.send('welcome '+req.params.user);
});

app.get('/query', function (req, res) {

  var user = req.query.user;
  var age = req.query.age;
  res.send("User : "+user+ ", Age : "+age);
});

app.listen(3001, function () {
  console.log('express listening on port 3001!');
});