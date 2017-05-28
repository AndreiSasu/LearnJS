var express = require('express');
var app = express();

console.log(exports);

for (let i in exports) {
  console.log(i);
}


console.log(app);

for (let i in app) {
  console.log(i);
}

var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));


setTimeout(function() {
  console.log('First');
}, 1000);
console.log('Second');
