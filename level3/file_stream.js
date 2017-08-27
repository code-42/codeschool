var fs = require('fs');
var http = require('http');

// var file = fs.createReadStream('readme.md');
// var newFile = fs.createWriteStream('readme_copy.md');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream('readme_copy.md');
    request.pipe(newFile);
    
    request.on('end', function(){
        response.end('uploaded!\n');
    });
}).listen(8080);

// run this server in one terminal
// open another terminal and run
// curl --upload-file readme.md http://localhost:8080

// check out gulpjs.com
// build on top of streams
