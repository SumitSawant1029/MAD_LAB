const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');

const Cart = require('../models/Cart'); // Import the Cart model

// Create a route to insert cart data
router.post('/add-to-cart', async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;

    // Create a new cart object
    const cartItem = new Cart({
      productId,
      userId,
      quantity,
    });

    // Save the cart item to the database
    const savedCartItem = await cartItem.save();

    res.status(201).json(savedCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router