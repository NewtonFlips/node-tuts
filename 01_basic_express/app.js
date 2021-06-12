const path = require('path');
const express = require('express');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// Initialising express
const app = express();

// Serving static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Middlewares

// reading data from form
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

// Routes
app.use('/admin', adminRouter);
app.use(shopRouter);

// Page not found (ERROR page)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(process.cwd(), 'views', '404.html'));
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
