const express = require('express');
const Product = require('../models/Product'); // Import the updated Product model
const router = express.Router();

const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

// GET product details by ID
router.post('/productdetails', async (req, res) => {
  try {
    const { id } = req.body;

    // Find the product by ID
    const product = await Product.findById(id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Respond with the product details
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/createproduct', [
  body('name', 'Name is required').notEmpty(),
  body('description', 'Description is required').notEmpty(),
  body('price', 'Price must be a number').isNumeric(),
  body('category', 'Category is required').notEmpty(),
  body('url', 'URL must be a valid URL').isURL(), // Add validation for the URL field
], async (req, res) => {
  try {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, category, url } = req.body;

    const product = new Product({
      name,
      description,
      price,
      category,
      url, 
    });

    await product.save();

    res.json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/products/:category', async (req, res) => {
  try {
    const category = req.params.category;

    // Find all products that match the specified category
    const products = await Product.find({ category });

    // Check if there are products in the specified category
    if (!products || products.length === 0) {
      return res.status(404).json({ error: 'No products found in the specified category' });
    }

    // Respond with the list of products in JSON format
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


// GET all products
router.get('/allproduct', async (req, res) => {
  try {
    // Find all products in the collection
    const products = await Product.find();

    // Check if there are any products
    if (!products || products.length === 0) {
      return res.status(404).json({ error: 'No products found' });
    }

    // Respond with the list of products in JSON format
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID in the collection
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Respond with the product in JSON format
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;
