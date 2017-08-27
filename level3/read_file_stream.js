// challenge 3.2 File Read Stream

var fs = require('fs');
var http = require('http');

// create a Readable stream for fruits.txt
var file = fs.createReadStream('fruits.txt');

// listen to the readable event and give it a callback
// print the file to the console
file.on('readable', function(){
  var chunk = null;
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});
