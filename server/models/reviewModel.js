const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    productId: {type: mongoose.Schema.Types.ObjectId,ref: 'Product'},
    review: String,
    userEmail: { type: String, required: true },
    username: { type: String, required: true}
}, { timestamps: true });
const Review = mongoose.model('Review', reviewSchema,'Review');
module.exports = Review;