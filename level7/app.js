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
