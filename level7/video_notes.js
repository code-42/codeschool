// store messages in array
var messages = []; 

// var storeMessage = function(name,data){
// // add message to end of array
//     messages.push({name: name, data: data});
//     if (messages.length > 10){
// // if there are more than 10 messages, remove the first one
//         messages.shift();
//     }
// }

// refactor storeMessage
var redisClient = redis.createClient();
var storeMessage = function(name, data){
//  need to turn object into string to store in redis    
    var message = JSON.stringify({name: name, data: data});
    redisClient.lpush('messages', message, function(err, response){
        redisClient.ltrim('messages', 0, 9);  // keeps newest 10 items
    });
}

io.sockets.on('connection', function(client){
    client.on('messages', function(message){
        client.get('nickname', function(error, name){
            client.broadcast.emit('messages', name + ': ' + message);
            client.emit('messages', name + ': ' + message);
// store a message after client sends it            
            storeMessage(name, message);
        });
    });
});

// modify join event to use redis
client.on('join', function(name){
    redisClient.lrange('messages', 0, -1, function(err, messages){
// reverse the messages so they are emitted in the correct order
        messages = messages.reverse();
        
        messages.forEach(function(message){
            message = JSON.parse(message);
            client.emit('messages', message.name + ': ' + message.data);    
        });
    });
});

// notify other clients a chatter has joined
client.on('join', function(name){
    client.broadcast.emit('add chatter', name);
    redisClient.smembers('names', function(err, names){
// emit all the currently logged in chatters to the newly connected client        
        names.forEach(function(name){
            client.emit('add chatter', name);
        });
    });
// add name to chatters set
    redisClient.sadd('chatters', name);
});
    
// in index.html add this chatter
socket.on('add chatter', function(name){
    var chatter = $('<li>' + name + '</li>').data('name', name);
    $('#chatters').append(chatter);
});
    
// remove a chatter when they disconnect from server
client.on('disconnect', function(name){
    client.get('nickname', function(err, name){
        client.boradcast.emit('remove chatter', name);
        redisClient.srem('chatters', name);
    });
});

// in index.html add this to remove a chatter
socket.on('remove chatter', function(name){
    $('#chatters li[data-name=' + name + ']').remove();
});

// iterate through messages array and emit a message 
// on the connecting client for each one
io.sockets.on('connection', function(client){
    client.on('join', function(message){
        messages.forEach(function(message){
            client.emit('messages', message.name + ': ' + message.data);    
        });
    });
});


var redis = require('redis');
var client = redis.createClient();

// key, value pair
client.set('message1', 'hello, dog');
client.set('message1', 'hello, spider');

client.get('message1', function(err, reply){
    console.log(reply);  // 'hello, dog'
});

// add a string to the "messages" list
var message = "Hello, this is Dog";
client.lpush('messages', function(err, reply){
    console.log(reply);  // replies with list length = 1
});

// add another string to the "messages" list
var message = "Hello, this is Dog";
client.lpush('messages', function(err, reply){
    console.log(reply);  // replies with list length = 2
});

// using lpush & ltrim
var message = "Hello, this is Dog";
client.lpush('messages', function(err, reply){
// trim keeps the first two strings and removes the rest
    client.ltrim('messages', 0, 1);  
});

// retrievign from list
client.lrange('messages', 0, -1, function(err, messages){
    console.log(messages);  // replies with all strings in list
});

// sets are lists of unique data
// add & remove members of the names set
client.sadd('names', 'Dog');
client.sadd('names', 'Spider');
client.sadd('names', 'Gregg');

// to remove an item from the list
client.srem('names', 'Spider');

// reply with all members of set
client.smembers('names', function(err, names){
    console.log(names);
});

