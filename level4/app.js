// var http = require('http');
// var makeRequest = function(message){

//     var options = {
//         host: 'localhost', port: 8080, path: '/', method: 'POST'
//     }
    
//     var request = http.request(options, function(response){
//         response.on('data', function(data){
//             console.log(data.toString());
//         });
//     });
    
//     request.write(message);
//     request.end();
    
// };

var makeRequest = require('./make_request');

makeRequest("pass message as argument to function()");
makeRequest("Hello Dog.");


