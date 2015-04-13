var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var park = new Schema ({
	park_type : String,
	lat : Number,
	lng : Number
}, {collection: "parks"});

module.exports = park;