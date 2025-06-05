const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    playlistTitle: { type: String, required: true },
    playlistDescription: { type: String, required: false },
    songData: [
        {
            songArtist: { type: String, required: false },
            songTitle: { type: String, required: false },
            src: { type: String, require: false },
        },
    ],
});

const Playlists = mongoose.model('Playlist', playlistSchema);

module.exports = Playlists;
