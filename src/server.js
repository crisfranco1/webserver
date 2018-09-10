import express from 'express';
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

// Express HBS view engine

app.set('view engine', 'hbs');

// Esta linea unicamente se coloca cuando la carpeta views no se encuentra en la raiz del proyecto
app.set('views', __dirname + '/views');

// partials
hbs.registerPartials(__dirname + '/views/partials');


// Helpers

require('./hbs/helpers');





app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home', { name: 'criStiAn davId frAnco garCia' });
});


app.get('/about', (request, response) => {
    response.render('about');
});


app.get('/author', (request, response) => {
    // response.send('Cristian');
    let output = { name: 'Cristian', age: 25, url: request.url };
    response.send(output);
});



app.get('/data', function (request, response) {
    response.send('Hello!!! Cristian David Franco Garcia');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});