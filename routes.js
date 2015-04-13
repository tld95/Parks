var express = require('express');
var app = express();
var mongoose = require('mongoose');
var park = require('./schemas/park.js');
var Park = mongoose.model('Park', park);
var make_js = require('./make_json.js')

app.set('view engine', 'ejs');
app.set('views', "./views");

app.get('/:lat([0-9\\.]+)/:lng([0-9\\.]+)/', function(req, res) {
	var data = Park.find({}).where(Math.sqrt(Math.pow(parseInt(lat) - parseInt(res.params.lat), 2) + Math.pow(parseInt(lng) - parseInt(res.params.lng), 2)) < 10);
	res.render('mainpage', {json : json_stringify(data)});
});

// app.get('/', function(req, res) {
// 	Park.find({ }, function(err, result){
// 			res.render('mainpage', {latitude: result.lat, longitude: result.lng});
// 			res.end;
// }).limit(10);
// });

module.exports = app;