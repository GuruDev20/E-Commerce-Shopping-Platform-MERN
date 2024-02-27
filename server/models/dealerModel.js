const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DealerSchema = new Schema({
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
    New: String
})

module.exports = mongoose.model('Dealers', DealerSchema, 'Dealers');