const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//represents user
const UserSchema = new mongoose.Schema({

    name: String,
    link: String,
    description: String,
    avatar_url: String,
    skills: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('User',UserSchema);