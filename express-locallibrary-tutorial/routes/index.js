var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/catalog');
});

/* GET home page. */
router.get(/.*fish$/, function(req, res, next) {
    res.render('index', { title: 'Fish' });
});

module.exports = router;
