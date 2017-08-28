// 6.2 Setting Up socket.io Server-Side 250 pts

// So far we've created an Express server. Now we want to start building 
// a real-time Q&A moderation service and we've decided to use socket.io.

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
  console.log('client connnected...');
});
server.listen(8080);