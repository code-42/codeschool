// challenge 3.3 File Piping
// use pipe() to read from the stream
// and write directly to process.stdout
// first, remove the readable handler


var fs = require('fs');

// create a Readable stream for fruits.txt
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);

