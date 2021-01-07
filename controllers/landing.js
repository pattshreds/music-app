const express = require('express')
const landing = express.Router()

landing.get('/landing', (req, res) => {
  res.render(
    'landing/landing.ejs',
  {currentUser: req.session.currentUser})
});

module.exports = landing
