'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var hbs = require('hbs');

var port = process.env.PORT || 3000;

// Express HBS view engine

app.set('view engine', 'hbs');

// Esta linea unicamente se coloca cuando la carpeta views no se encuentra en la raiz del proyecto
app.set('views', __dirname + '/views');

// partials
hbs.registerPartials(__dirname + '/views/partials');

// Helpers

require('./hbs/helpers');

app.use(_express2.default.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render('home', { name: 'criStiAn davId frAnco garCia' });
});

app.get('/about', function (request, response) {
    response.render('about');
});

app.get('/author', function (request, response) {
    // response.send('Cristian');
    var output = { name: 'Cristian', age: 25, url: request.url };
    response.send(output);
});

app.get('/data', function (request, response) {
    response.send('Hello!!! Cristian David Franco Garcia');
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});