var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200);
    // request.on('readable', function(){
    //     var chunk = null;
    //     while(null !== (chunk = request.read())){
    //         // console.log(chunk.toString());
    //         response.write(chunk);
    //     }
    // });
    // request.on('end', function(){
    //     respose.end();
    // });  
    // all the above code replaced with one line - pipe()
    request.pipe(response);
}).listen(8080);

console.log("Server listening on port 8080...");
