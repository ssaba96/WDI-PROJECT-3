const User = require('../models/user');



function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);

}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized'});
      }
    });
}

module.exports = {
  register,
  login
};

xs
