// 5.3 Route Params 230 pts

// Let's create a route that accepts dynamic arguments in the URL path 
// and responds with the quote from the proper author.

// Task 1/2 Start by creating a GET route for '/quotes' that takes a
// name parameter as part of the URL path.

// Task 2/2 Now, use the name parameter from the URL to retrieve a quote 
// from the quotes object and write it out to the response. Note: No piping here, 
// just write the quote string to the response like you did in previous levels 
// (and then close the response).

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response){
  response.end(quotes[request.params.name]);
});

app.listen(8080);

