var express = require('express');
var logger = require('morgan')
var request = require('request');
var app = express();
var d3 = require('d3');

app.use(logger('dev'));

var api_key = process.env.WEATHER_SECRET;

app.set('port', (process.env.PORT || 3000))
