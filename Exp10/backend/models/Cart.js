const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create a Cart Schema
const CartSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create a Cart model
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
