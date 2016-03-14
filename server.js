var express = require('express');
var logger = require('morgan')
var request = require('request');
var app = express();
var d3 = require('d3');

app.use(logger('dev'));

//API hidden
var api_key = process.env.WEATHER_SECRET;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
//sending response to index as home
app.get('/', function (request, response) {
  response.render('public/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Node running on port 3000', app.get('port'));
});

app.get('/weather/:city', function (req, res) {
  request("api.openweathermap.org/data/2.5/weather?q=" + req.params.city + "&appid=" + api_key, function(error, response, body){
    res.send(body);
  });
});

app.get('/forecast/:city', function (req, res) {
  request("api.openweathermap.org/data/2.5/forecast?q=" + req.params.city + "&appid=" + api_key, function (error, response, body) {
    res.send(body);
  });
});
