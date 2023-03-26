const express = require('express')
const Playlists = require('../models/playlists.js')
const cloudinary = require('cloudinary').v2
const playlist = express.Router()

const isAuthenticted = (req, res, next) => {
  if (req.session.currentUser) {
    return next();
  } else {
    res.redirect('/landing/landing')
  }
}
playlist.use(isAuthenticted)

// New

playlist.get('/new', (req, res) => {
  res.render(
    'playlist/new.ejs',
    {currentUser: req.session.currentUser}
  )
})

// Edit

playlist.get('/:id/edit', (req, res) => {
  Playlists.findById(req.params.id, (error, foundPlaylists) => {
    res.render('playlist/edit.ejs', {
      playlist: foundPlaylists,
      currentUser: req.session.currentUser
    })
  })
})

// Delete

playlist.delete('/:id', (req, res) => {
  Playlists.findByIdAndRemove(req.params.id, (error, deletedPlaylist) => {
    res.redirect('/playlist')
  })
})

// Show

playlist.get('/:id', (req, res) => {
  Playlists.findById(req.params.id, (error, foundPlaylists) => {
    res.render('playlist/show.ejs', {
      playlist: foundPlaylists,
      currentUser: req.session.currentUser
    })
  })
})


// Update

playlist.put('/:id', (req, res) => {
  Playlists.findByIdAndUpdate(req.params.id, req.body, {new: true},
  (error, updatedPlaylist) => {
    res.redirect('/playlist')
  })
})

// Create

playlist.post('/', (req, res) => {
    const audioFile = req.files.audio
    console.log(audioFile);
    cloudinary.uploader.upload(audioFile.tempFilePath, {resource_type: "video"}, (error, data) => {
      if (error){
         console.log(error)
      } else {
        req.body.audio = data.url
      Playlists.create(req.body, (error, createdPlaylist) => {
        res.redirect('/playlist')
        })
      }
  })
})

// Index
playlist.get('/', (req, res) => {
  Playlists.find({}, (error, allplaylist) => {
    res.render('playlist/index.ejs', {
      playlist: allplaylist,
      currentUser: req.session.currentUser,
      audio: allplaylist.audio
    })
  })
})

// Seed

playlist.get('/setup/seed', (req, res) => {
  Playlists.create(
    [
      {
        playlistTitle: 'seed test',
        playlistDescription: 'seed test',
        audio: [
          "https://res.cloudinary.com/sven2050/video/upload/v1679862666/cekxikmm5ylap0g8xg4m.mp3",
          "https://res.cloudinary.com/sven2050/video/upload/v1679867484/Moodset/YT2mp3.info_-_Earth_Wind_Fire_-_Shining_Star_Official_Audio_320kbps_j4o746.mp3"
        ]
      }
    ],
    (error, data) => {
      res.redirect('/playlist')
    }
  )
})

module.exports = playlist