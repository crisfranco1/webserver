'use strict';

var _http = require('http');

(0, _http.createServer)(function (request, response) {
    response.write('Cristian');
    response.end();
}).listen(3000);

console.log('Server listening on port 3000');