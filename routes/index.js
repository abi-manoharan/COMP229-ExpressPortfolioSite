var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', {  page: 'Home'});
});


router.get('/AboutMe', function(req, res, next) {
  res.render('index', {  page: 'About Me'});
});

router.get('/Services', function(req, res, next) {
  res.render('index', {  page: 'Services'});
});

router.get('/Projects', function(req, res, next) {
  res.render('index', {  page: 'Projects'});
});

router.get('/Contact', function(req, res, next) {
  res.render('contact', {  page: 'Contact'});
});


module.exports = router;
