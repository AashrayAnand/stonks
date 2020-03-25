const mongoose = require('mongoose');
const { Schema } = mongoose; // es6 destructuring

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);