const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);

}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      console.log(user);
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized'});
      }

      const token = jwt.sign({ sub: user._id, avatar: user.avatar, username: user.username }, secret, { expiresIn: '6h'});

      res.json({
        user,
        token,
        message: `Welcome back ${user.username}`
      });

    })
    .catch(next);
}

function profileShow(req, res, next) {
  User.populate(req.currentUser, { path: 'museums' })
    .then(user => res.json(user))
    .catch(next);
}

function profileUpdate(req, res, next) {
  req.currentUser.set(req.body);

  req.currentUser.save()
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  register,
  login,
  profileShow,
  profileUpdate
};
