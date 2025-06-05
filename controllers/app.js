const express = require('express');
const Playlists = require('../models/playlists.js');
const cloudinary = require('cloudinary').v2;
const playlist = express.Router();

// Landing
playlist.get('/', (req, res) => {
    res.render('landing/landing.ejs', { currentUser: req.session.currentUser });
});

// Playlist Index
playlist.get('/playlist', (req, res) => {
    if (req.session.currentUser) {
        Playlists.find({}, (error, allplaylist) => {
            res.render('playlist/index.ejs', {
                playlist: allplaylist,
                currentUser: req.session.currentUser,
                audio: allplaylist.audio,
            });
        });
    } else {
        res.redirect('/', {
            currentUser: req.session.currentUser,
        });
    }
});

// New
playlist.get('/playlist/new', (req, res) => {
    res.render('playlist/new.ejs', { currentUser: req.session.currentUser });
});

// Edit
playlist.get('/playlist/:id/edit', (req, res) => {
    Playlists.findById(req.params.id, (error, foundPlaylists) => {
        res.render('playlist/edit.ejs', {
            playlist: foundPlaylists,
            currentUser: req.session.currentUser,
        });
    });
});

// Delete
playlist.delete('/playlist/:id', (req, res) => {
    Playlists.findByIdAndRemove(req.params.id, (error, deletedPlaylist) => {
        res.redirect('/playlist');
    });
});

// Show
playlist.get('/playlist/:id', (req, res) => {
    Playlists.findById(req.params.id, (error, foundPlaylists) => {
        res.render('playlist/show.ejs', {
            trackIndex: 0,
            playlist: foundPlaylists,
            currentUser: req.session.currentUser,
        });
    });
});

// Update
playlist.put('/:id', (req, res) => {
    Playlists.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedPlaylist) => {
            res.redirect('/playlist');
        }
    );
});

// Create
playlist.post('/', (req, res) => {
    const audioFile = req.files.audio;
    console.log(audioFile);
    cloudinary.uploader.upload(
        audioFile.tempFilePath,
        { resource_type: 'video' },
        (error, data) => {
            if (error) {
                console.log(error);
            } else {
                req.body.audio = data.url;
                Playlists.create(req.body, (error, createdPlaylist) => {
                    res.redirect('/playlist');
                });
            }
        }
    );
});

// Seed

playlist.get('/setup/seed', (req, res) => {
    Playlists.create(
        [
            {
                playlistTitle: 'Demo Playlist',
                playlistDescription:
                    'This is a playlist page that I setup for demo purposes!',
                songData: [
                    {
                        songArtist: 'Cher',
                        songTitle: 'Believe',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1715462266/cher_quveof.mp3',
                    },
                    {
                        songArtist: 'Bakar',
                        songTitle: 'Hell N Back',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1679351615/Moodset/Bakar_-_Hell_N_Back_Official_Video_cdr2mb.mp3',
                    },
                    {
                        songArtist: 'Earth Wind & Fire',
                        songTitle: 'Shining Star',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1679867484/Moodset/YT2mp3.info_-_Earth_Wind_Fire_-_Shining_Star_Official_Audio_320kbps_j4o746.mp3',
                    },
                    {
                        songArtist: 'Fleetwood Mac',
                        songTitle: ' Dreams',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1716319979/Dreams_2004_Remaster_xeemjx.mp3',
                    },
                    {
                        songArtist: 'Whitney Houston',
                        songTitle: 'I Wanna Dance With Somebody',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1716319979/Whitney_Houston_-_I_Wanna_Dance_With_Somebody_Official_Music_Video_stzeyw.mp3',
                    },
                    {
                        songArtist: 'Cyndi Lauper',
                        songTitle: 'Girls Just Wanna Have Fun',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1716319979/Cyndi_Lauper_-_Girls_Just_Want_To_Have_Fun_Official_Video_ucvnzj.mp3',
                    },
                    {
                        songArtist: 'Fleetwood Mac',
                        songTitle: 'Everywhere',
                        src: 'https://res.cloudinary.com/sven2050/video/upload/v1716319979/Everywhere_2002_Remaster_j13maw.mp3',
                    },
                ],
            },
        ],
        (error, data) => {
            res.redirect('/playlist');
        }
    );
});

module.exports = playlist;
