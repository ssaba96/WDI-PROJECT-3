const router = require('express').Rotuer();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.get('/register', auth.register);
router.post('/login', auth.login);


router.get('/profile', secureRoute, auth.profile);
