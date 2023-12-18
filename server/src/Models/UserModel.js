const mongoose = require('mongoose');

// Users Schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
},{timestamps: true}
);

const userModel = mongoose.model('Users', UserSchema);

module.exports = userModel