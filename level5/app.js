// 5.5 URL Building 240 pts

// Let's create a page which calls the Twitter search API and displays 
// the last few results for Code School. The first step is to construct 
// the proper URL, which is all you need to do in this challenge.

// Complete the URL options which will be sent into the the url module's format method. 
// The URL you'll want to construct is the following: 
// http://search.twitter.com/search.json?q=codeschool

var url = require('url');

var options = {
  // add URL options here
  protocol: 'http',
  host: 'search.twitter.com',
  pathname: '/search.json',
  query: {q: 'codeschool'}
};

var searchURL = url.format(options);
console.log(searchURL);
