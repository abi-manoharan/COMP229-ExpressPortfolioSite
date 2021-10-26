/*
    routes/index.js
    
    Abishekh Manoharan
    301165253
    Oct-20-2021

 */

var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let indexController = require('../controllers/index');

let passport = require('passport');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about me page. */
router.get('/AboutMe',  indexController.displayAboutMePage);

/* GET services page. */
router.get('/Services', indexController.displayServicesPage);

/* GET projects page. */
router.get('/Projects',  indexController.displayProjectsPage);

/* GET contact page. */
router.get('/Contact', indexController.displayContactPage);



//AUTH routers
/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
