// 5.7 Express Server 250 pts

// Now, let's create an Express server which queries out 
// for the search term and then returns the JSON.
// Task 1/5 Require the express module.
// Task 2/5 Create the Express server and name it app.
// Task 3/5 Create a route for GET requests to / (root path). 
// Remember, the callback function takes two arguments: a request req and a response res.
// Task 4/5 In our new route, issue a request to searchURL and pipe the results into the response.
// Task 5/5 Finally, tell app to listen on port 8080.

var url = require('url');
var request = require('request');
var express = require('express');
var app = express();

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
app.get('/', function(req, res){
  request(searchURL).pipe(res);
});
var app; // Create server here
app.listen(8080);
