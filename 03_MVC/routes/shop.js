const path = require('path');

const shopController = require('../controllers/shop');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getAllProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckOut);

module.exports = router;
