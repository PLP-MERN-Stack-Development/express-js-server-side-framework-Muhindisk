// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', require('./routes/productRoutes'));

// Default route (Home Page)
app.get("/", (req, res) => {
  res.send("Welcome to the Product API! Go to /api/products to see all products.");
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Export the app for testing purposes
module.exports = app; 