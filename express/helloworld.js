var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('Middleware function 1:', Date.now())
  next()
})

app.use(function(req, res, next) {
  console.log('Middleware function 2:', Date.now())
  next()
})


app.use('/user/:id', function(req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


app.get('/user/:id', function(req, res, next) {
  res.send('USER')
})

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  for (let i in next) {
    console.log(i);
  }
  console.log(next()); // pass control to the next handler
});


app.use('/home/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function(req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
