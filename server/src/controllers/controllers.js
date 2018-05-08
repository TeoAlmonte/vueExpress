module.exports = {
  get (req, res) {
    res.send('welcome dude')
  },
  register (req, res) {
    let newUser = new User(req.body)
    newUser.save((err, User) => {
      if(err) {
        res.send(err)
      }
      res.json(User)
    })
  }
}