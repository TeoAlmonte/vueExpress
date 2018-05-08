const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('users', UserSchema)