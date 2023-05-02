const { Schema, model } = require('mongoose');


const productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
//   description: {
//     type: String,
//     required: true
//   },
  productPrice: {
    type: Number,
    required: true
  },
  productImg: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Products = model('Products', productSchema);

module.exports = Products;
