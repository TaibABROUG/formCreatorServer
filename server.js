const http = require('http');
const app = require('./App');

const config = require('./config');

const port = process.env.PORT || config.port;

const server = http.createServer(app);

server.listen(port);