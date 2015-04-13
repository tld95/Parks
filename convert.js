var http = require('http');

convert_to_LL = function (x, y) {
  convert_request(x, y, '/usng/getusng.asmx/MD_SPCStoLL?SPCSXYSTR=')
}

convert_from_LL = function (x,y) {
  convert_request(x, y, '/usng/getusng.asmx/MD_LLtoSPCS?LATLONSTR=')
}

convert_request = function(x, y, path) {

  var options = {
    host: 'citizenatlas.dc.gov',
    path: path+x+','+y
  };

  callback = function(response, callback) {
    var str = '';

    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      console.log(str);
      var re = /<ConvStr>(.*)<\/ConvStr>/;
      var coords = re.exec(str)[1].split(',');
      var x = coords[0];
      var y = coords[1];

      callback(x,y)
    });
  }
  http.request(options, callback).end();
}

//convert_to_LL(397011,139701)
//convert_from_LL(38, -77)