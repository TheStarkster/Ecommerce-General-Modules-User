const router = require('express').Router();
const register = require('../middlewares/auth/register');

router.get('/',(req,res) => res.send('Welcome To EGM API'));

//Registeration Paths...
router.post('/signup',(req,res) => register.RegistrationHandler(req,res));
router.post('/signin',(req,res) => register.SignInHandler(req,res));

module.exports = router;