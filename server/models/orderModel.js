const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    products: [{
        productId: {
            type:String,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    }],
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        enum: ['online', 'cash'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;