const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/products',
    });
  });
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res) => {
  res.render('shop/cart', { path: '/cart', pageTitle: 'Your Cart' });
};

exports.getOrders = (req, res) => {
  res.render('shop/orders', { path: '/orders', pageTitle: 'Your Orders' });
};

exports.getCheckOut = (req, res) => {
  res.render('shop/checkout', { path: '/checkout', pageTitle: 'Check out' });
};
