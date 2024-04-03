
const express = require('express');
const router = express.Router();
const AddtoCart = require('../models/AddtoCart'); // Import the updated Product model
const { body, validationResult } = require('express-validator');

router.post('/add', [
    body('firstname', 'Name is required').notEmpty(),
    body('product', 'Product is required').notEmpty(),
    body('quantity', 'Quantity must be a number').isNumeric(),
  ], async (req, res) => {
    try {
      const errors = validationResult(req);
      
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { firstname, product, quantity} = req.body;
  
      const product1 = new AddtoCart({
        firstname,
        product,
        quantity,
      });
  
      await product1.save();
  
      res.json({ success: true, message: 'Product added successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error',error.message);
    }
  });


  // Define a route to get products by firstname
router.post('/getByFirstName', async (req, res) => {
  try {
    const { firstname } = req.body;

    // Query the database for products with the specified firstname
    const products = await AddtoCart.find({ firstname });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for the given firstname' });
    }

    res.json({products});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router