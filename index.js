var cors_proxy = require('cors-anywhere');
var host = '127.0.0.1';
var port = 8000;

cors_proxy.createServer().listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});