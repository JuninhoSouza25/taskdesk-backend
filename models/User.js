const mongoose = require("mongoose");

const { Schema } = mongoose;

const userScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: false
  },
  thumbnail: {
    type: String,
    required: false
  }
}, {timestamps: true});

const User = mongoose.model("User", userScheme);

module.exports = {
  User,
  userScheme
}