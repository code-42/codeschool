// 7.2 Simple Redis Commands 250 pts

// Let's start practicing using the redis key-value store from our node application.

// Task 1/3 Require the redis module and assign it to a variable called redis.
// Task 2/3 Create a redis client and assign it to a variable called client.
// Task 3/3 On the client, set the name property to your name.

var redis = require('redis');
var client = redis.createClient();
client.set('name', 'Me');
