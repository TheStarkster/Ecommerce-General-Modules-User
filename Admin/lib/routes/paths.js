const router = require('express').Router();
const register = require('../middlewares');

router.get('/',(req,res) => res.send('Welcome To Admin EGM API'));
//Registeration Paths...
router.post('/signup',(req,res) => register.RegistrationHandler(req,res));
router.post('/signin',(req,res) => register.SignInHandler(req,res));

module.exports = router;