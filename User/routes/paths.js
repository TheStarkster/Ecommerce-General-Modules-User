const router = require('express').Router();
const register = require('../middlewares/auth/register');
const SignIn = require('../middlewares/auth/SignIn');
const products = require('../middlewares/products/products');
const paytm = require('../middlewares/payments/paytm/paytm');

router.get('/', (req, res) => res.send('Welcome To EGM API'));

//Registeration Paths...
router.post('/signup', (req, res) => register.RegistrationHandler(req, res));
router.post('/signin', (req, res) => SignIn.SignInHandler(req, res));

// Products Paths...
router.get('/User-fetch-products', (req, res) => products.RenderAllProducts(req, res));
router.get('/find-product/:query', (req, res) => products.SearchProducts(req, res));

// Payments Paths...

//Paytm Path..
router.get('payment/razopay', (req, res) => paytm.RequestHandler(req, res));

module.exports = router;