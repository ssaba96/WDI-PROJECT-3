const router = require('express').Rotuer();
const auth = require('../controllers/auth');
const museums = require('../controllers/musuems');


router.route('museums')
  .get(museums.index)
  .post(museums.create);


router.get('/register', auth.register);
router.post('/login', auth.login);
