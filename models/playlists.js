const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    playlistTitle: { type: String, required: true },
    playlistDescription: { type: String, required: false },
    songArtist: { type: String, required: true },
    songTitle: { type: String, required: false },
    audio: [{ type: String, required: false }],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
