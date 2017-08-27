// 5.2 Express Routes 250 pts

// Let's create an express route that accepts GET requests on '/tweets' 
// and responds by sending back a static HTML file.

// First, Create a GET route for '/tweets' and give it the proper callback. The callback function should accept two arguments: the request and the response.
// Second task, Send back the file tweets.html, which lives under the project's root path. Remember to use __dirname to locate tweets.html.
// Third task, Finally, have the express app listen on port 8080.

var express = require('express');
var app = express();

app.get('/tweets', function(request, response){
  response.sendFile(__dirname + '/tweets.html');
});
app.listen(8080);


/*
var request = require('request');
var url = require('url');
var app = require('http');

// route definition
// app.get('/tweets/:username', function(req, res){
//     var username = req.params.username;
//     options = {
//         protocol: 'http',
//         host: 'api.twitter.com',
//         pathname: '/1/statuses/user_timeline.json',
//         // get the last 10 tweets for screen_name
//         query: { screen_name: username, count:10 }
//     }
//     var twitterUrl = url.format(options);
    
//     // pipe the request to response
//     request(twitterUrl).pipe(response);
// });

// npm install prettyjson -g
// npm install --save ejs

// run node app.js in one terminal
// open another terminal and run
// curl -s http://localhost:8080/tweets/<screen_name> | prettyjson

var express = require('express');
var app = express();

app.get('/tweets/:username', function(req, res){
    var username = req.params.username;
    options = {
        protocol: 'http',
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json',
        // get the last 10 tweets for screen_name
        query: { screen_name: username, count:10 }
    }
    var twitterUrl = url.format(options);
    
    // pipe the request to response
    // request(twitterUrl).pipe(response);
    request(url, function(err, res, body){
        var tweets = JSON.parse(body);
        response.locals = {tweets: tweets, name: username};
        response.render('tweets.ejs');
    });
});
*/