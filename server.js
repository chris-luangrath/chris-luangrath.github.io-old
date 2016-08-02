// node.js server file

// Import modules
const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');

// Start setting up express application server
const app = express();

// File Serving
// Note/Todo: there is probably a simply way to serve files

app.get('/', function(req, res) {
  console.log('Request for /');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});




// Start the server
const hostname = '127.0.0.1';
const port = 8080;

app.listen(process.env.PORT || port, process.env.IP || hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});