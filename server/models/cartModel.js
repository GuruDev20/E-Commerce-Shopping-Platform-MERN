const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    brand: String,
    name: String,
    price: String,
    category: String,
    type: String,
    size: [String],
    color: [String],
    pattern: String,
    description: String,
    images: [String], 
})

module.exports = mongoose.model('Cart', CartSchema, 'Cart');