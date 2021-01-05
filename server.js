//====================
// Dependencies
//====================

const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const fs = require('fs');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()

//====================
// Port
//====================

const PORT = process.env.PORT || 3000;

//====================
// Port
//====================

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//====================
// Middleware
//====================

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

//====================
// Controllers
//====================

const appController = require('./controllers/app.js')
app.use('/playlist', appController)

app.get('/', (req, res) => {
  res.redirect('/playlist')
})

//====================
// Listener
//====================

app.listen(PORT, () => {
  console.log( 'Listening on port:', PORT)
});
