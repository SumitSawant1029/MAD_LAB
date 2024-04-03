const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', 
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  },
  firstname: {
    type: String,
    required: true
  }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);
module.exports = CartItem;