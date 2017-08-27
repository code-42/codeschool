var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};

// challenge 4.4 Exporting An Object
// In the logger.js file, 
// export the info, warn and error functions so we can use it in app.js 
// by assigning it to the exports object.
exports.info = info;
exports.warn = warn;
exports.error = error;
