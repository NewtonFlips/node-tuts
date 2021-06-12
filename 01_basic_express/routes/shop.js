const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(path.join(process.cwd()), 'views', 'shop.html'));
});

module.exports = router;
