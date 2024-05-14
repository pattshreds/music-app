const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    src: [{ type: String, required: false }],
    songArtist: { type: String, required: true },
    songTitle: { type: String, required: false },
});

const Song = mongoose.model('song', songSchema);

module.exports = Song;
