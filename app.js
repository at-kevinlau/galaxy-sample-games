var serverHTTP = require('./server_http');
var serverWS = require('./server_ws');

[
/*
    'generate'
*/
].forEach(function(view) {
    require('./views/' + view)(serverHTTP);
});

var serverName = serverHTTP.name;

serverHTTP.listen(process.env.PORT || 1337, function() {
    console.log('%s HTTP server listening at %s', serverName, serverHTTP.url);
});

serverWS.listen(function(url) {
    console.log('%s WebSocket server listening at %s', serverName, url);
});
