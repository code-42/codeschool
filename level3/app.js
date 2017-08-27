// challenge 3.4 Fixing Pipe
// add option to keep writable stream open 

var fs = require('fs');

// create a Readable stream for fruits.txt
var file = fs.createReadStream('fruits.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, { end: false });

file.on('end', function(){
    destFile.end('Finished!');
})