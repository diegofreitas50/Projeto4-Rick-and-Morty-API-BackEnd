const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
