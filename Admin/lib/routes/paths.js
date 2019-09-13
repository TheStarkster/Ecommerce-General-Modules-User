const router = require('express').Router();
const Product = require('../middlewares/products/products');

// Product Paths...
router.get('/product/admin-fetch-product',(req,res) => Product.ProductFetch(req,res));
router.get('/product/admin-create-product-single',(req,res) => Product.CreateProductSingle(req,res));
router.get('/product/admin-delete-product-single',(req,res) => Product.DeleteProuctSingle(req,res));
router.get('/product/admin-delete-product-multiple',(req,res) => Product.DeleteProductMultiple(req,res));

module.exports = router;