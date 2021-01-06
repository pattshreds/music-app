const express = require('express')
const landing = express.Router()

landing.get('/landing', (req, res) => {
  res.render(
    'landing/landing.ejs',
  {currentUser: req.session.currentUser})
});

// sessions.post('/', (req, res) => {
//   User.findOne({username: req.body.username}, (err, foundUser) => {
//     if (err) {
//       console.log(err)
//       res.send('The db had a problem')
//     } else if (!foundUser) {
//       res.send('<a href="/">Can\'t find this user</a>')
//     } else {
//       if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//         req.session.currentUser = foundUser
//         res.redirect('/')
//       } else {
//         res.send('<a href="/"> Password Does not match :( </a>')
//       }
//     }
//   })
// })

// sessions.delete('/', (req, res) => {
//   req.session.destroy(() => {
//     res.redirect('/')
//   })
// })

module.exports = landing
