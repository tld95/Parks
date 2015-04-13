var request = require('sync-request');

function convert(x,y) {

    var res = request('GET', 'http://citizenatlas.dc.gov/usng/getusng.asmx/MD_SPCStoLL?SPCSXYSTR='+x+','+y);
    response = res.getBody().toString();

    var re = /<ConvStr>(.*)<\/ConvStr>/;
    var coords = re.exec(response)[1].split(',');

    return coords;
}

console.log(convert(397011,139701));