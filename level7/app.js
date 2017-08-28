// 7.2 Simple Redis Commands 250 pts

// Let's start practicing using the redis key-value store from our node application.

// Task 1/3 Require the redis module and assign it to a variable called redis.
// Task 2/3 Create a redis client and assign it to a variable called client.
// Task 3/3 On the client, set the name property to your name.

var redis = require('redis');
var client = redis.createClient();
client.set('name', 'Me');

// 7.3 Get A Key 250 pts

// We have already stored a value in the question key. Use the redis client to 
// issue a get command to redis to retrieve and then log the value.

// Task 1/2 Use the redis client to issue a get command using the 'question' key to retrieve a value. 
// Remember, the get function takes a callback which expects two arguments, error and data.
// Task 2/2 Log the value retrieved with console.log.

var redis = require('redis');
var client = redis.createClient();
client.get('question', function(error, data){
  console.log(data);
});

// 7.4 Working With Lists 1 250 pts

// As we saw in the video, redis can do more than just simple key-value pairs. 
// We are going to be using redis' LISTS later to add persistence to our live-moderation app, 
// so let's practice using them now.

// Task 1/2 Using the redis client's lpush command, insert question1 into the questions list. 
// Then, console.log the result you receive. Remember, the lpush function takes a callback 
// as its last argument, which expects an error and value to be passed as arguments.
// Task 2/2 Using the redis client's lpush command, insert question2 into the questions list. 
// Then console.log the result you receive.

var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

client.lpush('questions', question1, function(error, value){
  console.log(value);
});

client.lpush('questions', question2, function(error, value){
  console.log(value);
});


