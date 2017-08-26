var fs = require('fs');

fs.readFile('file.txt', function(error, contents){
    console.log(contents);
});