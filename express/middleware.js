var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'))

app.get('/user/:id', function(req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
  else next()
}, function(req, res, next) {
  // render a regular page
  res.send('regular')
})

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function(req, res, next) {
  res.send('special')
})

app.all('/error', function handler(req, res, next) {
  return next(new Error('something broke'));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
