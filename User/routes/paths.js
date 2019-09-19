const router = require('express').Router();
const register = require('../middlewares/auth/register');
const products = require('../middlewares/products/products');

router.get('/',(req,res) => res.send('Welcome To EGM API'));

//Registeration Paths...
router.post('/signup',(req,res) => register.RegistrationHandler(req,res));
router.post('/signin',(req,res) => register.SignInHandler(req,res));

// Products Paths...
router.get('/User-fetch-products',(req,res) => products.RenderAllProducts(req,res));
router.get('/find-product/:query',(req,res) => products.SearchProducts(req,res));

module.exports = router;