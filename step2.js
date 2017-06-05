const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML () {
  var emptyStr = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      emptyStr += data;
    });
    response.on('end', function() {
      console.log('Response stream complete.' + emptyStr);
    });
  });
}


getAndPrintHTML();