var http = require('http');
var app = require('./routes.js');
var mongo = require('mongoose');

var mongoose =  mongo.connect('mongodb://localhost:27017/pebble');

http.createServer(app).listen(8080, '127.0.0.1');
console.log("Server created on port 8080");