import { createServer } from 'http';

createServer((request, response) => {
    response.write('Cristian');
    response.end();
}).listen(3000);

console.log('Server listening on port 3000');