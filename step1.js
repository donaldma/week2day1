const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () {
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log('Chunk of data:', data)
    })
  })
};

getAndPrintHTMLChunks();