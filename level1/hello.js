
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, dog\n");
    response.write("Dog is running\n");
    setTimeout(function() {
        response.write("Dog is done.\n");
        response.end();
    }, 2000);

}).listen(8080);

console.log('Listening on port 8080...');