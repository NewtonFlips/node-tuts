const path = require('path');
const adminData = require('./admin');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { prods: products, pageTitle: 'My Shop', path: '/' });
});

module.exports = router;
