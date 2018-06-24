const router = require('express').Router();
const auth = require('../controllers/auth');

const secureRoute = require('../lib/secureRoute');
const museums = require('../controllers/museums');

router.route('museums')
  .get(museums.index)
  .post(museums.create);


router.get('/register', auth.register);
router.post('/login', auth.login);


router.get('/profile', secureRoute, auth.profile);

module.exports = router;
