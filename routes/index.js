var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home'});
});
router.get('/home', function(req, res, next) {
  res.render('index', {  page: 'Home'});
});

/* GET about me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('index', {  page: 'About Me'});
});

/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', {  page: 'Services'});
});

/* GET projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', {  page: 'Independent Projects'});
});

/* GET contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', {  page: 'Contact'});
});


module.exports = router;
