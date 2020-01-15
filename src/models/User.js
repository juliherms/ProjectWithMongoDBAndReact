const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: String,
    link: String,
    description: String,
    avatar_url: String,
    skills: [String],
});

module.exports = mongoose.model('User',UserSchema);