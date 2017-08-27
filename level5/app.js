// 5.6 Doing the Request 240 pts

// Next, we'll use the request module to make a simple web request 
//and log the response to the console. You can use this example in the README.
// To start, require the request module and assign the return function to a variable.
// Next, issue a request to searchURL. Remember, the callback function for the 
// request function takes three arguments: error, response and body.
// Finally, log the response body to the console using console.log().

var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

var request = require('request');

request(searchURL, function(error, response, body){
  console.log(body);
});
