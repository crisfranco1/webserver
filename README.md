https://babeljs.io/setup#installation (CLI)

https://www.nodebeginner.org/blog/post/setting-up-a-javascript-project-for-es6-development-with-babel-and-webpack/

https://github.com/babel/example-node-server

npm install
npm start


REVISAR COMO FUNCIONA BABEL CON NODEMON


para desplegar en heroku solo es necesario agregar esto al proyecto:

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

en el package ->   "start": "node lib/server.js"

y finalmente hacer el commit