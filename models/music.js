const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
  artist: {type: String, required: true},
  title: {type:String, required: true}
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music
