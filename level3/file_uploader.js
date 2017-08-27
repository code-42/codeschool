var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream('readme_copy.md');
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    
    request.on('readable', function(){
        var chunk = null;
        while (null !== (chunk = request.read())){
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write('progress: ' + parseInt(progress, 10) + '%\n');
        }
    });
    
    request.pipe(newFile);
    
    request.on('end', function(){
        response.end('uploaded!\n');
    });
}).listen(8080);

console.log("Server running on port 8080...");

// run this server in one terminal
// open another terminal and run
// curl --upload-file large_file.png http://localhost:8080

// check out gulpjs.com
// build on top of streams
