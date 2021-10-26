/*
    models/user.js
    
    Abishekh Manoharan
    301165253
    Oct-20-2021

 */

// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password: 
        {
            type: String,
            default: '';
            trim: true,
            required: 'password is required'
        }
        */
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);