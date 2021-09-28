var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'Home'});
});


router.get('/AboutMe', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'About'});
});

router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'Services'});
});

router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'Projects'});
});

router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'Contact'});
});


module.exports = router;
