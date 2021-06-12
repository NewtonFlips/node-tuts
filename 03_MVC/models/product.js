const fs = require('fs');
const path = require('path');

const p = path.join(process.cwd(), 'data', 'products.json');

const getProductsFromFile = cb => {
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(data));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), e => {
        console.log(e);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
