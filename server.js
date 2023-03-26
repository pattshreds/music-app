const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.use(fileUpload({
  useTempFiles: true
}));

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//====================
// Middleware
//====================

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
})
);

//====================
// Controllers
//====================

const appController = require('./controllers/app.js');
app.use('/playlist', appController);

app.get('/', (req, res) => {
  res.redirect('/playlist')
});

const userController = require('./controllers/users.js');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const landingController = require('./controllers/landing.js');
app.use('/landing', landingController);

//====================
// Listener
//====================

app.listen(PORT, () => {
  console.log( 'Listening on port:', PORT)
});
