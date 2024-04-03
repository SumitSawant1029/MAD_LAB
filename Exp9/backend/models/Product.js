const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: 'https://imgs.search.brave.com/ciA9ZLwOMa4bpRSZEogq80aH06M7rZzOZgQPoBNP7Eo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYXll/bWRldnMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L2RlZmF1bHQtcHJv/ZHVjdC1pbWFnZS5w/bmc' 
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
