const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const wishlistSchema = new Schema({
    userEmail: { type: String, required: true },
    productId: { type: String, required: true },
});

const WishList = mongoose.model('WishList', wishlistSchema,'WishList');

module.exports = WishList;