const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
