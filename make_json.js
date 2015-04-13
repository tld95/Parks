function json_stringify (arr) {
	var park = "{ ";
	var i = 0;
	for (i = 0; i < arr.length; i++) {
		var sub = "{ \n" + "\'lat\':" + arr[i].lat + "\n" + "\'lng\':" + arr[i].lng + "\'park_type\':" + arr[i].park_type
		 + "\n}";
		 park = park + sub;
	}
	park = park + "\n}";
}

module.exports = json_stringify;