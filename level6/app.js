// 6.5 Broadcasting Questions 240 pts

// When a question is submitted to our server, we want to broadcast it out 
// to all the connected clients so they can have a chance to answer it.

// First, In the server, listen for 'question' events from clients.
// Then, emit the 'question' event on all the other clients connected, 
// passing them the question data.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question', function(data) {
    io.emit('question', data);
});
  
});

server.listen(8080);
