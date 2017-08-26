var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response){
//     response.writeHead(200, { 'content-type': 'text/html'});
//     fs.readFile('index.html', function(error, contents){
//         response.write(contents);
//         response.end();
//     });
// }).listen(8080);

// console.log('server listening on port 8080...');

// open another terminal and run
// curl http://localhost:8080
// and it should console.log the contents of index.html


var fs = require('fs');

http.createServer(function(request, response){
    response.writeHead(200);
    
    response.end("Hello, this is Dog.\n");

}).listen(8080);

console.log('server listening on port 8080...');