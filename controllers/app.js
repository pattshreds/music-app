const express = require('express')
const Playlists = require('../models/playlist.js')
const playlist = express.Router()

// New

playlist.get('/create', (req, res) => {
  res.render('playlist/new.ejs')
})

// Edit

playlist.get('/:id/edit', (req, res) => {
  Playlists.findById(req.params.id, (error, foundPlaylists) => {
    res.render('playlist/edit.ejs', {
      playlist: foundPlaylists
    })
  })
})

// Show

playlist.get('/:id', (req, res) => {
  Playlists.findById(req.params.id, (error, foundPlaylists) => {
    res.render('playlist/show.ejs', {
      playlist: foundPlaylists
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
  Playlists.create(req.body, (error, createdPlaylist) => {
    res.redirect('/playlist')
  })
})

// Index
playlist.get('/', (req, res) => {
  Playlists.find({}, (error, allplaylist) => {
    res.render('playlist/index.ejs', {
      playlist: allplaylist
    })
  })
})

// Seed

playlist.get('/setup/seed', (req, res) => {
  Playlists.create(
    [
      {
        playlistTitle: 'Test Playlist',
        playlistDescription: 'test'
      }
    ],
    (error,data) => {
      res.redirect('/playlist')
    }
  )
})

module.exports = playlist
