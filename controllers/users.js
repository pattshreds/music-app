const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');

users.get('/new', (req, res) => {
    res.render('users/new.ejs', { currentUser: req.session.currentUser });
});

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    User.create(req.body, (err, createdUser) => {
        if (err) {
            console.error('error creating user:', err.message);
            return res.status(400).send(err.message);
        }
        console.log('user is created:', createdUser);
        res.redirect('/sessions/new');
    });
});

module.exports = users;
