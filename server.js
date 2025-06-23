const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Import Routers
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Home route (optional)
app.get('/', (req, res) => {
  res.send("Welcome to the E-Commerce API!");
});

// Use Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
