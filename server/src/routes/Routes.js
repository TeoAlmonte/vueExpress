const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const controller = require('../controllers/controllers.js')

require('../models/User');
const User = mongoose.model('users');

router.get('/', controller.get)

router.post('/register', (req, res) => {
  let newUser = new User(req.body)
  newUser.save((err, User) => {
    if(err) {
      res.send(err)
    }
    res.json(User)
  })
})

module.exports = router;
