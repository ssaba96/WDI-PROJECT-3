const router = require('express').Router();
const museums = require('../controllers/museums');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.route('/museums')
  .get(museums.index)
  .post(secureRoute);

router.route('/museums/:id')
  .get(museums.show)
  .put(secureRoute);


router.post('/register', auth.register);
router.post('/login', auth.login);


router.get('/profile', secureRoute, auth.profile);

module.exports = router;
