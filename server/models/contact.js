/*
    models/contact.js
    
    Abishekh Manoharan
    301165253
    Oct-20-2021

 */
let mongoose = require('mongoose');

// create a contact class
let contactModel = mongoose.Schema({
    name: String,
    pnumber: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Book', contactModel);