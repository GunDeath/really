const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imagePath: {type: String, required: true},
    titleProduct: {type: String, required: true},
    descriptionProduct: {type: String, required: true},
    price: {type: Number, required: true}
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
