const https = require('https');

module.exports = function getAndPrintHTML (options, callback) {
  var emptyStr = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', data => emptyStr += data);
    response.on('end', () => callback(emptyStr));
  });
}