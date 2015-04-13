var park = require('./schemas/park.js');
var converter = require('./convert.js');
var mongoose = require('mongoose')
var mongo = mongoose.connect('mongodb://localhost:27017/pebble')
var fs = require('fs');

var park_model = mongoose.model('park', park);


/* Park value converter */
var contents = fs.readFileSync('park_data.json').toString();

var json = JSON.parse(contents);

var i = 0
var types = {};
while(json.features[i] != undefined) {

	if (json.features[i].geometry.coordinates[0][0].length == 2) {
	 	var latitude = json.features[i].geometry.coordinates[0][0][0];
		var longitude = json.features[i].geometry.coordinates[0][0][1];
		var xy = converter(latitude, longitude);
		var new_park = new park_model({park_type: json.features[i].properties.TYPE.toString(), lat: xy[0], lng: xy[1] });
		new_park.save(function(err) {
			console.log("saved");
			if (err) System.log(err);
		});
	}

	i++;
	
}

