const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML (options) {
  var emptyStr = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', data => emptyStr += data);
    response.on('end', () => console.log('Response stream complete.' + emptyStr));
  });
}

getAndPrintHTML(requestOptions);