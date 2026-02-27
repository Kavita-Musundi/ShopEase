
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' }
});

// NO PRE-SAVE HOOKS AT ALL!

module.exports = mongoose.model('User', UserSchema);
