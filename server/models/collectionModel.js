const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectionSchema=new Schema({
    name: {
    type: String,
    required: true
  },
  brand: {
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
  size: {
    type: [String],
    required: true
  },
  color: {
    type: [String],
    required: true
  },
  pattern: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Collections', CollectionSchema, 'Collections');