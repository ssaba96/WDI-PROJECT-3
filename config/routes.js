const router = require('express').Rotuer();
const auth = require('../controllers/auth');



router.get('/register', auth.register);
router.post('/login', auth.login);
