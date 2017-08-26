var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    response.writeHead(200);
    fs.readFile('index.html', function(error, contents){
        response.write(contents);
        response.end();
    });
}).listen(8080);

console.log('server listening on port 8080...');

// open another terminal and run
// curl http://localhost:8080
// and it should console.log the contents of index.html
